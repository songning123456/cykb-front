<template>
    <view class="search index-style">
        <view class="cu-custom bg-red" :style="[{height:CustomBar + 'px'}]">
            <view class="cu-bar fixed" :style="style" :class="{'shift-left': shiftLeft}">
                <view class="search-form radius">
                    <text class="cuIcon-search"></text>
                    <input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text"
                           placeholder="搜索书名/作者"
                           confirm-type="search"/>
                </view>
                <view class="action">
                    <text @tap="routeBack">取消</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                StatusBar: this.StatusBar,
                CustomBar: this.CustomBar,
                shiftLeft: false
            }
        },
        created() {
            if (uni.getSystemInfoSync().platform === 'devtools' || process.env.NODE_ENV === 'development') {
                this.shiftLeft = true;
            }
        },
        computed: {
            style() {
                let StatusBar = this.StatusBar;
                let CustomBar = this.CustomBar;
                let style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
                return style;
            }
        },
        methods: {
            InputFocus() {
            },
            InputBlur() {
            },
            routeBack() {
                uni.navigateBack({
                    delta: 1
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search {
        display: block;
        position: relative;

        .shift-left {
            padding-right: 22%;
        }
    }

</style>