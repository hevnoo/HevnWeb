<template>
    <div class="container">
        <el-empty class="empty" description="There's nothing here">
            <!-- <router-link to="/"><button>测试</button></router-link> -->
            <div class="remind">{{remind | mySlice}}</div>
            <!-- <button @click="get()">混合</button> -->
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
                remind:'Please try another pages xxx',
            }
        },
        methods:{
            // get(){
            //     this.$doMixin()
            // }
        },
        created(){

        }
    }
</script>

<style lang="scss" scoped>


    .container{
        // min-height: 100vh;
        min-height: calc(100vh - 200px);
        // margin-top: 60px;
        .empty{
            // margin-top: 30px;
        }
    }
    .remind{
        font-size: 12;

    }


</style>