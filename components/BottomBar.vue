<template>
    <view class="bottom-bar cu-bar tabbar global-bg-color shadow foot">
        <view class="action" v-for="(value,key, index) in cuIcons" :key="index" @tap="changeCategory(key)"
              :class="[category === key ? 'text-red' : 'text-gray',key === 'search' ? 'add-action' : '']">
            <view v-if="key !== 'search'" :class="'cuIcon-' + value.icon"></view>
            <button v-if="key === 'search'" class="cu-btn cuIcon-search bg-red shadow"></button>
            {{value.title}}
        </view>
    </view>
</template>

<script>
    import navigation from "../util/navigation";
    export default {
        name: "BottomBar",
        props: {
            category: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                cuIcons: null
            }
        },
        created() {
          this.cuIcons = navigation;
        },
        methods: {
            changeCategory(category) {
                this.$emit('changeCategory', category);
            }
        }
    }
</script>

<style scoped>
    .bottom-bar {
        border-top: 1px solid grey;
    }

</style>
