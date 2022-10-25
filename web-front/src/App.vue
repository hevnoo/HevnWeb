<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // background-color: #e9ecef;
  background-color: #e6e6ea;
}

// .router-link-active{
//   color: #139eff;
// }
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
//分页
.page{
  height: 150px;
  // background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-pagination{
    color: #6bc30d !important;
  }
  .el-pagination:hover{
    color: aquamarine !important;
  }
}


</style>
