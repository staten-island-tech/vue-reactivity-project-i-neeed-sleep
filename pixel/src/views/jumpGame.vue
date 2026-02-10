<script setup>
import { astro } from 'globals'
import {ref} from 'vue'

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
    if (currentFrame === run1){
        currentImage.value = run2;
        await delay(500);
    }if (currentFrame === run2){
        currentImage.value = run3;
        await delay(250);
    }else{
        currentImage.value = run1;
        await delay(500);
    }
}

async function scoree() {
    await delay(700);
    score ++
}

async function spawnCone() {
    await delay(2000 + Math.floor(Math.random()*3000))
    document.querySelectorAll(".cone").style.left += 50px
}


///////////////////////////////////////////////////////////////////

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

<template>
    <Transition name=""></Transition>
    <div ></div>
</template>

<style scoped>
.cone{
    left: -5%;
    bottom: 20%;
    width: 120px;
    height: 120px;
}

.

</style>
