<template>
    <div class="container">
        <el-empty class="empty" description="There's nothing here">
            <router-link to="/LoginTest"><button>测试按钮</button></router-link>
        </el-empty>
    </div>
</template>

<script>
    // import BlogList from "@/components/BlogList.vue";
    export default {
        name: 'About',
        components:{
            // BlogList
        },
        data(){
            return{
                
            }
        },
        methods:{
            
        },
        created(){

        }
    }
</script>

<style lang="scss" scoped>


    .container{
        // min-height: 100vh;
        min-height: calc(100vh - 200px);
        .empty{
            // margin-top: 30px;
        }
    }
  


</style>