<template>
    <div class="bg">
        <div class="player" @keydown.space=jump>
            
        </div>
        <div class="cone"></div>
        <div @keydown.esc="pauseGame = true" v-if="pauseGame">

            <button @click="pauseGame = false">Continue Game</button>
            <button @click="choosing=true">Change Background</button>
            <div v-if="choosing"> <bgChoice v-for="bg in bgs" :key="bg.name" :bg="bg">{{ bg.name }}</bgChoice></div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import bgChoice from '@/components/bgChoice.vue'

const bgs = ref([{
    name: 'city',
    img: './src/assets/bgArt.png'
},{
    name: 'standby',
    img: './src/assets/bgArt2.png'
},{
    name: 'void',
    img: './src/assets/bgArt1.png'
}])

const score = ref(0);
const hiScore = ref(0);

const playing = ref(true);
const jumping = ref(false);
const choosing =ref(false);
const pauseGame = ref(false);

const background = ref('@/assets/bgArt.png');

const currentFrame = ref(run1);
const running = ref(true);

// async function jump(){
//     jumping = true
//     for(let i = 5; i <= 5; i++){
//         document.querySelectorAll(".player").style.transform = "translateY(1%)";
//         await delay(25);
//     } 
//     for(let i = 5; i <= 5; i++){
//         document.querySelectorAll(".player").style.transform = "translateY(-1%)";
//         await delay(25);
//     }
//     jumping = false 
// }


// async function animation() {
//     currentImage.value = run1;
//     await delay(500);
//     currentImage.value = run2;
//     await delay(250);
//     currentImage.value = run3;
//     await delay(500);
//     currentImage.value = run2;
//     await delay(250);
// }

// async function scoree() {
//     await delay(700);
//     score ++
// }

// async function spawnCone() {
//     await delay(2000 + Math.floor(Math.random()*2000))
//     document.querySelector(".bg").insertAdjacentHTML('beforeend', `
//         <div :class = "cone"></div>
//     `)
// }

// async function obstacle(){
//     document.querySelectorAll(".cone").style.transform = "translateX(-1%)";
//     await delay(25);
// }

// while(playing===true){
//     scoree();
//     cone();
//     if(jumping=false){
//         animation();
//     }
// }

// if (playing===false){
//     if(score > hiScore){
//         hiScore = score
//     }
//     score = 0
// }



</script>

<style scoped>
.cone{
    right: -5vh;
    bottom: 20vh;
    width: 2vh;
}
.bg{
    width: 100vh;
    height: 56.25vh;
    image-rendering: pixelated;
    background-image: url("./src/assets/bgArt.png");
    background-size: cover;
}

.player{
    background-color: antiquewhite;
    width: 10vh;
    height:10vh;
    background-size: cover;
    image-rendering: pixelated;
}

h1{
    font-family: "Jersey 10", sans-serif;
    font-weight: 400px;
    font-style: normal;
    text-align: center;
    font-size: 80px;
    color: #EACDC2;
}
button{
    font-family: "Jersey 10", sans-serif;
    font-weight: 200px;
    font-style: normal;
    text-align: center;
    font-size: 80px;
    color: #FFC15E;
    border: none;
    background-color: #1A1423;
    align-self: center;
    width: 10%;
}
</style>