<template>
    <div :class="bg">
    </div>
    <div :class="outFocus" v-if = playing>
        <button @click="menu" :class="leave" ></button>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const bgStuff = [{
    name: 'city',
    img: './public/bgArt.png'
},{
    name: 'plains',
    img: './public/bgArt1.png'
},{
    name: 'void',
    img: './public/bgArt2.png'
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
function menu(){

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
.outFocus{
    background-color: #000000;
    opacity: 25%;
}
.bg{
    background-image: url('./public/bgArt.png');
    width: 100%;
}
</style>
