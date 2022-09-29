<template> 
  <div class="home">
        <!-- 回顶部 -->
        <el-backtop :visibility-height="60">
            <i class="el-icon-caret-top"></i>
        </el-backtop>
        <!-- 首页轮播图 -->
        <!-- <div class="home_img">
            <img src="../assets/img/home-img.png" alt="">
        </div> -->
        <div class="carousel_out">
            <el-carousel class="carousel" trigger="click" :interval="5000" height="15.625rem">
                <el-carousel-item class="carousel_item" v-for="item in imgList" :key="item.id">
                    <img :src="item.idView" alt="" class="small">
                </el-carousel-item>
            </el-carousel>
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
            <iframe 
                class="music" 
                frameborder="no" 
                border="0" 
                marginwidth="0" 
                marginheight="0" 
                width=330 
                height=450 
                src="//music.163.com/outchain/player?type=0&id=2761182502&auto=1&height=430">
            </iframe>
        </el-drawer>
        <!-- 博客列表与右边栏 -->
        <div class="wrapper">
            <div class="blog_list">
                <blog-list></blog-list>
            </div>
            <div class="list_right">
                <one class="home_one"></one>
                <two class="home_two"></two>
                <three class="home_three"></three>
            </div>
        </div>
        <!-- 小导航栏 -->
        <!-- <div class="navs_out">
            <div class="navs">
                <span class="navs_blog">博客推荐</span>
                <span class="navs_font">前端</span>
                <span class="navs_back">后端</span>
                <span class="navs_android">Android</span>
                <span class="navs_others">其他</span>
            </div>
        </div> -->

    </div>
</template>

<script>
    // @ is an alias to /src
    import BlogList from "@/components/BlogList.vue";
    import One from "@/components/One.vue";
    import Two from "@/components/Two.vue"
    import Three from "@/components/Three.vue"

    export default {
        name: "Home",
        components: {
            BlogList,One,Two,Three
        },
        data() {
            return {
                drawer: false,
                imgList:[
                    {id:0,idView:require("@/assets/img/home-img.png")},
                    {id:1,idView:require("@/assets/img/home-img.png")},
                    {id:2,idView:require('../assets/img/4.png')},
                ]
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


    // .home_img{
    //     width: 100%;
    //     img{
    //         height: 15.625rem;
    //         // height: 250px;
    //     }
    // }
    // 音乐
    .el-button {
        position: fixed;
        left: -12px;
        top: 70%;
    }
    .el-icon-video-play {
        font-size: large;
    }

    // 全部文章列表
    .wrapper{
        width: 1130px;
        // max-width: 1000;//800+300+30
        display: flex;
        justify-content: space-between;
    }
    .blog_list {
        width: 800px;
        margin: 0 20px;
        padding: 20px;
        background: #f8f8fd;
        -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
    }
    .list_right{
        width: 300px;
        // height: 1200px;
        // min-height: calc(100vh - 200px);
        // background: #f8f8fd;
        // -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
        // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
        .home_one{
            margin-bottom: 20px;
        }
        .home_two{
            margin-bottom: 20px;
        }
        .home_three{
            margin-bottom: 20px;
        }
    }

    // 轮播图
    .carousel_out{
        margin-bottom: 20px;
    }
    .carousel_item{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    // 
    // 小导航栏
    // .navs_out{
    //     width: 100%;
    //     display:flex; 
    //     justify-content: center; 
    //     // align-items: center; 
    //     margin: 10px 0;
    //     .navs{
    //         height: 60px;
    //         width: 1160px;
    //         // color: #9d9d9d;
    //         // background: #2d2d2d;
    //         box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.1);
    //         display:flex; 
    //         // justify-content: center; 
    //         align-items: center; 
    //         border-radius: 3%;
    //         .navs_blog{
    //             margin-left: 30px;
    //         }
    //         span{
    //             margin-right: 50px;
    //         }
    //     }
    // }

</style>