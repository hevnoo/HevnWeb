
export default {
    namespaced:true,
    actions:{
        dosearch(context,value){
            console.log('actions被调用了')
            context.commit('DOSEARCH',value);
        }
    },
    mutations: {
        DOSEARCH(state,value){
            state.sou_list = value
        },
        KEYNUM(state,value){
            state.input_num = value
        }
    },
    state: {
        sou_list:[],
        input_num:0
    },
};
