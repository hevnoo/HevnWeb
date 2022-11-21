<template>
    <div class="container">
        <div class="box">
            <header class="header">
                    <span class="logo"><img :src="imageUrl==null?imgDefault:imageUrl"></span>
                    <span class="nick">
                        <!-- <p v-if="nickname!=''" v-text="nickname"></p>
                        <p v-else v-text="'username'"></p> -->
                        <p v-text="nickname"></p>
                    </span>
            </header>
            <main class="main">
                <div class="_main">
                    <span>发布时间：{{date}}</span>
                </div>
            </main>
            <footer class="footer">
                <div class="_footer">
                    <div class="card Like">
                        <i class="el-icon-star-on" style="color:#7bb9ff;font-size: 19px;"></i>
                        获得点赞: {{cardForm.like}}
                    </div>
                    <div class="card Viewed">
                        <i class="el-icon-view" style="color:#7bb9ff;font-size: 16px;"></i>
                        文章被阅读: {{cardForm.viewed}}
                    </div>
                </div>
            </footer>
            <div class="button"><el-button type="primary">关注作者</el-button></div>
        </div>
    </div>
  </template>
  
  <script>
  import imgDefault from '@/assets/logo.jpg'

  export default {
        name:'DetailSide',
        components:{
        },
        data(){
            return{
                blogInfo:'',
                date:'',
                nickname: '',
                imageUrl: null,
                imgDefault: imgDefault,
                cardForm:{
                    // 暂时自定义
                    like:'0',
                    viewed:null,
                },
                count:null,
            }
        },
        methods:{

            // 获取博客详情
            getDetail() {
                this.$axios.get('/api/article/detail',{
                    params:{
                    article_id:this.$route.params.id
                    }
                }).then((res) => {
                    if(res.data.code === 0){
                        this.blogInfo = res.data.data;
                        this.nickname = res.data.data.nickname;
                        //转换日期
                        let create_date = this.blogInfo.create_time;
                        let times = create_date.split(' ');
                        this.date = times[0].replace('-','年').replace('-','月')+'日';
                        //增加阅读量
                        this.cardForm.viewed=res.data.data.viewed;
                        this.upViewed(res.data.data.viewed);
                        //
                        if (res.data.data.head_img === '' || res.data.data.head_img === null) {
                            this.imageUrl = null;
                        } else {
                            this.imageUrl = res.data.data.head_img;
                        }
                    }
                    }).catch((e)=>{
                        console.log(e)
                })
            },

            //更新阅读量
            upViewed(res){
                this.$axios.post('/api/article/upViewed',{
                    article_id:this.$route.params.id,
                    // viewed:++this.cardForm.viewed,
                    viewed:++res
                })
                .then(()=>{
                    // console.log(res)
                }).catch((e)=>{
                    console.log(e)
                })
            },

        },

        created(){
            this.getDetail();
            // this.upViewed();
        }
  }

  </script>
  
  <style lang="scss" scoped>
      .container{
          // height: 380px;
          min-height: 200px;
          background-color: #fbfbfb;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) outset;
          border-radius: 5px;
          .box{
            display: flex;
            flex-direction: column;
          }
      }
      .header{
        height: 70px;
        margin: 10px 20px;
        // background-color: aquamarine;
        display: flex;
        align-content: center;
        // justify-content: space-around;
        border-bottom: 1px solid #999 ;
      }

        .logo{
            width: 50px;
            display: flex;
            align-items: center;
            margin-left: 20px;
            img{
                width: 50px;
                height: 50px;
                border: 1px solid transparent;
                border-radius: 50%;
            }
        }
        .nick{
            margin-left: 10px;
            display: flex;
            align-items: center;
            // background-color: red;
        }
      

      
      //
      .main{
        height: 30px;
        margin: 0 20px;
        // background-color: pink;
        display: flex;
        // justify-content: center;
        align-items: center;
        ._main{
            margin-left: 20px;
            font-size: 14px;
            color: #999;
        }
      }
      //
      .footer{
        height: 70px;
        margin: 0 20px 0 20px;
        // background-color: gray;
        display: flex;
        align-items: center;
        ._footer{
            font-size: 16px;
            .card{
                margin:0 0 10px 20px
            }
            .Like{
                margin-left: 16px;
            }
            .Viewed{
                margin-left: 18px;
            }
        }
      }
      .el-button{
        width: 240px;
        margin:0 20px 10px 20px
      }
  
  </style>