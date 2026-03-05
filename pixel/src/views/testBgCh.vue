<template>

</template>

<script setup>
import {ref} from 'vue'
import run1 from '@/assets/run1.png'
import run2 from '@/assets/run2.png'
import run3 from '@/assets/run3.png'

const currentFrame = ref(run1);
const running = ref(true);

async function animation() {
    currentFrame.value = run1;
    await delay(500);
    currentFrame.value = run2;
    await delay(250);
    currentFrame.value = run3;
    await delay(500);
    currentFrame.value = run2;
    await delay(250);
}
</script>

<style scoped>

</style>