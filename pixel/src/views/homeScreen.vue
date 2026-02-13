<script setup>

</script>

<template>
    <div>
        <h1>Run For It</h1>
        <RouterLink to="/game"><img :class="start" src="@/assets/startbtn.png"></RouterLink>
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
    color: #157bdb;
}
img{
    width: 200px;
    align-self: center;
}
div{
    background-image: url(@/assets/bgArt.png);
    background-size: 60%;
}
</style>
