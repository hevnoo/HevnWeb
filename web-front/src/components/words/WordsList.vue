<template>
    <div class="container_">
        <div class="wrapper_">
            <header class="words">
                <div class="top">
                    <span>在这里留言</span>
                </div>
                <el-input v-model="text" type="textarea" :rows="6" placeholder="请输入内容"></el-input>
                <div class="btn">
                    <span class="left">
                        <i class="el-icon-scissors"></i>
                        <span class="copy" v-copy="text">复制</span>
                    </span>
                    <span class="right">
                        <el-button class="login" plain v-permission="isSignIn">
                            <router-link to="/login">登录</router-link>
                        </el-button>
                        <el-button class="send" v-debounce="addWords" type="primary" plain>留言</el-button>
                    </span>
                </div>
            </header>
            <!--  -->
            <main class="list">
                <div class="top_">
                    <span>{{newList.length}}条评论</span>
                </div>
                <!--  -->
                <div :class="item.father_words_id?'_box':'box'" v-for="(item,index) in newList" :key="index">
                    <section :class="item.father_words_id?'_card':'card'">
                        <div :class="item.father_words_id?'_main':'main'">
                            <div :class="item.father_words_id?'_img':'img_'">
                                <img v-lazy="item.head_img" alt="">
                            </div>
                            <div :class="item.father_words_id?'info1':'info'">
                                <div class="user">
                                    <span class="nickname">{{item.nickname}}</span>
                                    <i :class="item.father_words_id&&item.to_user_id?'el-icon-caret-right':'off'"></i>
                                    <span>{{item.to_user_nickname}}</span>
                                </div>
                                <div class="theWords" @click="reTo(item.id)">{{item.words}}</div>
                                <div class="detail">
                                    <span class="time">{{item.create_time.slice(0,16)}}</span>
                                    <i class="el-icon-chat-dot-round"></i>
                                    <span class="re" @click="_reTo(item.id)" v-if="is==true&&reId==item.id">取消回复</span>
                                    <span class="re" @click="reTo(item.id)" v-else>回复</span>
                                </div>
                            </div>
                        </div>
                        <!-- 回复框 -->
                        <footer v-show="is==true&&reId==item.id">
                            <el-input class="area" v-model="reText" type="textarea" :rows="3" placeholder="请输入内容"></el-input>
                            <div class="re_btn">
                                <el-button class="public_btn" @click="send(item,item.id)" type="primary" plain>发布</el-button>
                                <el-button class="off_btn" @click="_reTo(item.id)" type="info" plain>取消</el-button>
                            </div>
                        </footer>
                    </section>
                </div>
            </main>
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
                reId:null,//指定id
                is:false,//开关
                reText:'',//回复内容
                // father_words_id:null,
                // to_user_id:null,
                newList:[],
            }
        },
        methods:{
            //获取全部留言
            getWordsList(){
                this.$axios.get('/api/words/wordsList')
                .then((res)=>{
                    if(res.data.code === 0){
                        this.wordsList = res.data.data;//无意义
                        this.deal(res.data.data)
                    }
                }).catch(e=>{
                    console.log(e)
                })
            },
            //添加留言
            addWords() {
                if(this.text!='' && this.$store.state.tokens.isSignIn==1){
                    this.$axios.post('/api/words/addWords',{
                        words:this.text,
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
            //添加回复,发布按钮
            addReWords(item,id) {
                // console.log('触发')
                if(this.reText!='' && this.$store.state.tokens.isSignIn==1){
                    if(item.father_words_id==0){//判断当前为父级，将要发布子级1级
                        this.$axios.post('/api/words/addReWords',{
                            words:this.reText,
                            father_words_id:id,
                            to_user_id:null,
                            to_user_nickname:null,
                        }).then((res)=>{
                            if(res.data.code === 0){
                                // console.log('一级')
                                this.reText = ''
                                this.getWordsList()
                            }
                        }).catch(e=>{
                            console.log(e)
                        })
                    }else{//判断当前为子级1级，将要发布子2级
                        this.$axios.post('/api/words/addReWords',{
                            words:this.reText,
                            father_words_id:item.father_words_id,
                            to_user_id:id,
                            to_user_nickname:item.nickname,
                        }).then((res)=>{
                            if(res.data.code === 0){
                                // console.log('二级')
                                this.reText = ''
                                this.getWordsList()
                            }
                        }).catch(e=>{
                            console.log(e)
                        })
                    }
                    
                }
            },
            //排序处理数据
            deal(res){
                let father=res.filter((f)=>{
                    return f.father_words_id == 0
                })
                this.newList = father;//两者都是引用类型,浅拷贝
                let son=res.filter((f)=>{
                    return f.father_words_id != 0
                })
                son.reverse()
                for(let i=0;i<father.length;i++){
                    //这里改变father也会同时改变newList,因为浅拷贝
                    for(let j=0;j<son.length;j++){
                        if(father[i].id==son[j].father_words_id){
                            father.splice(i++,0,son[j])
                        }
                    }
                }
                this.newList.reverse()
            },
            //
            send(item,id){
                // console.log('当前选取的id',item,id)
                this.addReWords(item,id)
                this.reId=id;
                this.is=false;
            },
            reTo(id){
                this.reId=id;
                this.is=true;
                // this.addReWords(item,id)
            },
            _reTo(id){
                this.reId=id;
                this.is=false;
            },

        },
        computed:{
            // 是否登录，转换为string类型
            isSignIn() {
                return this.$store.state.tokens.isSignIn.toString();
            }
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
        height: 250px;
        // background-color: aquamarine;
        box-shadow: 0 2px 6px 6px rgba(0, 0, 0, 0.1);
        margin: 80px auto 60px auto;
        border-radius: 10px;
    }
    .top{
        height: 45px;
        font-size: 18px;
        font-weight: 500;
        color: rgba(0,0,0,0.7);
        border-bottom: 2px dashed rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        span{
            margin-left: 15px;
        }
    }
    .el-textarea{
        // border: 1px solid #30b8f5;
        border-radius: 5px;
    }
    ::v-deep .el-textarea__inner{
        background-color: transparent !important;
        border: 0;
        font-size:large;
    }
    .btn{
        // margin-bottom: 20px;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // background-color: red;
        .left{
            margin-left: 20px;
            color: rgba(0,0,0,0.4);
            cursor: pointer;
            .copy{
                font-size: 14px;
                margin-left: 10px;
            }
        }
        .right{
            margin-right: 20px;
            .send{
                color: #6bc30d;
                background: #ecf5ff;
                border-color: rgba(63, 119, 136, 0.5);
            }
            .send:hover{
                background-color: rgba(63, 119, 136, 0.1);
            }
        }
    }
    //列表
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
    .box{
        margin-bottom: 20px;
        // border-bottom: 1px solid rgba(0,0,0,0.12);
    }
    .card{
        width: 820px;
        margin: auto auto -10px auto;
        // background-color: rgba(0,0,0,0.1);
    }
    .main{
        margin: 20px auto 20px -10px;
        // border-bottom: 1px solid rgba(0,0,0,0.12);
        display: flex;
        justify-content: space-between;
    }
    .img_{
        img{
            width: 50px;
            height: 50ox;
            border-radius: 100%;
        }
        margin-bottom: 10px;
    }
    .info{
        flex:1;
        margin: 5px auto auto 20px;
        .user{
            font-size: 15px;
            font-weight: 500;
            color: rgba(0,0,0,0.4);
            margin: auto auto 15px auto;
        }
        .nickname{
            color: rgba(0,0,0,0.7);
            margin-right: 10px;
        }
        .time{
            font-size: 13px;
        }
    }
    .detail{
        font-size: 14px;
        font-weight: 500;
        margin: 15px auto 15px auto;
        color: rgba(0,0,0,0.4);
        cursor: pointer;
        .el-icon-chat-dot-round{
            margin: auto auto auto 30px;
        }
        .re{
            font-size: 13px;
            margin: auto auto auto 3px;
        }
        .re:hover{
            color: #30b8f5;
        }
    }
    .theWords{
        line-height: 24px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(0,0,0,0.9);
        margin: auto 20px auto auto;
        cursor: pointer;
    }
    //

    //子级------------------------------------
    ._box{
        // border-bottom: 1px solid rgba(0,0,0,0.12);
    }
    ._card{
        // width: 760px;
        margin: auto auto auto 70px;
        background-color: rgba(0,0,0,0.04);
        // border-radius: 5px;
    }
    .off{
        display: none;
    }
    ._main{
        margin: auto auto auto auto;
        // border-bottom: 1px solid rgba(0,0,0,0.12);
        display: flex;
    }
    ._img{
        margin: 10px auto auto 10px;
        img{
            width: 40px;
            height: 40px;
            border-radius: 100%;
        }
    }
    .info1{//子级
        flex: 1;
        margin-top: 15px;
        margin-left: 20px;
        .user{
            font-size: 13px;
            color: rgba(0,0,0,0.5);
            margin: auto auto 10px auto;
            .el-icon-caret-right{
                margin: auto 7px;
                color: rgba(0,0,0,0.8);
                font-size: 17px;
            }
            .nickname{
                font-size: 13.5px;
            }
        }
        .theWords{
            font-size: 15px;
            line-height: 23px;
        }
        .detail{
            font-size: 13px;
        }
    }
    //回复框---------------------------------------
    .area{
        width: 90%;
        border: 1px solid #30b8f5;
        border-radius: 5px;
        margin: auto auto auto 60px;
    }
    ::v-deep .el-textarea__inner{
        font-size: 15px !important;
    }
    .re_btn{
        display: flex;
        justify-content: flex-end;
        padding: 20px;
        .public_btn{
            
        }
        .off_btn{
            margin: auto 30px auto 20px;
        }
    }
    
    
//
</style>