import Vue from 'vue'
import VueRouter from 'vue-router'
import GridSystem from'@/components/GridSystem';
import DashBoder from'@/components/DashBoder';

Vue.use(VueRouter)

const routes=[
  {path:'/',name:'DashBoder',component:DashBoder}
  ,
  {path:'/grid',name:'DashBoder',component:GridSystem}
]

const router=new VueRouter({
  mode:'history',
  routes
})

export default router;