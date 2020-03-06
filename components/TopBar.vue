<template>
    <view class="top-bar cu-bar bg-white">
        <view class="action">
            <slot name="left"></slot>
        </view>
        <view class="content text-bold">
            {{title}}
        </view>
        <view class="action">
            <slot name="right"></slot>
        </view>
    </view>
</template>

<script>
    export default {
        name: "TopBar",
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>
    .top-bar {
        top: 85px;
        position: fixed;
        width: 100%;
    }

</style>