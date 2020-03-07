<template>
    <view class="collect full-width">
        <view class="cu-list menu-avatar">
            <view class="cu-item" :class="modalName==='move-box-'+ index?'move-cur':''" v-for="(item,index) in result"
                  :key="index"
                  @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd"
                  :data-target="'move-box-' + index">
                <view class="cu-avatar radius lg"
                      :style="[{backgroundImage: item.coverUrl}]"></view>
                <view class="content">
                    <view class="text-black text-df">{{item.title}}</view>
                    <view class="text-gray text-sm">{{item.author}}</view>
                    <view class="text-grey text-xs">
                        <text class="margin-right-sm">{{item.updateTime}} :</text>
                        <text class="text-cut">{{item.latestChapter}}</text>
                    </view>
                </view>
                <view class="move">
                    <view class="bg-grey">置顶</view>
                    <view class="bg-red">删除</view>
                </view>
            </view>
            <view class="cu-item">
                <view class="cu-avatar radius lg add-image"></view>
                <view class="content">
                    <view class="text-black text-bold" @click="navChange">收藏小说</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "Collect",
        data() {
            return {
                modalName: '',
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
            };
        },
        // todo 假数据，待删除
        created() {
            for (let i = 1; i < 20; i++) {
                this.result[i] = this.result[0];
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
            },
            navChange() {
                let future = {
                    key: 'apps',
                    value: '分类'
                };
                this.$emit('changeIcon', future);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .collect {
        .add-image {
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAABVUlEQVRoQ+2ZYU1EMRCEZ5QADpAADkABSAAF4AAkgAKCAsDBOQALKFjSS/lzkLxOm21eXqY/L7vbzrdzzTaP2NjixvTAgtbeUXfIHZpMwJabDFzezh1SkUXEGYCXmndJ8l2tocSndygi7gHc1UM9k7xWDqjGzhb0QbJ0LG1ZkIr2wHLukArQllOJ2XIqsYN4W04FaMupxGy5QWKrtVxEHAO46tBXZrff+e0LwFNHjTLUltzF1XTLVTGfi9VyA05aRLUKKoTfcs+7WP285S3VJKhsFRGPAE4Xt/0bUKx6VH/+BrDrqLEjedOS1yyopdh/Mau9FCyoEnCHeq1Q8/wfUgHacioxD6eDxGy5QYC+5VSAW7fcK8kLFYoSP8NyZUp+qIe6JVmm9rSVLqg+PfafUEj2vFYl8VMESScaDLagQYDp6e5QOuLBDdyhQYDp6e5QOuLBDX4AYV2oNY6tEZkAAAAASUVORK5CYII=');
        }
    }

</style>