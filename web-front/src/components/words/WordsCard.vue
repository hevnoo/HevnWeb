<template>
    <div class="container_">
        <div class="card">
                <img class="img" src="@/assets/img/words.jpg" alt="">
                <h1 class="name">Hevn</h1>
                <div class="tips">有空进来坐坐~</div>
                <div class="icon">
                    <i class="iconfont icon-QQ iii"></i>
                    <i class="iconfont icon-github iii"></i>
                    <!-- <i class="iconfont icon-email iii mail"></i>
                    <i class="iconfont icon-bilibili-line iii"></i> -->
                </div>
        </div>
    </div>
</template>

<script>
    
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

    .card{
        width: 300px;
        height: 250px;
        // background-color: aquamarine;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .img{
        width: 140px;
        height: 140px;
        border-radius: 100%;
        margin-top: -70px;
        box-shadow: 0 2px 5px 5px rgba(0, 0, 0, 0.08);
    }
    .name{
        font-size: 28px;
        font-weight: 550;
        color: rgba(0,0,0,0.7);
        margin-top: 20px;
    }
    .tips{
        font-size: 18px;
        font-weight: 520;
        color: rgba(0,0,0,0.7);
        margin:20px auto;
    }
    .icon{
        // height: 30px;
        .iii{
            font-size: 30px;
            color: rgba(0,0,0,0.7);
            margin:auto 8px auto 8px;
        }
    }

</style>