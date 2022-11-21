import axios from 'axios'
import store from './store/index'
// 引入路由
// import router from '@/router'

axios.defaults.baseURL = 'http://127.0.0.1:8087/';
// axios.defaults.baseURL = 'http://43.139.143.221:7070/';

export default function setAxios() {

    //请求拦截
    axios.interceptors.request.use(
        config => {
            if (store.state.tokens.token) {
                //  服务端验证规则
                config.headers['Authorization'] = `Bearer ${store.state.tokens.token}`
            }
            return config
        }
    )
    // 配置响应拦截器
    // axios.interceptors.response.use((response) => {
    //     // 正常响应处理
    //     return response
    // }, (error) => {
    //     // 非正常响应处理(包括401)
    //     // console.dir(error) // 对象： config request response isAxiosError toJSON
    //     if (error.response.status === 401) {
    //         // token失效(token在服务器端已经失效了，48个小时时效)
    //         // 强制用户重新登录系统，以刷新服务器端的token时效
    //         // router.push('/login')
    //         // 不要给做错误提示了
    //         return new Promise( () => {}) // 空的Promise对象，没有机会执行catch，进而不做错误提示了
    //     }
    //     // return new Promise((resolve,reject)=>{
    //     // reject('获得文章失败！')
    //     // })
    //     return Promise.reject(error)
    // })

    
    

}