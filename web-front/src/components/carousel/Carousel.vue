<template>
    <!-- 首页轮播图 -->
    <div class="wrapper_c">
        <header class="header">博客推荐</header>
        <div class="main">
            <el-carousel 
            class="carousel" 
            trigger="click" 
            :interval="90000" 
            height="330px" 
            @change="change"
            indicator-position="outside">
                <el-carousel-item class="carousel_item" v-for="item in blogList" :key="item.id">
                    <div class="box">
                        <div class="card" v-for="(res,i) in item" :key="i">
                            <img class="img" :src="res.img" alt="">
                            <div class="title">{{res.title}}</div>
                            <div class="viewed">阅读量：{{res.viewed}}</div>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            current:0,
            blogList:[],
            newDataList:[],
        }
    },
    methods:{
        change(){
            // console.log('当前页',val)
        },
        getBlogList(){
            this.$axios.get('/api/article/allList')
            .then(res => {
                if(res.data.code === 0){
                    this.blogList = res.data.data;
                    this.blogList = this.blogList.slice(1,8)
                    this.doList()
                }
            }).catch(e=>{
                console.log(e)
            })
        },
        doList(){
            if(this.blogList && this.blogList.length>0){
                for(let i=0;i<=this.blogList.length-1;i++){
                    if(i%3 !== 0 || i === 0 ){
                        if(!this.newDataList[this.current]){
                            this.newDataList.push([this.blogList[i]])
                        }else{
                            this.newDataList[this.current].push(this.blogList[i])
                        }
                    }else{
                        this.current++
                        this.newDataList.push([this.blogList[i]])
                    }
                }
            }
            this.blogList = [...this.newDataList]
        }
    },
    created(){
        this.getBlogList();
    }
}
</script>

<style lang="scss" scoped>
// 轮播图
.wrapper_c{
    width: 100%;
    // background-color: aquamarine;
    background-image: linear-gradient(rgba(242, 242, 242, 0.1),rgba(242, 242, 242, 0.3),rgba(230, 230, 234, 0.3),rgba(250, 250, 250, 0.4),rgba(250, 250, 250, 0.9));
    // box-shadow: 0 8px 8px #edefee;
    box-shadow: 0 2px 8px 8px rgba(0, 0, 0, 0.06);
    // margin-bottom: 60px;
    display: flex;
    flex-direction: column;
}
.header{
    margin-top: 30px;
    font-size: 22px;
    font-weight: 540;
    text-align: center;
    line-height: 90px;
    letter-spacing:5px;
    // background-image: linear-gradient(269deg, #30b8f5 0%, #30b8f5 45%, #6bc30d 60%,#6bc30d 100%);
    // background-clip:text;
    // -webkit-background-clip:text;
    // color: transparent;
}
.main{
    display: flex;
    justify-content: center;
}
.carousel{
    width: 100%;
}
.carousel_item{
    //走马灯页面
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:1;//1<2
}
.box{
    width: 1130px;
    display: flex;
    flex-direction: row;
    // background-color: pink;
}
.card{
    width: 363.5px;
    margin-right: 30px;
    cursor: pointer;
}
.img{
    // width: 267.5px;
    // height: 180px;
    width: 357px;
    height: 235px;
    transition: all 0.5s;
}
.img:hover{
    transform: scale(1.03);
}
.title{
    margin: 20px auto 10px 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.viewed{
    margin-left: 5px;
    font-size: 15px;
    color: #a4a5a3;
}
// .img{
//     //图片自适应
//     max-width: 100%;
//     min-height: 100%;
// }
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
    // background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
    // background-color: #d3dce6;
}
::v-deep .el-carousel__arrow{
    //切换按钮
    width: 80px;
    height: 95px;
    border: 1px solid transparent !important;
    border-radius: 0% !important;
    margin-left: -20px;
    margin-right: -20px;
}
::v-deep .el-icon-arrow-left{
    color: #475669;
    font-size: 40px;
}
::v-deep .el-icon-arrow-right{
    color: #475669;
    font-size: 40px;
}
::v-deep .el-carousel__indicator.is-active button{
    width: 10px;
    height: 10px;
    border: 1px solid transparent;
    border-radius: 100% !important;
}
::v-deep .el-carousel__indicators--outside button{
    width: 10px;
    height: 10px;
    border: 1px solid transparent;
    border-radius: 100% !important;
    margin-right: 10px;
    color: #e1e1e1 !important;
}

</style>