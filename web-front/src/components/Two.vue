<template>
    <div class="container">
        <div class="two_header">
            <div class="header_left">社区推荐</div>
            <!-- <div class="header_right">更多</div> -->
        </div>
        <el-divider></el-divider>
        <!-- 走马灯 -->
        <div class="carousel_out">
            <el-carousel class="carousel" trigger="click" :interval="10000" height="150px">
                <el-carousel-item class="carousel_item" v-for="item in imgList" :key="item.id">
                    <img class="img" :src="item.idView" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <el-divider></el-divider>
        <!-- 主体文字 -->
        <div class="two_main" v-for="item in oneList" :key="item.id">
            {{item.id+1}} {{item.datas}}
        </div>
    </div>
  </template>
  
  <script>
  export default {
      name:'Two',
      components:{
          
      },
      data(){
          return{
                oneList:[
                    {id:0,datas:'活动一—————————'},
                    {id:1,datas:'活动二—————————'},
                    {id:2,datas:'活动三—————————'},
                    {id:3,datas:'活动四—————————'},
                ],
                imgList:[
                    {id:0,idView:require("@/assets/img/m1.webp")},
                    {id:1,idView:require("@/assets/img/m2.webp")},
                    {id:2,idView:require('../assets/img/m3.webp')},
                ]
          }
      }
  }
  </script>
  
  <style lang="scss" scoped>
    .container{
        //   height: 400px;
        min-height: 200px;
        background-color: #f7f7fc;
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
        .two_header{
            height: 20px;
            // margin-top: 20px;
            display: flex;
            justify-content:space-around;
            align-items: center;
            
            .header_left{
                // margin: auto;
                // cursor: pointer;
                padding-top: 20px;//防止外边距塌陷
            }
        //   .header_right{
        //       cursor: pointer;
        //       padding-top: 20px;
        //   }
        }
        .two_main{
            // margin-top: 20px;
            margin:20px auto 0 auto;
            display: flex;
            justify-content: center;
            cursor: pointer;
            &:last-child{
                padding-bottom: 30px;
            }
        }
    }
    //   走马灯
    .carousel_out{
        width: 270px;
        margin: 0 auto 0 auto;
        .carousel{
            // width: 270px;
            // height:150px;
        }
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
      
  
  </style>