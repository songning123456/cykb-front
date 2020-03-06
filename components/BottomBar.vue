<template>
    <view class="bottom-bar cu-bar tabbar bg-white">
        <view class="action" v-for="(item, index) in cuIcon" :key="index" @click="changeIcon(item)">
            <view class="cuIcon-cu-image">
                <text class="lg"
                      :class="['cuIcon-' + item.key, current.value === item.value ? 'text-red' : 'text-black']"></text>
            </view>
            <view :class="current.value === item.value ? 'text-red' : 'text-black'">{{item.value}}</view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "BottomBar",
        props: {
            current: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {
                cuIcon: [
                    {
                        key: 'favor',
                        value: '书架'
                    },
                    {
                        key: 'rank',
                        value: '排行'
                    },
                    {
                        key: 'apps',
                        value: '分类'
                    },
                    {
                        key: 'my',
                        value: '我的'
                    }]
            }
        },
        methods: {
            changeIcon(icon) {
                this.$emit('changeIcon', icon);
            }
        }
    }
</script>

<style scoped>
    .bottom-bar {
        bottom: 0;
        position: fixed;
        width: 100%;
    }

</style>