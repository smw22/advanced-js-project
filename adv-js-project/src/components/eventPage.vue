<script setup lang="ts">
import { formVisibility } from '../modules/formVisibility';
const { isFormVisible, hideForm } = formVisibility(); 

import { useEvents } from '../modules/useEvents';
const { events, newEventTitle, newEventTime, addEvent } = useEvents();

</script>

<template>
    <div class="formContainer" v-show="isFormVisible">
        <div class="cross" @click="hideForm">
            <span></span>
            <span></span>
        </div>
        <form action="">
            <p>
                <label for="event-title">Title</label>
                <input id="event-title" type="text" placeholder="Add title" v-model="newEventTitle" />
            </p>

            <p>
                <label for="event-time">Time</label>
                <input type="datetime" name="" id="event-time" placeholder="Add time" v-model="newEventTime" />
            </p>

            <p>
                <button type="submit" @click="addEvent">Add Event</button>
            </p>


        </form>

        
    </div>

</template>

<style scoped>
.formContainer{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: block;
}

.cross{
    position: fixed;
    cursor: pointer;
    width: 45px;
    height: 45px;
    top: 5%;
    left: 5%;
}

.cross > span{
    display: block;
    width: 45px;
    height: 4px;
    background-color: black;
    z-index: 1000;
}

.cross > span:first-child{
    transform: rotate(45deg);
}

.cross > span:last-child{
    transform: rotate(135deg);
}

form{
    display: flex;
    flex-direction: column;
    background-color: var(--blue-color);
    padding: 25px;
    height: 100vh;
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

button{
    height: 35px;
    padding: 3px 10px;
}


</style>