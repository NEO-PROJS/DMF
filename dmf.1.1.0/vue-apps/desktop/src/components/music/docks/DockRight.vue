<template>

<div id="dock-right">

    <div id="nvg">
        <ul id="options">
            <li v-for="opt, key in nvgOpts" :key="key" @mouseenter="optCurrState = opt.name"
                @mouseleave="optCurrState = optStaticState"
                :class="{'selected-opt':optStaticState == opt.name}">
                <RouterLink :to="{name:opt.link}" class="nvg-link" v-if="opt.link">
                    <p>{{ opt.title }}</p>
                    <img :src="require('@/assets/img/music/dockRight/'+opt.img+'.png')">
                </RouterLink>
                <a class="nvg-link" v-else-if="opt.addr" :href="opt.addr">
                    <p>{{ opt.title }}</p>
                    <img :src="require('@/assets/img/music/dockRight/'+opt.img+'.png')">
                </a>
            </li>
            <div id="floater" :class="'floater-'+optCurrState+''"></div>
        </ul>
    </div>

    <MainPlayerRight />

</div>

</template>

<script>

import MainPlayerRight from '@/components/music/docks/MainPlayerRight.vue';
export default {
    name: 'DockRightComp',
    props: ['optState'],
    components: {MainPlayerRight},
    data(){
        return {
            optStaticState : null,
            optCurrState: null,
            nvgOpts: [
                {title:'خانه', name:'home', link:'home',img:'home'},
                {title:'لیست‌ها', name:'playlists', link:'playLists',img:'playlists'},
                {title:'جستجو', name:'search', link:'search',img:'search'},
                {title:'پنل کاربری', name:'panel', link:'accountPanel',img:'profile'},
            ]
        }
    },
    mounted(){
        this.optStaticState = this.optState;
        this.optCurrState = this.optStaticState;
    },
    watch: {
        optState: {
            handler(val){
                val;
                this.optStaticState = this.optState;
                this.optCurrState = this.optStaticState;
            }
        }
    }
}

</script>

<style>
@import '@/assets/css/music/dock/dockRight.css';
</style>