<script setup>

</script>

<template>
    <div>
        <h1>Run For It</h1>
        <RouterLink to="/game"><button> Start </button></RouterLink>
        <br>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');

h1{
    font-family: "Jersey 10", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    font-size: 200px;
    color: #EACDC2;
    position: static;
}
button{
    font-family: "Jersey 10", sans-serif;
    font-weight: 200;
    font-size: 100px;
    font-style: normal;
    text-align: center;
    color: #FFC15E;
    border: none;
    background-color: #1A1423;
}
div{
    background-image: url("@/assets/bgArt.png");
    background-size: cover;
    image-rendering:pixelated;
    width:100%;
    height:56.25%;
    align-self: center;
}
</style>
