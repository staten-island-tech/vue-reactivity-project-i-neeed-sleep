<template>
    <div>Score: {{ currentScore }}</div>
</template>

<script>
export default {
    data() {
        return {
            startTime: null,
            currentScore: 0,
            highScore: 0,
            remainTime:0,
        };
    },
    mounted(){
        this.startGame();
    },
    methods: {
        startGame() {
            this.startTime = new Date().getTime();
            this.timer = setInterval(() => {
                this.currentScore = Math.floor((Date.now() - this.startTime) / 200 + this.remainTime);
            }, 200);
        },
        pauseGame(){
            this.remainTime = this.currentScore;
            clearTimeout(this.timer);
        },
        checkHighScore() {
            if (this.currentScore > this.highScore) {
                this.highScore = this.currentScore;
            }
        },
        endGame() {
            const endTime = new Date().getTime();
            clearTimeout(this.timer);
            this.currentScore = Math.floor((endTime - this.startTime) / 200);
            this.checkHighScore();
            this.currentScore = 0;
            this.remainTime = 0;
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
div{
    font-family: "Jersey 10", sans-serif;
    font-weight: 20;
    font-size: 3vw;
    font-style: normal;
    text-align: right;
    width:15vw;
    position: relative;
    top:0;
    right:0;
    color: #EACDC2;
}
</style>