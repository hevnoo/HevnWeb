<template>
    <div class="container">
      <div class="two_header">
          <div class="header_left">社区推荐</div>
          <!-- <div class="header_right">更多</div> -->
      </div>
      <el-divider></el-divider>
      <div class="two_main" v-for="item in oneList" :key="item.id">
          {{item.datas}}
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name:'Two',
      components:{
          
      },
      data(){
          return{
              oneList:[
                  {id:0,datas:'活动一—————————'},
                  {id:1,datas:'活动二—————————'},
                  {id:2,datas:'活动三—————————'},
                  {id:3,datas:'活动四—————————'},
                  {id:4,datas:'活动五—————————'},
                  {id:5,datas:'活动六—————————'},
              ],
              
          }
      }
  }
  </script>
  
  <style lang="scss" scoped>
      .container{
          height: 400px;
          background-color: #f7f7fc;
          -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
          .two_header{
              // margin-top: 20px;
              display: flex;
              justify-content:space-around;
              align-items: center;
              
              .header_left{
                  // margin: auto 0 auto 30px;
                  // cursor: pointer;
                  padding-top: 20px;
              }
            //   .header_right{
            //       cursor: pointer;
            //       padding-top: 20px;
            //   }
          }
          .two_main{
              // margin-top: 20px;
              margin:20px auto 0 auto;
              display: flex;
              justify-content: center;
              cursor: pointer;
          }
      }
      
  
  </style>