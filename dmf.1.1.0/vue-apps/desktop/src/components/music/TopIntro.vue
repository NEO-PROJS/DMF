<template>
<div id="top-intro">
    <div id="title">
        <RouterLink :to="{name:'home'}" class="title-link">
        <p id="deep">Deep</p>
        <p id="music">Music</p>
        </RouterLink>
    </div>
</div>
</template>

<script>

export default {
    name: 'TopIntroComp'
}

</script>

<style>
@import '@/assets/css/music/content/topIntro.css';
</style>