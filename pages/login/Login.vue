<template>
    <view class="index-style flex solid-bottom padding justify-center">
        <view class="flex solid-bottom padding align-center">
            <button class="cu-btn block bg-blue margin-tb-sm lg" open-type="getUserInfo" @getuserinfo="loginIntoWechat"
                    withCredentials="true">
                登录
            </button>
        </view>
    </view>

</template>

<script>
    export default {
        name: "Login",
        mounted() {
            uni.getStorage({
                key: 'userInfo',
                success: response1 => {
                    uni.navigateTo({
                        url: '/pages/home/Home?user=' + response1
                    });
                },
                fail: reject1 => {
                    debugger;
                    // doNothing...
                }
            });
        },
        methods: {
            loginIntoWechat() {
                debugger;
                uni.login({
                    success: response2 => {
                        debugger;
                        uni.showLoading({
                            title: '登陆中'
                        });
                        // 获取用户信息
                        uni.getUserInfo({
                            provider: 'weixin',
                            success: response3 => {
                                debugger;
                                uni.hideLoading();
                                uni.setStorage({
                                    key: 'userInfo',
                                    data: response3
                                });
                            },
                            fail: reject3 => {
                                debugger;
                                uni.hideLoading();
                                uni.showToast({
                                    title: '获取用户信息失败',
                                    duration: 1000,
                                    icon: 'none'
                                });
                            }
                        });
                    },
                    fail: response2 => {
                        debugger;
                        uni.showToast({
                            title: '登录失败',
                            duration: 1000,
                            icon: 'none'
                        });
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
