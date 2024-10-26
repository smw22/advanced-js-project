<script setup lang="ts">
import { formVisibility } from '../modules/formVisibility';
const { showForm } = formVisibility(); 

import { useEvents } from '../modules/useEvents';
const { events, newEventTitle, editingId, enterEditMode, deleteEvent, updateEvent} = useEvents();

// import { useCalendar } from '../modules/useCalendar';
// const { calendarDays, dayDate, addDate } = useCalendar();

</script>

<template>
    <div class="container">
        <h1>December 2024</h1>
        <div class="calendar">
            <div class="day-names">
                <div class="sunday">SUN</div>
                <div class="monday">MON</div>
                <div class="tuesday">TUS</div>
                <div class="wednesday">WED</div>
                <div class="thursday">THU</div>
                <div class="friday">FRI</div>
                <div class="saturday">SAT</div>
            </div>
            <div class="days">
                <div class="row">
                    <div id="day" class="1"><span>1</span> <span class="add-event" @click="showForm">+</span> <br>
                        <ul>
                            <!-- <li v-for="event in events" :key="event.id">
                                {{ event.title }} at {{ event.time }} 
                                <div class="event-buttons">
                                    <button id="edit-button" @click="() => updateEvent(event.id)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg>
                                    </button>
                                    <button id="cross-button" @click="() => deleteEvent(event.id)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#f92f60" d="M24.879 2.879A3 3 0 1 1 29.12 7.12l-8.79 8.79a.125.125 0 0 0 0 .177l8.79 8.79a3 3 0 1 1-4.242 4.243l-8.79-8.79a.125.125 0 0 0-.177 0l-8.79 8.79a3 3 0 1 1-4.243-4.242l8.79-8.79a.125.125 0 0 0 0-.177l-8.79-8.79A3 3 0 0 1 7.12 2.878l8.79 8.79a.125.125 0 0 0 .177 0z"/></svg>
                                    </button>
                                </div>
                            </li> -->
                            <li v-for="event in events" :key="event.id">
                                <div v-if="editingId === event.id">
                                    <input v-model="newEventTitle" placeholder="New title"/>
                                    <button @click="updateEvent(event.id, newEventTitle)">Save</button>
                                    <button @click="editingId = null">Cancel</button>
                                </div>
                                <div id="event-container" v-else>
                                    {{ event.title }} at {{ event.time }} 
                                    <div class="event-buttons">
                                        <button @click="enterEditMode(event)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg>
                                        </button>
                                        <button @click="deleteEvent(event.id)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#f92f60" d="M24.879 2.879A3 3 0 1 1 29.12 7.12l-8.79 8.79a.125.125 0 0 0 0 .177l8.79 8.79a3 3 0 1 1-4.242 4.243l-8.79-8.79a.125.125 0 0 0-.177 0l-8.79 8.79a3 3 0 1 1-4.243-4.242l8.79-8.79a.125.125 0 0 0 0-.177l-8.79-8.79A3 3 0 0 1 7.12 2.878l8.79 8.79a.125.125 0 0 0 .177 0z"/></svg>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <!-- <span v-for="event in events" :key="event.id"> {{ event.title }} foot {{ event.time }}</span> -->
                    </div>
                    <div id="day" class="2">2</div>
                    <div id="day" class="3">3</div>
                    <div id="day" class="4">4</div>
                    <div id="day" class="5">5</div>
                    <div id="day" class="6">6</div>
                    <div id="day" class="7">7</div>
                </div>
                <div class="row">
                    <div id="day" class="8">8</div>
                    <div id="day" class="9">9</div>
                    <div id="day" class="10">10</div>
                    <div id="day" class="11">11</div>
                    <div id="day"class="12">12</div>
                    <div id="day" class="13">13</div>
                    <div id="day" class="14">14</div>
                </div>
                <div class="row">
                    <div id="day" class="15">15</div>
                    <div id="day" class="16">16</div>
                    <div id="day" class="17">17</div>
                    <div id="day" class="18">18</div>
                    <div id="day" class="19">19</div>
                    <div id="day" class="20">20</div>
                    <div id="day" class="21">21</div>

                </div>
                <div class="row">
                    <div id="day" class="22">22</div>
                    <div id="day" class="23">23</div>
                    <div id="day" class="24">24</div>
                    <div id="day" class="25">25</div>
                    <div id="day" class="26">26</div>
                    <div id="day" class="27">27</div>
                    <div id="day" class="28">28</div>
                </div>
                <div class="row">
                    <div id="day" class="29">29</div>
                    <div id="day" class="30">30</div>
                    <div id="day" class="31">31</div>
                    <div class="32 off-day">1</div>
                    <div class="33 off-day">2</div>
                    <div class="34 off-day">3</div>
                    <div class="35 off-day">4</div>
                </div>
              
            </div>
        </div>
    </div>

</template>

<style scoped>

.container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1{
    font-size: 4rem;
    margin-bottom: 25px;
}

ul{
    padding-top: 20px;
}

li{
    background-color: var(--blue-color);
    padding: 2px 4px;
    border-radius: 5px;
    list-style-type: none;
    display: flex;
}

.add-event{
    cursor: pointer;
    background-color: rgb(241, 40, 40);
    padding: 5px 10px;
    border-radius: 25%;
    float: right;
}

#event-container{
    display: flex;
}

.event-buttons{
    margin-left: 10px;
}

button{
    cursor: pointer;
}

.day-names{
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px
}

.day-names > div{
    padding: 20px 30px;
    border: 1px solid #000;
    /* width: 75px; */
}

.days{
    display: grid;
    gap: 2px
}

.row{
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px
}

.row > div{
    border: 1px solid #000;
    padding: 20px;
    min-height: 75px;
    height: fit-content;
    transition: all 0.15s;
}

.row > div:hover{
    border: 5px solid var(--blue-color);
}

.off-day{
    background-color: rgb(202, 202, 202);
}

</style>