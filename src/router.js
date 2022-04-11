import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Hangul from '@/views/Hangul'
import Words from '@/views/Words'
import Protected from '@/views/Protected'
import Message from '@/components/Message'
import Signin from '@/views/Signin'
import Signout from '@/views/Signout'
import About from '@/views/About'
import Numbers from '@/views/Numbers'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Hangul',
      name: 'hangul',
      component: Hangul,
    },
    {
      path: '/Words',
      name: 'words',
      component: Words,
    },
    {
      path: '/Signout',
      name: 'signout',
      component: Signout,
    },
    {
      path: '/Signin',
      name: 'signin',
      component: Signin,
    },
    {
      path: '/Message',
      name: 'message',
      component: Message,
    },
    {
      path: '/Protected',
      name: 'protected',
      component: Protected,
    },
    {
      path: '/About',
      name: 'about',
      component: About,
    },
    {
      path: '/Numbers',
      name: 'numbers',
      component: Numbers,
    },


  ]
})


export default router;
