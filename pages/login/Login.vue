<template>
    <view class="index-style flex solid-bottom padding justify-center">
        <view class="flex solid-bottom padding align-center">
            <button class="cu-btn block bg-blue margin-tb-sm lg" open-type="getUserInfo" @getuserinfo="loginWx"
                    withCredentials="true">
                登录
            </button>
        </view>
    </view>

</template>

<script>
    import request from '../../util/request';

    export default {
        name: "Login",
        data() {
            return {
                userInfo: {}
            };
        },
        mounted() {
            uni.getStorage({
                key: 'userInfo',
                success: response1 => {
                    uni.navigateTo({
                        url: '/pages/home/Home?userInfo=' + response1
                    });
                },
                fail: reject1 => {
                    debugger;
                    // doNothing...
                }
            });
        },
        methods: {
            loginWx() {
                uni.login({
                    success: response2 => {
                        uni.showLoading({
                            title: '登陆中'
                        });
                        // 获取用户信息
                        uni.getUserInfo({
                            provider: 'weixin',
                            success: response3 => {
                                debugger;
                                let params = {
                                    condition: {
                                        code: response2.code,
                                        avatar: response3.userInfo.avatarUrl,
                                        nickName: response3.userInfo.nickName
                                    }
                                };
                                request.post('/users/weixin/getUsersInfo', params).then(data => {
                                    uni.hideLoading();
                                    if (data.status === 200) {
                                        this.userInfo = data.data[0];
                                        uni.setStorage({
                                            key: 'userInfo',
                                            data: this.userInfo
                                        });
                                        uni.navigateTo({
                                            url: '/pages/home/Home?userInfo=' + this.userInfo
                                        });
                                    } else {
                                        uni.showToast({
                                            title: '获取用户信息失败',
                                            duration: 1000,
                                            icon: 'none'
                                        });
                                    }
                                }).catch(e => {
                                    uni.hideLoading();
                                    uni.showToast({
                                        title: '获取用户信息失败',
                                        duration: 1000,
                                        icon: 'none'
                                    });
                                })
                            },
                            fail: reject3 => {
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
