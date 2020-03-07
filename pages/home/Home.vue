<template>
    <view class="index-style">
        <TopBar :title="current.value"></TopBar>
        <BottomBar :current="current" @changeIcon="changeIcon"></BottomBar>
    </view>
</template>

<script>
    import TopBar from '../../components/TopBar'
    import BottomBar from '../../components/BottomBar'

    export default {
        name: "Home",
        components: {BottomBar, TopBar},
        data() {
            return {
                current: {
                    key: 'favor',
                    value: '收藏'
                }
            }
        },
        methods: {
            changeIcon(icon) {
                this.current = icon;
            }
        }
    }
</script>

<style scoped>

</style>