<template>
<div class="floater-banner">
    <div class="title">
        <p>{{ title }}</p>
        <RouterLink :to="{name:moreLink}" class="more-router"><p class="more-text">بیشتر...</p></RouterLink>
    </div>
    <div class="content" @mouseenter="hndlFloaterME()"
        @mouseleave="hndlFloaterML()">
        <TransitionGroup name="floater-trans">
        <ul class="floater-ul" v-for="sec,secKey in Math.round(items.length/5)"
            :key="secKey" v-show="activeFloater == secKey" >
            <li v-for="item,itemKey in items.slice(secKey*5, (secKey*5)+5)"
                :key="itemKey">
                <div class="cover" style="color:white;">
                </div>
            </li>
        </ul>
        </TransitionGroup>
        <ul class="floater-sel">
            <li v-for="sel,selKey in Math.round(items.length/6)" :key="selKey"
                :class="{'active-floater-sel':selKey == activeFloater}"
                @click="activeFloater = selKey">
                <div class="sel-line"></div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>

export default {
    name: 'FloaterBannerHZ',
    props: ['title', 'items', 'moreLink'],
    data(){
        return {
            activeFloater: 0,
            floaterInterval: null,
        }
    },
    methods: {
        manageFloaterInterval(){
            var max = Math.round(this.items.length/3)-1
            this.floaterInterval = setInterval(()=> {
                if(this.activeFloater < max){
                    this.activeFloater += 1
                } else {
                    this.activeFloater = 0
                }
            }, 8000)
        },
        swipeLeft(){
            console.log("Swipe Left")
        },
        hndlFloaterME(){
            // clearInterval(this.floaterInterval)
        },
        hndlFloaterML(){
            // this.manageFloaterInterval()
        }
    },
    mounted(){
        // this.manageFloaterInterval()
    }
}

</script>

<style scoped>
@import "@/assets/css/music/content/floaterBanner.css";
</style>