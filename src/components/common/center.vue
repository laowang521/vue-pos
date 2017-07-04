
<template>
  <div class="pos">
    <div>
        <el-row >
            <el-col :span='7'>
                 <el-tabs>
                    <el-tab-pane label="点餐">
                     <el-table :data="tableData" border  style="width: 100%" >
 
                    <el-table-column prop="goodsName" label="商品" ></el-table-column>
                    <el-table-column prop="count" label="量" width="50"></el-table-column>
                    <el-table-column prop="price" label="金额" width="70"></el-table-column>
                    <el-table-column  label="操作" width="100" fixed="right">
                        <template scope="scope">
                            <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
                            <el-button type="text" size="small" @click="add(scope.row)">增加</el-button>
                            <el-button type="text" size="small" @click="jianshao(scope.row)">减少</el-button>
                 
                        </template>
                    </el-table-column>
                    
                </el-table>
           
             <p>总计{{totalCount}}  总额{{totalMoney}}</p>
               
             

                <div>
                <el-button type="warning" >挂单</el-button>
                <el-button type="danger" @click="delAllGoods" >删除</el-button>
                <el-button type="success" @click="check">结账</el-button>
                </div>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">
                    <el-table :data="tableData" border show-summary style="width: 100%" >
 
                    <el-table-column prop="goodsName" label="商品"  ></el-table-column>
                    <el-table-column prop="count" label="量" width="50"></el-table-column>
                    <el-table-column prop="price" label="金额" width="70"></el-table-column>
                    <el-table-column  label="操作" width="100" fixed="right">
                        <template scope="scope">
                            <el-button type="text" size="small">删除</el-button>
                            <el-button type="text" size="small">增加</el-button>
                 
                        </template>
                    </el-table-column>
                </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="外卖">
                   <el-table :data="tableData" border style="width: 100%" >
 
                      <el-table-column prop="goodsName" label="商品"  ></el-table-column>
                      <el-table-column prop="count" label="量" width="50"></el-table-column>
                      <el-table-column prop="price" label="金额" width="70"></el-table-column>
                      <el-table-column  label="操作" width="100" fixed="right">
                          <template scope="scope">
                              <el-button type="text" size="small">删除</el-button>
                              <el-button type="text" size="small">增加</el-button>
                   
                          </template>
                      </el-table-column>

                  </el-table>

                   </el-tab-pane>
                 </el-tabs>



            </el-col>
            <!--商品展示-->
            <el-col :span="17" style="padding-left:20px;border-left:1px solid #D3DCE6">
          
                <div class="often-goods">
                    <div class="title">常用商品</div>
                    <div class="often-goods-list">
                 
                        <ul v-for="item in oftenGoods">
                            <li @click="add(item)">

                                <span>{{item.goodsName}}</span>
                                <span class="o-price">￥{{item.price}}元</span>
                            </li>

                        </ul>
                    </div>
                </div>

                <!--  -->

                <div class="goods-type">
  <div class="title">所有商品</div>
                  <el-tabs>
                      <el-tab-pane label="汉堡">
                          <ul class='cookList' v-for="item in typeGoods[0]">
                            <li @click="add(item)">
                                <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                                <span class="foodName">{{item.goodsName}}</span>
                                <span class="foodPrice">￥{{item.price}}元</span>
                            </li>
                        </ul>
                      </el-tab-pane>
                          <el-tab-pane label="小食">
                          <ul class='cookList' v-for="item in typeGoods[1]">
                            <li @click="add(item)">
                                <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                                <span class="foodName">{{item.goodsName}}</span>
                                <span class="foodPrice">￥{{item.price}}元</span>
                            </li>
                        </ul>
                      </el-tab-pane>
                      <el-tab-pane label="饮料">
                          <ul class='cookList' v-for="item in typeGoods[2]">
                            <li @click="add(item)">
                                <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                                <span class="foodName">{{item.goodsName}}</span>
                                <span class="foodPrice">￥{{item.price}}元</span>
                            </li>
                        </ul>
                      </el-tab-pane>
                      <el-tab-pane label="套餐">
                          <ul class='cookList' v-for="item in typeGoods[3]">
                            <li @click="add(item)">
                                <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                                <span class="foodName">{{item.goodsName}}</span>
                                <span class="foodPrice">￥{{item.price}}元</span>
                            </li>
                        </ul>
                      </el-tab-pane>
               
                  </el-tabs>
              </div>


            </el-col>
        </el-row>
    </div>
  </div>
</template>


<script>

import axios from 'axios'
export default {
  name: 'center',
  created(){

    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
      .then(response=>{
         console.log(response);
         this.oftenGoods=response.data;
      })
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      });


   axios.get('http://jspang.com/DemoApi/typeGoods.php')
      .then(response=>{
         console.log(response);
         this.typeGoods=response.data;
      })
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      });

    

  },
  data () {
    return {
      tableData:[],
      oftenGoods:[],
      typeGoods:[],
      totalCount:0,
      totalMoney:0
    }
  },
  methods:{

      add(goods){
  
            let isHave=false;
            //判断是否这个商品已经存在于订单列表
            for (let i=0; i<this.tableData.length;i++){
                
                if(this.tableData[i].goodsId==goods.goodsId){
                    isHave=true; //存在
                }
            }
            //根据isHave的值判断订单列表中是否已经有此商品
            if(isHave){
                //存在就进行数量添加
                 let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
                 arr[0].count++;
                 //console.log(arr);
            }else{
                //不存在就推入数组
                let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
                 this.tableData.push(newGoods);

            };

            this.getAllMoney()
           
      }, jianshao(goods){
 
            
           
                //存在就进行数量添加
                 let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
                 if(arr[0].count==1){
                         this.tableData=this.tableData.filter(o => o.goodsId !=goods.goodsId);
          
                 }else{
                  arr[0].count--

                 };
             
                 
        this.getAllMoney()

      
           
      },del(goods){

                  this.tableData=this.tableData.filter(o => o.goodsId !=goods.goodsId);
                  this.getAllMoney()


      },getAllMoney(){
    this.totalCount=0;
    this.totalMoney=0;
    if(this.tableData){
            this.tableData.forEach((element) => {
        this.totalCount+=element.count;
        this.totalMoney=this.totalMoney+(element.price*element.count);   
    });
    }
    
    },delAllGoods() {

            this.tableData = [];
            this.totalCount = 0;
            this.totalMoney = 0;

      },check(){

             if(this.tableData.length==0||this.totalCount == 0){

                alert('还没选择商品，无法结账');

                return false;
             

             }else{

              axios({
                method: 'post',
                url: 'http://localhost:8080/vueOrder',
                params: {
                 order_data:this.tableData,
                 totalCount:this.totalCount,
                 totalMoney:this.totalMoney

                }
              }).then(response=>{
                     console.log(response);
                     alert('结账成功,加油！')
                  })
                  .catch(error=>{
                      console.log(error);
                      alert('网络错误，不能访问');
                  });

             }


       }


}, 
  computed: {
     





  }


}
</script>
<style scoped>
  .el-tabs__item{padding:0 49px;}
.often-goods:after{
  display:block;
  content:'';
  clear:both;
}

.often-goods{
padding-bottom:20px;
}
 .title{
       height: 20px;
       border-bottom:1px solid #D3DCE6;
       background-color: #F9FAFC;
       padding:10px;
   }
   .often-goods-list ul li{
      list-style: none;
      float:left;
      border:1px solid #E5E9F2;
      padding:10px;
      margin:5px;
      background-color:#fff;
   }
  .o-price{
      color:#58B7FF; 
   }

.cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
 
   }
   .cookList li span{
       
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;
 
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
</style>