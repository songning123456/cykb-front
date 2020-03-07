<template>
    <view class="index-style home">
        <TopBar :title="current.value"></TopBar>
        <view class="content" :style="contentStyle">
            <collect v-if="current.value === '收藏'"></collect>
            <rank v-if="current.value === '排行'"></rank>
            <classify v-if="current.value === '分类'"></classify>
            <mine v-if="current.value === '我的'"></mine>
        </view>
        <BottomBar :current="current" @changeIcon="changeIcon"></BottomBar>
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
                }
            }
        },
        computed: {
            contentStyle() {
                return `height: calc(100% - ${this.CustomBar}px - 50px)`;
            }
        },
        methods: {
            changeIcon(icon) {
                this.current = icon;
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