<template> 
  <div class="home">
        <!-- 首页图 -->
        <div class="home_img">
            <img src="../assets/img/home-img.png" alt="">
        </div>
        <!-- <el-divider></el-divider> -->
        <!-- 音乐 -->
        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
            <i class="el-icon-video-play"></i>
        </el-button>
        <el-drawer
            size
            title="音乐"
            :visible.sync="drawer"
            :with-header="false">
            <iframe class="music" frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="//music.163.com/outchain/player?type=0&id=2761182502&auto=1&height=430"></iframe>
        </el-drawer>
        <!-- 小导航栏 -->
        <div class="navs_out">
            <div class="navs">
                <span class="navs_blog">博客推荐</span>
                <span class="navs_font">前端</span>
                <span class="navs_back">后端</span>
                <span class="navs_android">Android</span>
                <span class="navs_others">其他</span>
            </div>
        </div>

        <!-- 博客列表 -->
        <div class="wrapper">
            <div class="blog_list">
                <blog-list></blog-list>
            </div>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src
    import BlogList from "@/components/BlogList.vue";

    export default {
        name: "Home",
        components: {
            BlogList
        },
        data() {
            return {
                drawer: false,
            };
        },
        methods: {
            format(percentage) {
                return percentage === 100 ? '满' : `${percentage}%`;
            }
        }
    }
</script>

<style lang="scss" scoped>

    
    .home_img{
        width: 100%;
        img{
            height: 15.625rem;
            // height: 250px;
        }
    }
    .el-button {
        position: fixed;
        left: -12px;
        top: 70%;
    }
    .el-icon-video-play {
        font-size: large;
    }

    .navs_out{
        width: 100%;
        display:flex; 
        justify-content: center; 
        // align-items: center; 
        margin: 10px 0;
        .navs{
            // width: 72.5rem;
            // height: 3.75rem;
            height: 60px;
            width: 1160px;
            // margin: 20px 0 0 0;
            
            // color: #9d9d9d;
            // background: #2d2d2d;
            box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.1);
            display:flex; 
            // justify-content: center; 
            align-items: center; 
            border-radius: 3%;
            .navs_blog{
                margin-left: 30px;
            }
            span{
                margin-right: 50px;
            }
        }
    }

    

    .blog_list {
        margin: 0 20px;
        padding: 20px;
        background: #f8f8fd;
        -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
    }
</style>