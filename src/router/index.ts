import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/dashboard',
    meta: {
      hidden: true
    }
  },
  {
    path: '/login',
    name: "Login",
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      title: "仪表盘",
      icon: "behero-dashboard"
    },
    children: [
      {
        path: 'dashboard',
        name: "Dashboard",
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: "仪表盘",
          icon: "behero-dashboard"
        },
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    meta: {
      title: "示例",
      icon: "behero-workbench"
    },
    children: [
      {
        path: 'table',
        component: () => import('@/views/table/index.vue'),
        meta: {
          title: "表格",
          icon: "behero-student"
        },
      },
      {
        path: 'tree',
        component: () => import('@/views/tree/index.vue'),
        meta: {
          title: "树",
          icon: "behero-teacher"
        },
        children: [
          {
            path: 'student',
            component: () => import('@/views/student/index.vue'),
            meta: {
              title: "学生",
              icon: "behero-student"
            },
          },
          {
            path: 'teacher',
            component: () => import('@/views/teacher/index.vue'),
            meta: {
              title: "老师",
              icon: "behero-teacher"
            }
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/form',
    meta: {
      title: "表单",
      icon: "behero-views"
    },
    children: [
      {
        path: 'form',
        component: () => import('@/views/form/index.vue'),
        meta: {
          title: "表单",
          icon: "behero-form"
        },
      }
    ]
  },
  {
    path: '/utils',
    component: Layout,
    redirect: '/utils/md',
    meta: {
      title: "工具",
      icon: "behero-setting"
    },
    children: [
      {
        path: 'md',
        component: () => import('@/views/md/index.vue'),
        meta: {
          title: "markdown",
          icon: "behero-markdown"
        },
      },
      {
        path: 'text',
        component: () => import('@/views/text/index.vue'),
        meta: {
          title: "文本",
          icon: "behero-text"
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
