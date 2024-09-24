<script setup lang="ts">
import { useEvents } from '../modules/useEvents';
const { events, newEventTitle, newEventTime, addEvent, deleteEvent} = useEvents();

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
                    <div class="1">1 <br>
                        <span v-for="event in events" :key="event.id"> {{ event.title }} football</span>
                    </div>
                    <div class="2">2</div>
                    <div class="3">3</div>
                    <div class="4">4</div>
                    <div class="5">5</div>
                    <div class="6">6</div>
                    <div class="7">7</div>
                </div>
                <div class="row">
                    <div class="8">8</div>
                    <div class="9">9</div>
                    <div class="10">10</div>
                    <div class="11">11</div>
                    <div class="12">12</div>
                    <div class="13">13</div>
                    <div class="14">14</div>
                </div>
                <div class="row">
                    <div class="15">15</div>
                    <div class="16">16</div>
                    <div class="17">17</div>
                    <div class="18">18</div>
                    <div class="19">19</div>
                    <div class="20">20</div>
                    <div class="21">21</div>

                </div>
                <div class="row">
                    <div class="22">22</div>
                    <div class="23">23</div>
                    <div class="24">24</div>
                    <div class="25">25</div>
                    <div class="26">26</div>
                    <div class="27">27</div>
                    <div class="28">28</div>
                </div>
                <div class="row">
                    <div class="29">29</div>
                    <div class="30">30</div>
                    <div class="31">31</div>
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

span{
    background-color: var(--blue-color);
    padding: 2px 4px;
    border-radius: 5px;
    cursor: pointer;
}

/* .calendar{
    display: flex;
    flex-direction: column;
    justify-content: center;
} */

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