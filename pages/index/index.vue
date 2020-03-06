<template>
    <view class="index-style">
        <cu-bottom-bar :tabs="tabs" :current="currentIndex" @currentChange="changeTab"></cu-bottom-bar>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                tabs: [
                    {
                        name: '书架',
                        iconPath: '/static/bottom/bookCaseBlack.svg',
                        selectedIconPath: '/static/bottom/bookCaseRed.svg'
                    },
                    {
                        name: '排行',
                        iconPath: '/static/bottom/rankingBlack.svg',
                        selectedIconPath: '/static/bottom/rankingRed.svg'
                    },
                    {
                        name: '分类',
                        iconPath: '/static/bottom/classificationBlack.svg',
                        selectedIconPath: '/static/bottom/classificationRed.svg'
                    },
                    {
                        name: '我的',
                        iconPath: '/static/bottom/myBlack.svg',
                        selectedIconPath: '/static/bottom/myRed.svg'
                    }
                ],
                currentIndex: 0
            }
        },
        onLoad() {
        },
        methods: {
            changeTab(index) {
                this.currentIndex = index;
            }
        }
    }
</script>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo {
        height: 200 rpx;
        width: 200 rpx;
        margin-top: 200 rpx;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 50 rpx;
    }

    .text-area {
        display: flex;
        justify-content: center;
    }

    .title {
        font-size: 36 rpx;
        color: #8f8f94;
    }
</style>
