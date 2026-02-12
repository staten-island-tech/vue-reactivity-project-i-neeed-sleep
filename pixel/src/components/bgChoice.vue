<template>
    <div>
        <img src="{{ bg.img }}">
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 200px;
    width: 150px;
    color: #462255;
    opacity: 60%;
}
h2{
    font-family: "Jersey 10", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    font-size: 80px;
    color: #ffffff;
}
img{
    width:100%;
}
</style>