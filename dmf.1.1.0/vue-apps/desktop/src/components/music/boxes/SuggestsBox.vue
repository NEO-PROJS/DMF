<template>
<div id="suggests-box">
    <FloaterBanner :items="suggests" :title="title" :moreLink="'suggests'"/>
</div>
</template>

<script>

import FloaterBanner from '@/components/music/boxes/FloaterBanner.vue'
export default {
    name: 'SuggestsBoxComp',
    components: {FloaterBanner},
    data(){
        return {
            suggests: [
                {name:'suggest1'}, {name:'suggest2'}, {name:'suggest3'}, {name:'suggest4'}, {name:'suggest5'},
                {name:'suggest6'}, {name:'suggest7'}, {name:'suggest8'}, {name:'suggest9'}, {name:'suggest10'}
            ],
            title: 'پیشنهادی Deep Music'
        }
    },
}

</script>

<style scoped>
@import '@/assets/css/music/content/suggestsBox.css';
</style>