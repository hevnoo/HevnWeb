<template>
    <div class="container">
        <!-- 登录界面 -->
        <div class="box" v-if="is_show == true">
            <header class="header">
                <span class="logo" @click="goBack()">HevnWeb</span>
            </header>
            <!--  -->
            <el-form :model="loginForm" :rules="loginRules" ref="loginForm" key="login" :cell-style="cellStyle" inline status-icon>
                <el-form-item prop="username">
                    <span style="color:#e6e6ead3">账号：</span>
                    <el-input type="username" v-model="loginForm.username" placeholder="请输入账号" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <span style="color:#e6e6ead3">密码：</span>
                    <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" show-password autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <!-- <el-button type="primary" @click="is_show=!is_show">注册</el-button> -->
                    <el-button class="front" type="primary" @click="toSignUp()">去注册</el-button>
                    <el-button class="back" type="primary" @click="signIn()">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- 注册界面 -->
        <div class="re_box" v-else>
            <header class="header">
                <span class="logo" @click="goBack()">HevnWeb</span>
            </header>
            <!--  -->
            <el-form :model="regForm" :rules="regRules" ref="regForm" key="register" inline status-icon>
                <el-form-item prop="username" >
                    <span style="color:#e6e6ead3">账号：</span>
                    <el-input type="username" v-model="regForm.username" placeholder="请输入账号" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <span style="color:#e6e6ead3">密码：</span>
                    <el-input type="password" v-model="regForm.password" placeholder="请输入密码" show-password autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="nickname">
                    <span style="color:#e6e6ead3">昵称：</span>
                    <el-input type="nickname" v-model="regForm.nickname" placeholder="请输入用户昵称" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="_front" type="primary" @click="signUp()" plain>注册</el-button>
                    <span class="_back" type="primary" @click="toSignIn()">返回登录<i class="el-icon-right"></i></span>
                </el-form-item>
            </el-form>
        </div>
        <div v-loading.fullscreen.lock="loading"></div>
    </div>
</template>

<script>
    import Cookie from 'js-cookie'
    import {hunhe} from '@/mixin/mixin.js'

    export default {
        name: 'Login',
        components:{
        },
        mixins:[hunhe],
        data(){
            return{
                is_show:true,
                loading: false,
                userList:[],
                isIn:null,
                loginForm: {
                    username: '',
                    password: ''
                },
                loginRules: {
                    username: [{
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    }, ],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }, ]
                },
                regForm: {
                    username: '',
                    password: '',
                    nickname: ''
                },
                regRules: {
                    username: [{
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    }, ],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }, ],
                    nickname: [{
                        required: true,
                        message: '请输入昵称',
                        trigger: 'blur'
                    }, ],
                },
                //背景
                
            }
        },
        methods:{
            cellStyle(row){
                if(row.row < 4){
                    return 'color:blue';
                }
            },
            signIn() {
                this.set
                this.$refs['loginForm'].validate((valid) => {
                    if (valid) {
                        this.loading = true
                        this.$axios.post('/api/user/login', this.loginForm)
                            .then(res => {
                                let result = res.data
                                this.addUserList();
                                if (result.code === 0) {
                                    Cookie.set('token', result.token)
                                    this.$store.commit('tokens/SETTOKEN', result.token)
                                    this.$store.commit('tokens/ISSIGNIN', 1)
                                    setTimeout(() => {
                                        this.loading = false
                                        this.$router.push({
                                            name: 'home'
                                        })
                                    }, 1000);
                                    this.$message({
                                        message: '登录成功',
                                        type: 'success'
                                    });
                                } else {
                                    this.loading = false
                                    this.$message({
                                        message: result.msg,
                                        type: 'error'
                                    });
                                }
                            })
                    } else {
                        return false;
                    }
                });
            },
            // 
            goBack(){
                this.$router.back();
            },
            signUp() {
                this.$refs['regForm'].validate((valid) => {
                    if (valid) {
                        this.$axios.post('/api/user/register', this.regForm)
                            .then(res => {
                                if (res.data.code === 0) {
                                    this.$message({
                                        message: '注册成功',
                                        type: 'success'
                                    });
                                    setTimeout(()=>{
                                        this.toSignIn()
                                    },1500)
                                } else {
                                    this.$message({
                                        message: res.data.msg,
                                        type: 'error'
                                    });
                                }
                            })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            toSignUp() {
                this.is_show = false;
            },
            toSignIn() {
                this.is_show = true;
            },
            addUserList(){
                // this.getUserList()
                this.$axios.post('/api/userList/addUserList',this.regForm)
                .then(()=>{
                })
            
            },
            //获取所有用户
            // getUserList(){
            //     this.$axios.get('/api/userList/userList')
            //     .then((res)=>{
            //         this.userList=res.data.data;
            //         this.userList=this.userList.map((m)=>{
            //             return m.username
            //         })
                    
            //     })
            // },
        },
        created(){
            
        }
    }
</script>


<style lang="scss" scoped>
    .container{
        min-height: 100vh;
        // min-height: calc(100vh - 200px);
        background: url('../assets/img/login-img.jpg');
        background-repeat: round;
        display:flex;
        justify-content: center;
        align-items: center;
        // 1.登录界面和头部logo
        .box{
            width: 400px;
            height: 260px;
            // background-color: #120d48;
            background:rgba(40,44,52,0.7);
            border: 1px solid;
            border-radius: 5%;
            //磨砂玻璃
            backdrop-filter: blur(10px);
            .header{
                height: 60px;
                // background-color: aquamarine;
                border-bottom: 1px solid #e6e6ea7f;
                display: flex;
                justify-content: center;
                align-items: center;
                // color: #e6e6ead3;
                .logo{
                    font-size: 25px;
                    font-weight: 700;
                    // color:#e6e6eaac;
                    color:#e6e6ea;
                    cursor: pointer;
                }
            }
        }
        // 2.注册界面和头部loge
        .re_box{
            width: 400px;
            height: 320px;
            // background-color: #fff;
            background:rgba(40,44,52,0.7);
            border: 1px solid;
            border-radius: 5%;
            .header{
                height: 60px;
                border-bottom: 1px solid #e6e6ea7f;
                display: flex;
                justify-content: center;
                align-items: center;
                .logo{
                    color:#e6e6eaac;
                    font-size: 25px;
                    font-weight: 700;
                    cursor: pointer;
                }
            }
        }
        
    }
    // 
    // .el-form{
    //     &:first-child{
    //         margin-top: 10px;
    //     }
    // }
    .el-form-item{
        margin: 20px 20px 0 20px;
    }
    .el-input{
        width: 280px;
    }
    .el-button{
        width: 120px;
    }
    .front{
        margin-left: 30px;
    }
    .back{
        margin-left: 50px;
    }
    ._front{
        margin-left: 40px;
    }
    ._back{
        font-size: 16px;
        margin-left: 75px;
        color: #139eff;
        cursor: pointer;
    }
    //修改label字体颜色
    // .item .el-form-item__label{
    //     color:#f56c6c;
    //     font-weight:bold;
    //     font-size:20px
    // }
</style>