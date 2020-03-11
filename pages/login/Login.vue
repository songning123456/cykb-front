<template>
    <view class="login index-style login-image">
        <cu-custom :is-back="true">
            <block slot="content">畅游看吧</block>
        </cu-custom>
        <button class="cu-btn block bg-red margin-tb-sm lg" open-type="getUserInfo" @getuserinfo="loginWx"
                withCredentials="true">
            一键登录
        </button>
    </view>

</template>

<script>
    import request from '../../util/request';
    import common from '../../util/common';

    export default {
        name: "Login",
        methods: {
            loginWx() {
                uni.login({
                    success: response2 => {
                        // 获取用户信息
                        uni.getUserInfo({
                            provider: 'weixin',
                            success: response3 => {
                                uni.showLoading({
                                    title: '登陆中'
                                });
                                let params = {
                                    condition: {
                                        code: response2.code,
                                        avatar: response3.userInfo.avatarUrl,
                                        nickName: response3.userInfo.nickName,
                                        gender: common.getGender(response3.userInfo.gender)
                                    }
                                };
                                request.post('/users/weixin/getUsersInfo', params).then(data => {
                                    uni.hideLoading();
                                    if (data.status === 200) {
                                        let result = JSON.stringify(data.data[0]);
                                        uni.setStorage({
                                            key: 'userInfo',
                                            data: result
                                        });
                                        this.goBack(data.data[0]);
                                    } else {
                                        console.error('获取用户信息失败1');
                                        uni.showToast({
                                            title: '获取用户信息失败',
                                            duration: 1000,
                                            icon: 'none'
                                        });
                                    }
                                }).catch(e => {
                                    uni.hideLoading();
                                    console.error('获取用户信息失败2');
                                    uni.showToast({
                                        title: '获取用户信息失败',
                                        duration: 1000,
                                        icon: 'none'
                                    });
                                })
                            },
                            fail: reject3 => {
                                // doNothing...
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
            },
            goBack(params) {
                let pages = getCurrentPages();  //获取所有页面栈实例列表
                let nowPage = pages[pages.length - 1];  //当前页页面实例
                let prevPage = pages[pages.length - 2];  //上一页页面实例
                this.$store.commit('SET_USERINFO', params);
                uni.navigateBack({  //uni.navigateTo跳转的返回，默认1为返回上一级
                    delta: 1
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login {
        .cu-btn {
            width: 400upx;
            position: absolute;
            top: 85%;
            left: 50%;
            z-index: 10;
            transform: translate(-50%, -50%);
        }
    }

</style>
