<template>
    <div>
        <img :src="bg.img">
        <h2>{{ bg.name }}</h2>
        <button @click="c">change</button>
    </div>
</template>

<script setup>
import {defineEmits} from 'vue'

const emit = defineEmits([ee])

const c = () =>{
    const new = bg.img;
    emit('ee',new);
}
    defineProps({
        bg:{
            type: Object,
            required: true,
        }
    })
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
div{
    align-items: center;
    max-width: 30vh;
    background-color: #372549;
    margin: 5vh;
    padding: 2vh;
}
h2{
    font-family: "Jersey 10", sans-serif;
    font-weight: 40px;
    font-style: normal;
    text-align: center;
    font-size: 60px;
    color: #EACDC2;
}
img{
    width:100%;
}
</style>