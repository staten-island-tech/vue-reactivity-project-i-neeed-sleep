<template>
    <div>
        <img :src="bg.img">
        <h2>{{ bg.name }}</h2>
    </div>
</template>

<script setup>
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
    max-width: 20vw;
    max-height: 30vw;
    background-color: #372549;
    margin: 5vw;
    padding: 2vw;
}
h2{
    font-family: "Jersey 10", sans-serif;
    font-weight: 20;
    font-style: normal;
    text-align: center;
    font-size: 6vw;
    color: #EACDC2;
}
img{
    width:100%;
}
</style>