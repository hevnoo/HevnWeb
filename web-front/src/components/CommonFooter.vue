<template>
    <div class="container">
        <div class="wrapper">
            © 2022 Hevn . All Rights Reserved.
        </div>
        <footer class="footer">
            赣ICP备13113338-1号
        </footer>
    </div>
</template>

<script>
    export default {
        name:'CommonFooter'
    }
</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    height: 150px;
    margin: 0;
    padding: 0;
    color: rgba(230, 230, 234, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.wrapper {
    margin: 70px auto 20px auto;
    // height: 30px;
    // text-align: center;
    // box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
}
.footer{
    margin: auto auto 30px  auto;
}

</style>