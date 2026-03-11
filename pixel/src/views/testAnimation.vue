<template>
    <div class="ee" :class="action">
    </div>
    <button @click="change">jump</button>
</template>

<script setup>
import { ref } from 'vue'
const action = ref('jump');

function change(){
    if(action.value === 'run'){
       action.value = 'jump';
    } else{
        action.value = 'run';
    }
}

</script>

<style scoped>
.ee{
    height: 20vw;
    width: 20vw;
    background-size: cover;
    background-image: url(@/assets/spriteSheet.png);
    image-rendering: pixelated;
}
.run{
    animation: run 0.9s steps(4) infinite;
}
.jump{
    animation-duration: 0s;
}
@keyframes jump {
    from {background-position: 0vw}
    to {background-position: 0vw;}
}
@keyframes run {
    from {background-position: 20vw}
    to {background-position: 100vw;}
}

</style>