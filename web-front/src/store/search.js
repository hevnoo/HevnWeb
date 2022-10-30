
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
        DOPAGE1(state,value){
            state.page_num1 = value
        },
    },
    state: {
        isKey:1,
        page_num:1,
        page_num1:1,
    },
};
