<template>
    <div class="wrappers">
        <div class="_wrappers">
            <div  class="front">
                <router-link to="/" class="logo">HevnWeb</router-link>
                <div class="search">
                    <el-input placeholder="请输入内容" v-model="keywards" size="medium" clearable @keyup.enter.native="search()">
                        <el-button slot="append" icon="el-icon-search" v-debounce="search"> </el-button>
                    </el-input>
                </div>
            </div>
            <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            @select="hanleSelect"
            background-color="rgba(250, 250, 250, 1)"
            text-color="rgba(0, 0, 0, 0.9)"
            active-text-color="#30b8f5">
                <el-menu-item index="/home"><router-link to="/home" class="home router">首页</router-link></el-menu-item>
                <el-submenu index="2" class="the_sub">
                    <template slot="title">文章</template>
                    <el-menu-item index="/article" v-if="isSignIn===1"><router-link to="/article" class="_router">我的文章</router-link></el-menu-item>
                    <el-menu-item index="/article" v-else @click="remind()"><router-link to="" class="_router">我的文章</router-link></el-menu-item>
                    <el-menu-item index="/file"><router-link to="/file" class="_router">归档</router-link></el-menu-item>
                    <el-menu-item index="/class"><router-link to="/class" class="_router">分类</router-link></el-menu-item>
                    <!-- <el-submenu index="2-4">
                        <template slot="title">其他</template>
                        <el-menu-item index="2-4-1">1</el-menu-item>
                    </el-submenu> -->
                </el-submenu>
                <el-menu-item index="/words"><router-link to="/words" class="words router" active-class="active">留言板</router-link></el-menu-item>
                <el-menu-item index="/about"><router-link to="/about" class="about router" active-class="active">关于</router-link></el-menu-item>
                <el-menu-item index="/login" v-if="isSignIn===0">
                    <router-link to="/login" class="about router">登录</router-link>
                </el-menu-item>
                <!--  -->
                <el-submenu index="5" class="last_sub" v-else-if="isSignIn===1">
                    <template slot="title">
                        <img class="nav_img" :src="userinfo.head_img==null?imgDefault:userinfo.head_img">
                        {{userinfo.nickname}}
                    </template>
                    <el-menu-item index="/personal"><router-link to="/personal" class="_router">个人中心</router-link></el-menu-item>
                    <el-menu-item index="5-2"><router-link to="/home" class="_router">首页</router-link></el-menu-item>
                    <el-menu-item index="/article/edit"><router-link to="/article/edit" class="_router">发布文章</router-link></el-menu-item>
                    <el-divider></el-divider>
                    <el-menu-item index="5-4" @click="outLogin()"><span class="_router">退出登录</span></el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>

<script>
    import imgDefault from '@/assets/logo.jpg'
    import Cookie from 'js-cookie'
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
            outLogin(){
                Cookie.remove('token')
                this.$store.commit('tokens/SETTOKEN', '')
                this.$store.commit('tokens/ISSIGNIN', 0)
                this.$router.push({
                    name: 'home'
                })
            },

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
    .wrappers{
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        background-color: rgba(250, 250, 250, 1);
        box-shadow: 0 2px 4px 4px rgba(0, 0, 0, 0.05);
    }
    ._wrappers{
        width: 1200px;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .front{
        display: flex;
        align-items: center;
    }
    //logo
    .logo {
        display: inline-block;
        height: 60px;
        line-height: 60px;
        font-size: 25px;
        font-weight: bold;
        background: url('https://images6.alphacoders.com/110/thumbbig-1103843.webp');
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        animation: logo 7s infinite alternate linear;
    }
    // 搜索栏
    .search{
        display: inline-block;
    }
    .el-input{
        width: 300px;
        height: 35px;
        margin-left: 300px;
    }
    ::v-deep .el-input__inner{
        border-radius: 20px 0 0 20px;
    }
    ::v-deep .el-input-group__append {
        border-radius: 0 20px 20px 0;
        background-color: rgba(0, 0, 0, 0.04);
    }
    ::v-deep .el-input-group__append:hover{
        color: rgba(0, 0, 255, 0.9);
    }
    //
    // ::v-deep .el-menu--popup{
    //     min-width: 100px !important;
    // }
    .el-menu.el-menu--horizontal{//清除溢出
        border: 0;
    }
    ::v-deep .el-menu-item {
        //设置右边所有项
        padding: 0;
    }
    .router{
        display: inline-block;
        font-size: 17px;
        text-align: center;
        // padding: auto 20px;
    }
    ._router{
        //二级导航栏
        display: inline-block;
        width: 100%;
        font-size: 14px;
    }
    .the_sub{
        width: 85px;
    }
    .home,.about{
        width: 74px;
    }
    .words{
        width: 85px;
    }
     ::v-deep .el-submenu__title{
        //下拉框标题 文章
        font-size: 17px;
        padding-top: 1.2px;
    }
    //用户
    .nav_img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    // .li:hover{
    //     color: rgba(107, 195, 13, 1);
    //     background-color: rgba(0, 0, 0, 0.1);
    // }
    .last_sub{
        width: 100px;
        ::v-deep .el-submenu__icon-arrow{
            //隐藏用户箭头
            visibility: hidden;
            width: 0;
        }
    }
    .el-divider{
        margin: 5px auto;
    }


    @keyframes logo{
        0%{
            background-position: 0%;
        }
        100%{
            background-position: 100%;
        }
    }
    @keyframes big{
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

</style>