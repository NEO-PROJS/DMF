<template>
<div id="top-intro">
    <div id="sign">
        <ul>
            <li><router-link :to="{name:'accountLogin'}" class="sign-router">
                <p>ورود</p>
            </router-link></li>
            <li><router-link :to="{name:'accountSignup'}" class="sign-router">
                <p>ثبت نام</p>
            </router-link></li>
        </ul>
    </div>
    <div id="title">
        <router-link :to="{name:'home'}" class="title-link">
        <p id="deep">Deep</p>
        <p id="music">Music</p>
        </router-link>
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