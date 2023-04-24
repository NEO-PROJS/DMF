<template>
<footer id="footer">

    <div id="social-media" name="social-media">
        <label for="social-media">ما را دنبال کنید</label>
        <ul id="social-media-ul">
            <li v-for="item, key in socialMedia" :key="key">
                <a href="">
                    <img :src="require('@/assets/img/music/footer/'+item.img+'.png')">
                    <p>{{ item.id }}</p>
                </a>
            </li>
        </ul>
    </div>
    
    <div id="more">
        <ul>
            <li></li>
        </ul>
    </div>

</footer>
</template>

<script>

export default {
    name: 'FooterComp',
    data(){
        return {
            socialMedia: [
                {name:"telegram", id:"@deep_music_abc", img:"telegram-icon"},
                {name:"instagram", id:"@deep_music_abc", img:"instagram-icon"},
                {name:"whatsapp", id:"09abc2010", img:"whatsapp-icon"},
            ]
        }
    }
}

</script>

<style scoped>
@import '@/assets/css/music/content/footer.css';
</style>