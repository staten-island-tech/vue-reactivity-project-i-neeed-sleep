<template>
    <div class="bg-screen" @click="playerJump" :style="{backgroundImage:'url('+background+')'}">
        <button @click="gamePause()" class="pause-button" v-if="playing">Pause</button>
        <div class="game-score"><scoreKeep ref="keepScore"></scoreKeep></div>
        <div v-for="obstacle in obstacles" :key="obstacle.id"
        class="obstacle" :style="{ left: obstacle.left + 'vw' }" ref="obstacleRef => ">
        </div>
        <div id="player-sprite" :class="action" ref="playerRef"></div>
        <div v-if="pauseGame" class ="pause-menu">
            <h1>Game Paused</h1>
            <button class="outgame-menu-button" @click="gameUnpause()">Continue Game</button><br><br>
            <button class="outgame-menu-button" @click="choosing=true">Change Background</button>
        </div>
        <div class ="pause-menu" style="display:inline-flex" v-if="choosing"> 
            <bgChoice @click="changeBg(bg),choosing=false" v-for="bg in bgs" :key="bg.img" :bg="bg"></bgChoice>
        </div>

        <div class="death-screen" v-if="playerDead">
            <h1>High Score:{{ highScore }}</h1>
            <button @click="gameRestart()" class="outgame-menu-button">Restart</button>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
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
const playing = ref(true);
const background = ref(bgArt);


function changeBg(bg){
    background.value = bg.img;
}

//SPAWN
const keepScore = ref(null);
const playerDead = ref(false);

function scoreStart (){
    if(keepScore.value){
        keepScore.value.startGame()
    }
}

function scorePause(){
    if(keepScore.value){
        keepScore.value.pauseGame()
    }
}

function scoreDeath(){
    if(keepScore.value){
        keepScore.value.endGame()
    }
}

// ANIMATION
const action = ref('running-sprite');


function playerPause(){
    action.value = 'paused-sprite';
}

function playerUnpause(){
    action.value = 'running-sprite';
}

function playerJump(){
    if(pauseGame.value===false){
        action.value = 'jumping-sprite';
        setTimeout(() => {
            action.value = 'running-sprite';
        }, 1200);
    }
}
//GAME STUFF
const obstacles = ref([]);
const spawnLoop = ref(null)
const obstacleMovement = ref(null)
const collisionCheck = ref(null)

const playerRef = ref(null);

function gameDeath(){
    scoreDeath();
    stopObstacles();
    playerDead.value = true;
    action.value = 'dead-sprite';
}

function checkCollision() {
    const spriteColl = playerRef.value.getBoundingClientRect();
    const obstacleColl = obstacles.value.forEach(obs=>obs.getBoundingClientRect()); 
    
    if(obstacleColl.x >= spriteColl.x && obstacleColl.y <= Math(spriteColl.y+spriteColl.width)){
        gameDeath();
    }
}


onMounted(() => {
    spawnLoop.value = setInterval(()=>{obstacles.value.push({
        id: Date.now(),
        left: 80,
    });}, 3000);
    obstacleMovement.value = setInterval(() => {
        obstacles.value.forEach(obs => obs.left-=4);
        obstacles.value = obstacles.value.filter(obs => obs.left>-10);
    }, 80);
    document.addEventListener('keydown', (event)=>{
        event.preventDefault();
        if (event.code === 'Space' || event.key === 'ArrowUp'){
            playerJump()
        }
    });
    collisionCheck.value = setInterval(checkCollision(),40);
});

function stopObstacles (){
    clearTimeout(obstacleMovement.value);
    clearTimeout(spawnLoop.value);
    // clearTimeout(collisionCheck.value);
}
function unpauseObstacles (){ 
    spawnLoop.value = setInterval(()=>{obstacles.value.push({
        id: Date.now(),
        left: 80,
    });}, 3000);
    obstacleMovement.value = setInterval(() => {
        obstacles.value.forEach(obs => obs.left-=4);
        obstacles.value = obstacles.value.filter(obs => obs.left>-10);
    }, 100);
    collisionCheck.value = setInterval(checkCollision(),40);
}


function gamePause(){
    playerPause();
    scorePause();
    stopObstacles();
    pauseGame.value = true;
    playing.value = false;
}

function gameUnpause(){
    playerUnpause();
    scoreStart();
    unpauseObstacles();
    pauseGame.value = false;
    playing.value = true;
}

function gameRestart(){
    scoreStart();
    unpauseObstacles();
    playerUnpause();
    playerDead = false;
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
*{
    left: 10vw;
}
.obstacle{
  position: absolute;
  image-rendering: pixelated;
  height: 8vw;
  width: 8vw;
  background-image: url(@/assets/cone.png);
  background-size: cover;
  top: 33vw;
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
    left: 4vw;
    height: 18vw;
    width: 18vw;
    background-size: cover;
    background-image: url(@/assets/spriteSheet.png);
    image-rendering: pixelated;
}
.running-sprite{
    animation: run 1s steps(4) infinite;
}
.jumping-sprite{
    animation: jump 1.2s linear;
    animation-delay: -0.1s;
    background-position: 0vw;
}
.paused-sprite{
    animation-play-state: paused;
    background-position: 36vw;
}
.dead-sprite{
    animation-play-state: paused;
    background-image: url(@/assets/ded.png);
}
@keyframes jump {
    0% {top: 23vw}
    40% {top: 3vw;}
    100% {top: 23vw;}
}
@keyframes run {
    from {background-position: 18vw}
    to {background-position: 90vw;}
}
</style>