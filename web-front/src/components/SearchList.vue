<!-- 这是搜索弹出的文章列表组件，类似于BlogList组件 -->
<template>
    <div class="container">
        <!-- 小导航栏 -->
        <div class="navs">
            <span class="navs_blog" style="color:#139eff">综合排序</span>
            <span class="navs_font">热门</span>
            <span class="navs_back">最新</span>
        </div>
        <el-divider class="divider"></el-divider>
        <!-- 博客列表 -->
        <div class="card" v-for="item in searchList" :key="item.id">
            <router-link :to="'/detail/'+item.id">
                <p class="title">{{item.title}}</p>
            </router-link>
            <!-- <p class="content" v-text="item.content.slice(0,70)"></p> -->
            <p class="content">{{item.content}}</p>
            <p class="time">{{item.create_time}}</p>
            <el-divider></el-divider>
        </div>
    </div>
</template>

<script>
    export default {
        name:'SearchList',
        data() {
            return {
                List:[],
                searchList:[],

                // arrList:[],
            }
        },
        methods:{
            // 获取处理后的文章列表
            getBlogList () {
                // this.$axios.get('/api/article/allList')
                //     .then(res => {
                //         if(res.data.code === 0){
                //             this.blogList = res.data.data;
                //             // 
                //             // let arrs = this.blogList;
                //             // this.arrList = arrs.map((item)=>{
                //             //     return item.content.slice(0,20)
                //             // })
                //         }
                //     }).catch(e=>{
                //         console.log(e)
                //     })
                // 
                this.searchList = this.$store.state.search.filterList;
            },

            // 根据搜索结果，更新列表数据
            // change(){
            //     this.blogList= this.$store.state.search.sou_list;
            // }
        },
        computed:{
        },
        created() {
            this.getBlogList();
            // this.change();

            // this.$nextTick(()=>{
            //     return this.blogList = this.$store.state.search.sou_list
            // });
            // this.$nextTick(()=>{
            //     this.change()
            // })
        },
        updated(){

        }
    }
</script>

<style lang="scss" scoped>

    .container{
        width: 100%;
        min-height: 100vh;
        margin: 0 20px;
        padding: 20px;
        background: #f8f8fd;
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
    }
    // 小导航栏
    .navs{
        height: 10px;
        display: flex;
        align-items: center;
        span{
            margin-right:50px;
            cursor: pointer;
        }
    }
    .divider{
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
    }
    // 博客列表
    .card {
        margin-top: 15px;
        // padding-bottom: 20px;
        // border-bottom: 1px solid #eee;
        .title {
            // color: #0085a1;
            color: black;
            font-size: 20px;
            font-weight: 600;
        }
        .content{
            color: #808080;
            margin-top: 20px;
            // 省略号后面内容
            // font-size: 14px;
            line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .time {
            font-style: italic;
            font-family: Lora, "Times New Roman", serif;
            color: #808080bf;
            margin-top: 20px;
        }
    }

</style>