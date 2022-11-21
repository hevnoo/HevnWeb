<template>
  <div class="container">
    <div class="one_header">
        <div class="header_left">联系方式</div>
        <div class="header_right"></div>
    </div>
    <el-divider></el-divider>
    <!--  -->
    <div class="main">
        <div class="qq item" draggable="true">
            <i class="iconfont icon-QQ iii"></i>
            <span>961584775</span>
        </div>
        <div class="git item" draggable="true">
            <i class="iconfont icon-github iii"></i>
            <span><a href="https://github.com/hevnoo">https://github.com/hevnoo</a></span>
        </div>
        <div class="mail item" draggable="true">
            <i class="iconfont icon-email iii"></i>
            <span>961584775@qq.com</span>
        </div>
        <div class="bili item" draggable="true">
            <i class="iconfont icon-bilibili-line iii"></i>
            <span>space.bilibili.com</span>
        </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
    name:'One',
    components:{
        
    },
    data(){
        return{
            list:null,
            
        }
    },
    methods:{
        
    },
    created(){
        
    },
}
</script>

<style lang="scss" scoped>
    .container{
        // height: 380px;
        min-height: 180px;
        background-color: rgba(247, 247, 252, 0.85);
        // box-shadow: 0 0 8px 8px #edefee;
        box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.06);
        border: 0.1px solid transparent;
        border-radius: 7px;
        .one_header{
            height: 30px;
            // margin-top: 20px;
            display: flex;
            justify-content:space-between;
            align-items: center;
            
            .header_left{
                margin-left: 45px;
                cursor: pointer;
                padding-top: 20px;
            }
            .header_right{
                cursor: pointer;
                padding-top: 20px;
            }
        }
    }  
    .main{
        width: 100%;
        flex-direction: column;
    }
    .item{
        width: 260px;
        height: 50px;
        background-color: aquamarine;
        margin: 0 auto 12px auto;
        border-radius: 8px;
        display: flex;
        align-items: center;
        cursor: pointer;
        &:nth-child(1){
            margin-top: -10px;
        }
    }
    .item:hover{
        box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
    }
    // .item.moving{
    //     background: transparent;
    //     color: transparent;
    //     border: 1px dashed #cccc;
    // }
    .iii{
        font-size: 30px;
        color: #eaeaea;
        margin-left: 10px;
    }
    .qq{
        background-color: rgba(49, 117, 177, 0.9);
        span{
            margin-left: 5px;
            color: #eaeaea;
        }
    }
    .git{
        background-color: rgba(59, 60, 58, 0.9);
        span{
            margin-left: 5px;
            color: #eaeaea;
        }
    }
    .mail{
        background-color: rgba(255, 164, 31, 0.9);
        span{
            margin-left: 5px;
            color: rgba(0, 0, 0, 1);
        }
        .iii[data-v-91c17ac4]{
            color: rgba(59, 60, 58, 0.9) !important;
            font-size: 27px;
        }
    }
    .bili{
        background-color: rgba(254, 135, 157, 0.9);
        margin-bottom: 20px;
        span{
            margin-left: 5px;
            color: #eaeaea;
        }
    }
    

</style>