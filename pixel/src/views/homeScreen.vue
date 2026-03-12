<script setup>

</script>

<template>
    <div>
        <h1>Run For It</h1>
        <RouterLink to="/game"><button> Start </button></RouterLink>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');

*{
    left: 10vw;
}
h1{
    font-family: "Jersey 10", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 15vw;
    text-align: center;
    color: #EACDC2;
    position: absolute;
    left: 10vw;
    bottom: 20vw;
    width:60vw;
}
button{
    font-family: "Jersey 10", sans-serif;
    font-weight: 200;
    font-size: 10vw;
    font-style: normal;
    text-align: center;
    color: #FFC15E;
    border: none;
    background-color: #1A1423;
    width: 30vw;
    position: absolute;
    left: 25vw;
    bottom: 10vw;
}
div{
    background-image: url("@/assets/bgArt.png");
    background-size:cover;
    image-rendering:pixelated;
    width: 80vw;
    height: 45vw;
    display:flow-root;
    justify-content: center;
    position: absolute;
}
</style>
