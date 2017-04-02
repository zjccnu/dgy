import Vue    from     'vue'
import Router from  'vue-router'
import hello  from   '@/components/Hello'
import msg from     '@/components/msg'
import set from     '@/components/set'
import index from   '@/components/index'
import contact from '@/components/contact'
import home  from   '@/components/home'/*主页面*/
import addEp from   '@/components/addEp'/*添加企业*/
import login  from   '@/components/login'/*登陆*/
import customList from '@/components/customList'/*用户列表*/
import  approval  from '@/components/approval'/*审批*/
import  mine   from '@/components/mine'/*我的*/
import  check  from '@/components/check'/**/
import custom  from '@/components/custom'/*客户详情*/
import followCustom from '@/components/followCustom'/*跟踪订单*/
import  addCustom   from '@/components/addCustom'/*添加用户*/
import  leave       from '@/components/leave'/*请假详情*/

Vue.use(Router)
export default new Router({
/*  canReuse(){
    return false;
  },*/
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },
     {
      path: '/set',
      name: 'set',
      component: set
    },
     {
      path: '/contact',
      name: 'contact',
      component: contact
    },
     {
      path: '/index/:id',
      name: 'index',
      component: index
    },
    {
      path: '/msg',
      name: 'msg',
      component: msg
    },{
      path:'/',
      name:'home',
      component:home
    },{
      path:'/addEp',
      name:'addEp',
      component:addEp
    },{
      path:'/login',
      name:'login',
      component:login
    },{
      path:'/customList',
      name:'customList',
      component:customList
    },{
      path:'/approval',
      name:'approval',
      component:approval
    },{
      path:'/mine',
      name:'mine',
      component:mine
    },{
      path:'/check',
      name:'check',
      component:check
    },{
      path:'/custom',
      name:'custom',
      component:custom
    },{
      path:'/followCustom',
      name:'followCustom',
      component:followCustom
    },{
      path:'/addCustom',
      name:'addCustom',
      component:addCustom
    },{
       path:'/leave',
      name:'leave',
      component:leave
    }

  ]
})
