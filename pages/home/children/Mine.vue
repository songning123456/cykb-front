<template>
    <view class="mine full-width">
        <view class="cu-list menu">
            <view class="cu-item arrow" v-for="(item, index) in displayInfo" :key="index">
                <view class="content">
                    <text class="text-black" :class="'cuIcon-' + item.icon"></text>
                    <text class="text-black">{{item.title}}</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "Mine",
        data() {
            return {
                displayInfo: [
                    {
                        icon: 'appreciate',
                        title: '请给我好评'
                    },
                    {
                        icon: 'share',
                        title: '分享给朋友'
                    },
                    {
                        icon: 'comment',
                        title: '意见反馈'
                    },
                    {
                        icon: 'settings',
                        title: '设置'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mine {

    }
</style>