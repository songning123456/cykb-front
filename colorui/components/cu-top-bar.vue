<template>
    <view class="cu-bar search bg-white">
        <view class="search-form round">
            <text class="cuIcon-search"></text>
            <input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索书名/作者"
                   confirm-type="search"/>
        </view>
        <view class="action">
            <button class="cu-btn bg-green shadow-blur round">搜索</button>
        </view>
    </view>
</template>

<script>
    export default {
        name: "cu-top-bar",
        props: {
            title: {
                type: String,
                default: '标题'
            }
        },
        methods: {
            InputFocus() {
            },
            InputBlur() {
            }
        }
    }
</script>

<style>

</style>
