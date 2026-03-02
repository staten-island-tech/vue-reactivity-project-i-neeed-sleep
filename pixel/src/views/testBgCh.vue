<template>
<div class="ee"><div class="c" :style="{backgroundImage:current}"></div>
    <br><br>
    <button @click="choosing=true">Change Background</button>
    <br><br>
    <div v-if="choosing"> 
        <bgChoice @click="cc(bg)" v-for="bg in bgs" :key="bg.img" :bg="bg"></bgChoice>
    </div>
</div>

</template>

<script setup>
import {ref} from 'vue'
import bgChoice from '@/components/bgChoice.vue'
const choosing = ref(false)
const current = ref('./src/assets/bgArt.png')

function cc(bg){
    current = bg.img;
}

const bgs = ref([{
    name: 'city',
    img: './src/assets/bgArt.png'
},{
    name: 'standby',
    img: './src/assets/bgArt2.png'
},{
    name: 'void',
    img: './src/assets/bgArt1.png'
}])
</script>

<style scoped>
div{
    display: flexbox;
}
.ee{
    background-color: #897070;
    min-height: 100vh;
}
.c{
    background-image: url();
    image-rendering: pixelated;
    width: 160px;
    height: 90px;
}
</style>