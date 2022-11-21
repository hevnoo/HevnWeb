<!-- 文章详情页左 -->
<template>
    <div class="blog-content-box">
      <!-- @mousemove.once="getDom()" -->
      <div class="wrapper">
        <h1 class="title">{{blogDetail.title}}</h1>
        <div class="time">
          <span class="date">
            <i class="iconfont icon-date"></i>
            <i v-text="blogDetail.create_time"></i>
          </span>
        </div>
        <div class="detail" ref="mavon">
            <!--  -->
            <mavon-editor
              class="mavon"
              v-model="blogDetail.content"
              defaultOpen="preview" 
              style="max-height: 900000px"
              :toolbarsFlag="false"
              :subfield="false"
              :boxShadow="false"
              :showNavBar="true"
              :navigation="false"
              :ishljs="true"
              >
            </mavon-editor>
        </div>
      </div>
    </div>
  </template>
  
  <script>

    // import Comment from '@/components/Comment.vue'
    export default {
      name:'Detail',
      data() {
        return {
          blogDetail:{},
          mavons:null,//获取dom
          titleTag:['H1','H2','H3'],
          titles:[],
          catalog:'',//目录
        }
      },
      components:{ },
      methods:{
        // 获取博客详情
        getDetail() {
          this.$axios.get('/api/article/detail',{
            params:{
              article_id:this.$route.params.id
            }
          }).then(res => {
              if(res.data.code === 0){
                  this.blogDetail = res.data.data;
                  this.blogDetail.create_time=res.data.data.create_time.slice(5,16);
              }
            }).catch(e=>{
                console.log(e)
          })
        },
        getDom(){
          //生成目录
          this.$nextTick(()=>{
            this.mavons=this.$refs.mavon;
            this.mavons=this.mavons.children[0].children[1].children[1].children[0].childNodes;
            this.mavons.forEach((e,index)=>{
              if(this.titleTag.includes(e.nodeName)){
                const id='header-' + index;
                // 设置元素id
                e.setAttribute("id", id);
                this.titles.push({
                id: id,
                title: e.innerText,
                level: Number(e.nodeName.substring(1, 2)),
                nodeName: e.nodeName
              });
              }
            })
            this.catalog = this.titles;
            //传值给Catlogue组件
            this.$store.commit('data/CATA',this.catalog)
          })
          // console.log('*',this.catalog)
        },
        // getUrl(){
        //   //获取当前url,如果当前是detail路由，则自动触发getDom(),相当于手动点击获取数据；
        //   // 解决了，nexttick异步无法直接获取dom数据，的问题。
        //   let currentUrl=window.location.href.split('#')[1]
        //   if(currentUrl.includes('detail')){
        //     // console.log(this.currentUrl)
        //     this.getDom()
        //   }
        // },
      },

      created() {
        this.getDetail()
        
      },
      updated(){
        // this.getUrl()
        this.getDom()
      }
    }

  </script>
  

  <style lang="scss" scoped>
  .blog-content-box {
    min-height: calc(100vh - 220px);
    margin-top:30px;
  }
  .wrapper {
    padding: 20px;
    border-radius: 5px;
    // background: #f8f8fd;
    background-color: #fbfbfb;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) outset;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) outset;
    .title {
      text-align: center;
      font-weight: 500;
      font-size: 25px;
      margin: 30px auto 30px auto;
      // background-color: transparent;
    }
    .time {
      margin: 10px 0 40px;
      border-bottom: 1px solid #eee;
      padding-bottom: 20px;
      text-align: center;
      color: #999;
    }
  }
  .date{
    color: rgba(0, 0, 0, 0.4);
    font-size: 14px;
  }
  .iconfont {
    margin-right: 5px;
  }
  .detail{
    // padding: 0;
    margin-bottom: 80px;
  }
  .mavon{
    // background-color: #f8f8fd;
    z-index: 1;
  }
  .v-note-wrapper{
    border: 0;
  }
  ::v-deep .v-show-content{
    padding: 8px 12px 15px 12px !important;
  }
  
  </style>