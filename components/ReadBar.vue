<template>
    <view class="read-bar cu-list menu-avatar">
        <view class="cu-item" :class="modalName==='move-box-'+ novel.novelId?'move-cur':''"
              @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd"
              :data-target="'move-box-' + novel.novelId">
            <view class="cu-avatar radius lg" :style="[{backgroundImage: novel.coverUrl}]"></view>
            <view class="content">
                <view class="text-black text-df">{{novel.title}}</view>
                <view class="text-gray text-sm">{{novel.author}}</view>
                <view class="text-grey text-xs">
                    <text class="margin-right-sm">{{novel.updateTime}} :</text>
                    <text class="text-cut">{{novel.latestChapter}}</text>
                </view>
            </view>
            <view class="move">
                <view class="bg-grey">置顶</view>
                <view class="bg-red">删除</view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "ReadBar",
        props: {
            novel: {
                type: Object,
                default: {
                    novelId: '123',
                    coverUrl: 'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)',
                    title: '书名',
                    author: '作者',
                    updateTime: '最近一天',
                    latestChapter: '测试数据'
                }
            }
        },
        data() {
            return {
                modalName: '',
                listTouchStart: 0,
                listTouchDirection: null
            }
        },
        methods: {
            // ListTouch触摸开始
            ListTouchStart(e) {
                this.listTouchStart = e.touches[0].pageX
            },
            // ListTouch计算方向
            ListTouchMove(e) {
                this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
            },
            // ListTouch计算滚动
            ListTouchEnd(e) {
                if (this.listTouchDirection === 'left') {
                    this.modalName = e.currentTarget.dataset.target
                } else {
                    this.modalName = null
                }
                this.listTouchDirection = null
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>