<template>
    <div class="container_">
        <div class="wrapper">
            © 2022 Hevn . All Rights Reserved.
        </div>
        <footer class="footer">
            赣ICP备2022010422号
        </footer>
    </div>
</template>

<script>
    export default {
        name:'Footer'
    }
</script>

<style lang="scss" scoped>
.container_{
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
}
.footer{
    margin: auto auto 30px  auto;
}
</style>