<!-- 管理我的博客 -->
<template>
    <div class="wrapper">
        <h1 class="title">文章列表</h1>
        <div class="article">
            <router-link to="/home">
                <el-button class="backBtn">返回首页</el-button>
            </router-link>
            <el-button class="addBtn" @click="handleAdd">新增+</el-button>
            <el-table :data="articleList" border stripe>
                <el-table-column prop="title" label="标题" width="450">
                </el-table-column>
                <el-table-column label="日期" width="250">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span>{{ scope.row.create_time }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="handleLook(scope.row)">查看</el-button>
                        <el-button size="mini" type="success" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelect(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

        </div>
    </div>
</template>

<script>
    export default {
        name:'Article',
        data() {
            return {
                articleList:[]
            }
        },
        methods:{
            handleAdd() {
                this.$router.push({name:'editArticle'})
            },
            handleLook(row) {
                let id = row.id
                window.open('#/detail/'+id)
            },
            handleEdit(row) {
                let id = row.id;
                this.$router.push({path:`/article/edit/${id}`})
            },
            // 删除博客
            handleDelect(row){
                let id = row.id
                this.$confirm('此操作将删除该文章, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.post('/api/article/delete',{
                        article_id:id
                    })
                    .then(res => {
                        if(res.data.code === 0){
                            //发起删除请求操作
                            this.$message({
                                type: 'success',
                                message: `${id}文章删除成功!`
                            });
                            setTimeout(() => {
                                location.reload()
                            }, 800);
                        }
                    }).catch(e=>{
                        console.log(e)
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            // 获取我的博客列表接口
            getMyBlogList(){
                this.$axios.get('/api/article/myList')
                    .then(res => {
                        if(res.data.code === 0){
                            this.articleList = res.data.data
                        }
                    }).catch(e=>{
                        console.log(e)
                    })
            }
        },
        created() {
            this.getMyBlogList()
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        min-height: 100vh;
        // min-height: calc(100vh - 200px);
        // margin-top: 60px;
    }
    .title {
        margin: 30px 0 30px 0;
        // padding-top: 30px;
        text-align: center;
        font-weight: bold;
        font-size: 28px;
        color: rgba(250,250,250,0.9);
    }
    .article {
        .addBtn {
            float: right;
            margin-bottom: 20px;
            margin-right: 20px;
        }
        .backBtn{
            float: right;
            margin-bottom: 20px;
        }
    }
    ::v-deep .el-table{
        .cell {
            text-align: center;
        }
    }
    .el-table--border{
        border-radius: 5px;
    }
    ::v-deep .el-table__header-wrapper{
        //首行行高
        line-height: 50px !important;
    }
    ::v-deep .el-table tr{
        line-height: 50px ;
    }
</style>
