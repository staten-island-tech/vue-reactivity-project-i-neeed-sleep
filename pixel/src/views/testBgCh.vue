<template>
<div class="ee"><img :src="c">
    <br><br>
    <button @click="choosing=true">Change Background</button>
    <br><br>
    <div @click="">
        <div v-if="choosing"> <bgChoice v-for="bg in bgs" :key="bg.name" :bg="bg">{{ bg.name }}</bgChoice></div>
    </div>
</div>

</template>

<script setup>
import {ref} from 'vue'
import bgChoice from '@/components/bgChoice.vue'
const choosing = ref(false)
const c = ref('./src/assets/bgArt.png')
const cc =()
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
</style>