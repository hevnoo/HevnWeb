<template>
    <div class="container">
        <!-- 小导航栏 -->
        <div class="navs">
            <span class="nav navs_blog" style="color:#139eff">博客推荐</span>
            <span class="nav navs_font">前端</span>
            <span class="nav navs_back">后端</span>
            <span class="nav navs_android">Android</span>
        </div>
        <el-divider class="divider"></el-divider>
        <!-- 博客列表 -->
        <div class="card" v-for="item in blogList" :key="item.id">
            <router-link :to="'/detail/'+item.id">
                <p class="title">{{item.title}}</p>
            </router-link>
            <!-- <p class="content" v-text="item.content.slice(0,70)"></p> -->
            <p class="content">{{item.content}}</p>
            <p class="time">{{item.create_time}}</p>
            <el-divider></el-divider>
        </div>
        <el-pagination
        class="page"
        background
        layout="prev, pager, next"
        :total="pageList.length"
        :page-size="pageSize"
        :current-page="currentPage"
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange"
        >
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name:'BlogList',
        data() {
            return {
                blogList:[],
                pageList:[],
                pageSize:10,
                // currentPage:1,
                currentPage:this.$store.state.search.page_num,
                // dates:'',
                // create_date:'',
            }
        },
        methods:{
            // 获取文章
            getBlogList () {
                this.$axios.get('/api/article/allList')
                    .then(res => {
                        if(res.data.code === 0){
                            this.blogList = res.data.data;
                            this.pageList = this.blogList;
                            // 
                            // this.dates = this.blogList.map((p)=>{
                            //     return p.create_time;
                            // })
                            // this.create_date = this.dates.map((item)=>{
                            //     return new Date(item)
                            // }).map((x)=>{
                            //     return x.getTime()
                            // })
                            // 时间顺序
                            this.blogList.sort((a,b)=>{
                                return new Date(b.create_time).getTime() - new Date(a.create_time).getTime()
                            })
                            // 分页截取
                            this.blogList = this.blogList.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
                            

                            // let arrs = this.blogList;
                            // this.arrList = arrs.map((item)=>{
                            //     return item.content.slice(0,20)
                            // })
                        }
                    }).catch(e=>{
                        console.log(e)
                    })
                // 
                // this.blogList = this.$store.state.search.filterList;
            },
            //每页条数改变时触发 选择一页显示多少行
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.currentPage = 1;
                this.pageSize = val;
            },
            //当前页改变时触发 跳转其他页
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.currentPage = val;
                this.$store.commit('search/DOPAGE',this.currentPage);
            }
            // 根据搜索结果，更新列表数据
            // change(){
            //     this.blogList= this.$store.state.search.sou_list;
            // }
        },
        computed:{
        },
        watch:{
            // currentPage(val){
            //     return this.currentPage = val;
            // }
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
        // margin: 0 20px;
        margin-left: 20px;
        //列表左边距20px
        padding: 20px;//防止塌陷
        background: #f8f8fd;
        -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) outset;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) outset;
    }
    // 小导航栏
    .navs{
        height: 20px;
        display: flex;
        align-items: center;
        .nav{
            margin-right:50px;
            cursor: pointer;
        }
    }
    .divider{
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) outset;
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