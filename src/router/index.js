import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '',
      name: 'home',
      component: () => import('@/views/home'),
      meta: {
        isShowHeader: true,
        isShowSearch: true,
        isShowRightNav:true,
        title: 'U袋网'
      },
    },
    {
      path:'/goodsShow/:id',
      name:'goodsShow',
      component:()=>import('@/views/goodsShow'),
      meta: {
        isShowHeader: true,
        isShowSearch: true,
        isShowRightNav:true,
        title: '购买详情'
      },
    },
    {
      path:'/cartsShop',
      name:'carts',
      component:()=>import('@/views/cartsShop'),
      meta: {
        isShowHeader: true,
        isShowSearch: true,
        isShowRightNav:true,
        title: '购物车'
      },
    },
    {
      path:'/order',
      name:'order',
      component:()=>import('@/views/order'),
      meta: {
        isShowHeader: true,
        isShowSearch: true,
        isShowRightNav:true,
        title: '订单'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login'),
      meta: {
        isShowHeader: false,
        isShowSearch: false,
        isShowRightNav:false,
        title: '登录'
      },
      children: [
        {
          path:'',
          name:'loginChild',
          component:()=>import('@/components/loginChild'),
          meta:{
            isShowHeader:false,
            // isShowRightNav:false,
            title:'登录'
          }
        },
        {
          path:'loginChild',
          name:'loginChild',
          component:()=>import('@/components/loginChild'),
          meta:{
            isShowHeader:false,
            // isShowRightNav:false,
            title:'注册'
          }
        },
        {
          path:'postChild',
          name:'postChild',
          component:()=>import('@/components/postChild'),
          meta:{
            isShowHeader:false,
            // isShowRightNav:false,
            title:'注册'
          }
        },
        // {
        //   path: '',
        //   components: {
        //     loginView: () => import('@/components/loginChild'),
        //     postView: () => import('@/components/postChild')
        //   }
        // }
      ]
    },
    {
      path:'/buySuccess',
      name:'buySuccess',
      component:()=>import('@/views/buySuccess'),
      meta: {
        isShowHeader: true,
        isShowSearch: true,
        isShowRightNav:false,
        title: '订单'
      }
    },
    {
      path:'/mySelf',
      name:'mySelf',
      component:()=>import('@/views/mySelf'),
      meta: {
        isShowHeader: true,
        isShowSearch: true,
        isShowRightNav:true,
        title: '个人中心'
      },
      children:[
        {
          path:'',
          name:'firstPage',
          component:()=>import('@/components/mySelf/firstPage'),
          meta: {
            isShowHeader: true,
            isShowSearch: true,
            isShowRightNav:true,
            title: '个人中心'
          }
        },
        {
          path:'firstPage',
          name:'firstPage',
          component:()=>import('@/components/mySelf/firstPage'),
          meta: {
            isShowHeader: true,
            isShowSearch: true,
            isShowRightNav:true,
            title: '个人中心'
          }
        },
        {
          path:'adress',
          name:'adress',
          component:()=>import('@/components/mySelf/adress'),
          meta: {
            isShowHeader: true,
            isShowSearch: true,
            isShowRightNav:true,
            title: '个人中心'
          }
        },
      ]
    }
  ]
})
//全局:进入之前
router.beforeEach((to, from, next) => {
  if (to.meta.isLogin) {
    let t1 = router.app.$local.fetch('use12');
    if (t1.userTel) {
      next()
    } else {
      router.push('/login')
    }
  }
  //如果不写next() 就会阻止进入路径 == 拦截功能
  next()
})
router.afterEach((to, after) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'U袋网'
  }
})
export default router