<template>
    <div class="about_body">
        <!-- content为包裹左右两个盒子 -->
        <div class="car_content">
            <!-- 左边盒子 -->
            <div class="left">
                <!-- 博客列表卡片 -->
                <!-- <el-card class="box-card">
                    <div v-for="item in bloglist" :key="item" class="text item">
                        {{'列表内容 ' + item }}
                    </div>
                </el-card> -->
                <!-- <blog-list></blog-list> -->
                <!-- 测试 -->
                <div>{{$store.state.test.ttt}}</div>
                <button @click="test()">点击测试</button>
                <div>{{$store.state.test.youData}}</div>
            </div>
            <!-- 右边盒子 -->
            <div class="right">
                
            </div>

        </div>
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
                bloglist : [],
                myData:2022,
            }
        },
        methods:{
            getlist(){
                this.$axios.get('/api/article/allList')
                .then((res)=>{
                    // console.log(res.data.data);
                    this.bloglist = res.data.data;
                    
                }).catch((e)=>{
                    console.log(e);
                })
            },
            // 测试
            test(){
                this.$store.dispatch('test/do',this.myData)
            }
        },
        created(){
            this.getlist();
        }
    }
</script>

<style lang="scss" scoped>


    .about_body{
        // min-height: 100vh;
        min-height: calc(100vh - 200px);
        .car_content{
            display: flex;
            justify-content: center;
            // align-items: center;
        }
    }
  


</style>