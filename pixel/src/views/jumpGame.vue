<template>
    <div :class="bg"></div>
    <div v-if=playing></div>
    <div :class="outFocus" @keydown="">
        <button @click="menu" :class="leave" ></button>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const bg = [{
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
const jumped = ref(false)

const currentFrame = ref(run1)
const running = ref(true)

function start(){
    addEventListener('keydown', event =>{
        event.preventDefault();
        if(event.code === 'Space' || event.key === ' '){
            jumped = true
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
    await delay(2000 + Math.floor(Math.random()*3000))
    document.querySelector(".bg").insertAdjacentHTML('beforeend', `
        <div class = "cone"></div>
    `)
}

async function obstacle(){
    document.querySelectorAll(".cone").style.transform = "translateX(-1%)";
    await delay(50);
}

while(playing===true){
    scoree();
    animation();
    cone();
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
    left: -5%;
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
}
</style>
