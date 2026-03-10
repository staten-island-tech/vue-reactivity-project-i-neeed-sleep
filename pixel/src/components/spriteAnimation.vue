<template>
    <div class="space">
        <div class="player-sprite">
            <canvas class="eee"></canvas>
        </div>
    </div>
    <button @click="running=true">start</button>
</template>

<script setup>
import {ref} from 'vue'
import spriteSheet from '@/assets/spriteSheet.png'

const running = ref(false);

// function animation() {
//     setTimeout(()=>{this.value = run1;}, 500)
//     setTimeout(()=>{this.value = run2;}, 250)
//     setTimeout(()=>{this.value = run3;}, 500)
//     setTimeout(()=>{this.value = run2;}, 250)
// }

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const image = document.getElementById("eee");

image.addEventListener("load", (e) => {
  ctx.drawImage(image, 0, 0, 80, 80);
});


</script>

<style scoped>
.character-sprite{
    height: 20vw;
    width: 20vw;
}
</style>