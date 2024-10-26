<script setup lang="ts">
import { formVisibility } from '../modules/formVisibility';
const { eventFormVisible, hideEventForm } = formVisibility(); 

import { useEvents } from '../modules/useEvents';
const {newEventTitle, newEventTime, addEvent } = useEvents();

</script>

<template>
    <div class="formContainer" v-show="eventFormVisible">
        <div class="cross" @click="hideEventForm">
            <span></span>
            <span></span>
        </div>
        <form action="">
            
            <label for="event-title">Title</label>
            <input id="event-title" type="text" placeholder="Add title" v-model="newEventTitle" />
        
            <label for="event-time">Time</label>
            <input type="datetime" name="" id="event-time" placeholder="Add time" v-model="newEventTime" />
                        
            <button type="submit" @click.prevent="addEvent(); hideEventForm()">Add Event</button>

        </form>

        
    </div>

</template>

<style scoped>
.formContainer{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    display: block;
}

.cross{
    position: fixed;
    cursor: pointer;
    width: 45px;
    height: 45px;
    top: 10%;
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
    transform:  translate(2px, 2px) rotate(45deg);
}

.cross > span:last-child{
    transform: rotate(135deg);
}

form{
    display: flex;
    flex-direction: column;
    background-color: var(--blue-color);
    padding: 25px;
    height: 50vh;
    width: 600px;
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