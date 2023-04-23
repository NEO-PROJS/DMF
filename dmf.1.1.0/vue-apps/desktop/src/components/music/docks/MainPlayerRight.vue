<template>
<div id="main-player-right">
</div>
</template>

<script>

export default {
    name: 'MainPlayerRightComp',
    data(){
        return {
            options: {
                shuffle: false,
                like: false,
                add: false,
                albums: false,
            }
        }
    }
}

</script>

<style scoped>
@import '@/assets/css/music/dock/mainPlayerRight.css';
</style>