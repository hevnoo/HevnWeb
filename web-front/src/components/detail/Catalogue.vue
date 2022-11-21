<template>
  <div class="wrapper">
    <div class="box">
        <header class="header">
            <span class="logo">目录</span>
        </header>
        <main class="main" v-for="item in cataList" :key="item.id" @click="goId(item.id)">
            <div class="card">
                <a class="a" v-if="item.nodeName=='H1'"><p>{{item.title}}</p></a>
                <a class="a" v-else><i>* {{item.title}}</i></a>
                <!-- <a :href="`#${item.id}`" class="a" v-if="item.nodeName=='H1'"><p>{{item.title}}</p></a> -->
                <!-- <a :href="`#${item.id}`" class="a" v-else><i>* {{item.title}}</i></a> -->
            </div>
        </main>
        <footer class="footer"></footer>
    </div>
  </div>
</template>

<script>
export default {
    name:'Catalogue',
    data(){
        return {
            
        }
    },
    methods:{
        //用js提供的api解决锚点跳转与路由冲突
        goId(id){
            let section = document.getElementById(id)
            if (section) {
                section.scrollIntoView()
            }
        },
    },
    computed: {
        cataList(){
            return this.$store.state.data.catalog;
        }
    },
    created(){
        
    },

}
</script>

<style lang="scss" scoped>

    .wrapper{
        min-height: 100px;
        background-color: #fbfbfb;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) outset;
        border-radius: 5px;
    }
    .box{
        display: flex;
        flex-direction: column;
    }
    .header{
        height: 50px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
    }
    .logo{
        margin: auto auto auto 40px;
    }
    .main{
        
    }
    .card{
        height: 30px;
        margin-bottom: 5px;
        // background-color: rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
    }
    .a{
        display: inline-block;
        height: 100%;
        width: 100%;
        line-height: 30px;
        cursor: pointer;
        p{
            margin: auto 10px auto 20px;
            // 省略号后面内容
            // line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        i{
            margin: auto 10px auto 40px;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.6);
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
    }
    .a:hover{
        color: #30a3d9;
        background-color: rgba(0, 0, 0, 0.1);
    }

</style>