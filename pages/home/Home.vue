<template>
    <view class="index-style home global-bg-color">
        <TopBar :category="currentCategory" v-model='sex'></TopBar>
        <view class="content global-bg-color">
            <home-page v-if="currentCategory === 'homePage'" v-model='loadingType' ref="homePage"></home-page>
            <classify v-if="currentCategory === 'classify'" :sex="modifySex(sex)" ref="classify"></classify>
            <search v-if="currentCategory === 'search'" ref="search"></search>
            <book-case v-if="currentCategory === 'bookcase'" @navChange="navChange" ref="bookcase"></book-case>
            <mine v-if="currentCategory === 'my'" ref='my'></mine>
        </view>
        <BottomBar :category="currentCategory" @changeCategory="changeCategory" ref="bottomBar"></BottomBar>
        <load-more :loadingType="loadingType"></load-more>
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
    import LoadMore from "../comment/LoadMore";

    export default {
        name: "Home",
        components: {LoadMore, BookCase, Search, HomePage, Mine, Classify, BottomBar, TopBar},
        data() {
            return {
                CustomBar: this.CustomBar,
                currentCategory: 'classify',
                sex: true,
                loadingType: 0//定义加载方式 0---contentdown  1---contentrefresh 2---contentnomore
            }
        },
        computed: {
            contentStyle() {
                // 此处55px只是适应iphone xr/11 其他的不适应
                return `height: calc(100% - ${this.CustomBar}px - 100rpx)`;
            }
        },
        created() {
            uni.getStorage({
                key: 'userInfo',
                success: data => {
                    this.$store.commit('SET_USERINFO', JSON.parse(data.data));
                }
            });
        },
        onPullDownRefresh() {
            switch (this.currentCategory) {
                case 'homePage':
                    this.$refs.homePage.getFirstList();
                    break;
                case 'classify':
                    uni.stopPullDownRefresh();
                    break;
                case 'search':
                    uni.stopPullDownRefresh();
                    break;
                case 'bookcase':
                    break;
                case 'my':
                    uni.stopPullDownRefresh();
                    break;
            }
        },
        onReachBottom() {
            switch (this.currentCategory) {
                case 'homePage':
                    break;
                case 'classify':
                    break;
                case 'search':
                    break;
                case 'bookcase':
                    break;
                case 'my':
                    break;
            }
        },
        methods: {
            changeCategory(category) {
                this.currentCategory = category;
            },
            modifySex(sex) {
                if (sex) {
                    return 'male'
                } else {
                    return 'female'
                }
            },
            // 跳转到 分类 栏
            navChange(arg0) {
                this.currentCategory = arg0;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        overflow: unset;

        &.home::-webkit-scrollbar {
            width: 0;
        }

        .content::-webkit-scrollbar {
            width: 0;
        }
    }

</style>
