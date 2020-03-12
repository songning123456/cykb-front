<template>
    <view class="home-page full-size">
        <view class="cu-list full-size">
            <view class="cu-card article no-card" hover-class='hover-class-style' hover-stay-time='1200'
                  v-for="(item, index) in result" :key="index">
                <view class="cu-item shadow global-bg-color">
                    <view class="title">
                        <view class="text-cut text-shadow">{{item.title}}</view>
                    </view>
                    <view class="content">
                        <image :src="getCoverUrl(item.coverUrl)"
                               mode="aspectFill"></image>
                        <view class="desc">
                            <view class="text-content">{{item.introduction}}</view>
                            <view>
                                <view class="cu-tag bg-red light sm round">{{item.author}}</view>
                                <view class="cu-tag bg-green light sm round">{{getCategory(item.sex, item.category)}}
                                </view>
                                <view class="cu-tag bg-yellow light sm round">{{getSex(item.sex)}}</view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import request from '../../../util/request';
    import common from '../../../util/common';
    import Category from '../../../util/category';

    export default {
        name: "HomePage",
        props: {
            value: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                page: {
                    index: 0,
                    size: 20,
                    total: 0
                },
                result: []
            }
        },
        mounted() {
            uni.startPullDownRefresh();
        },
        methods: {
            getFirstList() {
                this.$emit('input', 0);
                this.page.index = 0;
                let params = {
                    recordStartNo: this.page.index,
                    pageRecordNum: this.page.size
                };
                uni.showNavigationBarLoading();
                request.post('/novels/homePage', params).then(data => {
                    if (data.status === 200 && data.total > 0) {
                        this.result = data.data;
                        this.page.total = data.total;
                    }
                }).finally(() => {
                    uni.hideNavigationBarLoading();
                    uni.stopPullDownRefresh();//得到数据后停止下拉刷新
                });
            },
            getCoverUrl(url) {
                return common.getCover(url);
            },
            getSex(sex) {
                return common.getSex(sex)
            },
            getCategory(sex, category) {
                return Category[sex][category];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home-page {

        .cu-list {
            overflow: auto;

            .cu-item {
                padding: unset;
            }
        }
    }

    .hover-class-style {
        opacity: 0.9;
        background: #f7f7f7 !important;
    }
</style>
