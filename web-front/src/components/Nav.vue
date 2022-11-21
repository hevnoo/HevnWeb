<template>
  <div class="_container">
      <div style="width:35px"></div>
      <div :class="currentIndex==item.id?'active':''" v-for="item in navList" :key="item.id" ref="refInfo" @click="getNav(item)">
        <ul class="item">
          <li class="li" v-text="item.nav"></li>
          <!-- {{item.nav}} -->
        </ul>
      </div>
      <div style="width:40px"></div>
  </div>
</template>

<script>
import {hunhe} from '@/mixin/mixin.js'
  export default {
      name: 'Nav',
      components:{

      },
      mixins:[hunhe],
      data(){
          return{
              navList:[
                  {id:0,nav:'全部文章',path:'blog'},
                  {id:1,nav:'前端',path:'front'},
                  {id:2,nav:'后端',path:'back'},
                  {id:3,nav:'移动开发',path:'mobile'},
                  {id:4,nav:'编程语言',path:'code'},
              ],
              refInfo:'',
              currentIndex:0,
              text:null,
          }
      },
      methods:{
        getNav(res){
            this.$router.push({
                name:res.path,
                params:{
                  clickVal:res.nav
                }
            })
            this.currentIndex=res.id;
        },
        //先拿每一个值去和staorage的值作比较，得到相等值
        getText(){
          this.text=this.navList.map((m)=>{
            return m.path
          }).map((m1)=>{
            return this.get(m1)
          }).filter((f)=>{
            return f!=undefined
          })
        },
        //再按文字找到对应的id,让文字高亮
        getStorage(){
          if(this.text!=''){
              let info = this.navList.filter((f)=>{
                return this.text==f.nav
              })
              this.currentIndex=info[0].id;
            }
        },
        
      },
      created(){
        this.getText();
        this.getStorage();
      },

  }
</script>

<style lang="scss" scoped>
._container{
  height: 70px;
  width:100%;
  // background-color: #f8f8fd;
  background-color: rgba(247, 247, 252, 0.85);
  // box-shadow: 0 0 8px 8px #edefee;
  box-shadow: 0 -0.5px 8px 8px rgba(0, 0, 0, 0.06);
  border: 0.1px solid transparent;
  border-radius: 7px 7px 0 0;
  border-bottom: 3px solid #e6e6ea;
  display: flex;
  flex-direction: row;
  align-items: center;
  // justify-content: space-around;
}
.active{
  background-image: linear-gradient(135deg,#6bc30d,#30b8f5);
  background-clip:text;
  -webkit-background-clip:text;
  color: transparent;
}
.item{
  font-size: 16px;
  margin-right: 45px;
  cursor: pointer;
  .li{
    // height: 42px;
    // width: 80px;
    // text-align: center;
    // line-height: 42px;
    // background-color: #ffc0cb;
  }
}
.item:hover{
  color: #139eff;
}

//


</style>