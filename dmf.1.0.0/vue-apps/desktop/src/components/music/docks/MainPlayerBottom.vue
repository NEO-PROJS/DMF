<template>
<div id="main-player-bottom">
    <div id="cover">
        <img :src="require('@/assets/img/music/dido.jpg')">
    </div>
    <div id="ctrl"></div>
    <div id="timer"></div>
</div>
</template>

<script>

export default {
    name: 'MainPlayerBottomComp'
}

</script>

<style scoped>
@import '@/assets/css/music/dock/mainPlayerBottom.css';
</style>