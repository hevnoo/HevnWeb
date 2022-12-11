<template>
  <div class="container">
      <div class="wrapper">
          <header class="header">
              <div class="logo">
                  <span class="title">归档</span>
                  <span class="star">✦</span>
              </div>
          </header>
          <div class="main">
              <div class="top">
                  <span>共计{{total}}篇文章</span>
              </div>
              <div class="content">
                  <div class="dates">
                      {{year[0]}}
                  </div>
                  <div class="text" v-for="item in blogList" :key="item.id">
                      <span class="time">{{item.create_time.slice(5,10)}}</span>
                      <router-link :to="'/detail/'+item.id">
                          <span class="ii">{{item.title}}</span>
                      </router-link>
                  </div>
              </div>
              <!-- 分页 -->
              <div class="page">
                  <el-pagination
                  layout="total, prev, pager, next, jumper"
                  :total="total"
                  :page-size="pageSize"
                  :current-page="currentPage"
                  @current-change="handleCurrentChange"
                  >
                  </el-pagination>
              </div>
              <!-- <Pages :total="pageList.length" :pageSize="pageSize" /> -->
          </div>
      </div>
      
  </div>
</template>

<script>
  // import Pages from '@/components/others/Pages.vue'
  // import {pages1} from '@/mixin/mixin.js'
  
  export default {
      components:{
          // Pages,
      },
      // mixins:[pages1],
      data(){
          return{
              blogList:[],
              list:[],
              year:[],
              currentPage:1,
              total:null,
              pageSize:null,
          }
      },
      methods:{
          handleCurrentChange(val) {
              console.log(`当前页: ${val}`);
              this.currentPage = val;
              // this.$store.commit('search/DOPAGE1',this.currentPage);
              this.getBlogList();
          },
          // 获取文章
          getBlogList () {
              this.$axios.get('/api/article/fileList',{
                params:{
                  page:this.currentPage
                }
              }).then(res => {
                  if(res.data.code === 0){
                      this.blogList = res.data.data;
                      this.total = res.data.total;
                      this.pageSize = res.data.pageSize;
                      // console.log(res.data)
                      //去重年份
                      this.dealYear(res.data.data);
                      
                  }
              }).catch(e=>{
                  console.log(e)
              })
          },
          
          //去重年份
          dealYear(result){
              this.year = result;
              this.year = this.year.map((m)=>{
                  return m.create_time.split(' ')[0].split('-')[0]
              });
              this.year = Array.from(new Set(this.year))
          },
          
      },
      created(){
          this.getBlogList();
      }
  }
</script>

<style lang="scss" scoped>
  .container{
      min-height: 100vh;
      display: flex;
      justify-content: center;
  }
  .wrapper{
      width: 1110px;
      display: flex;
      flex-direction: column;
  }
  .header{
      width: 1110px;
      height: 350px;
      // background-color: aquamarine;
      display: flex;
      justify-content: center;
      align-items: center;
      .logo{
          font-size: 30px;
          font-weight: 600;
          color: rgba(250,250,250,0.9);
          .title{
              
          }
          .star{
              margin-left: 10px;
          }
      }
  }
  .main{
      width: 1110px;
      min-height: 600px;
      background-color: rgba(247, 247, 252, 0.95);
      border-radius: 10px;
  }
  .top{
      width: 100%;
      height: 130px;
      font-size: 27px;
      font-weight: 520;
      color: rgba(0,0,0,0.9);
      // border-bottom: 2px solid rgba(0,0,0,0.9);
      display: flex;
      // justify-content: center;
      align-items: center;
      span{
          margin-left: 100px;
      }
  }
  .content{
      margin-left: 100px;
  }
  .dates{
      font-size: 25px;
      font-weight: 500;
      color: rgba(0,0,0,0.9);
      margin: 0 auto 30px auto ;
  }
  .text{
      // background-color: aquamarine;
      width: 850px;
      height: 50px;
      font-size: 18px;
      font-weight: 500;
      color: rgba(0,0,0,0.7);
      margin: 10px auto 12px 20px;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      .time{
          margin: auto 35px auto 10px;
      }
      .ii{
          width: 600px;
          // 省略号后面内容
          // line-height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
      }
  }
  .text:hover{
      background-color: rgba(0,0,0,0.03);
      color: #30b8f5;
  }
  .star{
      animation: star 1s linear 0s backwards infinite;
  }
  @keyframes star {
      0%,40%{
          opacity: 0;
      }
      50%{
          opacity: 0.7;
      }
      100%{
          opacity: 1;
      }
  }

</style>