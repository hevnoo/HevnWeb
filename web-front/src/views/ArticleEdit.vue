<!-- 编辑文章按钮 -->
<template>
    <div class="edit_wrap wrapper">
        <div class="backBtn">
            <el-button @click="goBack">返回</el-button>
        </div>
        <header class="header">
            <h1 class="edit_title">文章标题：</h1>
            <el-input v-model="title" placeholder="请输入标题"></el-input>
        </header>
        <div class="label">
            <span class="_label">文章标签：</span>
            <el-select v-model="labelValue" multiple placeholder="请选择标签" :multiple-limit="4">
                <el-option v-for="item in options" :key="item.id" :value="item.label"></el-option>
            </el-select>
        </div>
        <footer class="footer">
            <div class="left">封面图片：</div>
            <div class="right">
                <el-upload
                action="http://127.0.0.1:3000/api/article/upImg"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :on-success="handleAvatarSuccess"
                name="img">
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                <p class="tips">tips:优质的封面有利于推荐</p>
            </div>
        </footer>
        <div class="content">文章内容：</div>
        <div class="markdown">
            <mavon-editor class="mavon" v-model="content"/>
        </div>
        <div class="save_btn">
            <el-button type="primary" @click="save">保存</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ArticleEdit',
        data() {
            return {
                title:'',
                content:'',
                options: [],
                labelValue: [],
                label_id:[],
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        methods:{
            handleAvatarSuccess(res) {
                this.dialogImageUrl = res.data
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            goBack(){
                this.$router.go(-1)
            },
            // 更新博客和添加博客
            save(){
                if(this.labelValue==''||this.title==''||this.content==''){
                    alert('请确保标题、标签和内容不能为空')
                }else{
                    if(this.$route.params.id){
                        // 更新
                        let labelRes = this.labelValue.toString()
                        // 提前处理发送给服务器的数据！解释见下文
                        this.$axios.post('/api/article/update',{
                            title:this.title,
                            content:this.content,
                            label:labelRes,
                            article_id:this.$route.params.id,
                            img:this.dialogImageUrl,
                        }).then(res => {
                            if(res.data.code === 0){
                                this.$message({
                                    message: '更新成功',
                                    type: 'success'
                                });
                                setTimeout(() => {
                                    this.$router.push({name:'article'})
                                }, 1000);
                            }
                        }).catch(e => {
                            console.log(e)
                        })
                    }else{
                        //添加
                        let labelRes = this.labelValue.toString()
                        // console.log(labelRes.split(','))
                        //这里要将数组转换成字符串才能传到服务端！服务端不接受数组。获取时要像下面代码一样转换回数组！
                        this.$axios.post('/api/article/add',{
                            title:this.title,
                            content:this.content,
                            label:labelRes,
                            img:this.dialogImageUrl,
                        }).then(res => {
                            if(res.data.code === 0){
                                this.$message({
                                    message: '新增成功',
                                    type: 'success'
                                });
                                setTimeout(() => {
                                    this.$router.push({name:'article'})
                                }, 1000);
                            }
                        }).catch(e => {
                            console.log(e)
                        })
                    }     

                }
                
            },
            // 获取博客详情
            getDetail() {
                this.$axios.get('/api/article/detail',{
                params:{
                    article_id:this.$route.params.id
                }
                }).then(res => {
                    if(res.data.code === 0){
                        this.title = res.data.data.title
                        this.content = res.data.data.content
                        this.dialogImageUrl=res.data.data.img
                        this.labelValue = res.data.data.label.split(',')
                        //将获取的字符串形式的一串标签截取成数组，不是数组的话无法获取到信息，并且没有内容呈现在选项框里！
                        // console.log(this.labelValue)
                        // let value = this.labelValue.split(',')
                    }
                }).catch(e=>{
                    console.log(e)
                })
            },
            //获取所有标签
            getLabel(){
                this.$axios.get('/api/label/allLabel')
                .then((res)=>{
                    // let ids=res.data.data
                    // this.$set(this.options,0,opt)
                    let opt=res.data.data;
                    opt.map((res)=>{
                        this.options.push(res);
                        // this.label_id.push(res.id)
                    })
                }).catch((e)=>{
                    console.log(e)
                })
            }
        },
        created() {
            this.getLabel();
            if(this.$route.params.id){
                this.getDetail()
            }
        },
    }
</script>

<style lang="scss" scoped>
.edit_wrap {
    margin: 30px auto;
    background: #fff;
    padding: 40px;
    font-size: 16px;
    .backBtn {
        text-align: right;
        margin-bottom: 40px;
    }
    .save_btn {
        margin: 40px 0;
    }
}
.header{
    display: flex;
    align-items: center;
}
.edit_title {
    font-size: 17px;
    font-weight: 500;
}
.el-input{
    flex:1
}
.label{
    margin-top: 30px;
    margin-bottom: 30px;
    ._label{
        font-size: 17px;
        font-weight: 500;
    }
}
.footer{
    display:flex ;
    margin-bottom: 20px;
}
.left{
    font-size: 17px;
    font-weight: 500;
}
.right{
    flex:1;
}
.tips {
    font-size: 12px;
    color: #999;
    margin-top: 5px;
}
.content{
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
}
.mavon{
    z-index: 1;
}

</style>