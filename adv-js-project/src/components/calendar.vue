<script setup lang="ts">
import { formVisibility } from '../modules/formVisibility';
const { showForm } = formVisibility(); 

import { useEvents } from '../modules/useEvents';
const { events, newEventTitle, newEventTime, deleteEvent} = useEvents();

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
                    <div id="day" @click="showForm" class="1">1 <br>
                        <ul>
                            <li v-for="event in events" :key="event.id">
                                {{ event.title }} at {{ event.time }}
                                {{ newEventTitle }}
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

li{
    background-color: var(--blue-color);
    padding: 2px 4px;
    border-radius: 5px;
    cursor: pointer;
    list-style-type: none;
}

.day-names{
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px
}

.day-names > div{
    padding: 20px 30px;
    border: 1px solid #000;
    width: 75px;
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
    height: 75px;
    transition: all 0.15s;
}

.row > div:hover{
    border: 5px solid var(--blue-color);
}

.off-day{
    background-color: rgb(202, 202, 202);
}

</style>