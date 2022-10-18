<template>
    <div class="container">
        <div class="two_header">
            <div class="header_left">精彩内容</div>
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
        <div class="main_out">
            <div class="two_main" v-for="item in viewList" :key="item.id">
                <button class="button" :style="{backgroundColor:item.color}">{{item.newID+1}}</button>
                <span class="text">{{item.title}}</span>
            </div>
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
                viewList:[],
                oneList:[
                    {id:0,title:'空',color:'#e04a1d'},
                    {id:1,datas:'',color:'#f88217'},
                    {id:2,datas:'',color:'#ffb916'},
                ],
                imgList:[
                    {id:0,idView:require("@/assets/img/m1.webp")},
                    {id:1,idView:require("@/assets/img/m2.webp")},
                    {id:2,idView:require('../assets/img/m3.webp')},
                ]
          }
      },
      methods:{
        //获取按热度排序的文章
        getViewed(){
            this.$axios.get('/api/article/getViewed')
            .then((res)=>{
                if(res.data.data==[]){
                    // this.viewList=this.oneList;
                    this.$set(this.viewList,'title',this.oneList[0].title);
                }else{
                    this.viewList=res.data.data;
                    this.change();
                }
                
                
            }).catch((e)=>{
                console.log(e)
            })
        },
        //把颜色和newid添加进去
        change(){
            this.viewList=this.viewList.slice(0,3);
            for(let i=0;i<this.viewList.length;i++){
                this.$set(this.viewList[i],'color',this.oneList[i].color);
                this.$set(this.viewList[i],'newID',this.oneList[i].id);
            }
        },

      },
      created(){
        this.getViewed();
        
      },
  }
  </script>
  
  <style lang="scss" scoped>
    .container{
        //   height: 400px;
        min-height: 200px;
        background-color: #f7f7fc;
        // -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) outset;
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
        .main_out{
            display: flex;
            flex-direction: column;
            
            .two_main{
                margin:0 20px 20px 20px;
                cursor: pointer;
                display: flex;
                &:last-child{
                    padding-bottom: 10px;
                }
                .button{
                    width: 25px;
                    height: 25px;
                    margin-right: 5px;
                    outline:none;//点击不显示边框
                    border: 2px solid transparent;
                    border-color: transparent;//边框透明
                    border-radius: 20%;

                }
                .text{
                    flex:1;
                    //省略号
                    line-height: 20px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
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
            z-index:1;//1<2
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