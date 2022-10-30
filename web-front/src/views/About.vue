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
    </div>
</template>

<script>
    
    export default {
        name: 'About',
        components:{
            
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
        min-height: 100vh;
        // min-height: calc(100vh - 200px);
        display: flex;
        justify-content: center;
    }
    .card{
        width: 800px;
        height: 400px;
        margin: 60px auto auto auto;
        border-radius: 10px;
        box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.06);
        background-color: rgba(247, 247, 252, 0.95);
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 280px;
            height: 100px;
            margin-top: 50px;
        }
    }
    .text{
        font-size: 25px;
        font-weight: 500;
        color: rgba(0,0,0,0.9);
        margin: 80px auto 40px auto ;
    }

    //
    .load {
        display: inline-block;
        width: 45px;
        height: 45px;
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