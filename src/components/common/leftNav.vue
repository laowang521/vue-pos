
<template>
  <div class="left-nav">
    <div>
     <ul>
       <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/list">订单</router-link></li>
         <li>会员</li>
          <li>设置</li>
        
     </ul>



    </div>
  </div>
</template>
 
<script>
export default {
  name: 'leftNav',
  data () {
    return {
    }
  }
}
</script>
<style>
   .left-nav{
  
       color:#fff;
       font-size:10px;
       height:100%;
       
       background-color: #1D8ce0;
      
       width:100%;
    }
    .iconfont{
       font-size:24px;
    }
    .left-nav ul{
        padding:0px;
        margin: 0px;
    }
    .left-nav li{
        list-style: none;
        text-align: center;
        border-bottom:1px solid #20a0ff;
        padding:10px;
    }
    .left-nav li a{
        text-decoration: none;
        color: #fff

    }
</style>