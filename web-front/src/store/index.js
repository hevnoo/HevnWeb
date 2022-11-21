import Vue from "vue";
import Vuex from "vuex";
// 
import tokens from "./tokens";
import search from "./search"
import data from './data'
import re from './re'
// 
Vue.use(Vuex);

//创建并暴露store
export default new Vuex.Store({
  // 放入token.js的部分
  // mutations: {
  //   changIsSignIn (state,n) {
  //       state.isSignIn = n
  //   },
  //   setToken(state,val) {
  //       state.token = val
  //   }
  // },
  // state: {
  //   isSignIn: 0,
  //   token:''
  // },
  // 引入其他store模块
  modules:{
    tokens,
    search,
    data,
    re,
  }
});
