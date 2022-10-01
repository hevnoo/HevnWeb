<template>
    <header>
        <div class="wrapper">
            <el-row>
                <el-col :span="4">
                    <router-link to="/" class="logo" style="color: rgb(59, 76, 113);font-weight:bold;">
                        HevnWeb
                    </router-link>
                </el-col>
                <!--  -->
                <el-col :span="20">
                    <el-menu mode="horizontal" 
                        class="nav"
                        :default-active="$route.path" 
                        @select="hanleSelect" 
                        active-text-color="#139eff"
                        text-color="black"
                        >
                        <!-- background-color="#2d2d2d"
                        text-color="#9d9d9d"
                        active-text-color="#fff"
                        -->
                        <!-- 搜索栏 -->
                        <el-menu-item class="input_out">
                                <el-input class="input" placeholder="请输入内容" v-model="keyWard" size="medium">
                                    <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
                                </el-input>
                        </el-menu-item>
                        <!--  -->
                        <el-menu-item index="/" style="font-size:17px">
                            <router-link to="/" active-class='active'><i class="iconfont icon-home"></i>首页</router-link>
                        </el-menu-item>
                        <el-menu-item index="/loading" style="font-size:17px">
                            <!-- <router-link to="https://github.com/hevnoo/myblog">Github</router-link> -->
                            <!-- <a href="https://github.com/hevnoo/HevnWeb" target="_blank" >Github</a> -->
                            <router-link to="/loading" active-class="active" target="_blank">Github</router-link>
                        </el-menu-item>
                        <el-menu-item index="/about" style="font-size:17px">
                            <router-link to="/about" active-class='active'>About</router-link>
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
                userinfo: {},
                keyWard: '',
                blog_list:[],
                filter_list:[],
                n:1,
            }
        },
        methods: {
            hanleSelect(index) {
                this.activeIndex = index
            },
            // 
            getUserInfo() {
                this.$axios.get('/api/user/info')
                .then((res) => {
                    let result = res.data
                    if (result.code === 0) {
                        this.userinfo = result.data
                    }
                }).catch(e => {
                    console.log(e)
                })
            },
            // 获取全部博客列表
            getBlogList(){
                this.$axios.get('/api/article/allList')
                .then((res)=>{
                    // console.log(res);
                    this.blog_list = res.data.data;
                    // console.log(this.blog_list);
                    
                }).catch((e)=>{
                    console.log(e);
                })
            },
            search(){
                // 搜索栏
                this.getBlogList();
                // this.n = !this.n;
                if(this.keyWard !== ''){
                    this.$store.dispatch('search/dosearch',this.filter_list);
                    this.n = !this.n;
                    this.$store.commit('search/KEYNUM',this.n)
                }

            }
        },
        computed: {
            isSignIn() {
                return this.$store.state.isSignIn
            }
        },
        watch:{
            // 监听input并按关键字筛选immediate:true;
            // keyWard(val){
            //     this.filter_list = this.blog_list.filter((p)=>{
            //         return p.title.indexOf(val) !== -1 || p.content.indexOf(val) !== -1;
            //     })
            keyWard:{
                immediate:true,
                handler(val){
                    this.filter_list = this.blog_list.filter((p)=>{
                        return p.title.indexOf(val) !== -1 || p.content.indexOf(val) !== -1;
                    })
                }
            }
        },
        created() {
            this.getUserInfo();
            this.getBlogList();
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
            .router-link-active{
                background: skyblue;
                font-size: 40px;
            }
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
    // 修改链接高亮显示
    // .router-link-active{
    //     background: skyblue;
    //     font-size: 40px;
    //     color: yellow;
    // }

    .signBtn {
        // background: #3b99fc !important;
        // color: #fff !important;
        line-height: 60px;
    }
    // 搜索栏
    .input_out{
        margin-right: 30px;
    }

</style>