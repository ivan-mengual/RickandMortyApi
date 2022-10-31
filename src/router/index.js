import { createRouter, createWebHistory } from 'vue-router'
// import VueRouteMiddleware from 'vue-route-middleware'
import VueRouteMiddleware from 'vue-route-middleware'

import AuthMiddleware from './middleware/auth'

import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            middleware: [AuthMiddleware]
        }
      },
      {
        path: '/detail',
        name: 'detail',
        component: Detail,
        meta: {
            middleware: [AuthMiddleware]
        }
      },

    ]
  })
router.beforeEach(VueRouteMiddleware())
export default router