import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/goodsList'

Vue.use(Router)

export default new Router({// mode:'history',//hash
  routes: [
    {
      path:'/',
      name: 'goodsList',
      component:GoodsList
    },
   
  ]
})
