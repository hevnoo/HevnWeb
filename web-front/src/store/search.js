
export default {
    namespaced:true,
    actions:{
        dosearch(context,value){
            // console.log('actions被调用了')
            context.commit('DOSEARCH',value);
        }
    },
    mutations: {
        // 点击过滤数据
        DOSEARCH(state,value){
            state.filterList = value
        },
        //key值
        KEYNUM(state,value){
            state.input_num = value
        },
        // 传过滤数据
        // KEYLIST(state,value){
        //     state.filterList = value
        // }
    },
    state: {
        input_num:0,
        // 对应Home组件里的子组件绑定的key值
        is_input:true,
        // 取反决定展示哪个组件
        filterList:[],
        //过滤后的文章列表
        
    },
};
