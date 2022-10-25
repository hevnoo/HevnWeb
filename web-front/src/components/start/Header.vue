<template>
    <header>
        <div class="wrapper">
            <el-row>
                <el-col :span="4">
                    <router-link to="/" class="logo" active-class="active">
                        HevnWeb
                    </router-link>
                </el-col>
                <!--  -->
                <el-col :span="20">
                    
                    <el-menu 
                    mode="horizontal" 
                    class="nav"
                    :default-active="$route.path" 
                    @select="hanleSelect" 
                    active-text-color="#139eff"
                    text-color="#ffffffe7" >
                        <!-- 搜索栏 -->

                        <!--  -->
                        <el-menu-item index="/home" style="font-size:17px" @click="doHome()">
                            <router-link to="/home" >
                                <!-- <i class="iconfont icon-home"></i> -->
                                首页
                            </router-link>
                        </el-menu-item>
                        <!-- <el-menu-item index="/github" style="font-size:17px">
                            <router-link to="/github" target="_blank">Github</router-link>
                        </el-menu-item> -->
                        <el-menu-item index="/about" style="font-size:17px">
                            <router-link to="/about">About</router-link>
                        </el-menu-item>
                        <el-menu-item index="/article" style="font-size:17px" v-if="isSignIn===1">
                            <router-link to="/article">我的博客</router-link>
                        </el-menu-item>
                        <el-menu-item index="/login" style="font-size:17px" v-if="isSignIn===0">
                            <router-link class="signBtn" to="/login" >登录</router-link>
                        </el-menu-item>
                        <el-menu-item index="/personal" v-else-if="isSignIn===1">
                            <router-link class="signBtn" to="/personal" >
                                <img class="nav_img" 
                                    style="width:30px;
                                    height: 30px;
                                    margin-left: 12px;
                                    border-radius: 50%;"
                                :src="userinfo.head_img==null?imgDefault:userinfo.head_img" alt="">
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
    import imgDefault from '../../assets/logo.jpg'

    export default {
        name:'Header',
        data() {
            return {
                userinfo: {},
                n:1,
                imgDefault: imgDefault,
                activeIndex:null,
            }
        },
        methods: {
            hanleSelect(index) {
                this.activeIndex = index
            },
            // 获取用户信息
            getUserInfo() {
                let isGet = this.$store.state.tokens.isSignIn
                if(isGet != 0){
                    this.$axios.get('/api/user/info')
                    .then((res) => {
                        let result = res.data
                        if (result.code === 0) {
                            this.userinfo = result.data
                        }
                    }).catch(e => {
                        console.log(e)
                    })
                }
                
            },
            // 获取全部博客列表
            getBlogList(){
                this.$axios.get('/api/article/allList')
                .then((res)=>{
                    this.blog_list = res.data.data;
                    
                }).catch((e)=>{
                    console.log(e);
                })
            },

            doHome(){
                this.$store.state.search.is_input = true;
            }
        },
        computed: {
            // 是否登录
            isSignIn() {
                return this.$store.state.tokens.isSignIn;
            }
        },

        created() {
            this.getUserInfo();
            // this.getBlogList();
        },
    }
</script>

<style lang="scss" scoped>

    header {
        // background: #2d2d2d;
        box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.5);
        .logo {
            line-height: 60px;
            font-size: 25px;
            font-weight: bold;
            color: #fff;
        }
        .nav {
            float: right;
            border-bottom: none;
            font-size: 25px;
            background-color: transparent;

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
        line-height: 60px;
    }

    // ::v-deep .el-menu-item.is-active {
    //     background-color: transparent !important;
    // }
    ::v-deep .el-menu-item:hover {
        background-image: linear-gradient(135deg,#30b8f5,#6bc30d) !important;
        background-clip:text !important;
        -webkit-background-clip:text !important;
        color: transparent !important;
        background-color: transparent !important;
        font-size: 22px !important;
	}

</style>