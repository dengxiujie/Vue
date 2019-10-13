import Vue from 'vue'
import Router from 'vue-router'
import Cookies from "js-cookie";
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes:[
        {
            path:"/",
            name:"home",
            redirect:"/main",
            component:()=>import("@/view/Home"),
            children:[{
              path:"/main",
              name:"main",
              component:()=>import("@/view/Main/Main"), 
            }
          ]

        },
        {
            path:"/Login",
            name:"Login",
            component:()=>import("@/view/Login")

        },
        {
            path:"*",
            name:"notfind",
            component:()=>import("@/view/404")

        },
    ]
})
//跳转之前判断有没有token没有跳转登录
router.beforeEach((to, from, next) => {
    // 登录界面登录成功之后，会把用户信息保存在会话
    // 存在时间为会话生命周期，页面关闭即失效。
    let token = Cookies.get('token')
    if (to.path === '/login') {
      // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
      if(token) {
        next({ path: '/' })
      } else {
        next()
      }
    } else {
      console.log(1111)
      if (!token) {
        // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
        next({ path: '/login' })
      } else {
        next()
      }
    }
  })

export default router
