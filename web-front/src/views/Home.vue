<template> 
  <div class="container">
        <!-- 回顶部 -->
        <back-top></back-top>
        <!-- 首页轮播图 -->
        <div :class= "`${unfold==0?'on':''}${unfold==1?'off':''}`">
            <Carousel class="carousel_"></Carousel>
        </div>
        <div class="icon_box">
            <div class="icons" @click="or()">
                <span :class="`${unfold==0?'ison':''}${unfold==1?'isoff':''}`">
                    <i class="el-icon-arrow-up"></i>
                </span>
            </div>
        </div>
        <!-- 音乐 -->
        <Music></Music>
        <!-- 文章列表与右边栏 -->
        <div class="wrapper">
            <div class="blog_list" :key="$store.state.search.page_num">
                <Nav class="nav_"></Nav>
                <router-view class="view" :key="this.$store.state.search.isKey"></router-view>
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
    import Carousel from '@/components/carousel/Carousel.vue'

    export default {
        name: "Home",
        components: {
            One,Two,Three,
            Nav,
            BackTop,
            Music,
            Carousel,
        },
        data() {
            return {
                val:'',
                unfold: null, //0为展开，1为收缩
            };
        },
        methods: {
            format(percentage) {
                return percentage === 100 ? '满' : `${percentage}%`;
            },
            or() {
                var unfold = this.unfold
                if (unfold === null) { //默认为开0
                    unfold = 0   
                }
                if (unfold == 0) {   //点击后改变展开样式
                    unfold = 1
                } else {
                    unfold = 0
                }
                //赋值
                this.unfold = unfold
                // console.log(this.unfold)
            },

        },
        
    }
</script>

<style lang="scss" scoped>
    // 全部文章列表
    .wrapper{
        width: 1130px;
        // width: 810+300+20=1130;
        display: flex;
        justify-content: space-between;//左右分布在两边
    }
    .carousel_{
        height: 485px;
        overflow: hidden;
    }
    .icon_box{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        .icons{
            width: 50px;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            // background-color: aquamarine;
        }
        .ison{
            animation: xia 1s linear forwards;
        }
        .isoff{
            animation: shang 1s linear forwards;
        }
        @keyframes shang {
            0%{
                transform: rotateZ(0);
            }
            100%{
                transform: rotateZ(180deg);
            }
        }
        @keyframes xia {
            0%{
                transform: rotateZ(180deg);
            }
            100%{
                transform: rotateZ(0);
            }
        }
    }
    .el-icon-arrow-up{
        font-size: 40px;
        font-weight: 600;
        color: rgba(128, 128, 128, 0.7);
        animation: icon 0.8s ease-in-out infinite alternate;
    }
    @keyframes icon {
        0%{
            transform: translateY(12px);
            opacity: 0.4;
        }
        100%{
            transform: translateY(-12px);
        }
    }
    .on {
        height: 485px;
        overflow: hidden;
        box-shadow: 0 2px 8px 8px rgba(0, 0, 0, 0.06);
        animation: unfold 1.2s ease;
    }
    .off {
        height: 0;
        overflow: hidden;
        animation: shrink 1.2s 1 ease-out;
    }
    @keyframes unfold {
        0% {
            height: 0;
            transform: translateY(-485px);
        }
        // 50% {
        //     height: 240px;
        //     transform: translateY(-245px);
        // }
        100% {
            height: 485px;
            transform: translateY(0);
        }
    }
    @keyframes shrink {
        0% {
            height: 485px;
            transform: translateY(0);
        }
        // 50%{
        //     height: 240px;
        //     transform: translateY(-245px);
        // }
        100% {
            height: 0;
            transform: translateY(-485px);
        }
    }

    //
    .blog_list {
        width: 810px;
        // margin-left: 20px;
    }
    .nav_{
        // background-color: rgba(247, 247, 252, 0.3);
        // box-shadow: 0 0 8px 8px #edefee;
        // border: 0.1px solid transparent;
        // border-radius: 10px 10px 0 0;
    }
    .view{
        background-color: rgba(247, 247, 252, 0.3);
        // box-shadow: 0 8px 8px 8px #edefee;
        box-shadow: 0 8px 8px 8px rgba(0, 0, 0, 0.06);
        border: 0.1px solid transparent;
        border-radius: 0 0 10px 10px;
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
            top:65px;
            z-index:2;
        }
    }


</style>