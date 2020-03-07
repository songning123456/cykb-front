<template>
    <view class="search index-style">
        <view class="cu-bar bg-red search">
            <view class="search-form radius">
                <text class="cuIcon-search"></text>
                <input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索书名/作者"
                       confirm-type="search"/>
            </view>
            <view class="action">
                <text @tap="routeBack">取消</text>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "Search",
        methods: {
            InputFocus() {
                debugger;
            },
            InputBlur() {
                debugger;
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
        top: 85px;
        position: fixed;
        width: 100%;
    }

</style>