<template>
    <header class="container">
        <div class="wrapper">
            <el-row>
                <el-col :span="4">
                    <router-link to="/" class="logo" >HevnWeb</router-link>
                </el-col>
                <el-col :span="20">
                    <el-menu
                    class="nav"
                    mode="horizontal" 
                    :default-active="$route.path" 
                    @select="hanleSelect" 
                    active-text-color="#139eff"
                    text-color="black" >
                        <!-- 搜索栏 -->
                        <el-menu-item >
                            <el-input placeholder="请输入内容" v-model="keywards" size="medium" clearable @keyup.enter.native="search()">
                                <el-button slot="append" icon="el-icon-search" @click="search()"> </el-button>
                            </el-input>
                        </el-menu-item>
                        <!--  -->
                        <el-menu-item index="/home" style="font-size:17px">
                            <router-link to="/home" active-class='active'>
                                <!-- <i class="iconfont icon-home"></i> -->
                                首页
                            </router-link>
                        </el-menu-item>
                        <!--  -->
                        <el-submenu index="2">
                            <template slot="title">文章</template>
                            <el-menu-item class="iii" index="/article"  v-if="isSignIn===1">
                                <router-link to="/article" active-class='active'>我的博客</router-link>
                            </el-menu-item>
                            <el-menu-item class="iii" index="/article"  v-else @click="remind()">
                                <router-link to="#" active-class='active'>我的博客</router-link>
                            </el-menu-item>
                            <el-menu-item class="iii" index="3">
                                <router-link to="/file" active-class='active'>归档</router-link>
                            </el-menu-item>
                            <el-menu-item class="iii" index="4">
                                <router-link to="/class" active-class='active'>分类</router-link>
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item index="/words" style="font-size:17px">
                            <router-link to="/words" active-class="active">留言板</router-link>
                        </el-menu-item>
                        <el-menu-item index="/about" style="font-size:17px">
                            <router-link to="/about" active-class='active'>关于</router-link>
                        </el-menu-item>
                        <!-- <el-menu-item index="/article" style="font-size:17px" v-if="isSignIn===1">
                            <router-link to="/article" active-class='active'>我的博客</router-link>
                        </el-menu-item> -->
                        <el-menu-item index="/login" style="font-size:17px" v-if="isSignIn===0">
                            <router-link class="signBtn" to="/login" active-class='active'>登录</router-link>
                        </el-menu-item>
                        <el-menu-item index="/personal" v-else-if="isSignIn===1">
                            <router-link class="signBtn" to="/personal" active-class='active'>
                                <img class="nav_img" :src="userinfo.head_img==null?imgDefault:userinfo.head_img">
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
    import imgDefault from '@/assets/logo.jpg'

    export default {
        name:'CommonHeader',
        data() {
            return {
                userinfo: {},
                keywards: '',
                blogList:'',
                blog_list:[],
                imgDefault: imgDefault,
                isKey:1
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
            //获取搜索文章
            getSearchList(){
                this.$axios.get('/api/article/search',{
                    params:{ keywards : this.keywards },
                })
                .then(res => {
                    if(res.data.code === 0){
                        this.blogList = res.data.data;
                    }
                }).catch(e=>{
                    console.log(e)
                })
            },
            search(){
                if(this.keywards!==''){
                    this.$store.commit('search/KEY',++this.isKey);
                    this.$router.push({
                        name:'search',
                        params:{
                            keywards:this.keywards
                        },
                    })
                }
                
            },
            remind(){
                this.$confirm('此功能需登录解锁，是否登录?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                    type: 'success',
                    message: '跳转登录!',
                    });
                    this.$router.push({
                        name:'login'
                    })
                })
            },
            // enter(){
            //     if(event.KeyCode==13){
            //         this.search();
            //     }
            // },

        },
        computed: {
            // 是否登录
            isSignIn() {
                return this.$store.state.tokens.isSignIn;
            }
        },
        watch:{
            keywards(val){
                this.keywards=val
            }
        },
        created() {
            this.getUserInfo();
            this.getBlogList();
        },
    }
</script>

<style lang="scss" scoped>

    .container{
        //整个头部
        background: #fff;
        box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.5);
    }
    .wrapper {
        //内容区
        .logo {
            line-height: 60px;
            font-size: 26px;
            font-weight: bold;
            background: url('https://images6.alphacoders.com/110/thumbbig-1103843.webp');
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            animation: logo 6s infinite alternate linear;
        }
        .nav {
            float: right;
            border-bottom: none;
            font-size: 25px;
            // background-color: #6bc30d;
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
    .nav_img{
        width: 30px;
        height: 30px;
        margin-left: 12px;
        border-radius: 50%;
    }

    .signBtn {
        // background: #3b99fc !important;
        line-height: 60px;
    }
    // 搜索栏
    .el-input{
        width: 300px;
        margin-right: 34px;
    }
    ::v-deep .el-input__inner{
        border-radius: 20px 0 0 20px;
    }
    ::v-deep .el-input-group__append {
        border-radius: 0 20px 20px 0;
    }
    //
    ::v-deep .el-menu-item:hover {
        background-image: linear-gradient(135deg,#6bc30d,#30b8f5) !important;
        background-clip:text !important;
        -webkit-background-clip:text !important;
        color: transparent !important;
        background-color: transparent !important;
        // font-size: 20px !important;
        animation:change 0.4s linear forwards !important;
	}
    ::v-deep .el-submenu__title{//文章
        font-size: 17px;
        padding-top: 1.2px;
    }
    ::v-deep .el-submenu__title:hover{//文章
        background-image: linear-gradient(135deg,#6bc30d,#30b8f5) !important;
        background-clip:text !important;
        -webkit-background-clip:text !important;
        color: transparent !important;
        background-color: transparent !important;
        animation:change 0.4s linear forwards !important;
        // background-color: rgba(234, 234, 234, 0.8) !important;
    }
    .iii{
        height: 40px;
        font-size: 16px;
        background-color: rgba(234, 234, 234, 0.9) !important;
        &:first-child{
            margin-top: -5px;
            padding-top: 5px;
        }
        &:nth-child(2){
            padding-top:3px
        }
        &:last-child{
            margin-bottom: -5px;
            padding-bottom: 5px;
        }
        a:hover{
            background-image: linear-gradient(135deg,#6bc30d,#30b8f5) !important;
            background-clip:text !important;
            -webkit-background-clip:text !important;
            color: transparent !important;
            background-color: transparent !important;
            animation:change 0.4s linear forwards !important;
        }
    }
    ::v-deep .el-menu--popup{
        background-color: rgba(234, 234, 234, 0.8) !important;
        padding: 0;
    }
    
    @keyframes logo{
        0%{
            background-position: 0%;
        }
        100%{
            background-position: 100%;
        }
    }
    @keyframes change{
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(1.01);

        }
        100%{
            transform: scale(1.08);

        }
    }

    // 修改链接高亮显示
    // ::v-deep .router-link-active{
    //     // background: skyblue;
    //     color: yellow !important;
    // }
</style>