import Vue from 'vue'
import Router from 'vue-router'
import overview from '../components/home/overview'
import bookDetail from '../components/home/bookDetail'
import LoginVue from '../components/LoginVue'
import HomeVue from '../components/home/HomeVue'
import UserVue from '../components/user/UserVue'
import AdminVue from '../components/admin/AdminVue'
import RegisVue from '../components/RegisVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginVue
    },
    {
      path: '/regis',
      name: 'regis',
      component: RegisVue
    },
    {
      path: '/',
      component: HomeVue,
      children: [
        {
          path: '',
          component: overview
        },
        {
          path: '/books/:cateId',
          component: overview
        },
        {
          path: '/book/:id',
          component: bookDetail
        }
      ]
    },
    {
      path: '/user',
      component: UserVue
    },
    {
      path: '/admin',
      component: AdminVue
    }
  ]
})
