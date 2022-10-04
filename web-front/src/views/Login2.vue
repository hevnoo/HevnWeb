<template>
    <div class="container">
        <!-- 登录界面 -->
        <div class="box" v-if="is_show == true">
            <header class="header">
                <span class="logo" @click="goBack()">HevnWeb</span>
            </header>
            <!--  -->
            <el-form class="footer" :model="loginForm" :rules="loginRules" ref="loginForm" key="login">
                <el-form-item class="card one" prop="username">
                    <span class="front">账号：</span>
                    <el-input class="back" v-model="loginForm.username" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-form-item class="card two" prop="password">
                    <span class="front">密码：</span>
                    <el-input class="back" placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
                </el-form-item>
                <div class="three">
                    <!-- <el-button type="primary" @click="is_show=!is_show">注册</el-button> -->
                    <el-button type="primary" @click="toSignUp()">去注册</el-button>
                    <el-button type="primary" @click="signIn()">登录</el-button>
                </div>
            </el-form>
        </div>
        <!-- 注册界面 -->
        <div class="re_box" v-else>
            <header class="header">
                <span class="logo" @click="goBack()">HevnWeb</span>
            </header>
            <!--  -->
            <el-form class="footer" :model="regForm" :rules="regRules" ref="regForm" key="register">
                <el-form-item class="card one" prop="username">
                    <span class="front">账号：</span>
                    <el-input class="back" v-model="regForm.username" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-form-item class="card two" prop="password">
                    <span class="front">密码：</span>
                    <el-input class="back" placeholder="请输入密码" v-model="regForm.password" show-password></el-input>
                </el-form-item>
                <el-form-item class="card three" prop="nickname">
                    <span class="front">昵称：</span>
                    <el-input class="back" placeholder="请输入昵称" v-model="regForm.nickname"></el-input>
                </el-form-item>
                <div class="four">
                    <el-button type="primary" @click="signUp()" plain>注册</el-button>
                    <span class="backLogin" type="primary" @click="toSignIn()">返回登录<i class="el-icon-right"></i></span>
                </div>
            </el-form>
        </div>
        <div v-loading.fullscreen.lock="loading"></div>
    </div>
</template>

<script>
    import Cookie from 'js-cookie'
    export default {
        name: 'Login2',
        components:{
        },
        data(){
            return{
                is_show:true,
                loading: false,

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
                
            }
        },
        methods:{
            signIn() {
                this.$refs['loginForm'].validate((valid) => {
                    if (valid) {
                        this.loading = true
                        this.$axios.post('/api/user/login', this.loginForm)
                            .then(res => {
                                let result = res.data
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
                                console.log(res)
                                if (res.data.code === 0) {
                                    this.$message({
                                        message: '注册成功',
                                        type: 'success'
                                    });
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
            }
        },
        created(){
        }
    }
</script>

<style lang="scss" scoped>

    .container{
        min-height: 100vh;
        // min-height: calc(100vh - 200px);
        display:flex;
        justify-content: center;
        align-items: center;
        // 1.登录界面
        .box{
            width: 400px;
            height: 260px;
            background-color: #fff;
            .header{
                height: 60px;
                background-color: aquamarine;
                display: flex;
                justify-content: center;
                align-items: center;
                .logo{
                    font-size: 25px;
                    font-weight: 700;
                    cursor: pointer;
                }
            }
            .footer{
                // flex:1;//失效？
                height: 200px;
                background-color: antiquewhite;
                display: flex;
                flex-direction: column;
                .card{
                    height: 30px;
                    display: flex;
                    margin: 20px 20px 10px 20px;
                    .front{
                        width: 50px;
                        height: 30px;
                        line-height: 30px;
                        text-align: left;
                    }
                    .back{
                        flex:1;
                        background-color: #fff;
                    }
                }
                .three{
                    // height: 30px;
                    margin-top:20px;
                    // margin: 20px 20px 10px 20px;
                    display: flex;
                    justify-content: space-around;
                    .el-button{
                        width: 120px;
                        height: 40px;
                    }
                }
            }
        }
        // 2.注册界面
        .re_box{
            width: 400px;
            height: 320px;
            background-color: #fff;
            .header{
                height: 60px;
                background-color: aquamarine;
                display: flex;
                justify-content: center;
                align-items: center;
                .logo{
                    font-size: 25px;
                    font-weight: 700;
                    cursor: pointer;
                }
            }
            .footer{
                // flex:1;//失效？
                height: 260px;
                background-color: antiquewhite;
                display: flex;
                flex-direction: column;
                .card{
                    height: 30px;
                    display: flex;
                    margin: 20px 20px 10px 20px;
                    .front{
                        width: 50px;
                        height: 30px;
                        line-height: 30px;
                        text-align: left;
                    }
                    .back{
                        flex:1;
                        background-color: #fff;
                        
                    }
                }
                .four{
                    height: 40px;
                    margin-top:20px;
                    // margin: 20px 20px 10px 20px;
                    // background-color: pink;
                    display: flex;
                    justify-content: space-around;
                    .el-button{
                        width: 120px;
                        height: 40px;
                    }
                    .backLogin{
                        // width: 120px;
                        // height: 40px;
                        line-height: 40px;
                        color: #139eff;
                        cursor: pointer;
                    }
                }
            }

        }
        


    }
</style>