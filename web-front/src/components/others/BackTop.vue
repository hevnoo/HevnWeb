<template>
  <div>
    <el-backtop :visibility-height="60" :bottom="80" :right="80">
        <!-- <i class="el-icon-caret-top"></i> -->
        <img class="img_top" src="../../assets/img/top.png" alt="">
    </el-backtop>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

  .el-backtop{
      background-color: transparent;
      box-shadow:0 0 0 transparent;
      img{
          width: 50px;
          height: 60px;
      }
  }
  .img_top{
    animation:wiggle 5.5s linear infinite;
  }
  
  @keyframes wiggle {
    0%,
    85% {
      transform: rotateZ(0);
    }
    87% {
      transform: rotateZ(-15deg);
    }
    90% {
      transform: rotateZ(10deg);
    }
    93% {
      transform: rotateZ(-10deg);
    }
    96% {
      transform: rotateZ(6deg);
    }
    99% {
      transform: rotateZ(-4deg);
    }

    100% {
      transform: rotateZ(0);
    }
  }


</style>