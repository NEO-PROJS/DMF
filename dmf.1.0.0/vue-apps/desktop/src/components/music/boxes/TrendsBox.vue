<template>
<div id="trends-box">
    <FloaterBanner :items="trends" :title="title" :moreLink="'trends'"/>
</div>
</template>

<script>

import FloaterBanner from '@/components/music/boxes/FloaterBanner.vue'
export default {
    name: 'TrendsBoxComp',
    components: {FloaterBanner},
    data(){
        return {
            trends: [
                {name:'trend1'}, {name:'trend2'}, {name:'trend3'}, {name:'trend4'}, {name:'trend5'},
                {name:'trend6'}, {name:'trend7'}, {name:'trend8'}, {name:'trend9'}, {name:'trend10'}
            ],
            title: 'ترندهای هفته'
        }
    },
}

</script>

<style scoped>
@import '@/assets/css/music/content/trendsBox.css';
</style>