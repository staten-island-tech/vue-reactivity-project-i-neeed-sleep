<template>
    <div>Score: {{ currentScore }}</div>
    <div>High Score: {{ highScore }}</div>
    <button @click="endGame">end</button>
    <button @click="startGame">start</button>
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
            this.currentScore = 0;
            this.timer = setInterval(() => {
                this.currentScore = Math.floor((Date.now() - this.startTime) / 400);
            }, 200);
        },
        endGame() {
            const endTime = new Date().getTime();
            this.currentScore = ((endTime - this.startTime) / 1000).toFixed(0);
            this.isPlaying = false;
            this.checkHighScore();
        },
        checkHighScore() {
            if (this.currentScore < this.highScore) {
                    this.highScore = this.currentScore;
            }
        },
    },
};
</script>

<style scoped>

</style>