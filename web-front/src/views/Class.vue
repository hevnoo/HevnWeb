<template>
    <div class="container">
        <div class="wrapper">
            <header class="header">
                <div class="logo">
                    <span class="title">分类</span>
                    <span class="star">✦</span>
                </div>
            </header>
            <div class="main">
                <div class="_main">
                    <br>
                    <br>
                    <span class="i aa" v-for=" item in options.slice(0,4)" :key="item.id">
                        {{item.label}}
                    </span>
                    <br>
                    <br>
                    <br>
                    <span class="i bb" v-for=" item in options.slice(4,8)" :key="item.id">
                        {{item.label}}
                    </span>
                    <br>
                    <br>
                    <br>
                    <span class="i cc" v-for=" item in options.slice(8,12)" :key="item.id">
                        {{item.label}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: 'Class',
        components:{
            
        },
        data(){
            return{
                options:[],
            }
        },
        methods:{
            getLabel(){//获取所有标签
                this.$axios.get('/api/label/allLabel')
                .then((res)=>{
                    this.options = res.data.data
                    // this.options = this.options.map((m)=>{
                    //     return m.label
                    // })
                    // console.log(this.options)
                }).catch((e)=>{
                    console.log(e)
                })
            },
        },
        created(){
            this.getLabel();
            
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
        height: 500px;
        // background-color: aquamarine;
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
        min-height: 400px;
        background-color: rgba(247, 247, 252, 0.95);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ._main{
        width: 800px;
        height: 270px;
        padding: 50px;
        // background-color: pink;
        overflow: auto;
    }
    .i{
        margin: 20px 20px 20px 80px;
        font-size: 15px;
        font-weight: 520;
        color: rgba(63, 120, 137, 0.7);
        cursor: pointer;
    }
    .aa{
        &:nth-child(2n){
            font-size: 20px;
            font-weight: 520;
            color: rgba(63, 120, 137, 1);
        }
    }
    .bb{
        &:nth-child(2n){
            font-size: 20px;
            font-weight: 520;
            color: rgba(63, 120, 137, 1);
        }
    }
    .cc{
        &:nth-child(2n){
            font-size: 20px;
            font-weight: 520;
            color: rgba(63, 120, 137, 1);
        }
    }
    .i:hover{
        color: #30a3d9;
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