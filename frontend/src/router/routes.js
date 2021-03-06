
import __import__ from './__import__'

const Layout = __import__('layout/Layout.vue')
const Article = __import__('article/main.vue')

const constRoutes = [
  // {
  //   name: 'login',
  //   path: '/login',
  //   component: __import__('auth/login'),
  //   meta: { title: 'login' },
  //   hidden: true
  // },
  {
    name: '404',
    path: '/404',
    component: __import__('error/Error404.vue'),
    meta: { title: '404' },
    hidden: true
  },
  {
    path: '',
    redirect: '/dashboard'
  }
]

const asyncRoutes = [
  {
    path: '/dashboard',
    component: Layout
    // redirect: '/dashboard/index',
    // children: [
    //   {
    //     name: 'home',
    //     path: '/dashboard/index',
    //     component: __import__('dashboard/index'),
    //     meta: { title: '首页' }
    //   }
    // ]
  },
  {
    name: 'article',
    path: '/article',
    component: Layout,
    meta: { icon: 'document', title: '组件', roles: ['admin'] },
    children: [
      {
        path: '',
        name: 'articles',
        component: Article,
        meta: { title: '博客' }
      }
    ]
  }

  // {
  //   name: 'components',
  //   path: '/components',
  //   component: Layout,
  //   redirect: '/components/back_to_up',
  //   meta: { icon: 'document', title: '组件', roles: ['admin'] },
  //   children: [
  //     {
  //       name: 'backto',
  //       path: '/components/back_to_up',
  //       component: __import__('components/BackToUp'),
  //       meta: { title: '回到顶部', roles: ['admin'] }
  //     },
  //     {
  //       name: 'test-menu',
  //       path: '/components/test_menu',
  //       component: __import__('components/TestMenu'),
  //       meta: { title: 'test-menu' }
  //     },
  //     {
  //       name: 'expand_tree',
  //       path: '/components/expand_tee',
  //       component: __import__('components/ExpandTree'), meta: { title: '扩展树组件' }
  //     },
  //     {
  //       name: 'cascader',
  //       path: '/components/cascader',
  //       component: __import__('components/Cascader'),
  //       meta: { title: 'cascader' }
  //     },
  //     {
  //       name: 'vue',
  //       path: '/vue',
  //       component: __import__('components/vue/index'),
  //       meta: { title: 'vue' }
  //     },
  //     // {
  //     //   name: 'rxjsPlayground',
  //     //   path: '/rxjs',
  //     //   component: __import__('rxjs/index'),
  //     //   meta: { title: 'rxjsPlayground' }
  //     // },
  //     {
  //       name: 'lazyImagePlayground',
  //       path: '/lazy_image',
  //       component: __import__('components/LazyImage'),
  //       meta: { title: 'lazyImagePlayground' }
  //     },
  //     {
  //       name: 'canvas',
  //       path: '/my_canvas',
  //       component: __import__('components/Canvas'),
  //       meta: { title: 'myCanvas' }
  //     }
  //   ]
  // }
]

export {
  constRoutes,
  asyncRoutes
}
