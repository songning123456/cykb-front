<template>
    <view class="book-case full-size">
        <view v-if="userInfo" class="cu-list full-size menu-avatar global-bg-color">
            <view class="cu-item global-bg-color" hover-class='hover-class-style' hover-stay-time='1200'
                  v-for="(item,index) in result" :key="index"
                  :class="modalName==='move-box-'+ index?'move-cur':''"
                  @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"
                  :data-target="'move-box-' + index">
                <view class="cu-avatar radius lg" :style="'backgroundImage: url(' + item.coverUrl + ')'"></view>
                <view class="content">
                    <view class="text-black text-df">{{item.title}}</view>
                    <view class="text-grey text-sm">{{item.author}}</view>
                    <view class="text-gray text-xs">
                        <text class="margin-right-xs">{{convertDate(item.updateTime)}} ·</text>
                        <text class="text-cut">{{item.latestChapter}}</text>
                    </view>
                </view>
                <view class="move">
                    <view class="bg-grey">置顶</view>
                    <view class="bg-red">删除</view>
                </view>
            </view>
            <view class="cu-item global-bg-color">
                <view class="cu-avatar radius lg add-image"></view>
                <view class="content">
                    <view class="text-black text-bold" @tap="navChange">收藏小说</view>
                </view>
            </view>
        </view>
        <inset-login v-else @userInfo="getUserInfo"></inset-login>
    </view>
</template>

<script>
    import InsetLogin from "../../comment/InsetLogin";
    import request from '../../../util/request';
    import convertDate from '../../../util/convertDate';

    let currentDate = new Date();

    export default {
        name: "BookCase",
        components: {InsetLogin},
        data() {
            return {
                modalName: '',
                listTouchStart: 0,
                listTouchDirection: null,
                userInfo: this.$store.state.userInfo,
                // 假数据
                result: []
            }
        },
        mounted() {
            uni.startPullDownRefresh();
        },
        methods: {
            // ListTouch触摸开始
            touchStart(e) {
                this.listTouchStart = e.touches[0].pageX
            },
            // ListTouch计算方向
            touchMove(e) {
                this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
            },
            // ListTouch计算滚动
            touchEnd(e) {
                if (this.listTouchDirection === 'left') {
                    this.modalName = e.currentTarget.dataset.target
                } else {
                    this.modalName = null
                }
                this.listTouchDirection = null
            },
            navChange() {
                this.$emit('navChange', 'classify');
            },
            getUserInfo(arg0) {
                this.userInfo = arg0;
            },
            convertDate(updateTime) {
                return convertDate.convertZh(currentDate, updateTime);
            },
            getBookcase() {
                let params = {
                    condition: {
                        uniqueId: this.userInfo.uniqueId
                    }
                };
                request.post("/relation/bookcase", params).then(data => {
                    if (data.status === 200 && data.total > 0) {
                        this.result = data.data;
                    }
                }).finally(() => {
                    uni.hideNavigationBarLoading();
                    uni.stopPullDownRefresh();//得到数据后停止下拉刷新
                });
            }
        }
    }
</script>

<style lang='scss' scoped>
    .book-case {
        .cu-item {
            justify-content: unset;
            .cu-avatar {
                float: left;
            }
            .content {
                float: left;
                width: calc(100% - 52px - 20upx);
            }
        }
    }

    .hover-class-style {
        opacity: 0.9;
        background: #f7f7f7 !important;
    }
</style>
