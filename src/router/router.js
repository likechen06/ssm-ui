import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/base/Login'
import Page404 from '@/components/base/404'
import Home from '@/components/base/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: '默认',
      component: Login
    },
    {
      path: '/404',
      name: '404',
      component: Page404
    },
    {
      path: '/*',
      name: '其它',
      redirect: '/404',
      component: HelloWorld
    }
  ]
})
