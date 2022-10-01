<template>
    <div class="container">
      <div class="box">
        <div class="header">
          <span class="logo">HevnWeb</span>
        </div>
        <!--  -->
        <div class="main">
          <div class="main_header">
            <p class="card">
              <i class="el-icon-warning-outline"
              style="color:#fc5531">
              </i>
              <span>请注意您的账号安全</span>
            </p>
          </div>
          <div class="main_footer">
            <div class="one">
              
            </div>
            <div class="two">
              
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
export default {
  name:'Remind'
    
}
</script>

<style lang="scss" scoped>
  .container{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .box{
      width: 400px;
      height: 270px;
      // border: 1px solid;
      // border-radius: 5%;
      background: #f8f8fd;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) outset;
    }
  }
  .header{
    width: 100%;
    height: 70px;
    background-color: #e6e6ea;;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo{
      font-size: 30px;
      font-weight: 700;
      cursor: pointer;
    }
  }
  .main{
    width: 100%;
    height: 200px;
    // background-color: pink;
    border: 1px solid;
    border-radius: 5%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    flex-direction: column;
    .main_header{
      width: 100%;
      height: 70px;
      background-color: pink;
      display: flex;
      justify-content:center;
      align-items: center;
      .card{
        width:350px;
        height: 40px;
        font-size: 17px;
        font-weight: 600;
        background-color: #fdf5e6;
        border-radius: 5%;
        display: flex;
        align-items: center;
        padding-left: 15px;
      }
    }
    .main_footer{
      // width: auto;
      height: 130px;
      background-color: aqua;
    }
  }

</style>