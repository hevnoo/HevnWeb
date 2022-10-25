<template>
    <div class="container">
      <div class="one_header">
          <div class="header_left">专题</div>
          <div class="header_right" style="color:#139eff">更多<i class="el-icon-arrow-right"></i></div>
      </div>
      <el-divider></el-divider>
      <div class="one_main" v-for="item in oneList" :key="item.id" @click="zf(item.id)">
          <el-tag type="danger" size="mini">线上</el-tag>
          {{item.datas}}
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
      name:'One',
      components:{
          
      },
      props:['msg'],
      data(){
          return{
              oneList:[
                  {id:0,datas:'Microsoft Ignite大会'},
                  {id:1,datas:'亚马逊云科技年度中国峰会'},
                  {id:2,datas:'中国软件创意大赛————华为MindSpore'},
                  {id:3,datas:'OceanBase 核心能力解读和支付宝实践'},
                  {id:4,datas:'TiDB Hackathon 2022丨总奖金池超 35 万！邀你唤醒代码世界的更多可能'},
                  {id:5,datas:'CSDN游戏出海Meetup深圳站'},
              ],
              son:'son',
          }
      },
      methods:{
          zf(res){
              this.$emit('fun',res)
          }
      },
      created(){
      //   console.log(this.msg)  
      },
  }
  </script>
  
  <style lang="scss" scoped>
      .container{
          // height: 380px;
          min-height: 200px;
          background-color: #f7f7fc;
          // -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) outset;
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
      
  
  </style>