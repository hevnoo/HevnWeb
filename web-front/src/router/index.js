import Vue from "vue";
import VueRouter from "vue-router";



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
    {
        path: "/",
        redirect:'/start',
        component: () => import ('@/components/CommonLayout.vue'),
        children: [
            // {
            //     path:'',
            //     name:'start',
            //     component: () => import ('@/views/Start.vue'),
            //     meta:{
            //         title:'',
            //     },
            // },
            {
                path: '/home',
                name: 'home',
                redirect:'/blog',
                component: () => import ('@/views/Home.vue'),
                meta:{
                    title:'首页',
                },
                children:[
                    {
                        path:'/blog',
                        name:'blog',
                        component: () => import ('@/components/BlogList.vue'),
                        meta:{
                            title:'首页',
                        },
                    },
                    {
                        path:'/front/:clickVal',
                        name:'front',
                        component: () => import ('@/views/navlist/Front.vue'),
                        meta:{
                            title:'首页-前端',
                        },
                    },
                    {
                        path:'/back/:clickVal',
                        name:'back',
                        component: () => import ('@/views/navlist/Back.vue'),
                        meta:{
                            title:'首页-后端',
                        },
                    },
                    {
                        path:'/mobile/:clickVal',
                        name:'mobile',
                        component: () => import ('@/views/navlist/Mobile.vue'),
                        meta:{
                            title:'首页-移动开发',
                        },
                    },
                    {
                        path:'/code/:clickVal',
                        name:'code',
                        component: () => import ('@/views/navlist/Code.vue'),
                        meta:{
                            title:'首页-编程语言',
                        },
                    },
                    {
                        path:'/search/:keywards',
                        name:'search',
                        component: () => import ('@/components/SearchList.vue'),
                        meta:{
                            title:'搜索',
                        },
                    },
                ]
            },
            {
                path: '/about',
                name: 'about', 
                component: () => import ('@/views/About.vue'),
                meta:{
                    title:'关于',
                }
            },
            {
                path: '/detail/:id',
                component: () => import ('@/views/Detail.vue'),
                meta:{
                    title:'文章详情',
                }
            },
            {
                path: '/personal',
                component: () => import ('@/views/Personal.vue'),
                meta: {
                    title:'个人中心',
                    requireAuth: true //true为这个页面需要登录权限
                }
            },
            {
                path: '/article',
                name: 'article',
                component: () => import ('@/views/Article.vue'),
                meta: {
                    title:'我的博客',
                    requireAuth: true //true为这个页面需要登录权限
                },
            },
            {
                path: '/article/edit',
                name: 'editArticle',
                component: () => import ('@/views/ArticleEdit.vue'),
                meta: {
                    title:'新增文章',
                    requireAuth: true //true为这个页面需要登录权限
                }
            },
            {
                path: '/article/edit/:id',
                name: 'updateArticle',
                component: () => import ('@/views/ArticleEdit.vue'),
                meta: {
                    title:'编辑文章',
                    requireAuth: true //true为这个页面需要登录权限
                }
            }
            
        ]
    },
    {
        path: '/login',
        component: () => import ('@/views/Login.vue'),
        meta:{
            title:'登录',
        }
    },
    {
        path: '/Github',
        component: () => import ('@/views/Github.vue'),
        meta:{
            title:'Github',
        }
    },
    // {
    //     path:'/bloglist',
    //     component: () => import ('../components/Bloglist.vue'),
    // }

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