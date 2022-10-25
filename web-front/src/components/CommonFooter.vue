<template>
    <footer class="footer">
        <div class="wrapper">
            © 2022 Hevn Team. All Rights Reserved.
        </div>
    </footer>
</template>

<script>
    export default {
        name:'CommonFooter'
    }
</script>

<style lang="scss" scoped>
.footer{
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .wrapper {
        height: 30px;
        // text-align: center;
        box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
    }
}
</style>