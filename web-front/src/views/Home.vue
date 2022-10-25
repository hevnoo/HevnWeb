<template> 
  <div class="home">
        <!-- 回顶部 -->
        <back-top></back-top>
        <!-- 首页轮播图 -->
        <div class="carousel_out">
            <el-carousel class="carousel" trigger="click" :interval="10000" height="15.625rem">
                <el-carousel-item class="carousel_item" v-for="item in imgList" :key="item.id">
                    <img class="img" :src="item.idView" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 音乐 -->
        <Music></Music>
        <!-- 文章列表与右边栏 -->
        <div class="wrapper">
            <div class="blog_list" :key="$store.state.search.page_num">
                <Nav class="nav_"></Nav>
                <router-view :key="this.$store.state.search.isKey"></router-view>
                <!-- <router-view v-if="this.$store.state.search.is_input === true"></router-view>
                <search-list v-else :key="$store.state.search.input_num"></search-list> -->
            </div>
            <div class="list_right">
                <one class="home_one"></one>
                <two class="home_two"></two>
                <three class="home_three"></three>
            </div>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src
    import Nav from '@/components/Nav.vue'
    import One from "@/components/side/One.vue"
    import Two from "@/components/side/Two.vue"
    import Three from "@/components/side/Three.vue"
    import BackTop from '@/components/others/BackTop.vue'
    import Music from '@/components/others/Music.vue'

    export default {
        name: "Home",
        components: {
            One,Two,Three,
            Nav,
            BackTop,
            Music,
            
        },
        data() {
            return {

                imgList:[
                    {id:0,idView:require("@/assets/img/home-img.png")},
                    {id:1,idView:require("@/assets/img/8.png")},
                    {id:2,idView:require('@/assets/img/4.png')},
                ],
                val:''
            };
        },
        methods: {
            format(percentage) {
                return percentage === 100 ? '满' : `${percentage}%`;
            },
            
            created(){
 
            },
        }
    }
</script>

<style lang="scss" scoped>
    // 全部文章列表
    .wrapper{
        width: 1130px;
        // width: 790+300+外边距20+空隙20=1130;
        display: flex;
        justify-content: space-between;//左右分布在两边
    }
    .blog_list {
        width: 790px;
        // margin: 0 20px;
        margin-left: 20px;

    }
   
    .list_right{
        width: 300px;
        // height: 1200px;
        // min-height: calc(100vh - 200px);
        // position:sticky;
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
            position:sticky;
            top:70px;
            z-index:2;
        }
    }

    // 轮播图
    .carousel_out{
        // margin-top: 60px;
        margin-bottom: 20px;
    }
    .carousel_item{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index:1;//1<2
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


</style>