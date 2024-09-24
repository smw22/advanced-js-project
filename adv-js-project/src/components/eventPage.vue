<script setup lang="ts">
import { useEvents } from '../modules/useEvents';
const { events, newEventTitle, addEvent, deleteEvent} = useEvents();

</script>

<template>
    <div class="container">
        <form action="">
            <p>
                <label for="event-title">Title</label>
                <input v-model="newEventTitle" id="event-title" type="text" placeholder="Add title" />
            </p>

            <p>
                <label for="event-time">Time</label>
                <input type="datetime" name="" id="event-time" />
            </p>

            <p>
                <button type="submit" @click="addEvent">Add Event</button>
            </p>

        </form>
        
    </div>

</template>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    background-color: var(--blue-color);
    padding: 25px;
    height: 300px;
    align-items: center;
    justify-content: center;
    gap: 25px;
}

label{
    color: white;
    font-size: 20px;
}

input{
    font-size: 20px;
}

p{
    display: flex;
    flex-direction: column;
}


</style>