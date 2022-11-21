// import Vue from "vue";


export default{
    install(Vue,options){
        console.log(options);

        //定义全局混入
        Vue.mixin({
            
        })
        //定义全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,18)
        })

        //定义全局指令
        // Vue.directive('focus', {
        //     inserted (el) {
        //         if(el.tagName.toLocaleLowerCase() == 'input'){
        //         el.focus()
        //         }else{
        //         if(el.getElementsByTagName('input')){
        //             el.getElementsByTagName('input')[0].focus()
        //         }
        //         }
        //     }, 
        // })


    }
    

}