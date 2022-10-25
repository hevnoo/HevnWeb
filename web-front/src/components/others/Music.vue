<template>
  <div>
    <div class="but" @mouseenter="enter()"  v-show="show">
        <i class="el-icon-caret-right"></i>
    </div>
    <!-- <el-tooltip content="播放音乐" placement="top" effect="light"> -->
    <div @click="open()" @mouseleave="leave1()" v-show="show1">
        <el-button >
            <i class="el-icon-video-play"></i>
        </el-button>
    </div>
    <!-- </el-tooltip> -->
    <el-drawer size title="音乐" :visible.sync="drawer" :with-header="false">
        <iframe 
        class="music" 
        :width=330 
        :height=480
        src="//music.163.com/outchain/player?type=0&id=2761182502&auto=1&height=430">
        </iframe>
    </el-drawer>
  </div>
</template>

<script>
export default {
    name:'Music',
    // props:['drawer'],
    data(){
        return {
            drawer: false,
            show: true,
            show1:false,
        }
    },
    methods:{
        open(){
            this.drawer=true;
        },  
        //
        enter(){
            this.show=false
            setTimeout(()=>{
                this.show1=true
            },200)
        },
        leave1(){
            this.show1=false
            setTimeout(()=>{
                this.show=true
            },200)
        },
        
    },
    created(){

    }

}
</script>

<style lang="scss" scoped>
.el-button {
    width: 60px;
    height: 35px;
    // background-color: #139eff;
    background-image: linear-gradient(269deg, rgba(19, 158, 255, 0.3), rgba(19, 158, 255, 0.6) 50%, rgba(19, 158, 255, 1));
    background-color: initial;
    position: fixed;
    // left: -14px;
    top: 70%;
    display: flex;
    align-items: center;
    padding-left: 10px;
}
.el-icon-video-play {
    font-size: 30px;
    color: #e6e6ea;
}
.but{
    width: 10px;
    height: 10px;
    position: fixed;
    left: -12px;
    top: 69.5%;
    animation:wiggle 6s linear infinite;

}
.el-icon-caret-right{
    font-size: 40px;
    background-image: linear-gradient(135deg,#6bc30d,#30b8f5);
    background-clip:text;
    -webkit-background-clip:text;
    color: transparent;
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