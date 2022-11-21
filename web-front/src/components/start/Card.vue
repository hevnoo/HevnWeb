<template>
  <div class="container">
    <div class="box">
        <header class="header">
            <h1 class="h1">
                <div class="i">
                    <span class="_hh">Hevn</span>
                </div>
                <span>
                    、个人博客
                    <span class="star" :style="{marginLeft:10}">✦</span>
                </span>
            </h1>
        </header>
        <div class="main">
            <h2 class="h2">
                <div class="i">
                    <span class="_hh">Hevn</span>
                </div>
                <span>'s blog</span>
            </h2>
        </div>
        <footer class="footer">
            <router-link to="/github" active-class="active" target="_blank">
                <el-button class="git but" type="primary" round>
                    Github
                </el-button>
            </router-link>
            <router-link to="/home" active-class="active">
                <el-button class="blog but" type="primary" plain round>
                    进入博客
                </el-button>
            </router-link>
        </footer>
    </div>
  </div>
</template>

<script>
export default {
    name:'Card',
    data(){
        return{
            
        }
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    display: flex;
    justify-content: center;
}
.box{
    width: 600px;
    height: 300px;
    // background-color: aqua;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
}
.h1{
    font-size: 35px;
    color: #fff;
    display: flex;
    justify-content:space-between;
}
.h2{
    font-size: 30px;
    color: #fff;
    display: flex;
    justify-content:space-between;
}
._hh{
    background-image: linear-gradient(135deg,#6bc30d,#30b8f5);
    background-clip:text;
    -webkit-background-clip:text;
    color: transparent;
}
.header{
    margin-top: 30px;
}
.main{
    margin: 30px auto 0 auto;
}
.footer{
    width: 450px;
    // background-color: antiquewhite;
    margin-top: 80px;
    display: flex;
    justify-content:space-between;
}
.el-button{
    width: 200px !important;
    height: 45px;
    font-size: 18px;
}
.blog{
    color: #fff;
    border: 2px solid #e6e6ea;
    background-color: transparent;
}
.blog:hover{
    background-color: transparent;
    border: 2px solid #6bc30d;
    // border-image: linear-gradient(to bottom right,#6bc30d, #30b8f5) 10;;
    //文字渐变色
    background-image: linear-gradient(135deg,#30b8f5,#6bc30d);
    background-clip:text;
    -webkit-background-clip:text;
    color: transparent;
}
.git{
    color: #fff;
    border: 0;
    background-image: linear-gradient(135deg,#6bc30d,#30b8f5);
}
.git:hover{
    background-image: linear-gradient(135deg,#30b8f5,#6bc30d);
}
.i{
    animation: runAll 6s linear -3s backwards infinite;
    // transition: all 0.01s 1;
}
.star{
    animation: star 1s linear 0s backwards infinite;
}
@keyframes runAll {
    0%,80% {
        transform: rotateX(0);
    }
    90%{
        transform: rotateX(120deg);
    }
    93%{
        transform: rotateX(220deg);
    }
    96%{
        transform: rotateX(300deg);
    }
    100% {
        transform: rotateX(360deg);
    }
}
@keyframes star {
    0%,40%{
        opacity: 0;
    }
    50%{
        opacity: 0.7;
    }
    100%{
        opacity: 1;
    }
}


</style>