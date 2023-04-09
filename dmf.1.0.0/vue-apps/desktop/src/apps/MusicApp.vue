<template>
<div id="container">

    <div id="content">
        <RouterView name="topIntro" />
        <RouterView name="trendsBox" />
        <RouterView name="latestsBox" />
        <RouterView name="suggestsBox" />
        <RouterView name="footer" />
        <RouterView />
    </div>

    <RouterView name="dockRight" v-if="winSize.w > 831" />
    <RouterView name="dockBottom" v-else/>
</div>
</template>

<script> 

export default {
    name:'MusicApp',
    data(){
        return {
            winSize: {w: null, h: null}
        };
    },
    methods: {
        onWinResize(){
            window.addEventListener('resize', () => {
                this.updateScreenSize();
            });
        },
        updateScreenSize(){
            this.winSize.w = window.innerWidth;
            this.winSize.h = window.innerHeight;
        }
    },
    mounted(){
        this.onWinResize();
        this.updateScreenSize();
    }
}

</script>


<style scoped>
@import '@/assets/css/music/main.css';
@font-face {
    font-family: 'Cairo';
    src: url('@/assets/fonts/Cairo/Cairo-VariableFont_slnt_wght.ttf');
}
@font-face {
    font-family: 'Righteous';
    src: url('@/assets/fonts/Righteous/Righteous-Regular.ttf');
}
@font-face {
    font-family: 'IBMPlexSansArabic';
    src: url('@/assets/fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Regular.ttf');
}
@font-face {
    font-family: 'NotoSansArabic';
    src: url('@/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-VariableFont_wdth_wght.ttf');
}
</style>