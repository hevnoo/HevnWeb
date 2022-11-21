
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
        //登录标识，未登录就是0，登录就是1
        isSignIn: 0,
        token:''
    },
    
};
