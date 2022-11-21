<template>
    <!-- 此组件支持自定义按钮文字和自定义按钮图片 -->
    <button 
    class="rytBtn"
    :style="{
        backgroundColor:btnBgc,
        color:color,
        width:width,
        height:height,
        fontSize:fontSize,
        boxShadow:boxShadow,
        border:border,
        borderRadius:borderRadius,
    }" 
    @click="handleClick()" >
        <label class="btnText">
            <slot></slot>
        </label>
    </button>
</template>
 
<script>
    // import {debounce} from '@/utils/debounce.js'
     export default {
           name:'ShadowButton',
           props:{
               btnBgc:{
                   type:String,
                   default:'pink'
               },
               color:{
                   type:String,
                   default:'rgba(250, 250, 250, 1)'
               },
               width:{
                   type:String,
                   default:'200px'
               },
               height:{
                   type:String,
                   default:'44px'
               },
               fontSize:{
                   type:String,
                   default:'16px'
               },
               boxShadow:{
                   type:String,
                   default:'0px 2px 4px 0px rgba(255,130,0,0.7)'
               },
               border:{
                    type:String,
                    default:'1px solid rgba(0, 0, 0, 0.8)'
               },
               borderRadius:{
                    type:String,
                    default:'22px'
               },
           },
          data(){
              return{
                
              }
          },
          methods:{
            handleClick(){
                this.$emit('clickBtn')
            },
            // debounce(fn, time=1000) {
            //     let timer
            //     return function () {
            //         const args = arguments
            //         if (timer) clearTimeout(timer)
            //         timer = setTimeout(() => {
            //             fn.call(this, args)
            //         }, time)
            //     }
            // }


          },
 
     }
</script>
<style lang="scss" scoped>
  .rytBtn{
      position: relative;
    //   border-radius: 22px;
  }
  /*思路：添加伪元素，设置伪元素的透明度opacity伪0，当点击的时候利用伪类:active 改变透明度伪
  0.3，从而实现透明度的添加，效果类似mint-ui中的按钮效果*/
  .rytBtn::after { 
    position:absolute;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 22px;
    content: " ";
    opacity: 0;
    top:0px;
    bottom:0px;
    left:0px;
    right:0px;
  }
  .rytBtn:active::after{ 
       opacity: 0.3;
  }
 .rytBtn .btnText{
      font-size: 18px;
  }
 .rytBtn:hover{
    cursor: pointer;
 }
 
</style>