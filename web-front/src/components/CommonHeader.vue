<template>
    <header>
        <div class="wrapper">
            <el-row>
                <el-col :span="4">
                    <router-link to="/" class="logo" style="color: rgb(59, 76, 113);font-weight:bold;">
                        HevnWeb
                    </router-link>
                </el-col>
                <el-col :span="20">
                    <el-menu mode="horizontal" 
                        class="nav"
                        :default-active="$route.path" 
                        @select="hanleSelect" 
                        active-text-color="blue"
                        text-color="black"
                        >
                        <!-- background-color="#2d2d2d"
                        text-color="#9d9d9d"
                        active-text-color="#fff"
                        -->
                        <el-menu-item index="/" style="font-size:17px">
                            <router-link to="/" active-class='active'><i class="iconfont icon-home"></i>首页</router-link>
                        </el-menu-item>
                        <el-menu-item index="/Github" style="font-size:17px">
                            <!-- <router-link to="https://github.com/hevnoo/myblog">Github</router-link> -->
                            <a href="https://github.com/hevnoo/HevnWeb" target="_blank" >Github</a>
                        </el-menu-item>
                        <el-menu-item index="/About" style="font-size:17px">
                            <router-link to="/About" active-class='active'>About</router-link>
                        </el-menu-item>
                        <el-menu-item index="/article" style="font-size:17px" v-if="isSignIn===1">
                            <router-link to="/article" active-class='active'>我的博客</router-link>
                        </el-menu-item>
                        <el-menu-item index="/login" style="font-size:17px" v-if="isSignIn===0">
                            <router-link class="signBtn" to="/login" active-class='active'>登录</router-link>
                        </el-menu-item>
                        <el-menu-item index="/personal" v-else-if="isSignIn===1">
                            <router-link class="signBtn" to="/personal" active-class='active'>
                                <img class="nav_img" 
                                    style="width:30px;
                                    height: 30px;
                                    margin-left: 12px;
                                    border-radius: 50%;"
                                :src="userinfo.head_img" alt="">
                                {{userinfo.nickname}}
                            </router-link>
                        </el-menu-item>
                    </el-menu>
                    
                </el-col>
            </el-row>
            
        </div>
    </header>
</template>

<script>
    export default {
        name:'CommonHeader',
        data() {
            return {
                userinfo: {}
            }
        },
        methods: {
            hanleSelect(index) {
                this.activeIndex = index
            },
            getUserInfo() {
                this.$axios.get('/api/user/info').then((res) => {
                    let result = res.data
                    if (result.code === 0) {
                        this.userinfo = result.data
                    }
                }).catch(e => {
                    console.log(e)
                })
            }
        },
        computed: {
            isSignIn() {
                return this.$store.state.isSignIn
            }
        },
        created() {
            this.getUserInfo()
        },
    }
</script>

<style lang="scss" scoped>

    header {
        // background: #2d2d2d;
        background: #fff;
        color: #9d9d9d;
        box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.5);
        // margin-bottom: 20px;
        .logo {
            line-height: 60px;
            font-size: 25px;
            font-weight: bold;
        }
        .nav {
            float: right;
            border-bottom: none;
            font-size: 25px;
            li {
                padding: 0;
                a {
                    display: inline-block;
                    padding: 0 20px;
                    .iconfont {
                        vertical-align: top;
                        margin: 0 5px 0 0;
                    }
                }
            }
        }
    }
    
    .signBtn {
        // background: #3b99fc !important;
        // color: #fff !important;
        line-height: 60px;
    }
</style>