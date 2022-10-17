<template>
    <div class="container">
      <div class="three_header">
          <div class="header_left">标签云</div>
          <div class="header_right" style="color:#139eff" @click="dialogVisible = true">管理</div>
      </div>
      <el-divider></el-divider>
      <!--  -->
        <el-dialog
            title="标签管理"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>
                <input v-model="value" type="text"  placeholder="请输入标签名">
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="yes()">确 定</el-button>
            </span>
        </el-dialog>
      <!-- <div class="one_main" v-for="item in oneList" :key="item.id">
          {{item.datas}}
      </div> -->
        <el-tag 
        class="three_main" v-for="item in options" :key="item.id" closable>
            {{item.label}}
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
              options:[],
              dialogVisible: false,
              value:'',
          }
      },
      methods:{
            getLabel(){

                this.$axios.get('/api/label/allLabel')
                .then((res)=>{
                    let opt=res.data.data;
                    // this.$set(this.options,0,opt)
                    opt.map((res)=>{
                        this.options.push(res);
                    })
                }).catch((e)=>{
                    console.log(e)
                })
            },
            //
            handleClose(done) {
                this.$confirm('确认关闭？')
                .then((r) => {
                    done(r);
                    // this.add()
                })
                .catch(e => {console.log(e)});
            },
            yes(){
                this.add();
                this.dialogVisible=false;
            },
            //添加标签
            add(){
                this.$axios.post('/api/label/addLabel',{
                    label:this.value
                }).then((res)=>{
                    console.log(res)
                }).catch((e)=>{
                    console.log(e)
                })
            }
      },

      created(){
        this.getLabel()
        
      }
  }
  </script>
  
  <style lang="scss" scoped>
      .container{
        //   height: 250px;
        min-height: 100px;
          background-color: #f7f7fc;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) outset;
          .three_header{
            height: 20px;
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
            margin: auto 0 20px 20px;
            // display: flex;
            // justify-content:space-around;
        }
      }
      
  
  </style>