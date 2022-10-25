<template>
    <div class="con">
        <el-pagination
        class="page"
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
    name:'Page',
    // props:['blog'],
    data(){
        return {
            blogList:[],
            pageList:[],
            pageSize:10,
            // currentPage:1,
            currentPage:this.$store.state.search.page_num,
            label:'',
            allLabel:null,
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
                    // 分页截取
                    this.blogList = this.blogList.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
                    //
                }
            }).catch(e=>{
                console.log(e)
            })
        },
        //每页条数改变时触发 选择一页显示多少行
        handleSizeChange(val) {
            // console.log(`每页 ${val} 条`);
            this.currentPage = 1;
            this.pageSize = val;
        },
        //当前页改变时触发 跳转其他页
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            this.currentPage = val;
            this.$store.commit('search/DOPAGE',this.currentPage);
        },
        up(val){
            // console.log(val)  // 这就是传过来的值
            this.blogList=val
        }
    },
    watch:{
        blog(val){
            // console.log('子组件 数据处理',val)
            this.up(val)
        }
    },
    created() {
        this.getBlogList();
        console.log('传',this.blog)
    },
    
}
  </script>
  
  <style lang="scss" scoped>
//   .con{
//     margin-bottom: 30px;
//   }


  // .con >>> .el-pagination.is-background .el-pager li:not(.disabled).active {
  //   background-color:#009688 !important; //修改后的背景图颜色
  //   color: #009688 !important;
  // }
  // .con >>> .el-pagination{
  //   background-color:#009688 !important; //修改后的背景图颜色
  //   color: #009688 !important;
  // }
//

  </style>