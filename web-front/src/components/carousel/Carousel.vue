<template>
    <!-- 首页轮播图 -->
    <div class="wrapper_c">
        <header class="header">文章推荐</header>
        <main class="main">
            <el-carousel 
            class="carousel" 
            trigger="click" 
            :interval="900000" 
            height="330px" 
            @change="change"
            indicator-position="outside">
                <el-carousel-item class="carousel_item" v-for="item in blogList" :key="item.id">
                    <div class="box">
                        <div class="card" v-for="(res,i) in item" :key="i">
                            <img class="img" v-lazy="res.img" alt="">
                            <div class="title">
                                <router-link :to="'/detail/'+res.id">{{res.title}}</router-link>
                            </div>
                            <div class="viewed">阅读量：{{res.viewed}}</div>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </main>
        
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
                    this.blogList = this.blogList.slice(2,12)
                    this.doList()
                }
            }).catch(e=>{
                console.log(e)
            })
        },
        doList(){
            if(this.blogList && this.blogList.length>0){
                for(let i=0;i<=this.blogList.length-1;i++){
                    if(i%4 !== 0 || i === 0 ){
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
    // background-color: rgba(247, 247, 252, 0.95);
    // background-image: linear-gradient(rgba(242, 242, 242, 0.1),rgba(242, 242, 242, 0.3),rgba(230, 230, 234, 0.3),rgba(250, 250, 250, 0.4),rgba(250, 250, 250, 0.9));
    box-shadow: 0 3px 8px 8px rgba(0, 0, 0, 0.1);
    //磨砂玻璃
    backdrop-filter: blur(80px);
    display: flex;
    flex-direction: column;
}
.header{
    margin-top: 30px;
    color: rgba(250, 250, 250, 1);
    font-size: 21.5px;
    font-weight: 540;
    text-align: center;
    line-height: 60px;
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
    z-index:1;
}
.box{
    width: 1205px;
    display: flex;
    flex-direction: row;
    // background-color: pink;
}
.card{
    // width: 363px;
    width: 290px;
    height: 265px;
    margin-right: 15px;
    padding: 0;
    cursor: pointer;
    // border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
    background-color: rgba(250, 250, 250, 0.95);
}
.img{
    width: 290px;
    height: 195px;
    border-radius: 3px;
    // box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.06);
    opacity: 0.9;
    transition: all 0.5s;
}
.img:hover{
    transform: scale(1.03);
    box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.06);
    opacity: 1;
}
.title{
    color: rgba(0, 0, 0, 1);
    line-height: 19px;
    font-size: 16px;
    font-weight: 525;
    margin: 15px auto 10px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.title:hover{
    color: #30b7f599;
}
.viewed{
    margin-left: 10px;
    margin-bottom: 5px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
    // color: #a4a5a3;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}
::v-deep .el-carousel__indicators--outside{
    //切换小圆点的最外层
    // margin: 0 auto 10px auto;
    margin-top: -8px !important;
}
::v-deep .el-carousel__arrow{
    //两边切换按钮
    width: 80px;
    height: 95px;
    border: 1px solid transparent !important;
    border-radius: 0% !important;
    margin: auto -20px !important;
}
::v-deep .el-icon-arrow-left{
    // color: rgba(71, 86, 105, 1);
    color: rgba(250, 250, 250, 0.8);
    font-size: 37px;
}
::v-deep .el-icon-arrow-right{
    color: rgba(250, 250, 250, 0.8);
    font-size: 37px;
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
::v-deep .el-carousel__container{
    height: 310px !important;
    // margin-top: 10px !important;
}

</style>