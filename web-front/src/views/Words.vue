<template>
    <div class="container">
        <!-- 回顶部 -->
        <back-top></back-top>
        <div class="wrapper">
            <header class="header">
                <div class="logo">
                    <span class="title">留言板</span>
                    <span class="star">✦</span>
                </div>
            </header>
            <div class="main">
                <words-card></words-card>
                <words-list></words-list>
            </div>
        </div>
    </div>
</template>

<script>
    import WordsCard from'@/components/words/WordsCard.vue'
    import WordsList from'@/components/words/WordsList.vue'
    import BackTop from '@/components/others/BackTop.vue'
    export default {
        name: 'Words',
        components:{
            WordsCard,
            WordsList,
            BackTop
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
        display: flex;
        justify-content: center;
    }
    .wrapper{
        width: 1110px;
        display: flex;
        flex-direction: column;
    }
    .header{
        width: 1110px;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        .logo{
            font-size: 30px;
            font-weight: 600;
            color: rgba(250,250,250,0.9);
        }
    }
    .main{
        width: 1110px;
        min-height: 600px;
        background-color: rgba(247, 247, 252, 0.95);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    
    .star{
        margin-left: 10px;
        animation: star 1s linear 0s backwards infinite;
    }
    @keyframes star {
        0%,40%{
            opacity: 0;
        }
        50%{
            opacity: 0.7;
        }
        100%{
            opacity: 1;
        }
    }

</style>