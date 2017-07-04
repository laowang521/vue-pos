<template>
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">


   <template scope="props">
              <ul>
                <li v-for="(value, key,index) in props.row.orderInfo">{{ index }} : {{ key }} : {{ value }}</li>
              </ul>
            </template>


    </el-table-column>
    <el-table-column
      label="订单ID"
      prop="orderId">
    </el-table-column>
    <el-table-column
      label="订单时间"
      prop="orderTime">
    </el-table-column>
    <el-table-column
      label="总金额"
      prop="orderMoney">
    </el-table-column>
  </el-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData5: [{
            orderId: '1',
            orderTime: '2017/05/01 10:25:18',
            orderMoney: '58',
            orderInfo: [{
                    name:"菜名1",
                    num:5,
                    add:"北京朝阳大厦5层"
                  },{
                    name:"菜名2",
                    num:2,
                    add:"北京朝阳大厦5层"
                  },{
                    name:"菜名3",
                    num:5,
                    add:"北京朝阳大厦5层"
                  },{
                    name:"菜名4",
                    num:7,
                    add:"北京朝阳大厦5层"
                  },]
            },{
            orderId: '2',
            orderTime: '2017/05/01 10:25:18',
            orderMoney: '22',
            orderInfo: [{
                  name:"菜名1",
                  num:5,
                  add:"北京朝阳大厦5层"
                },{
                  name:"菜名2",
                  num:2,
                  add:"北京朝阳大厦5层"
                },{
                  name:"菜名3",
                  num:5,
                  add:"北京朝阳大厦5层"
                },{
                  name:"菜名4",
                  num:7,
                  add:"北京朝阳大厦5层"
                },]
            }]
      }
    }
  }
</script>