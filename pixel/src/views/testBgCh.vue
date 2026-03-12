<template>
        <div id="player-sprite" :class="action"></div>
<button @click="change()">e</button>
</template>

<script setup>
import { ref } from 'vue';

const action = ref('running-sprite');

function change(){
    action.value = 'paused-sprite'
}
</script>

<style scoped>
#player-sprite{
    position: absolute;
    top: 23vw;
    left: 2vw;
    height: 18vw;
    width: 18vw;
    background-size: cover;
    background-image: url(@/assets/spriteSheet.png);
    image-rendering: pixelated;
}
.running-sprite{
    animation: run 0.8s steps(4) infinite;
}
.jumping-sprite{
    animation-play-state: paused;
}
.paused-sprite{
    animation-play-state: paused;
}
@keyframes jump {
    from {background-position: 0vw}
    to {background-position: 0vw;}
}
@keyframes run {
    from {background-position: 18vw}
    to {background-position: 90vw;}
}
</style>