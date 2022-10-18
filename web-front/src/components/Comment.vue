<template>
    <div class="comment-box">
        <div v-if="isSignIn===0" class="signInText">登录留言吧</div>
        <div v-else class="input-box">
            <el-divider></el-divider>
            <h3 class="_title">开始评论吧</h3>
            <div class="input-top">
                <div class="img">
                    <img class="avatar" :src="userinfo.head_img==null?imgDefault:userinfo.head_img" alt="">
                    <p class="username">{{userinfo.nickname}}</p>
                </div>
                <div class="text">
                    <textarea class="comment-content" v-model="submitText"></textarea>
                </div>
            </div>
            <div class="input-bottom">
                <a href="javascript:void(0)" class="submit" @click="publicComment">发表评论</a>
            </div>
        </div>
        <!-- 全部评论列表 -->
        <el-divider></el-divider>
        <div class="all_comment">
            <p class="title">全部评论<span class="total">{{comments.length}}</span>条：</p>
            <div class="comment-list">
                <div class="comment-item" v-for="item in comments" :key="item.id">
                    <div class="item_l">
                        <img class="avatar" :src="item.head_img==null?imgDefault:item.head_img" alt="">
                        <p class="username">{{item.nickname}}</p>
                    </div>
                    <div class="item_r">
                        <div class="comment-content">
                            <div class="comment_text">{{item.cm_content}}</div>
                            <div class="comment_time">
                                <span class="date">{{item.create_time}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import imgDefault from '../assets/logo.jpg'
    export default {
        name:'Comment',
        data() {
            return {
                userinfo:{},
                submitText:'',
                comments:[],
                imgDefault: imgDefault,
            }
        },
        computed: {
            // 是否登录
            isSignIn() {
                return this.$store.state.tokens.isSignIn;
            }
        },
        methods:{
            //用户信息
            getUserInfo() {
                let isGet = this.$store.state.tokens.isSignIn
                if(isGet!=0){
                    this.$axios.get('/api/user/info').then((res)=>{
                    // let result = res.data
                    if(res.data.code === 0){
                        this.userinfo = res.data.data;
                    }
                }).catch(e=>{
                    console.log(e)
                })
                }
            },
            //发表评论
            publicComment() {
                this.$axios.post('/api/comment/public',{
                    article_id:this.$route.params.id,
                    content:this.submitText
                }).then((res)=>{
                    // console.log(res)
                    if(res.data.code === 0){
                        this.submitText = ''
                        this.getCommentList()
                    }
                }).catch(e=>{
                    console.log(e)
                })
            },
            //获取评论列表
            getCommentList() {
                this.$axios.get('/api/comment/list',{
                    params:{
                        article_id:this.$route.params.id
                    }     
                }).then((res)=>{
                    // console.log(res)
                    if(res.data.code === 0){
                        this.comments = res.data.data
                    }
                }).catch(e=>{
                    console.log(e)
                })
            }
        },
        created() {
            this.getUserInfo()
            this.getCommentList()
        },
    }
</script>

<style lang="scss" scoped>
.comment-box {
    padding: 50px 30px;
    // -webkit-box-shadow: 0 0px 3px rgba(0, 0, 0, 0.157), 0 0px 3px rgba(0, 0, 0, 0.227);
    // box-shadow: 0 0px 3px rgba(0, 0, 0, 0.157), 0 0px 3px rgba(0, 0, 0, 0.227);
    background: #fafafa;
    .signInText {
        text-align: center;
        color: #3b99fc;
        font-size: 18px;
        cursor: pointer;
    }
}
._title{
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 20px;
    font-weight: bold;
    border-left: 4px solid #3b99fc;
    padding-left: 20px;
}
.input-box {
    .input-top {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        .img {
            width: 100px;
            text-align: center;
            .avatar{
                display: inline-block;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                border: 1px solid #000;
            }
            .username {
                color: #3b99fc;
                cursor: pointer;
                word-break: break-all;
                margin-top: 10px;
            }
        }
        .text {
            margin-top: 30px;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            textarea {
                width: 98%;
                margin-left: 2%;
                min-height: 90px;
                font-size: 14px;
                border: 1px solid #ddd;
                border-radius: 6px;
                padding: 20px;
                box-sizing: border-box;
            }
        }
    }
    .input-bottom {
        margin-top: 20px;
        overflow: hidden;
        .submit {
            float:right;
            width: 100px;
            height: 50px;
            line-height: 50px;
            background: rgba(0, 0, 0, 0.2);
            text-align: center;
            border-radius: 6px;
            color: #fff;
            &:hover {
                background: rgba(0, 129, 255, 0.7);
            }
        }
    }
}
.all_comment {
    // border-top: 1px solid #eee;
    padding: 30px 0;
    margin: 30px 0 0 0;
    .title {
        margin-bottom: 50px;
        font-size: 20px;
        font-weight: bold;
        border-left: 4px solid #3b99fc;
        padding-left: 20px;
    }
    .comment-list {
        .comment-item {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            padding: 20px 0;
            border-bottom: 1px solid rgba(238, 238, 238, 0.625);
            .item_l {
                width: 100px;
                text-align: center;
                .avatar{
                        display: inline-block;
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        border: 1px solid #000;
                        margin-bottom: 20px;
                }
                .username {
                        color: #3b99fc;
                        cursor: pointer;
                        word-break: break-all;
                }
            }
            .item_r {
                flex: 1;
                .comment-content {
                    width: 98%;
                    margin-left: 2%;
                    padding: 10px;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    font-size: 14px;
                    color: #666;
                    .comment_text {
                        min-height: 70px;
                        background-color: #f9fafbf0;
                        // border: 1px solid #e6e6eac4;
                        // border-radius: 5%;
                    }
                    .comment_time {
                        text-align: right;
                        padding: 10px 0;
                        font-size: 12px;
                    }
                }
                
            }
        }
    }
}
</style>