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

h1{
    font-family: "Jersey 10", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20vw;
    color: #eac2c2;
    position: absolute;
    left: 20vw;
    bottom: 20vw;
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
    left: 35vw;
    bottom: 10vw;
}
div{
    background-image: url("@/assets/bgArt.png");
    background-size:cover;
    image-rendering:pixelated;
    width:100vw;
    height:56.25vw;
    display:flow-root;
    justify-content: center;
    position: absolute;
}
</style>
