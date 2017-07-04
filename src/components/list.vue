<template>
  <div>
<div style="position:fixed;height:100%;width:5%;left:0;top:0"><leftNav></leftNav></div>
<div style="position:fixed;height:100%;width:95%;left:5%;top:0"><listCenter></listCenter></div>
 
  </div>
</template>




<script>
import leftNav from '@/components/common/leftNav'
import listCenter from '@/components/common/listCenter'

import axios from 'axios'

//Vue.prototype.$ajax = axios
export default {
  name: 'list',
  
  data () {
    return {

      oftenGoods:[]
   


    }
  },
  components:{
    listCenter,
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
