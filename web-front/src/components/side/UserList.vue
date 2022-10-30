<template>
    <div class="container">
      <div class="one_header">
          <div class="header_left">推荐作者</div>
          <div class="header_right" style="color:#139eff">更多<i class="el-icon-arrow-right"></i></div>
      </div>
      <el-divider></el-divider>
      <div class="main" v-for="item in userList" :key="item.id">
          <div class="_main">
              <i class="el-icon-magic-stick"></i>
              <img v-if="item.head_img==null" class="head_img" src="@/assets/logo.jpg" alt="">
              <img v-else class="head_img" :src="item.head_img" alt="">
              <div class="name">
                  <span class="nickname">{{item.nickname}}</span>
                  <img src="@/assets/img/level.png" alt="">
              </div>
              <div class="guanzhu">
                  <span class="jia">+</span>关注
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name:'UserList',
      components:{
          
      },
      data(){
          return{
              userList:[],
          }
      },
      methods:{
          //获取所有用户
          getUserList(){
              this.$axios.get('/api/userList/userList')
              .then((res)=>{
                  this.userList=res.data.data
                  this.userList=this.userList.slice(0,4)
                  // console.log('所有用户',this.userList)
              })
          }
      },
      created(){
          this.getUserList()
      },
  }
  </script>
  
  <style lang="scss" scoped>
      .container{
          // height: 380px;
          min-height: 180px;
          background-color: rgba(247, 247, 252, 0.85);
          // box-shadow: 0 0 8px 8px #edefee;
          box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.06);
          border: 0.1px solid transparent;
          border-radius: 10px;
          .one_header{
              height: 30px;
              // margin-top: 20px;
              display: flex;
              justify-content:space-around;
              align-items: center;
              
              .header_left{
                  // margin: auto 0 auto 30px;
                  // cursor: pointer;
                  padding-top: 20px;
              }
              .header_right{
                  cursor: pointer;
                  padding-top: 20px;
              }
          }
          .one_main{
              font-size: 14px;
              // margin-top: 20px;
              margin:20px 20px 0 20px;
              // display: flex;
              // justify-content: center;
              cursor: pointer;
              // flex-direction: column;
              &:last-child{
                  padding-bottom: 30px;
              }
          }
      }
      .main{
          margin-bottom: 10px;
          // border-bottom: 1px solid #e6e6ea;
          &:last-child{
              padding-bottom: 20px;
          }
      }
      ._main{
          display: flex;
          align-items: center;
          // justify-content: space-around;
      }
      .el-icon-magic-stick{
          font-size: 25px;
          margin-left: 30px;
          background-image: linear-gradient(135deg,#30b8f5,#6bc30d);
          background-clip:text;
          -webkit-background-clip:text;
          color: transparent;
      }
      .head_img{
          width: 50px;
          height: 50px;
          border: 1px solid transparent;
          border-radius: 50%;
          margin-left: 10px;
      }
      .name{
          display: flex;
          flex-direction: column;
          margin-left: 7px;
          img{
              width: 50px;
              height: 20px;
          }
      }
      .nickname{
          margin: 5px auto 5px auto;
          font-size: 17px;
      }
      .guanzhu{
          font-size: 14px;
          margin-left: 40px;
          color: #30b8f5;
          cursor: pointer;
      }
      .jia{
          font-size: 20px;
      }
  
  
  </style>