<!-- 文章详情页 -->
<template>
  <div class="container">
    <div class="box_out">
      <div class="box">
        <div class="left">
          <detail-list></detail-list>
        </div>
        <div class="right">
          <detail-side class="side"></detail-side>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import DetailList from '../components/DetailList.vue'
import DetailSide from '../components/DetailSide.vue';
  // import Comment from '@/components/Comment.vue'
  export default {
    name:'Detail',
    data() {
      return {
        blogDetail:{}
      }
    },
    components:{
        DetailList,
        DetailSide
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
      width: 1200px;
      // margin: auto 170px;
      display: flex;
      justify-content: space-between;
      .left{
        width: 900px;
      }
      .right{
        width: 280px;
        margin-top: 30px;
      }
    }
  }
  .side{
    position:sticky;
    top:70px;
    z-index:2;
  }

</style>