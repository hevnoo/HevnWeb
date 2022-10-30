<template>
    <div class="container">
        <back-top></back-top>
        <Header class="header" id="nav-bar" :class="navShow?'navOn':'navOff'"></Header>
        <div class="box"></div>
        <Card></Card>
        <router-view></router-view>
        <Footer class="footer"></Footer>
    </div>
</template>

<script>
    import Header from '@/components/start/Header.vue'
    import Footer from '@/components/start/Footer.vue'
    import Card from '@/components/start/Card.vue'
    import BackTop from '../components/others/BackTop.vue'
    export default {
        name: 'Start',
        components:{
            Header,
            Footer,
            Card,
            BackTop,
        },
        data(){
            return{
                top:'',
                navShow:'true',
            }
        },
        methods:{
            
        },
        watch:{
        // 监听top值的变化
        top(newValue,oldValue){
                // 等新值大于100的时候再做变化（优化一下）
                if(newValue > 100){
                    if(newValue > oldValue){
                        this.navShow = false
                        // console.log('向下滚动')
                    }else{
                        this.navShow = true
                        // console.log('向上滚动')
                    }
                }
            }
    
        },
        mounted(){
        // 获取浏览器滚轮
        window.addEventListener('scroll', () => {
                this.top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
            })
        },
    }
</script>

<style lang="scss" scoped>


    .container{
        min-height: 100vh;
        // min-height: calc(100vh - 200px);
        background: url('../assets/img/3.webp');
        background-repeat: round;
        background-attachment: fixed;
    }
//
    .header{
      position:sticky;
      top:0px;
      z-index:3;
    }
    //页面滚动
    .navOn{
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          transition: all 0.3s ease-in-out 0.3s;
          transform: translateZ(0);
      }
      .navOff{
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          transition: all 0.3s ease-in-out 0.3s;
          transform: translate3d(0,-100%,0);
      }
    //
    .box{
        min-height: 30vh;
    }

</style>