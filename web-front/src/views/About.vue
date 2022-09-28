<template>
    <div class="allabout">
    <div class="main">
        <span class="guanyu">About</span>
        <el-divider></el-divider>
        
      </div>
    <el-card class="box-card">
        <div>
        <div class="item">

        </div>
        <div class="item">
          vue+element+nodejs
        </div>
        <div class="item">

          </div>
          <div class="item">

          </div>
    </div>
      </el-card>
    </div>
</template>

<script>
    export default {
        name: 'about'
    }
</script>

<style lang="scss" scoped>
    .allabout {
        height: 520px;
    }
    
    .main {
        text-align: center;
        margin: 20px auto;
    }
    
    .guanyu {
        font-size: 25px;
    }
    
    .item {
        font-size: 14px;
        padding: 18px 0;
    }
    
    .box-card {
        float: left;
        margin-left: 50%;
        transform: translate(-50%);
        width: 680px;
    }
</style>