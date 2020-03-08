<template>
    <view class="index-style home">
        <TopBar :category="currentCategory"></TopBar>
        <view class="content" :style="contentStyle">
            <home-page v-if="currentCategory === 'homePage'"></home-page>
            <classify v-if="currentCategory === 'classify'"></classify>
            <search v-if="currentCategory === 'search'"></search>
            <book-case v-if="currentCategory === 'bookCase'"></book-case>
            <mine v-if="currentCategory === 'my'"></mine>
        </view>
        <BottomBar :category="currentCategory" @changeCategory="changeCategory" ref="bottomBar"></BottomBar>
    </view>
</template>

<script>
    import TopBar from '../../components/TopBar'
    import BottomBar from '../../components/BottomBar'
    import Classify from "./children/Classify";
    import Mine from "./children/Mine";
    import HomePage from "./children/HomePage";
    import Search from "./children/Search";
    import BookCase from "./children/BookCase";

    export default {
        name: "Home",
        components: {BookCase, Search, HomePage, Mine, Classify,  BottomBar, TopBar},
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
    }

</style>