<template>
    <view class="home-page full-width">
        <view class="cu-list menu-avatar global-bg-color">
            <view class="cu-item global-bg-color" v-for="(item,index) in result" :key="index"
                  :class="modalName==='move-box-'+ index?'move-cur':''"
                  @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"
                  :data-target="'move-box-' + index">
                <view class="cu-avatar radius lg" :style="[{backgroundImage: item.coverUrl}]"></view>
                <view class="content">
                    <view class="text-black text-df">{{item.title}}</view>
                    <view class="text-grey text-sm">{{item.author}} | {{item.category}}</view>
                    <view class="text-gray text-cut text-xs">{{item.introduction}}</view>
                </view>
                <view class="move">
                    <view class="bg-grey">置顶</view>
                    <view class="bg-red">删除</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "HomePage",
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
                        category: '玄幻',
                        introduction: '最多两行，溢出就用省略号代替chnvdsodfcnewocnewiofcnweiofcnweiocfnewoifcewjfdieowdnewoicenewoicdnmewiodfcnew'
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home-page {
        .content {
            width: calc(100% - 96upx);
        }
    }
</style>