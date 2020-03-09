<template>
    <view class="home-page full-size">
        <view class="cu-list full-size menu-avatar">
            <view class="cu-item global-bg-color" hover-class='hover-class-style' hover-stay-time='1200'
                  v-for="(item,index) in result" :key="index">
                <view class="cu-avatar radius lg" :style="[{backgroundImage: item.coverUrl}]"></view>
                <view class="content">
                    <view class="text-black text-df">{{item.title}}</view>
                    <view class="text-grey text-sm">{{item.author}} | {{item.category}}</view>
                    <view class="text-gray text-cut text-xs">{{item.introduction}}</view>
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
        }
    }
</script>

<style lang="scss" scoped>
    .home-page {

        .cu-list {
            overflow: auto;

            .cu-item {
                justify-content: unset;
                padding-right: unset;

                .content {
                    width: calc(100% - 96upx - 70upx);
                }
            }
        }
    }

    .hover-class-style {
        opacity: 0.9;
        background: #f7f7f7 !important;
    }
</style>
