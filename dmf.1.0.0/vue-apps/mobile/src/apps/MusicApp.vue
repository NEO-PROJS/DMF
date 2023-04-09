<template>
<div id="container">
    <div id="content">
        <RouterView />
    </div>

    <RouterView name="dockBottom"/>
</div>
</template>

<script> 

export default {
    name:'MusicApp'
}

</script>


<style scoped>
@import '@/assets/css/music/main.css';
</style>