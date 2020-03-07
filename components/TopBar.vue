<template>
    <view class="top-bar" :style="[{height:CustomBar + 'px'}]">
        <view class="cu-bar fixed" :style="style"
              :class="[bgImage!==''?'none-bg text-white bg-img':'',bgColor, shiftLeft ? 'shift-left': '']">
            <view class="action">
                <text v-if="title === '收藏'" class="cuIcon-more" @tap="showModal" data-target="menuModal"></text>
                <view class="cu-modal" :class="modalName==='menuModal'?'show':''" @tap="hideModal">
                    <view class="cu-dialog">
                        <view class="cu-list menu text-left">
                            <view class="cu-item" v-for="(item, index) in modalList" :key="index">
                                <view class="content">
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
            <view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
                {{title}}
            </view>
            <view v-if="title === '收藏' || title === '排行' || title === '分类'" class="action">
                <text class="cuIcon-search" @tap="routeTo"></text>
            </view>
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
            },
            bgColor: {
                type: String,
                default: 'bg-white'
            },
            bgImage: {
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
                ],
                StatusBar: this.StatusBar,
                CustomBar: this.CustomBar,
                shiftLeft: false
            }
        },
        computed: {
            style() {
                let StatusBar = this.StatusBar;
                let CustomBar = this.CustomBar;
                let bgImage = this.bgImage;
                let style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
                if (this.bgImage) {
                    style = `${style}background-image:url(${bgImage});`;
                }
                return style
            }
        },
        created() {
            if (uni.getSystemInfoSync().platform === 'devtools' || process.env.NODE_ENV === 'development') {
                this.shiftLeft = true;
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
            },
            routeTo() {
                uni.navigateTo({
                    url: '/pages/search/Search',
                    success: res => {
                    },
                    fail: () => {
                    },
                    complete: () => {
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .top-bar {
        display: block;
        position: relative;

        .shift-left {
            padding-right: 22%;
        }

        .cu-modal {
            transform: unset;

            .cu-dialog {
                width: 120px;
                position: absolute;
                left: 2%;
                top: 8.8%;

                .cu-item {
                    //min-height: 30px;

                    .content {
                        width: 100%;
                        //font-size: 12px;
                        line-height: 2em;

                        .text-red {
                            margin-right: unset;
                        }
                    }
                }
            }
        }
    }

</style>