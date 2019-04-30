import Vue from 'vue'
import VueRouter from 'vue-router'

import Mall from '@/widgets/mall'

Vue.use(VueRouter);



// dynamic segment  动态路径参数
const routes = [
  {path:'/'},
  {path:'/mall',compontent:Mall}
]



let router = new VueRouter({
  
})