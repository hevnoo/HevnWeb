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
                component: () =>
                    import ('@/views/Home.vue'),
                name: 'home'
            },
            {
                path: '/about',
                component: () =>
                    import ('@/views/About.vue'),
                name: 'about'
            },
            {
                path: '/detail/:id',
                component: () =>
                    import ('@/views/Detail.vue')
            },
            {
                path: '/personal',
                component: () =>
                    import ('@/views/Personal.vue'),
                meta: {
                    requireAuth: true //true为这个页面需要登录权限
                }
            },
            {
                path: '/article',
                component: () =>
                    import ('@/views/Article.vue'),
                meta: {
                    requireAuth: true //true为这个页面需要登录权限
                },
                name: 'article'
            },
            {
                path: '/article/edit',
                name: 'editArticle',
                component: () =>
                    import ('@/views/ArticleEdit.vue'),
                meta: {
                    requireAuth: true //true为这个页面需要登录权限
                }
            },
            {
                path: '/article/edit/:id',
                name: 'updateArticle',
                component: () =>
                    import ('@/views/ArticleEdit.vue'),
                meta: {
                    requireAuth: true //true为这个页面需要登录权限
                }
            }
        ]
    },
    {
        path: '/login',
        component: () =>
            import ('@/views/Login.vue')
    },
    {
        path: '/Github',
        component: () =>
            import ('@/views/Github.vue')
    },
    {
        path: '/loginTest',
        component: () =>
            import ('@/views/LoginTest.vue')
    },
];

const router = new VueRouter({
    routes
});

export default router;