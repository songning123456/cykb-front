<template>
    <view class="top-bar cu-bar bg-white">
        <view class="action">
            <text v-if="title === '收藏'" class="cuIcon-more"></text>
            <switch v-if="title === '排行'" class='switch-sex'
                    @change="changeSex" :class="sex?'checked':''" :checked="sex"></switch>
        </view>
        <view class="content text-bold">
            {{title}}
        </view>
        <view v-if="title === '收藏' || title === '排行' || title === '分类'" class="action">
            <text class="cuIcon-search"></text>
        </view>
    </view>
</template>

<script>
    export default {
        name: "TopBar",
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                sex: true
            }
        },
        methods: {
            changeSex(e) {
                this.sex = e.detail.value;
            }
        }
    }
</script>

<style scoped>
    .top-bar {
        top: 85px;
        position: fixed;
        width: 100%;
    }

</style>