<template>
    <footer>
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
footer{
    width: 100%;
    .wrapper {
        height: 30px;
        text-align: center;
        // background-color: gray;
        box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.1);
    }
}
</style>