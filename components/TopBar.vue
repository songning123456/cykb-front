<template>
    <view class="top-bar cu-custom" :style="[{height:CustomBar + 'px'}]">
        <view class="cu-bar fixed top-bar-padding" :style="style" :class="[bgColor]">
            <template v-if="category !== 'search'">
                <view class="action">
                    <switch v-if="category === 'classify'" class='switch-sex'
                            @change="changeSex" :class="sex?'checked':''" :checked="sex"></switch>
                </view>
                <view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
                    {{title}}
                </view>
            </template>
            <template v-else>
                <view class="search-form radius">
                    <text class="cuIcon-search"></text>
                    <input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text"
                           placeholder="搜索书名/作者"
                           confirm-type="search"/>
                </view>
            </template>
        </view>
    </view>
</template>

<script>
    import navigation from "../util/navigation";

    export default {
        name: "TopBar",
        props: {
            category: {
                type: String,
                default: ''
            },
            bgColor: {
                type: String,
                default: 'bg-red'
            },
            value: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                sex: true,
                StatusBar: this.StatusBar,
                CustomBar: this.CustomBar
            }
        },
        computed: {
            style() {
                let StatusBar = this.StatusBar;
                let CustomBar = this.CustomBar;
                return `height:${CustomBar}px;padding-top:${StatusBar}px;`
            },
            title() {
                let title = navigation[this.category].title;
                return title;
            }
        },
        methods: {
            changeSex(e) {
                this.sex = e.detail.value;
                this.$emit('input', this.sex);
            },
            InputFocus() {
            },
            InputBlur() {
            }
        }
    }
</script>

<style lang="scss" scoped>
    .top-bar {
        .top-bar-padding {
            padding-right: unset;
        }
    }

</style>