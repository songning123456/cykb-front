<template>
    <view class="index-style flex solid-bottom padding justify-center">
        <view class="flex solid-bottom padding align-center">
            <button class="cu-btn block bg-blue margin-tb-sm lg" @click="login">
                <!--            <text class="cuIcon-loading2 cuIconfont-spin"></text>-->
                登录
            </button>
        </view>
    </view>

</template>

<script>
    export default {
        name: "Login",
        methods: {
            login() {
                uni.navigateTo({
                    url: '/pages/home/Home'
                })
            }
        }
    }
</script>

<style scoped>

</style>