<template>
<footer id="footer">

    <div id="social-media">
        <ul id="social-media-ul">
            <li v-for="item, key in socialMedia" :key="key">
                {{ item.name }}
            </li>
        </ul>
    </div>
    
    <div id="more">
    </div>

</footer>
</template>

<script>

export default {
    name: 'FooterComp',
    data(){
        return {
            socialMedia: [
                {name:"telegram", id:"", img:""},
                {name:"instagram", id:"", img:""},
                {name:"whatsapp", id:"", img:""},
                {name:"whatsapp", id:"", img:""}
            ]
        }
    }
}

</script>

<style scoped>
@import '@/assets/css/music/content/footer.css';
</style>