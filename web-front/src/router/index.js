import Vue from "vue";
import VueRouter from "vue-router";
//模块化一些部分，将首页和登录路由模块化
import home from './home'
import login from './login'

Vue.use(VueRouter);

const routes = [
    {
        path:'/start',
        name:'start',
        component: () => import ('@/views/Start.vue'),
        meta:{
            title:'',
        },
    },
    home,
    login,
    
    {
        path: '/Github',
        component: () => import ('@/views/Github.vue'),
        meta:{
            title:'Github',
        }
    },
    {
        path: '/Test1',
        name:'test1',
        component: () => import ('@/views/Test1.vue'),
        meta:{
            title:'Test1',
        }
    },


];

//使用编程式路由实现跳转的时候，多次执行会抛出NavigationDuplicated的警告

let originPush=VueRouter.prototype.push;
let originReplace=VueRouter.prototype.replace;
//重写push/replace
//第一个参数：告诉原来的push方法，往哪里跳转（传递哪些参数）
//第二个参数：成功的回调
//第三个参数：失败的回调
//call/apply区别
//相同点：都可以调用函数一次，都可以篡改函数的上下文(this）一次‘
//不同点：call/apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve&&reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}
VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve&&reject){
        originReplace.call(this,location,resolve,reject);
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }
}


const router = new VueRouter({
    routes
});

export default router;