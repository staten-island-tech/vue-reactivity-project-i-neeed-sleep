<template>
    <div :class="bg">
        <div :class="player">
            
        </div>
        <div :class="cone"></div>
        <div :class="outFocus" @keydown.esc="">
            <div> <bgChoice v-for="bg in bgs" :key="bg.name" :animal="bg.img"></div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import pauseGame from '@/components/pauseGame.vue'
import bgChoice from '@/components/bgChoice.vue'

const bgs = [{
    name: 'city',
    img: '@/assets/bgArt.png'
},{
    name: 'standby',
    img: '@/assets/bgArt2.png'
},{
    name: 'void',
    img: '@/assets/bgArt1.png'
}]

const score = ref(0)
const hiScore = ref(0)

const playing = ref(true)
const jumping = ref(false)

const currentFrame = ref(run1)
const running = ref(true)

function start(){
    addEventListener('keydown', event =>{
        event.preventDefault();
        if(event.code === 'Space' || event.key === ' '){
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
    })

}

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

async function scoree() {
    await delay(700);
    score ++
}

async function spawnCone() {
    await delay(2000 + Math.floor(Math.random()*2000))
    document.querySelector(".bg").insertAdjacentHTML('beforeend', `
        <div :class = "cone"></div>
    `)
}

async function obstacle(){
    document.querySelectorAll(".cone").style.transform = "translateX(-1%)";
    await delay(25);
}

while(playing===true){
    scoree();
    cone();
    if(jumping=false){
        animation();
    }
}

if (playing===false){
    if(score > hiScore){
        hiScore = score
    }
    score = 0
}



</script>

<style scoped>
.cone{
    right: -5%;
    bottom: 20%;
    width: 2%;
}
.pauseFocus{
    background-color: #000000;
    opacity: 25%;
}
.bg{
    width: 100%;
    height: 56.25%;
    image-rendering: pixelated;
    background-image: url("@/assets/bgArt.png");
}
</style>
