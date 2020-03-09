<template>
    <view class="mine full-width">
        <view class="cu-list menu">
            <view class="cu-item arrow" hover-class='hover-class-style' hover-stay-time='1200' v-for="(item, index) in displayInfo" :key="index" @tap="tapBtn(item.icon)">
                <view class="content">
                    <text class="text-black" :class="'cuIcon-' + item.icon"></text>
                    <text class="text-black">{{item.title}}</text>
                </view>
            </view>
        </view>
        <view class="cu-modal" :class="shareModal?'show':''">
            <view class="cu-dialog">
                <view class="cu-bar bg-white justify-end">
                    <view class="content">提示</view>
                </view>
                <view class="padding-xl">
                    (温馨提示：链接复制成功，请分享给您的好友)发送给好友的复制内容是: {{clipboard}}
                </view>
                <view class="cu-bar bg-white">
                    <view class="action margin-0 flex-sub text-blue solid-left" @tap="hideShareModal">取消</view>
                    <view class="action margin-0 flex-sub  text-red solid-left" @tap="hideShareModal(false)">复制链接</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "Mine",
        data() {
            return {
                shareModal: false,
                clipboard: '我正在用畅游看吧看免费百万小说。下载地址：http://www.xxx.com',
                displayInfo: [
                    {
                        icon: 'appreciate',
                        title: '请给我好评'
                    },
                    {
                        icon: 'share',
                        title: '分享给朋友'
                    },
                    {
                        icon: 'comment',
                        title: '意见反馈'
                    },
                    {
                        icon: 'settings',
                        title: '设置'
                    }
                ]
            }
        },
        methods: {
            tapBtn(type) {
                switch (type) {
                    case 'appreciate':
                        break;
                    case 'share':
                        this.shareModal = true;
                        break;
                    case 'comment':
                        break;
                    case 'settings':
                        break;
                }
            },
            hideShareModal(type) {
                this.shareModal = false;
                if (!type) {
                    // 复制到剪切板
                    uni.setClipboardData({
                        data: this.clipboard,
                        success: function () {
                            console.log('success');
                        }
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mine {
        .cu-modal {
            transform: scale(1);
        }
    }

    .hover-class-style {
        opacity: 0.9;
        background: #f7f7f7 !important;
    }
</style>
