<template>
    <div class="bg-screen">
        <div class="player-sprite" @keydown.space=jump>
            
        </div>
        <div class="cone-obstacle"></div>
        <div @keydown.esc="pauseGame = true" v-if="pauseGame">
            <button @click="pauseGame = false">Continue Game</button>
            <button @click="choosing=true">Change Background</button>
            <div class ="pause-menu" v-if="choosing"> 
                <bgChoice @click="changeBg(bg)" v-for="bg in bgs" :key="bg.img" :bg="bg"></bgChoice>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import bgChoice from '@/components/bgChoice.vue'
import run1 from '@/assets/run1.png'
import run2 from '@/assets/run2.png'
import run3 from '@/assets/run3.png'
import bgArt from '@/assets/bgArt.png'
import bgArt1 from '@/assets/bgArt1.png'
import bgArt2 from '@/assets/bgArt2.png'
import { f } from 'vue-router/dist/index-Cu9B0wDz.mjs'

//BACKGROUND STUFF
const bgs = ref([{
    name: 'city',
    img: bgArt
},{
    name: 'standby',
    img: bgArt1
},{
    name: 'void',
    img: bgArt2
}])

const choosing =ref(false);
const pauseGame = ref(false);

const background = ref(bgArt);

function changeBg(bg){
    background = bg.img;
}

//SPAWN
const playing = ref(true);
const jumping = ref(false);
const score = ref(0);
const hiScore = ref(0);

async function scoree() {
    await delay(700);
    score ++
}

async function spawnObstacle() {
    await delay(2000 + Math.floor(Math.random()*2000))
    document.querySelector(".bg-screen").insertAdjacentHTML('beforeend', `
        <div :class = "game-obstacle"></div>
    `)
}

async function obstacle(){
    document.querySelectorAll(".game-obstacle").style.transform = "translateX(-1%)";
    await delay(25);
}

// while(playing===true && pauseGame===false){
//     scoree();
//     spawnObstacle();
//     obstacle()
//     while(jumping=false){
//         animation();
//     }
// }

// if (playing===false){
//     if(score > hiScore){
//         hiScore = score
//     }
//     score = 0
// }

// ANIMATION
const currentFrame = ref(run1);
const running = ref(true);

async function animation() {
    currentImage.value = run1;
    await delay(500);
    currentImage.value = run2;
    await delay(250);
    currentImage.value = run3;
    await delay(500);
    currentImage.value = run2;
    await delay(250);
}

// GAME MOVEMENT
async function jump(){
    jumping = true
    for(let i = 5; i <= 5; i++){
        document.querySelectorAll(".player").style.transform = "translateY(1%)";
        await delay(25);
    } 
    for(let i = 5; i <= 5; i++){
        document.querySelectorAll(".player").style.transform = "translateY(-1%)";
        await delay(25);
    }
    jumping = false 
}

</script>

<style scoped>
.game-obstacle{
    right: -5vh;
    bottom: 20vh;
    width: 2vh;
}
.bg-screen{
    width: 100vh;
    height: 56.25vh;
    image-rendering: pixelated;
    background-image: url("./src/assets/bgArt.png");
    background-size: cover;
}

.player-sprite{
    background-color: antiquewhite;
    width: 10vh;
    height:10vh;
    background-size: cover;
    image-rendering: pixelated;
}

h1{
    font-family: "Jersey 10", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    font-size: 80;
    color: #EACDC2;
}
button{
    font-family: "Jersey 10", sans-serif;
    font-weight: 200;
    font-style: normal;
    text-align: center;
    font-size: 80;
    color: #FFC15E;
    border: none;
    background-color: #1A1423;
    align-self: center;
    width: 10%;
}
</style>