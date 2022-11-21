//嵌套
export default{
    
    path: "/",
    redirect:'/start',
    component: () => import ('@/components/CommonLayout.vue'),
    children: [
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
            path: '/file',
            name: 'file', 
            component: () => import ('@/views/File.vue'),
            meta:{
                title:'归档',
            }
        },
        {
            path: '/class',
            name: 'class', 
            component: () => import ('@/views/Class.vue'),
            meta:{
                title:'分类',
            }
        },
        {
            path: '/words',
            name: 'words', 
            component: () => import ('@/views/Words.vue'),
            meta:{
                title:'留言板',
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
            name:'personal',
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
                title:'博客管理',
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
    
    
}