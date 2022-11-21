<template>
    <div class="container">
        <!-- 小导航栏 -->
        <div class="navs">
            <span class="navs_" style="color:#139eff">综合排序</span>
            <span class="navs_">热门</span>
            <span class="navs_">最新</span>
        </div>
        <!-- 博客列表 -->
        <div class="box">
            <!--  -->
            <div class="card" v-for="item in blogList" :key="item.id">
                <!-- 左侧图片 -->
                <div class="img">
                    <img v-if="item.img===null" src="@/assets/img/b1.jpg" alt="">
                    <img v-else :src="item.img" alt="" >
                </div>
                <!-- 右侧内容 -->
                <div class="text">
                    <!--  -->
                    <header class="header">
                        <router-link :to="'/detail/'+item.id">
                            <p class="title">{{item.title}}</p>
                        </router-link>
                    </header>
                    <!-- 内容 -->
                    <div class="main">{{item.content}}</div>
                    <!--  -->
                    <footer class="footer">
                        <span class="_label">
                            <span class="label" v-for="res in item.label.split(',')" :key="res">
                                <el-tag type="warning" size="small" effect="dark">{{res}}</el-tag>
                            </span>
                        </span>
                        <span class="time">
                            <span>
                                <i class="el-icon-view" style="color:#7bb9ff;font-size: 16px;"></i>
                                {{item.viewed}}
                            </span>
                            <span :style="{margin:'auto 20px auto 30px'}">
                                <i class="iconfont icon-date" :style="{marginRight:'3px'}"></i>
                                {{item.create_time.split(' ')[0]}}
                            </span>
                        </span>
                    </footer>
                </div>
                
            </div>
        </div>
        <!-- 分页 -->
        <div class="page">
            <el-pagination
            layout="total, sizes, prev, pager, next, jumper"
            :total="pageList.length"
            :page-size="pageSize"
            :current-page="currentPage"
            @size-change="handleSizeChange" 
            @current-change="handleCurrentChange"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import {pages} from '@/mixin/mixin.js'
    export default {
        name:'SearchList',
        components:{
            
        },
        mixins:[pages],
        data() {
            return {
                searchList:[],
                keywards:'',
                blogList:[],
            }
        },
        methods:{
            getKeywards(){
                
            },
            //先获取全部文章
            getAllList () {
                this.$axios.get('/api/article/allList')
                    .then(res => {
                        if(res.data.code === 0){
                            this.blogList = res.data.data;
                        }
                    }).catch(e=>{
                        console.log(e)
                    })
            },
            getSearchList(){
                this.$axios.get('/api/article/search',{
                    params:{ keywards : this.keywards },
                })
                .then(res => {
                    if(res.data.code === 0){
                        this.blogList = res.data.data;
                        this.pageList = this.blogList
                        // 分页截取
                        this.blogList = this.blogList.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
                    }
                }).catch(e=>{
                    console.log(e)
                })
            }
            
        },
        created() {
            this.keywards=this.$route.params.keywards
            this.getSearchList();
            // this.$forceUpdate()
        },

    }
</script>

<style lang="scss" scoped>

    .container{
        width: 100%;
        min-height: 100vh;
        // background: #f8f8fd;
        // -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) outset;
        // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) outset;
    }
    //
    .navs{
        height: 50px;
        border-bottom: 1px solid #e6e6ea;
        display: flex;
        align-items: center;
        justify-content: left;
    }
    .navs_{
        margin-left: 30px;
    }
    // 博客列表
    .box{
        width: 820px;
        display:flex;
        flex-direction: column;
    }
    .card {
        display: flex;
        justify-content: space-between;
        margin:20px 5px 0 5px;
        padding: 15px;
        border-bottom: 2px solid #e6e6ea;
    }
    //左侧图片
    .img{
        width: 230px;
        height: 150px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    // 右侧内容
    .text{
        flex:1;
        width: 100%;
        height: 150px;
        margin-left: 12px;
    }
    .header{
        
    }
    .title {
        height: 20px;
        // color: #0085a1;
        color: black;
        font-size: 20px;
        font-weight: 600;
        // 省略号后面内容
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .title:hover{
        text-decoration:underline;
    }
    .main{
        height: 40px;
        color: #808080;
        margin: 20px auto 45px auto;
        // 省略号后面内容
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        cursor: pointer;
    }
    .footer{
        height: 26px;
        display: flex;
        justify-content: space-between;
    }
    .label{
        margin-right: 10px;
        margin-top: 20px;
        opacity: 0.7;
        cursor: pointer;
    }
    .time {
        font-style: italic;
        font-family: Lora, "Times New Roman", serif;
        color: #808080bf;
    }
    
//
::v-deep .card:hover{
    animation:get 0.2s linear forwards !important;
    // transition: all 0.01s 1;
}

@keyframes get{
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.01);
        transform: translateY(-2px);
        // box-shadow: 0 0 8px 8px #edefee;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    }
    100%{
        transform: scale(1.02);
        transform: translateY(-5px);
        // box-shadow: 0 0 8px 8px #edefee;
        box-shadow: 0 4px 8px 8px rgba(0, 0, 0, 0.06);
    }
}

</style>