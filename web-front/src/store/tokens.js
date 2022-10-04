
export default {
    namespaced:true,
    
    mutations: {
        ISSIGNIN (state,val) {
            state.isSignIn = val;
        },
        SETTOKEN(state,val) {
            state.token = val;
        }
    },
    state: {
        isSignIn: 0,
        token:''
    },
};
