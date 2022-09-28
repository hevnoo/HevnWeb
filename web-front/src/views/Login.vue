<template>
    <div class="login_body">
        <div class="sign_box">
            <!-- 登录界面 -->
            <!-- <span class="login_logo" style="font-size:25px;">登录</span> -->
            <div class="signIn" v-if="status==1">
                <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="0px" key="login">
                    <el-form-item prop="username">
                        <el-input v-model="loginForm.username" placeholder="请输入账号"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="signBtn" type="primary" @click="signIn">登录</el-button>
                    </el-form-item>
                </el-form>
                <div class="login_text_out">
                    <span class="login_text" @click="toSignUp">注册新账号</span>
                    <span class="login_back" @click="login_back()">返回界面</span>
                    <!-- 用编程式导航back界面 -->
                </div>
                
            </div>
            <!-- 注册界面 -->
            <div class="signUp" v-else>
                <el-form :model="regForm" :rules="regRules" ref="regForm" label-width="0px" key="register">
                    <el-form-item prop="username">
                        <el-input v-model="regForm.username" placeholder="请输入账号"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" v-model="regForm.password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item prop="nickname">
                        <el-input v-model="regForm.nickname" placeholder="请输入昵称"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="signBtn" type="primary" @click="signUp">注册</el-button>
                    </el-form-item>
                </el-form>
                <span class="login_texts" @click="toSignIn">返回登录</span>
            </div>
            <div v-loading.fullscreen.lock="loading"></div>
        </div>
    </div>

</template>

<script>
    import Cookie from 'js-cookie'
    export default {
        data() {
            return {
                loading: false,
                status: 1,
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
                }
            }
        },
        methods: {
            signIn() {
                this.$refs['loginForm'].validate((valid) => {
                    if (valid) {
                        this.loading = true
                        this.$axios.post('/api/user/login', this.loginForm)
                            .then(res => {
                                let result = res.data
                                if (result.code === 0) {
                                    Cookie.set('token', result.token)
                                    this.$store.commit('setToken', result.token)
                                    this.$store.commit('changIsSignIn', 1)
                                    setTimeout(() => {
                                        this.loading = false
                                        this.$router.push({
                                            name: 'home'
                                        })
                                    }, 1500);
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
                login_back(){
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
                this.status = 2
            },
            toSignIn() {
                this.status = 1
            }
        }
    }
</script>

<style lang="scss" scoped>

    .login_body{
        min-height: 100vh;
        background: url('../assets/img/login-img.jpg');
        display:flex; 
        justify-content: center; 
        align-items: center; 
    }
    .sign_box {
        // width: 300px;
        // text-align: center;
        .signIn{ 
            width: 400px;
            height: 300px;
            // background-color: gray;
            border: solid 2px;
            border-radius: 5%;
            flex-direction: column;
            display: flex;
            justify-content: center; 
            align-items: center;
            .el-form-item{
                width: 350px;
                height: 40px;
            }
            .login_text_out{
                flex-direction: row;
                .login_text {
                // margin-left: 25px;
                padding-right: 50px;
                //设置内边距控制两段文字间隙。
                color: #3B78DD;
                cursor: pointer;//光标一只手
                    &:hover {
                        color: #1760D7;
                    }
                }
                .login_back{
                    color:#1761d1df;
                    cursor: pointer;
                }
            }

        }

        .signUp{ 
            width: 400px;
            height: 300px;
            // background-color: gray;
            border: solid 2px;
            border-radius: 5%;
            flex-direction: column;
            display: flex;
            justify-content: center; 
            align-items: center;
            .el-form-item{
                width: 350px;
                height: 40px;
            }

            .login_texts {
            color: #3B78DD;
            cursor: pointer;
                &:hover {
                    color: #1760D7;
                }
            }

        }

    }
    .signBtn {
        width: 100%;
        font-size: 18px;
    }

</style>