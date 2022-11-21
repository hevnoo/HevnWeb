// import Vue from "vue";
import focus from './focus.js';
import copy from './copy'
import debounce from './debounce'
import permission from './permission.js';

const install = function(Vue){
    Vue.directive('focus',focus)
    Vue.directive('copy',copy)
    Vue.directive('debounce',debounce)
    Vue.directive('permission',permission)
}


export default install
