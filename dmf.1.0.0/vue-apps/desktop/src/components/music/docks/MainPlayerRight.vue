<template>
<div id="main-player-right">
    <div id="options">
        <div id="cover">
            <img :src="require('@/assets/img/music/dido.jpg')" />
        </div>
        <button
            :class="{'opt-btn':true, 'left':true, 'active-shuffle':options.shuffle, 'deactive-shuffle':!options.shuffle}"
            @click="options.shuffle = !options.shuffle">
        </button>
        <button
            :class="{'opt-btn':true, 'right':true, 'active-like':options.like, 'deactive-like':!options.like}"
            @click="options.like = !options.like">
        </button>
        <button
            :class="{'opt-btn':true, 'left':true, 'active-add':options.add, 'deactive-add':!options.add}"
            @click="options.add = !options.add">
        </button>
        <button class="opt-btn right" id=""
            :class="{'opt-btn':true, 'left':true, 'active-album':options.albums, 'deactive-albums':!options.albums}">
        </button>
    </div>
    <div id="timer">
        <div id="curr"></div>
    </div>
    <div id="ctrl">
        <button class="prev-next-btn" id="prev"></button>
        <button id="play" disabled ></button>
        <button class="prev-next-btn" id="next"></button>
    </div>
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
#main-player-right #options .deactive-shuffle {
    background-image: url('@/assets/img/music/dockRight/shuffleDeAct.png');
    opacity: 0.4;
}
#main-player-right #options .active-shuffle {
    background-image: url('@/assets/img/music/dockRight/shuffleAct.png');
}
#main-player-right #options .deactive-like {
    background-image: url('@/assets/img/music/dockRight/likeDeAct.png');
    background-size: 80%;
    opacity: 0.4;
}
#main-player-right #options .active-like {
    background-size: 80%;
    background-image: url('@/assets/img/music/dockRight/likeAct.png');
}
#main-player-right #options .deactive-add {
    background-image: url('@/assets/img/music/dockRight/addDeAct.png');
    opacity: 0.4;
    transition: all 0.1s ease-in-out;
}
#main-player-right #options .active-add {
    background-image: url('@/assets/img/music/dockRight/addDeAct.png');
    transition: all 0.1s ease-in-out;
    opacity: 1;
    transform: rotate(-90deg);
}
</style>