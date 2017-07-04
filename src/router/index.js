import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import list from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        default:Hello,
      
     
      }

    },{
      path: '/list',
      name: 'list',
      components: {
        default:list
      
     
      }
    }
  ]
})
