<template>
    <div class="container">
        <div class="wrapper">
            <header class="header">
                <div class="logo">
                    <span class="title">归档</span>
                    <span class="star">✦</span>
                </div>
            </header>
            <div class="main">
                <div class="top">
                    <span>共计{{pageList.length}}篇文章</span>
                </div>
                <div class="content">
                    <div class="dates">
                        {{dates[0]}}
                    </div>
                    <div class="text" v-for="item in blogList" :key="item.id">
                        <span class="time">{{item.create_time.split(' ')[0].slice(5,10)}}</span>
                        <router-link :to="'/detail/'+item.id">
                            <span class="ii">{{item.title}}</span>
                        </router-link>
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
        </div>
        
    </div>
</template>

<script>
    import {pages1} from '@/mixin/mixin.js'
    export default {
        name: 'File',
        components:{
            
        },
        mixins:[pages1],
        data(){
            return{
                blogList:[],
                list:[],
                dates:[],
            }
        },
        methods:{
            // 获取文章
            getBlogList () {
                this.$axios.get('/api/article/allList')
                .then(res => {
                    if(res.data.code === 0){
                        this.blogList = res.data.data;
                        //去重时间
                        this.dates = res.data.data;
                        this.dates = this.dates.map((m)=>{
                            return m.create_time.split(' ')[0].split('-')[0]
                        });
                        this.dates = Array.from(new Set(this.dates))
                        
                        // 分页截取
                        this.pageList = this.blogList
                        this.blogList = this.blogList.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
                    }
                }).catch(e=>{
                    console.log(e)
                })
            },
        },
        created(){
            this.getBlogList();
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        min-height: 100vh;
        display: flex;
        justify-content: center;
    }
    .wrapper{
        width: 1110px;
        display: flex;
        flex-direction: column;
    }
    .header{
        width: 1110px;
        height: 350px;
        // background-color: aquamarine;
        display: flex;
        justify-content: center;
        align-items: center;
        .logo{
            font-size: 30px;
            font-weight: 600;
            color: rgba(250,250,250,0.9);
            .title{
                
            }
            .star{
                margin-left: 10px;
            }
        }
    }
    .main{
        width: 1110px;
        min-height: 600px;
        background-color: rgba(247, 247, 252, 0.95);
        border-radius: 10px;
    }
    .top{
        width: 100%;
        height: 130px;
        font-size: 27px;
        font-weight: 520;
        color: rgba(0,0,0,0.9);
        // border-bottom: 2px solid rgba(0,0,0,0.9);
        display: flex;
        // justify-content: center;
        align-items: center;
        span{
            margin-left: 100px;
        }
    }
    .content{
        margin-left: 100px;
    }
    .dates{
        font-size: 25px;
        font-weight: 500;
        color: rgba(0,0,0,0.9);
        margin: 0 auto 30px auto ;
    }
    .text{
        // background-color: aquamarine;
        width: 850px;
        height: 50px;
        font-size: 18px;
        font-weight: 500;
        color: rgba(0,0,0,0.7);
        margin: 10px auto 12px 20px;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        .time{
            margin: auto 35px auto 10px;
        }
        .ii{
            width: 600px;
            // 省略号后面内容
            // line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
    }
    .text:hover{
        background-color: rgba(0,0,0,0.03);
        color: #30b8f5;
    }
    .star{
        animation: star 1s linear 0s backwards infinite;
    }
    @keyframes star {
        0%,40%{
            opacity: 0;
        }
        50%{
            opacity: 0.7;
        }
        100%{
            opacity: 1;
        }
    }

</style>