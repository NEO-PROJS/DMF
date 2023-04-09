<template>
<div id="dock-bottom">
    <MainPlayerBottom />
</div>
</template>

<script>

import MainPlayerBottom from '@/components/music/docks/MainPlayerBottom.vue';
export default {
    name: 'DockBottomComp',
    components: {MainPlayerBottom}
}

</script>

<style scoped>
@import '@/assets/css/music/dock/dockBottom.css';
</style>