<template>
    <div class="container">
        <div class="card">
            <img src="@/assets/img/hello.png" alt="">
            <div class="text">Maybe we Have a Cup of Coffee or Something</div>
            <div class="under">
                <div class="load"></div>
                <div class="load two"></div>
                <div class="load three"></div>
            </div>
        </div>
        <!-- <button>
            <router-link to="/test1">test1</router-link>
        </button> -->
        <!-- <shadow-button btnBgc="#FF8200" @clickBtn="run()">按钮</shadow-button> -->
    </div>
</template>

<script>
    // import ShadowButton from '@/components/button/ShadowButton.vue';
    export default {
        name: 'About',
        components:{
            // ShadowButton,
        },
        data(){
            return{
                
            }
        },
        methods:{
            run(){
                this.$router.push({
                    name:'test1'
                })
            },

        },
        created(){
            
        }
    }
</script>

<style lang="scss" scoped>

    .container{
        min-height: 100vh;
        // min-height: calc(100vh - 200px);
        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: center;
    }
    .card{
        width: 800px;
        height: 400px;
        margin: 250px auto auto auto;
        border-radius: 10px;
        box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.06);
        background-color: rgba(247, 247, 252, 0.95);
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 250px;
            height: 70px;
            margin-top: 70px;
        }
    }
    .text{
        font-size: 25px;
        font-weight: 500;
        color: rgba(0,0,0,0.9);
        margin: 80px auto 80px auto ;
    }

    //
    .load {
        display: inline-block;
        width: 30px;
        height: 30px;
        background: orange;
        border-radius: 50%;
        animation: loading 1s linear infinite;
    }
    .two {
        animation-delay: -0.2s;
    }
    .three {
        animation-delay: -0.4s;
    }
    @keyframes loading {
        0% {
            transform: scale(0.3);
            opacity: 0.5;
        }

        50% {
            transform: scale(1);
            opacity: 1;
        }

        100% {
            transform: scale(0.3);
            opacity: 0.5;
        }
    }
    //
    

</style>