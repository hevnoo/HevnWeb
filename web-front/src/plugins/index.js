// import Vue from "vue";

export default{
    install(Vue,options){
        console.log(options)
        //定义全局混入
        Vue.mixin({
            // mounted() {
            //     console.log('组件创建成功')
            // },
        })

        //定义全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,18)
        })

        //定义全局指令
    }
    

}