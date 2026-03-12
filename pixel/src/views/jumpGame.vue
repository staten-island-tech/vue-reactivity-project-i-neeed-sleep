<template>
    <div class="bg-screen" :style="{backgroundImage:'url('+background+')'}">
        <button @click="pauseGame = true, playing = false, pPause(),gamePause()" class="pause-button" v-if="playing">Pause</button>
        <div class="game-score"><scoreKeep ref="keepScore"></scoreKeep></div>
        <div id="player-sprite" :class="action"></div>
        <div v-if="pauseGame" class ="pause-menu">
            <h1>Game Paused</h1>
            <button class="outgame-menu-button" @click="pauseGame = false, playing = true, pUnpause(),gameStart()">Continue Game</button><br><br>
            <button class="outgame-menu-button" @click="choosing=true">Change Background</button>
        </div>
        <div class ="pause-menu" style="display:inline-flex" v-if="choosing"> 
            <bgChoice @click="changeBg(bg),choosing=false" v-for="bg in bgs" :key="bg.img" :bg="bg"></bgChoice>
        </div>

        <div class="death-screen" v-if="playerDead">
            <h1>High Score:{{ hiScore }}</h1>
            <button @click="playing=true,playerDead=false, gameStart()" class="outgame-menu-button">Restart</button>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import bgChoice from '@/components/bgChoice.vue'
import bgArt from '@/assets/bgArt.png'
import bgArt1 from '@/assets/bgArt1.png'
import bgArt2 from '@/assets/bgArt2.png'
import scoreKeep from '@/components/scoreKeep.vue'

//BACKGROUND STUFF
const bgs = ref([{
    name: 'city',
    img: bgArt
},{
    name: 'standby',
    img: bgArt2
},{
    name: 'void',
    img: bgArt1
}])

const choosing =ref(false);
const pauseGame = ref(false);

const background = ref(bgArt);
const playing = ref(true);


function changeBg(bg){
    background.value = bg.img;
}

//SPAWN
const keepScore = ref(null);
const hiScore = ref(null);

function gameStart (){
    if(keepScore.value){
        keepScore.value.startGame()
    }
}

function gamePause(){
    if(keepScore.value){
        keepScore.value.pauseGame()
    }
}


const playerDead = ref(false);
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




// GAME MOVEMENT

const jumping = ref(false);
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

// ANIMATION

const action = ref('running-sprite');

function pJump(){
    if(action.value === 'running-sprite'){
       action.value = 'jumping-sprite';
    } else{
        action.value = 'running-sprite';
    }
}
function pPause(){
    action.value = 'paused-sprite';
}

function pUnpause(){
    action.value = 'running-sprite';
}
</script>

<style scoped>
*{
    left: 10vw;
}
.game-obstacle{
    right: -5vw;
    bottom: 10vw;
    width: 2vw;
}
.game-score{
    position: absolute;
    top:0;
    left:54vw;
}
.bg-screen{
    width: 80vw;
    height: 45vw;
    image-rendering: pixelated;
    background-size: cover;
    position: fixed;
}

.death-screen{
    width: 80vw;
    height: 45vw;
    background-color: #00000080;
    position: fixed;
}

h1{
    font-family: "Jersey 10", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    font-size: 10vw;
    color: #EACDC2;
    position: relative;
    width: 50vw;
    left: 15vw;
}
.outgame-menu-button{
    font-family: "Jersey 10", sans-serif;
    font-weight: 200;
    font-style: normal;
    text-align: center;
    font-size: 5vw;
    color: #FFC15E;
    border: none;
    background-color: #1A1423;
    align-self: center;
    width: 45vw;
    position: relative;
    left: 17.5vw;
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
    width: 80vw;
    height: 45vw;
    background-color: #00000080;
    position: fixed;
}

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
    background-position: 36vw;
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