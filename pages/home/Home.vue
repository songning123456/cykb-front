<template>
    <view class="index-style">
        <TopBar></TopBar>
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
                    value: '书架'
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