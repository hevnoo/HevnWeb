<template>
    <div class="wrapper">
        <el-pagination
        background
        layout="total, prev, pager, next, jumper"
        :total="total"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="handleCurrentChange"
        >
        </el-pagination>
    </div>
        
  </template>
  
  <script>
  export default {
    props:{
        total:{
            type:Number,
            default:100
        },
        pageSize:{
            type:Number,
            default:10
        },
        
    },
    data(){
        return {
            currentPage:1,
            
        }
    },
    methods:{
        //当前页改变时触发，将当前页码传给父组件。
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            this.currentPage = val;
            this.$emit('currentChange',this.currentPage)
        },
    },
    created() {
        
    },
    
}
  </script>
  
  <style lang="scss" scoped>


  </style>