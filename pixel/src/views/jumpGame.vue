<script setup>
import {ref} from 'vue'

const score = ref(0)
const hiScore = ref(0)

const jumped = ref(false)

addEventListener('keydown', event =>{
    event.preventDefault();
    if(event.code === 'Space' || event.key === ' '){
        jumped = true
    }
})

const currentFrame = ref(run1)
const running = ref(true)

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



</script>

<template>
    <Transition name=""></Transition>
    <div :class="cone"></div>
    <div :class="{'jump': jumped}"></div>
</template>

<style scoped>
.cone {
    transform: translateX(-100%);
    transition: transform 2s;
}
.jump{
    transform: translateY(100px);
    transition: transform 0.5s;
}

</style>
