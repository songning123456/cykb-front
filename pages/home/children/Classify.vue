<template>
    <view class="classify global-bg-color cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
        <view class="cu-item" hover-class='hover-class-style' hover-stay-time='1200' v-for="(item,index) in result" :key="index">
            <view class="cu-avatar lg radius" :class="'category-' +sex + '-' + item.category"></view>
            <view class="classify-margin text-black text-df">{{convertCategory(item.category)}}</view>
            <view class="text-gray text-sm">{{item.total}}</view>
        </view>
    </view>
</template>

<script>
    import category from "../../../util/category";

    export default {
        name: "Classify",
        props: {
            sex: {
                type: String,
                default: 'male'
            }
        },
        data() {
            return {
                gridCol: 3,
                gridBorder: true,
                form: {
                    sex: ''
                },
                result: [],
                params1: [
                    {
                        category: 'xuanhuan',
                        total: '10000'
                    }, {
                        category: 'qihuan',
                        total: '10000'
                    }, {
                        category: 'wuxia',
                        total: '10000'
                    }, {
                        category: 'xianxia',
                        total: '10000'
                    }, {
                        category: 'dushi',
                        total: '10000'
                    }, {
                        category: 'zhichang',
                        total: '10000'
                    }, {
                        category: 'xianshi',
                        total: '10000'
                    }, {
                        category: 'lishi',
                        total: '10000'
                    }, {
                        category: 'junshi',
                        total: '10000'
                    }, {
                        category: 'youxi',
                        total: '10000'
                    }, {
                        category: 'tiyu',
                        total: '10000'
                    }, {
                        category: 'kehuan',
                        total: '10000'
                    }, {
                        category: 'xuanyi',
                        total: '10000'
                    }, {
                        category: 'qingxiaoshuo',
                        total: '10000'
                    }, {
                        category: 'tongren',
                        total: '10000'
                    }
                ],
                params2: [
                    {
                        category: 'gudaiyanqing',
                        total: '10000'
                    },
                    {
                        category: 'xiandaiyanqing',
                        total: '10000'
                    },
                    {
                        category: 'xuanhuanyanqing',
                        total: '10000'
                    },
                    {
                        category: 'xuanyituili',
                        total: '10000'
                    },
                    {
                        category: 'langmanqingchun',
                        total: '10000'
                    },
                    {
                        category: 'xianxiaqiyuan',
                        total: '10000'
                    },
                    {
                        category: 'kehuankongjian',
                        total: '10000'
                    },
                    {
                        category: 'youxijingji',
                        total: '10000'
                    },
                    {
                        category: 'qingxiaoshuo',
                        total: '10000'
                    },
                    {
                        category: 'xianshishenghuo',
                        total: '10000'
                    }
                ]
            }
        },
        watch: {
            sex: {
                handler(newVal, oldVal) {
                    if (newVal === 'male' || newVal === 'female') {
                        this.queryBtn();
                    }
                },
                immediate: true
            }
        },
        methods: {
            convertCategory(arg0) {
                return category[this.sex][arg0];
            },
            queryBtn() {
                if (this.sex === 'male') {
                    this.result = this.params1;
                } else {
                    this.result = this.params2;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .classify {
        .cu-avatar {
            margin: auto;
        }

        .classify-margin {
            margin: 3px 0;
        }
    }

    .hover-class-style {
        opacity: 0.9;
        background: #f7f7f7 !important;
    }
</style>
