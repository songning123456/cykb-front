<template>
    <view class="full-width">
        <read-bar-list :novels="result"></read-bar-list>
    </view>
</template>

<script>
    import ReadBarList from "../../../components/ReadBarList";

    export default {
        name: "HomePage",
        components: {ReadBarList},
        data() {
            return {
                // 假数据
                result: [
                    {
                        novelId: 'novelId',
                        coverUrl: 'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)',
                        title: '书名',
                        author: '作者',
                        updateTime: '最近一天',
                        latestChapter: '测试数据'
                    }
                ]
            }
        },// todo 假数据，待删除
        created() {
            for (let i = 1; i < 20; i++) {
                let temp =Object.assign({}, this.result[0]);
                temp.novelId = temp.novelId + i;
                temp.title = temp.title + i;
                temp.author = temp.author + i;
                temp.updateTime = temp.updateTime + i;
                temp.latestChapter = temp.latestChapter + i;
                this.result[i] = temp;
            }
        }

    }
</script>

<style scoped>

</style>