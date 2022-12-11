<template>
  <div class="container">
    <common-header class="header" id="nav-bar" :class="navShow?'navOn':'navOff'"></common-header>
    <div class="nulls"></div>
    <!-- <router-view :key="$store.state.search.page_num1"></router-view> -->
    <router-view></router-view>
    <common-footer class="footer"></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue'
import CommonFooter from '@/components/CommonFooter.vue'
export default {
  name:'CommonLayout',
  components:{
    CommonHeader,
    CommonFooter
  },
  data(){
    return {
      top:'',
      navShow:true,
      look:false
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
		},
    // 监听,当路由发生变化的时候执行
    // $route(to){
    //   if(to.path){
    //     this.look = true
    //     console.log(to.path);
    //   }
    // },
    // $route: {
    //   handler: function(val, oldVal){
    //     console.log(val,oldVal);
    //   },
    //   // 深度观察监听
    //   deep: true
    // },

  },
  mounted(){
    // 获取浏览器滚轮
    window.addEventListener('scroll', () => {
			this.top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
		})
  },
};
</script>

<style lang="scss" scoped>

  .header{
    position:sticky;
    top:0px;
    z-index:999;
  }
  .nulls{
    //导航栏脱离文档流，用一个div盒子代替高度
    height: 59px;
    width: 100%;
    // backdrop-filter: blur(80px);
  }
  .footer {
    // margin-top: 80px;
    // padding: 15px 0;
    // background: #2d2d2d;
    // color: #bbb;
    // box-shadow: 0 -2px 4px 1px rgba(0, 0, 0, 0.5);
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

</style>
