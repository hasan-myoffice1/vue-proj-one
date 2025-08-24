<template>
     <nav class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="add">Add Restaurant</router-link>
        <a href="#" v-on:click="logout">Login</a>
     </nav>
</template>
<script>
    export default {
        name:'HeaderPage',
        methods :{
            logout(){
                localStorage.clear();
                this.$router.push({name:'LogIn'})   
            }
        }
    }
</script>

<style>
    .navbar {
        width: 1220px;
        background-color: black;
        display: flex;
        justify-content: center;
        margin: auto;
        gap: 50px;
        border-radius: 5px;
    }
    .navbar a{
        color: aliceblue;
        text-decoration: none;
        font-weight: 500;
        padding: 15px;
        
    }
    .navbar a:hover{
        background-color: aliceblue;
        color: #000;
    }
</style>