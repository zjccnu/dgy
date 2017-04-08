import Vue    from   'vue'
import Router from   'vue-router'
import hello  from   '@/components/Hello'
import msg from      '@/components/msg'
import set from      '@/components/set'
import index from    '@/components/index'
import contact from  '@/components/contact'
import home  from    '@/components/home'/*主页面*/
import addEp from    '@/components/addEp'/*添加企业*/
import login  from   '@/components/login'/*登陆*/
import customList from '@/components/customList'/*用户列表*/
import  approval  from '@/components/approval'/*审批*/
import  mine   from    '@/components/mine'/*我的*/
import  check  from    '@/components/check'/**/
import custom  from    '@/components/custom'/*客户详情*/
import followCustom from '@/components/followCustom'/*跟踪订单*/
import  addCustom   from '@/components/addCustom'/*添加用户*/
import  leave       from '@/components/leave'/*请假详情*/
import  prepareApproval   from '@/components/prepareApproval'
import  workOrder from '@/components/workOrder/workOrder'
import  addOrder from '@/components/workOrder/addOrder'
import  operateDetail from '@/components/workOrder/operateDetail'
import  workDetail from '@/components/workOrder/workDetail'
import  addWorkDetail from '@/components/workOrder/addWorkDetail'
import  joinEnterprice from '@/components/joinEnterprice/joinEnterprice'
import  joinEnterprice2 from '@/components/joinEnterprice/joinEnterprice2'
import  enterpriceDetail from '@/components/joinEnterprice/enterpriceDetail'

import  addEp2   from '@/components/addEp2'
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
    },{
      path:'/prepareApproval',
      name:'approvalApproval',
      component:prepareApproval
    },{
       path:'/workOrder',
      name:'workOrder',
      component:workOrder
    },{
       path:'/addEp2',
      name:'addEp2',
      component:addEp2
    },{
      path:'/addOrder',
      name:'addOrder',
      component:addOrder
    },{
      path:'/operateDetail',
      name:'operateDetail',
      component:operateDetail
    },{
      path:'/workDetail',
      name:'workDetail',
      component:workDetail
    },{
      path:'/addWorkDetail',
      name:'addWorkDetail',
      component:addWorkDetail
    },{
       path:'/joinEnterprice',
      name:'joinEnterprice',
      component:joinEnterprice
    },{
       path:'/joinEnterprice2',
      name:'joinEnterprice2',
      component:joinEnterprice2
    },{
       path:'/enterpriceDetail',
      name:'enterpriceDetail',
      component:enterpriceDetail
    }

  ]
})
