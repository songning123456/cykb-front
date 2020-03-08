<template>
    <view class="index-style home">
        <TopBar :category="currentCategory"></TopBar>
        <view class="content" :style="contentStyle">
            <collect v-if="current.value === '收藏'" @changeIcon="changeIcon"></collect>
            <rank v-if="current.value === '排行'"></rank>
            <classify v-if="current.value === '分类'"></classify>
            <mine v-if="current.value === '我的'"></mine>
        </view>
        <BottomBar :category="currentCategory" @changeCategory="changeCategory" ref="bottomBar"></BottomBar>
    </view>
</template>

<script>
    import TopBar from '../../components/TopBar'
    import BottomBar from '../../components/BottomBar'
    import Collect from './children/Collect';
    import Rank from "./children/Rank";
    import Classify from "./children/Classify";
    import Mine from "./children/Mine";

    export default {
        name: "Home",
        components: {Mine, Classify, Rank, Collect, BottomBar, TopBar},
        data() {
            return {
                CustomBar: this.CustomBar,
                current: {
                    key: 'favor',
                    value: '收藏'
                },
                currentCategory: 'homePage'
            }
        },
        computed: {
            contentStyle() {
                // 此处55px只是适应iphone xr/11 其他的不适应
                return `height: calc(100% - ${this.CustomBar}px - 100rpx)`;
            }
        },
        methods: {
            changeIcon(icon) {
                this.current = icon;
            },
            changeCategory(category) {
                this.currentCategory = category;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        overflow: unset;

        .content {
            width: 100%;
            overflow-y: auto;
        }
    }

</style>