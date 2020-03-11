<template>
    <view class="index-style home global-bg-color">
        <TopBar :category="currentCategory" v-model='sex'></TopBar>
        <view class="content global-bg-color" :style="contentStyle">
            <home-page v-if="currentCategory === 'homePage'"></home-page>
            <classify v-if="currentCategory === 'classify'" :sex="modifySex(sex)"></classify>
            <search v-if="currentCategory === 'search'"></search>
            <book-case v-if="currentCategory === 'bookcase'" @navChange="navChange"></book-case>
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
        components: {BookCase, Search, HomePage, Mine, Classify, BottomBar, TopBar},
        data() {
            return {
                CustomBar: this.CustomBar,
                currentCategory: 'homePage',
                sex: true
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
            console.error('下拉home');
            uni.stopPullDownRefresh();
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
    }

</style>
