import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import '@/assets/scss/reset.scss'
import '@/assets/font/iconfont.css'
import '@/assets/scss/common.scss'
//
import setAxios from './setAxios'
import Cookie from 'js-cookie'
import store from "./store/index";
import plugins from './plugins/index'

setAxios()
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.use(mavonEditor);
Vue.use(plugins)

// 全局前置守卫鉴权
router.beforeEach((to,from,next)=>{
  store.commit('tokens/SETTOKEN',Cookie.get('token'));
  if(store.state.tokens.token){
    store.commit('tokens/ISSIGNIN',1);
  }
  if(to.meta.requireAuth){
    if(store.state.tokens.token){
      next();
    }else{
      next({path:'/login'});
    }
  }else{
    next()
  }
})
//标签名
router.afterEach((to,from)=>{
  // document.title = to.meta.title;
  document.title = `HevnWeb ${to.meta.title}`;
  if(from == ''){
    console.log(from);
  }
})
//

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
