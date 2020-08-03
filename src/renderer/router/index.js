import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import NewsPage from '@/components/NewsPage'
import landingPage from '@/components/LandingPage'
import HomePage from '@/components/HomePage'
export default new Router({
  routes: [
    // {
    //   path: '/landing-page',
    //   name: 'landing-page',
    //   component: landingPage
    // },
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/news',
      name: 'news',
      component: NewsPage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
