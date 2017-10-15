import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import Heros from '@/views/hero/heros'
import User from '@/views/user/user'
import Information from '@/views/information/information'
import Videos from '@/views/videos/videos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          redirect: 'information'
        },
        {
          path: 'user',
          name: 'user',
          component: User
        },
        {
          path: 'information',
          name: 'information',
          component: Information
        },
        {
          path: 'videos',
          name: 'videos',
          component: Videos
        },
        {
          path: 'heros',
          name: 'heros',
          component: Heros
        }
      ]
    }
  ]
})
