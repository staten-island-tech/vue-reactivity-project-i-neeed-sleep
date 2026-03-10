<template>
    <div class="space">
        <div class="player-sprite">
            <img :src="currentFrame">
        </div>
    </div>
    
    <button @click="running=true">start</button>
    <div class="space">
        <div class="game-obstacle"><img :src="cone"></div>
    </div>
    <button @click="start=true">start</button>
</template>

<script setup>
import {ref} from 'vue'
import run1 from '@/assets/run1.png'
import run2 from '@/assets/run2.png'
import run3 from '@/assets/run3.png'
import cone from '@/assets/cone.png'

const currentFrame = ref(run1);
const running = ref(false);
const start = ref(false);


function animation() {
    setTimeout(()=>{currentFrame.value = run1;}, 500)
    setTimeout(()=>{currentFrame.value = run2;}, 250)
    setTimeout(()=>{currentFrame.value = run3;}, 500)
    setTimeout(()=>{currentFrame.value = run2;}, 250)
}

const cone = document.querySelectorAll(".game-obstacle").style.left;
function ee(){
    setTimeout(()=>{
        let funn = cone.value -'vw'
        cone.style.left= funn + 0.5 +'vw';
    }, 25)
}

if(start){
    ee();
}

// if (running){
//     animation()
// }
</script>

<style scoped>
.character-sprite{
    background-size: cover;
    image-rendering: pixelated;
    height: 20vw;
    width: 20vw;
    position:relative;
    top: 30vw;
}
img{
    height: fit-content;
    width: fit-content;
    image-rendering: pixelated;
}
.game-obstacle{
    height: 10vw;
    width: 10vw;
    position:relative;
    top: 30vw;
    left: 90vw;
}
.space {
    width: 100vw;
    height: 40vw;
    background-color: #006134;
}
</style>