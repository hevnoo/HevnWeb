
export default {
    namespaced:true,
    actions:{
        do(context,value){
            console.log('actions被调用了')
            context.commit('DO',value);
        }
    },
    mutations: {
        DO(state,value){
            state.youData = value + 1;
        }
    },
    state: {
        ttt:'试试',
        youData:0
    },
};
