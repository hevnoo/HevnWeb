
export default {
    namespaced:true,
    actions:{

    },
    mutations: {
        KEY(state,val){
            state.isKey=val
        },
        //分页
        DOPAGE(state,value){
            state.page_num = value
        },
    },
    state: {
        isKey:1,
        page_num:1,
    },
};
