<template>
<div id="latests-box">
    <FloaterBanner :items="latests" :title="title" :moreLink="'latests'"/>
</div>
</template>

<script>

import FloaterBanner from '@/components/music/boxes/FloaterBanner.vue'
export default {
    name: 'LatestsBoxComp',
    components: {FloaterBanner},
    data(){
        return {
            latests: [
                {name:'latest1'}, {name:'latest2'}, {name:'latest3'}, {name:'latest4'}, {name:'latest5'},
                {name:'latest6'}, {name:'latest7'}, {name:'latest8'}, {name:'latest9'}, {name:'latest10'}
            ],
            title: 'تازه‌ترین‌ها'
        }
    },
}

</script>

<style scoped>
@import '@/assets/css/music/content/latestsBox.css';
</style>