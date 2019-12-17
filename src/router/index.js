import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Recommend from '../pages/Recommend'
import Shipin from '../pages/Shipin'
import Hotspot from '../pages/Hotspot'
const routes = [
  {path:'/recommend',component:Recommend},
  {path:'/shipin',component:Shipin},
  {path:'/hotspot',component:Hotspot},
  {path:'/',redirect:'/recommend'}
]

const router = new VueRouter({
  routes
})

export default router
