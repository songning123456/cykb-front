<template>
    <view class="home-page full-size">
        <view class="cu-list full-size">
            <view class="cu-card article no-card" hover-class='hover-class-style' hover-stay-time='1200' v-for="(item, index) in result" :key="index">
                <view class="cu-item shadow global-bg-color">
                    <view class="title">
                        <view class="text-cut text-center text-shadow">{{item.title}}</view>
                    </view>
                    <view class="content">
                        <image :src="item.coverUrl"
                               mode="aspectFill"></image>
                        <view class="desc">
                            <view class="text-content">{{item.introduction}}</view>
                            <view>
                                <view class="cu-tag bg-red light sm round">{{item.author}}</view>
                                <view class="cu-tag bg-green light sm round">{{item.category}}</view>
                                <view class="cu-tag bg-yellow light sm round">{{item.sex}}</view>
                            </view>
                        </view>
                    </view>
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
                result: []
            }
        },// todo 假数据，待删除
        mounted() {
            setTimeout(() => {
                let obj = {
                    coverUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
                    title: '书名',
                    author: '作者',
                    category: '玄幻',
                    sex: '男频',
                    introduction: '折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！'
                };
                let temps = [];
                for (let i = 0; i < 20; i++) {
                    let temp = Object.assign({}, obj);
                    temps.push(temp);
                }
                this.result = temps;
            }, 1)
        }
    }
</script>

<style lang="scss" scoped>
    .home-page {

        .cu-list {
            overflow: auto;
        }
    }

    .hover-class-style {
        opacity: 0.9;
        background: #f7f7f7 !important;
    }
</style>
