<template>
    <div class="container">
      <div class="three_header">
          <div class="header_left">标签云</div>
          <!-- <div class="header_right" style="color:#139eff" @click="dialogVisible = true">管理</div> -->
          <!--  -->
            <el-popover
            placement="left"
            width="400"
            trigger="click"
            v-model="conVisible" >
                <h3 :style="{fontSize:'18px',fontWeight:'800'}">增加标签</h3>
                    <el-input v-model="value" @keyup.enter.native="yes()" type="text"  placeholder="请输入标签名" :style="{margin:'20px auto'}"></el-input>
                <div>
                    <el-button @click="no()">取 消</el-button>
                    <el-button type="primary" @click="yes()">确 定</el-button>
                </div>
                <div slot="reference" class="header_right" style="color:#139eff">自定义</div>
            </el-popover>
          <!--  -->
      </div>
      <el-divider></el-divider>
        <!-- 标签 -->
        <el-tag class="three_main" 
        v-for="item in options" :key="item.id" closable @close="dele(item.id)">
            {{item.label}}
        </el-tag>
        <!-- <div>{{newBus}}</div> -->
        <!-- <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button> -->
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
              value:'',
              conVisible: false,
          }
      },
      methods:{
            getLabel(){
                this.$axios.get('/api/label/allLabel')
                .then((res)=>{
                    let opt=res.data.data;
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
            },
            no(){
                this.conVisible=false;
            },
            //添加标签
            add(){
                if(this.value!=''){
                    this.$axios.post('/api/label/addLabel',{
                    label:this.value
                }).then(()=>{
                    const h = this.$createElement;
                    this.$notify({
                    title: 'success',
                    message: h('i', { style: 'color: teal'}, '标签添加成功')
                    });
                    this.conVisible= false;
                    setTimeout(() => {
                        location.reload()
                        //重加载
                    }, 100);
                }).catch((e)=>{
                    console.log(e)
                })
                }else{
                    // alert('不能为空')
                }
            },
            //删除标签
            dele(res){
                this.$confirm('此操作将永久删除该标签, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.post('/api/label/deLabel',{
                    label_id:res
                    })
                    .then(()=>{
                            this.$message({
                            type: 'success',
                            message: '删除成功!',
                            });
                            setTimeout(() => {
                                location.reload()
                            }, 500);
                    }).catch((e)=>{
                        console.log(e)
                    })
                
                })
                // .catch(() => {
                //     this.$message({
                //         type: 'info',
                //         message: '已取消删除'
                //     });          
                // });
            },

      },

      created(){
        this.getLabel();
        
      },

  }
  </script>
  
  <style lang="scss" scoped>
      .container{
        //   height: 250px;
        min-height: 100px;
        background-color: rgba(247, 247, 252, 0.85);
        // box-shadow: 0 0 8px 8px #edefee;
        box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.06);
        border: 0.1px solid transparent;
        border-radius: 7px;
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
    ::v-deep .el-tag{
        cursor: pointer;
        background-image: linear-gradient(135deg,#6bc30d,#30b8f5);
        background-clip:text;
        -webkit-background-clip:text;
        color: transparent;
        &:nth-child(2n+1){
            color: #30b8f5;
        }
    }
    .el-tag:hover{
        color: gray;
        background: #f0f9eb;
    }
  
  </style>