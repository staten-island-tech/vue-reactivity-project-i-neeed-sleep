<template>
    <div class="player-sprite" :style="{backgroundImage:'url('+currentFrame+')'}" @keyup.space.exact="jump">
            
    </div>
    <button @click="running=true">start</button>
</template>

<script setup>
import { useAnimationFrame } from 'motion-v'
import {ref} from 'vue'
import run1 from '@/assets/run1.png'
import run2 from '@/assets/run2.png'
import run3 from '@/assets/run3.png'

const currentFrame = ref(run1);
const running = ref(false);

function animation() {
    setTimeout(()=>{
        currentFrame.value = run1;
    }, 500)
    setTimeout(()=>{
        currentFrame.value = run2;
    }, 250)
    setTimeout(()=>{
        currentFrame.value = run3;
    }, 500)
    setTimeout(()=>{
        currentFrame.value = run2;
    }, 250)
}

useAnimationFrame((time, delta)=>{
    if (delta=250){
        currentFrame.value = run1;
    }
    if (time%750){
        currentFrame.value = run2;
    }
    if (time%1250){
        currentFrame.value = run3;
    }
    currentFrame.value.style.backgroundImage = `url(${currentFrame})`
})

// if (running){
//     animation()
// }
</script>

<style scoped>
    div{
        background-color: brown;
        background-size: cover;
        width: 20vw;
        height: 20vw;
        image-rendering: pixelated;
    }
</style>