<template>
    <view class="classify global-bg-color cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
        <view class="cu-item" hover-class='hover-class-style' hover-stay-time='1200' v-for="(item,index) in result"
              :key="index">
            <view class="cu-avatar lg radius" :class="'category-' +sex + '-' + item.category"></view>
            <view class="classify-margin text-black text-df">{{convertCategory(item.category)}}</view>
            <view class="text-gray text-sm">{{convertTotal(item.total)}}</view>
        </view>
    </view>
</template>

<script>
    import Category from "../../../util/category";
    import request from '../../../util/request';

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
                result: []
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
                return Category[this.sex][arg0];
            },
            convertTotal(arg0) {
                let result = arg0;
                (result || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
                result = '共' + result + '部';
                return result;
            },
            queryBtn() {
                let params = {
                    condition: {
                        sex: this.sex
                    }
                };
                request.post('/novels/classify', params).then(data => {
                    if (data.status === 200 && data.total > 0) {
                        this.result = data.data;
                    }
                });
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
