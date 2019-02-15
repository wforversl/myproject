import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Building from '@/components/building'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/building',
      name: 'Building',
      component: Building
    }
  ],
  mode:'history'
})
