<template>
    <div class="container_">
        <div class="wrapper_">
            <header class="words">
                <div class="top">
                    <span>在这里留言</span>
                </div>
                <el-input v-model="text" @keyup.enter.native="addWords()" type="textarea" :rows="6" placeholder="请输入内容"></el-input>
                <div class="btn">
                    <span class="left">
                        <i class="el-icon-scissors"></i>
                    </span>
                    <span class="right">
                        <el-button class="login" plain> <router-link to="/login">登录</router-link> </el-button>
                        <el-button class="send" @click="addWords()" type="primary" plain>提交</el-button>
                    </span>
                </div>
            </header>
            <div class="list">
                <div class="top_">
                    <span>{{wordsList.length}}条评论</span>
                </div>
                <div class="main" v-for="item in wordsList" :key="item.id">
                    <div class="img_">
                        <img :src="item.head_img" alt="">
                    </div>
                    <div class="info">
                        <div class="info_">
                            <span class="nickname">{{item.nickname}}</span>
                            <span class="time">{{item.create_time.split(' ')[0]}}</span>
                        </div>
                        <span class="detail">
                            <span class="re">回复</span>
                            <i class="el-icon-chat-dot-round"></i>
                        </span>
                        <div class="theWords">{{item.words}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: 'WordsList',
        components:{
            
        },
        data(){
            return{
                wordsList:[],
                text:'',//留言内容
                
            }
        },
        methods:{
            //获取全部留言
            getWordsList(){
                this.$axios.get('/api/words/wordsList')
                .then((res)=>{
                    if(res.data.code === 0){
                        this.wordsList = res.data.data;
                    }
                }).catch(e=>{
                    console.log(e)
                })
            },
            //发表留言
            addWords() {
                if(this.text!='' && this.$store.state.tokens.isSignIn==1){
                    this.$axios.post('/api/words/addWords',{
                        words:this.text
                    }).then((res)=>{
                        if(res.data.code === 0){
                            this.text = ''
                            this.getWordsList()
                        }
                    }).catch(e=>{
                        console.log(e)
                    })
                }
                
            },
        },
        created(){
            this.getWordsList();
            
        }
    }
</script>

<style lang="scss" scoped>

    .wrapper{
        width: 850px;
    }
    .words{
        width: 850px;
        height: 280px;
        // background-color: aquamarine;
        box-shadow: 0 2px 8px 8px rgba(0, 0, 0, 0.1);
        margin: 80px auto 60px auto;
        border-radius: 10px;
    }
    .top{
        height: 45px;
        font-size: 20px;
        font-weight: 500;
        color: rgba(0,0,0,0.7);
        border-bottom: 2px dashed rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        span{
            margin-left: 20px;
        }
    }
    ::v-deep .el-textarea__inner{
        background-color: transparent !important;
        border: 0;
        font-size:large;
    }
    .btn{
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // background-color: red;
        .left{
            margin-left: 20px;
        }
        .right{
            margin-right: 20px;
        }
    }
    
    .list{
        width: 850px;
        min-height: 300px;
        // background-color: pink;
        margin-bottom: 50px;
        padding: 20px;
        .top_{
            font-size: 20px;
            font-weight: 500;
            color: rgba(0,0,0,0.7);
            margin: 10px auto 40px auto;
        }
    }
    
    .main{
        margin: 20px auto 20px -10px;
        border-bottom: 1px solid rgba(0,0,0,0.12);
        display: flex;
        justify-content: space-between;
    }
    .img_{
        img{
            width: 60px;
            height: 60ox;
            border-radius: 100%;
        }
        margin-bottom: 10px;
    }
    .info{
        flex:1;
        // margin-left: 20px;
        margin: 5px auto auto 20px;
        .info_{
            font-size: 15px;
            font-weight: 500;
            color: rgba(0,0,0,0.4);
            margin: auto auto 10px auto;
        }
        .nickname{
            margin-right: 10px;
        }
    }
    .detail{
        font-size: 14px;
        font-weight: 500;
        color: rgba(0,0,0,0.4);
        cursor: pointer;
        .re{
            margin-right: 5px;
        }
    }
    .theWords{
        font-size: 17px;
        font-weight: 500;
        color: rgba(0,0,0,0.9);
        margin: 20px auto 28px auto;
        cursor: pointer;
    }

</style>