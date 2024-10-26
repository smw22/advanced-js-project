<script setup lang="ts">
import { formVisibility } from '../modules/formVisibility';
const { loginFormVisible, hideLoginForm, showLoginForm } = formVisibility(); 
</script>

<template>
    <div @click="showLoginForm" class="login-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.23 7.23 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10"/></svg>
    </div>

    <div class="formContainer" v-show="loginFormVisible">
        <div class="cross" @click="hideLoginForm">
            <span></span>
            <span></span>
        </div>
        <form action="">
            
            <label for="event-title">Email</label>
            <input id="event-title" type="text" placeholder="Email"/>
        
            <label for="event-time">Password</label>
            <input type="datetime" name="" id="event-time" placeholder="Password"/>
                        
            <button type="submit">Login</button>

        </form>

        
    </div>
</template>

<style scoped>

.login-button{
    position: fixed;
    top: 5%;
    right: 5%;
}

svg{
    cursor: pointer;
}

.formContainer{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    display: block;
}

form{
    display: flex;
    flex-direction: column;
    background-color: rgb(127, 15, 255);
    padding: 25px;
    height: 50vh;
    width: 600px;
    align-items: center;
    justify-content: center;
    gap: 25px;
    border-radius: 25px;
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