import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () =>
            import ('@/components/CommonLayout.vue'),
        children: [{
                path: '',
                name: 'home',
                component: () => import ('@/views/Home.vue'),
                    meta:{
                        title:'首页',
                    }
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
                    title:'文章',
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

];
//



const router = new VueRouter({
    routes
});

export default router;