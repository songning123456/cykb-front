<template>
    <view class="top-bar cu-bar bg-white">
        <view class="action">
            <text v-if="title === '收藏'" class="cuIcon-more" @tap="showModal" data-target="menuModal"></text>
            <view class="cu-modal" :class="modalName==='menuModal'?'show':''" @tap="hideModal">
                <view class="cu-dialog">
                    <view class="cu-list menu text-left">
                        <view class="cu-item" v-for="(item, index) in modalList" :key="index">
                            <view class="content" hover-class="text-red" hover-stay-time="1000">
                                <text class="text-red" :class="'cuIcon-' + item.key"></text>
                                <text class="text-black">{{item.value}}</text>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
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
                sex: true,
                modalName: null,
                modalList: [
                    {key: 'delete', value: '书籍管理'},
                    {key: 'list', value: '收藏模式'},
                    {key: 'down', value: '缓存管理'}
                ]
            }
        },
        methods: {
            changeSex(e) {
                this.sex = e.detail.value;
            },
            showModal(e) {
                this.modalName = e.currentTarget.dataset.target
            },
            hideModal(e) {
                this.modalName = null
            }
        }
    }
</script>

<style lang="scss" scoped>
    .top-bar {
        top: 85px;
        position: fixed;
        width: 100%;

        .cu-modal {
            transform: unset;

            .cu-dialog {
                width: 240rpx;
                bottom: 480rpx;
                right: 240rpx;

                .cu-item {
                    min-height: 60rpx;

                    .content {
                        width: 100%;
                        font-size: 24rpx;
                        line-height: 2.6em;
                    }
                }
            }
        }
    }

</style>