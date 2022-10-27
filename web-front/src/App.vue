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
  // background-color: #e6e6ea;

  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='87' height='50.232' patternTransform='scale(9) rotate(20)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(180, 5%, 96%, 1)'/><path d='M0 54.424l14.5-8.373c4.813 2.767 9.705 5.573 14.5 8.37l14.5-8.373V29.303M0 4.193v16.744l-14.5 8.373L0 37.68l14.5-8.374V12.562l29-16.746m43.5 58.6l-14.5-8.37v-33.49c-4.795-2.797-9.687-5.603-14.5-8.37m43.5 25.111L87 37.67c-4.795-2.797-24.187-13.973-29-16.74l-14.5 8.373-14.5-8.37v-33.489m72.5 8.365L87 4.183l-14.5-8.37M87 4.183v16.745L58 37.673v16.744m0-66.976V4.185L43.5 12.56c-4.795-2.797-24.187-13.973-29-16.74L0 4.192l-14.5-8.37m29 33.484c4.813 2.767 9.705 5.573 14.5 8.37V54.42'  stroke-linecap='square' stroke-width='1' stroke='hsla(0, 0%, 100%, 0.5)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-90,-13.176)' fill='url(%23a)'/></svg>")

  
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
  .el-pager li.active {
    // color: #6bc30d;
    color: #139eff;
    background-color: #f0f9eb;
  }
  .el-pagination{
    color: #6bc30d !important;
  }
}


</style>
