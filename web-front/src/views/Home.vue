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
            <el-carousel class="carousel" trigger="click" :interval="10000" height="15.625rem">
                <el-carousel-item class="carousel_item" v-for="item in imgList" :key="item.id">
                    <img class="img" :src="item.idView" alt="">
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
        <!-- 文章列表与右边栏 -->
        <div class="wrapper">
            <div class="blog_list">
                <!-- <blog-list :key="$store.state.search.input_num"></blog-list> -->
                <blog-list v-if="this.$store.state.search.is_input === true"></blog-list>
                <search-list v-else :key="$store.state.search.input_num"></search-list>
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
    import SearchList from "../components/SearchList.vue"
    import One from "@/components/One.vue";
    import Two from "@/components/Two.vue"
    import Three from "@/components/Three.vue"

    export default {
        name: "Home",
        components: {
            BlogList,
            SearchList,
            One,Two,Three
        },
        data() {
            return {
                drawer: false,
                imgList:[
                    {id:0,idView:require("@/assets/img/home-img.png")},
                    {id:1,idView:require("@/assets/img/8.png")},
                    {id:2,idView:require('../assets/img/4.png')},
                ]
            };
        },
        methods: {
            format(percentage) {
                return percentage === 100 ? '满' : `${percentage}%`;
            },
            // 触发更新事件
            // updateTable(){
            //     // 卸载
            //     this.tableShow = 0
            //     // 建议加上 nextTick 微任务 
            //     // 否则在同一事件内同时将tableShow设置false和true有可能导致组件渲染失败
            //     this.$nextTick(function(){
            //         // 加载
            //         this.tableShow= true
            //     })
            // },

            created(){
                // 
                // console.log('打印其他模块的state：',this.$store.state.test.ttt)
            },
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
        // width: 770+300+外边距20+外边距20+空隙20=1130;
        display: flex;
        justify-content: space-between;//左右分布在两边
    }
    .blog_list {
        width: 770px;
        // margin: 0 20px;
        margin-left: 20px;
        //再一次列表左边距20px
        // background: #f8f8fd;
        // -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
        // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
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
    .img{
        //图片自适应
        max-width: 100%;
        min-height: 100%;
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