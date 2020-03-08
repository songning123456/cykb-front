<template>
    <view class="read-bar-list">
        <read-bar v-for="(item, index) in novels" :key="index" :novel="item"></read-bar>
        <view class="cu-item" v-if="add">
            <view class="cu-avatar radius lg add-image"></view>
            <view class="content">
                <view class="text-black text-bold" @click="navChange">收藏小说</view>
            </view>
        </view>
    </view>
</template>

<script>
    import ReadBar from "./ReadBar";

    export default {
        name: "ReadBarList",
        components: {ReadBar},
        props: {
            novels: {
                type: Array,
                default: []
            },
            add: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            navChange() {
                this.$emit('navChange', 'classify');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .read-bar-list {
        .add-image {
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAABVUlEQVRoQ+2ZYU1EMRCEZ5QADpAADkABSAAF4AAkgAKCAsDBOQALKFjSS/lzkLxOm21eXqY/L7vbzrdzzTaP2NjixvTAgtbeUXfIHZpMwJabDFzezh1SkUXEGYCXmndJ8l2tocSndygi7gHc1UM9k7xWDqjGzhb0QbJ0LG1ZkIr2wHLukArQllOJ2XIqsYN4W04FaMupxGy5QWKrtVxEHAO46tBXZrff+e0LwFNHjTLUltzF1XTLVTGfi9VyA05aRLUKKoTfcs+7WP285S3VJKhsFRGPAE4Xt/0bUKx6VH/+BrDrqLEjedOS1yyopdh/Mau9FCyoEnCHeq1Q8/wfUgHacioxD6eDxGy5QYC+5VSAW7fcK8kLFYoSP8NyZUp+qIe6JVmm9rSVLqg+PfafUEj2vFYl8VMESScaDLagQYDp6e5QOuLBDdyhQYDp6e5QOuLBDX4AYV2oNY6tEZkAAAAASUVORK5CYII=');
        }
    }
</style>