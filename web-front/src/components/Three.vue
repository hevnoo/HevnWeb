<template>
    <div class="container">
      <div class="three_header">
          <div class="header_left">标签</div>
          <div class="header_right" style="color:#139eff">管理</div>
      </div>
      <el-divider></el-divider>
      <!-- <div class="one_main" v-for="item in oneList" :key="item.id">
          {{item.datas}}
      </div> -->
        <el-tag
            class="three_main"
            v-for="tag in tags"
            :key="tag.name"
            closable
            :type="tag.type">
            {{tag.name}}
        </el-tag>
    </div>
  </template>
  
  <script>
  export default {
      name:'Three',
      components:{
          
      },
      data(){
          return{
              tags: [
                    { name: '综合', type: '' },
                    { name: '前端', type: 'success' },
                    { name: '后端', type: 'info' },
                    { name: 'Android', type: 'warning' },
                    { name: 'Ios', type: 'danger' }
                ]
              
          }
      }
  }
  </script>
  
  <style lang="scss" scoped>
      .container{
          height: 250px;
          background-color: #f7f7fc;
          -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
          .three_header{
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

        .three_main{
            margin: auto auto 20px 20px;
            // display: flex;
            // justify-content:space-around;
        }
      }
      
  
  </style>