import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import User from '@/views/user/user'

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
          path: 'user',
          name: 'user',
          component: User
        }
      ]
    }
  ]
})
