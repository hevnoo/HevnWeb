//放博客列表和其他接口数据
export default {
    namespaced:true,
    actions:{
        
    },
    mutations: {
        //放请求的全部博客数据
        KEEP(state,val){
            state.blogList=val
            console.log('VueX',state.blogList)
        }
    },
    state: {
        blogList:[],
        
    },
};
