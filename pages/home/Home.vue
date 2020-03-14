<template>
    <view class="index-style home global-bg-color">
        <TopBar :category="currentCategory" v-model='sex'></TopBar>
        <view class="content global-bg-color">
            <home-page v-if="activated['homePage']" :class="{'no-show': currentCategory !== 'homePage'}"
                       v-model='loadingType'
                       ref="homePage"></home-page>
            <classify v-if="activated['classify']" :class="{'no-show': currentCategory !== 'classify'}"
                      :sex="modifySex(sex)"
                      ref="classify"></classify>
            <search v-if="activated['search']" :class="{'no-show': currentCategory !== 'search'}" ref="search"></search>
            <book-case v-if="activated['bookcase']" :class="{'no-show': currentCategory !== 'bookcase'}"
                       @navChange="navChange"
                       ref="bookcase"></book-case>
            <mine v-if="activated['my']" :class="{'no-show': currentCategory !== 'my'}" ref='my'></mine>
        </view>
        <BottomBar :category="currentCategory" @changeCategory="changeCategory" ref="bottomBar"></BottomBar>
        <!--        <load-more :loadingType="loadingType"></load-more>-->
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
                currentCategory: 'homePage',
                activated: {
                    'homePage': true,
                    'classify': false,
                    'search': false,
                    'bookcase': false,
                    'my': false
                },
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
                    this.$refs.homePage.getHomePageFirst();
                    break;
                case 'classify':
                    this.$refs.classify.getClassify();
                    break;
                case 'search':
                    uni.stopPullDownRefresh();
                    break;
                case 'bookcase':
                    this.$refs.bookcase.getBookcase();
                    break;
                case 'my':
                    uni.stopPullDownRefresh();
                    break;
            }
        },
        onReachBottom() {
            debugger;
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
                if (!this.activated[category]) {
                    this.activated[category] = true;
                }
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
    .home::-webkit-scrollbar {
        width: 0;
        height: 0;
        color: transparent;
        display: none;
    }

    .no-show {
        display: none;
    }

</style>
