<template>
  <router-view />
</template>

<script>
  export default {
    name: 'App',  
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo{
  width: 200px;
  height: 200px;
  object-fit: contain;
}
.register, .login , .add{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap:10px;
    }
    .register input, .login input, .add input {
        width: 450px;
        padding: 10px 20px;
        border: 2px solid #7e7e7e;
        border-radius: 7px;
      
    }
    .register button, .login button, .add button{
        padding: 7px 30px;
        border: 2px solid #7e7e7e;
        border-radius: 7px;
        background-color: #7e7e7e;
        color: #fff;
    }
   input::placeholder {
        opacity: 0.4;
    }
</style>
