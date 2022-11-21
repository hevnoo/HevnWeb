  <template>
      <div class="container">
        <div class="box">
          <header class="header_out">
            <span class="logo">HevnWeb</span>
          </header>
          <!--  -->
          <div class="main_out">
            <div class="main">
              <header class="main_header">
                <p class="card">
                  <i class="el-icon-warning-outline"
                  style="color:#fc5531;font-size:25px">
                  </i>
                  <span style="margin-left:5px">请注意您的账号安全</span>
                </p>
              </header>
              <!--  -->
              <footer class="main_footer">
                <div class="one">
                  <p class="one_text">您即将离开界面，是否要继续？</p>
                </div>
                <div class="two">
                  <a href="https://github.com/hevnoo/HevnWeb">
                    <el-button type="danger" plain round>
                      继续
                    </el-button>
                  </a>
                </div>
              </footer>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
  </template>
  
  <script>

  export default {
      name:'Remind',
      components:{},
      methods:{
        // go(){
        //   this.$router.replace({
        //     path:'https://github.com/hevnoo/HevnWeb',
            
        //   })
        // }
      }
  }
  </script>
  
  <style lang="scss" scoped>
    .container{
      min-height: 100vh;
      background-color: #e6e6ea;
      display: flex;
      justify-content: center;
      align-items: center;
      .box{
        width: 400px;
        height: 270px;
        background-color: #e6e6ea;

      }
    }
    .header_out{
      width: 100%;
      height: 70px;
      background-color: #e6e6ea;
      display: flex;
      justify-content: center;
      align-items: center;
      .logo{
        font-size: 33px;
        font-weight: 700;
        cursor: pointer;
      }
    }
    .main_out{
        width: 100%;
        height: 200px;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) outset;
        border: 1px solid #e6e6ea;
        border-radius: 10px;
        .main{
          width: 360px;
          height: 160px;

          .main_header{
            width: 100%;
            height: 60px;
            // background-color: pink;
            display: flex;
            justify-content:center;
            align-items: center;
              .card{
                width:100%;
                height: 45px;
                font-size: 17px;
                font-weight: 600;
                background-color: #fdf5e6;
                border-radius: 5%;
                display: flex;
                align-items: center;
                padding-left: 10px;
              }
          }
          .main_footer{
            width: 100%;
            height: 100px;
            // background-color: aqua;
            .one{
              width: 100%;
              height: 40%;
              // background-color: antiquewhite;
              .one_text{
                margin-top: 10px;
              }
            }
            .two{
              width: 100%;
              height: 60%;
              // background-color: red;
              display: flex;
              justify-content: right;
              align-items: center;
              button{
                margin-right: 10px;
              }
            }
          }
        }
      }
   
    

  </style>