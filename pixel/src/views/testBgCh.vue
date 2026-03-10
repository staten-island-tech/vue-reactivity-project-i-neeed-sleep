<template>
    <div class="space">
        <div class="game-obstacle"><img :src="cone"></div>
    </div>
    <button @click="start=true">start</button>
</template>

<script setup>
import {ref} from 'vue'
import cone from '@/assets/cone.png'

const start = ref(false);




// const cone = document.querySelectorAll(".game-obstacle").style.left;
// function ee(){
//     setTimeout(()=>{
//         let funn = cone.value -'vw'
//         cone.style.left= funn -1 +'vw';
//     }, 25)
// }

if(start){
    ee();
}

// if (running){
//     animation()
// }
</script>

<style scoped>
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