<!-- 文章详情页 -->
<template>
  <div class="container" >
    <!-- 回顶部 -->
    <back-top></back-top>
    <div class="box_out">
      <div class="box">
        <div class="left">
          <detail-list></detail-list>
          <div :style="{height:'15px'}"></div>
          <Comment></Comment>
        </div>
        <div class="right">
          <Info class="info"></Info>
          <Hot class="hot"></Hot>
          <Catalogue class="catalogue"></Catalogue>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import BackTop from '@/components/others/BackTop.vue'
  import DetailList from '@/components/detail/DetailList.vue'
  import Info from '@/components/detail/Info.vue';
  // import Comment from '@/components/Comment.vue'
  import Hot from '@/components/detail/Hot.vue'
  import Comment from '@/components/Comment.vue'
  import Catalogue from '../components/detail/Catalogue.vue';
  export default {
    name:'Detail',
    data() {
      return {
        blogDetail:{}
      }
    },
    components:{
        BackTop,
        DetailList,
        Info,
        Hot,
        Comment,
        Catalogue,
    },
 
    methods:{

    },
    created() {
    },
  }
</script>

<style lang="scss" scoped>

  .box_out{
    display: flex;
    flex-direction: row;
    justify-content: center;
    .box{
      width: 1130px;
      // margin: auto 170px;
      display: flex;
      justify-content: space-between;
      .left{
        width: 830px;
      }
      .right{
        width: 285px;
        margin-top: 30px;
      }
    }
  }
  .info{
    // position:sticky;
    // top:70px;
    // z-index:2;
  }
  .hot{
    margin-top: 15px;
  }
  .catalogue{
    margin-top: 15px;
    position:sticky;
    top:63px;
    z-index:2;
  }

</style>