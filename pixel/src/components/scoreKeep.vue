<template>
    <div>Score: {{ currentScore }}</div>
</template>

<script>
export default {
    data() {
        return {
            isPlaying: false,
            startTime: null,
            currentScore: 0,
            highScore: 0,
        };
    },
    methods: {
        startGame() {
            this.isPlaying = true;
            this.startTime = new Date().getTime();
            this.timer = setInterval(() => {
                this.currentScore = Math.floor((Date.now() - this.startTime) / 200);
            }, 200);
            this.currentScore = 0;
        },
        checkHighScore() {
            while (this.currentScore > this.highScore) {
                this.highScore = this.currentScore;
            }
        },
        endGame() {
            const endTime = new Date().getTime();
            clearTimeout(this.timer);
            this.currentScore = Math.floor((endTime - this.startTime) / 200);
            this.isPlaying = false;
            this.checkHighScore();
        },
    },
};
</script>

<style scoped>

</style>