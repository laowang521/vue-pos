<template>
  <div>
<div style="position:fixed;height:100%;width:5%;left:0;top:0"><leftNav></leftNav></div>
<div style="position:fixed;height:100%;width:95%;left:5%;top:0"><center></center></div>
 
  </div>
</template>




<script>
import leftNav from '@/components/common/leftNav'
import center from '@/components/common/center'

import axios from 'axios'

//Vue.prototype.$ajax = axios
export default {
  name: 'hello',
   created(){
      axios.get('http://jspang.com/DemoApi/oftenGoods.php')
      .then(response=>{
         console.log(response);
         this.oftenGoods=response.data;
      })
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      })
  },
  data () {
    return {

      oftenGoods:[]
   


    }
  },
  components:{
      center,
    leftNav
  
  }
}
</script>






<style scoped>

h1, h2 {
  font-weight: normal;
  
}
li{list-style:none;}

</style>
