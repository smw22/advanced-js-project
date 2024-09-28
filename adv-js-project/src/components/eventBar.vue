<script setup lang="ts">

</script>

<template>
    <div class="barContainer">
        <div class="events-bar">
            <div class="events-bar-title">
                <h2>Today Events:</h2>
            </div>
            <div class="events">
                <p>Hello event</p>
            </div>
        </div>
       
        
    </div>

</template>

<style scoped>
.barContainer{
    position: relative;
    align-items: center;
}

.events-bar{
    position: fixed;
    left: 0;
    top: 30%;
    border: 1px solid #000;
    border-radius: 0 16px 16px 0;
    height: 50vh;
    width: 250px;
}

.events-bar-title{
    padding: 25px 25px 25px 5px;
    background-color: var(--blue-color);
    border-radius: 0 16px 0 0;
}

.events p{
    padding: 20px;
}


</style>