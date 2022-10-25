<template>
  <div>
    <el-backtop :visibility-height="60" :bottom="80" :right="80">
        <!-- <i class="el-icon-caret-top"></i> -->
        <img src="../../assets/img/top.png" alt="">
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

</style>