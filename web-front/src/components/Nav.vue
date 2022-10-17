<template>
    <div class="_container">
        <div class="_navs">
            <!-- <span class="_nav"><router-link to="/" style="color:#139eff">{{navName.nav}}</router-link></span> -->
            <span class="_nav" id="all" @click="getAll()">
                <router-link :to="{path:'/blogList'}"  active-class='active'>
                    <a :class="{'demo':is}" @click="q()">{{navName.nav}}</a>
                </router-link>
                <!-- <router-link :to="{path:'/'}" :class="{'demo':is}" @click="q()" active-class='active'>{{navName.nav}}</router-link> -->
            </span>
            <span class="_nav" id="front" @click="getFront()">
                <a :class="{'demo':is1}" @click="q1()">{{navName.nav1}}</a>
                <!-- <router-link :to="{name:'front',params:{clickVal:clickVal}}" active-class="active">{{navName.nav1}}</router-link> -->
            </span>
            <span class="_nav" id="back" @click="getBack()">
                <a :class="{'demo':is2}" @click="q2()">{{navName.nav2}}</a>
                <!-- <router-link :to="{name:'back',params:{clickVal:clickVal}}" active-class="active">{{navName.nav2}}</router-link> -->
            </span>
            <span class="_nav" id="mobile" @click="getMobile()">
                <a :class="{'demo':is3}" @click="q3()">{{navName.nav3}}</a>
            </span>
            <span class="_nav" id="code" @click="getCode()">
                <a :class="{'demo':is4}" @click="q4()">{{navName.nav4}}</a>
            </span>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Nav',
        components:{

        },
        data(){
            return{
                navName:{
                    nav:'博客推荐',
                    nav1:'前端',
                    nav2:'后端',
                    nav3:'移动开发',
                    nav4:'编程语言',
                },
                clickVal:'',
                is:true,
                is1:false,
                is2:false,
                is3:false,
                is4:false,
            }
        },
        methods:{
            getAll(){
                // this.$router.push({
                //     name:'blogList'
                // })
            },
            getFront(){
                this.clickVal=document.getElementById('front').innerText;
                this.$router.push({
                    name:'front',
                    params:{
                        clickVal:this.clickVal,
                    },
                })
                // this.clickVal='',
                // this.clickVal=document.getElementById('front').innerText;
            },
            getBack(){
                this.clickVal=document.getElementById('back').innerText;
                this.$router.push({
                    name:'back',
                    params:{
                        clickVal:this.clickVal,
                    }
                })
            },
            getMobile(){
                this.clickVal=document.getElementById('mobile').innerText;
                this.$router.push({
                    name:'mobile',
                    params:{
                        clickVal:this.clickVal,
                    }
                })
            },
            getCode(){
                this.clickVal=document.getElementById('code').innerText;
                this.$router.push({
                    name:'code',
                    params:{
                        clickVal:this.clickVal,
                    }
                })
            },
            //高亮效果
            q(){
                this.is=true
                this.is1=false
                this.is2=false
                this.is3=false
                this.is4=false
            },
            q1(){
                this.is=false
                this.is1=true
                this.is2=false
                this.is3=false
                this.is4=false
            },
            q2(){
                this.is=false
                this.is1=false
                this.is2=true
                this.is3=false
                this.is4=false
            },
            q3(){
                this.is=false
                this.is1=false
                this.is2=false
                this.is3=true
                this.is4=false
            },
            q4(){
                this.is=false
                this.is1=false
                this.is2=false
                this.is3=false
                this.is4=true
            },
        },

        created(){
            // this.getAll();
        },
    }
</script>

<style lang="scss" scoped>

._container{
    height: 55px;
    width:100%;
    margin-left: 20px;
    background-color: #f8f8fd;
    border-bottom: 1px solid #e6e6ea;
    display: flex;
    align-items: center;
}
// ._nav::selection{
//     background: red;
// }
.demo{
    color: #139eff;
}
._navs{
        height: 20px;
        // .router-link-active{
        //     color: red;
        // }
        // margin:20px auto 0 40px;
        // background-color: aquamarine;
        ._nav{
            margin-right:50px;
            cursor: pointer;
        }
        &:first-child{
            margin-left: 20px;
        }
    }


</style>