<template>
    <div class="bg-screen" :style="{backgroundImage:'url('+background+')'}">
        <button @click="pauseGame = true, playing = false" class="pause-button" v-if="playing">Pause</button>
        <div v-if="pauseGame" class ="pause-menu">
            <button class="pause-menu-button" @click="pauseGame = false, playing = true">Continue Game</button><br><br>
            <button class="pause-menu-button" @click="choosing=true">Change Background</button>
        </div>
        <div class ="pause-menu" style="display:inline-flex" v-if="choosing"> 
            <bgChoice @click="changeBg(bg),choosing=false" v-for="bg in bgs" :key="bg.img" :bg="bg"></bgChoice>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import bgChoice from '@/components/bgChoice.vue'
import bgArt from '@/assets/bgArt.png'
import bgArt1 from '@/assets/bgArt1.png'
import bgArt2 from '@/assets/bgArt2.png'

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
const playing = ref(true);


function changeBg(bg){
    background.value = bg.img;
}

//SPAWN
// const score = ref(0);
// const hiScore = ref(0);
// const dead = ref(false);

// async function scoree() {
//     await delay(700);
//     score ++
// }

// async function spawnObstacle() {
//     await delay(2000 + Math.floor(Math.random()*2000))
//     document.querySelector(".bg-screen").insertAdjacentHTML('beforeend', `
//         <div :class = "game-obstacle"></div>
//     `)
// }

// async function obstacle(){
//     document.querySelectorAll(".game-obstacle").style.transform = "translateX(-1%)";
//     await delay(25);
// }

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


// GAME MOVEMENT

// const jumping = ref(false);
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

</script>

<style scoped>
.game-obstacle{
    right: -5vw;
    bottom: 10vw;
    width: 2vw;
}
.bg-screen{
    width: 100vw;
    height: 56.25vw;
    image-rendering: pixelated;
    background-size: cover;
    position: absolute;
}

.player-sprite{
    width: 10vw;
    height:10vw;
    background-size: cover;
    image-rendering: pixelated;
}

h1{
    font-family: "Jersey 10", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    font-size: 8vh;
    color: #EACDC2;
    position: absolute;
}
.pause-menu-button{
    font-family: "Jersey 10", sans-serif;
    font-weight: 200;
    font-style: normal;
    text-align: center;
    font-size: 5vw;
    color: #FFC15E;
    border: none;
    background-color: #1A1423;
    align-self: center;
    width: 50%;
    position: relative;
    top: 50%;
    left: 25%;
}
.pause-button{
    font-family: "Jersey 10", sans-serif;
    font-weight: 200;
    font-style: normal;
    text-align: center;
    font-size: 3vw;
    color: #FFC15E;
    border: none;
    background-color: #1A1423;
    align-self: center;
    height: 4vw;
    width: 8vw;
}
.pause-menu{
    width: 100vw;
    height: 56.25vw;
    background-color: #00000080;
    position: absolute;
}
</style>