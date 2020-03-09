<template>
    <view class="book-case full-size">
        <view class="cu-list full-size menu-avatar global-bg-color">
            <view class="cu-item global-bg-color" v-for="(item,index) in result" :key="index"
                  :class="modalName==='move-box-'+ index?'move-cur':''"
                  @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"
                  :data-target="'move-box-' + index">
                <view class="cu-avatar radius lg" :style="[{backgroundImage: item.coverUrl}]"></view>
                <view class="content">
                    <view class="text-black text-df">{{item.title}}</view>
                    <view class="text-grey text-sm">{{item.author}}</view>
                    <view class="text-gray text-xs">
                        <text class="margin-right-xs">{{item.updateTime}} ▪</text>
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
    </view>
</template>

<script>
    export default {
        name: "BookCase",
        data() {
            return {
                modalName: '',
                listTouchStart: 0,
                listTouchDirection: null,
                // 假数据
                result: [
                    {
                        coverUrl: 'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)',
                        title: '书名',
                        author: '作者',
                        updateTime: '最近一天',
                        latestChapter: '测试数据'
                    }
                ]
            }
        },// todo 假数据，待删除
        created() {
            for (let i = 1; i < 20; i++) {
                let temp = Object.assign({}, this.result[0]);
                temp.title = temp.title + i;
                temp.author = temp.author + i;
                temp.updateTime = temp.updateTime + i;
                temp.latestChapter = temp.latestChapter + i;
                this.result[i] = temp;
            }
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
                debugger;
                this.$emit('navChange', 'classify');
            }
        }
    }
</script>

<style lang='scss' scoped>
    .book-case {
        .cu-list {
            overflow-y: auto;
        }
    }
</style>
