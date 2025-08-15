<template>
    <h2>Hi, Sign Up please!</h2>
    <div  class="register">
        <input type="text" v-model="name" placeholder="enter your Name">
        <input type="email" v-model="email" placeholder="enter your Email">
        <input type="password" v-model="password" placeholder="enter your Password">
        <button type="submit" v-on:click="signUp">Sign Up</button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name:'SignUp',
        data(){
            return {
                name:'',
                email:'',
                password:''
            }
        },
        methods: {
           async signUp() {
                console.warn("Call SignUp Button", this.name, this.email, this.password)
                let result = await axios.post("http://localhost:3000/users", {
                    email: this.email,
                    name: this.name,
                    password:this.password
                });
                console.warn(result);
                if(result.status==201){
                    alert("Done")
                }
                localStorage.setItem('user-info', JSON.stringify(result.data))
            }
        }
    }
</script>
<style>
    .register{
        display: flex;
        align-items: center;
        justify-items: center;
        flex-direction: column;
        gap: 10px;
    }
    .register input{
        padding: 10px;
        width: 450px;
        border-radius: 7px;
        border: 2px solid #919191;
        border-left: 30px solid #7e7e7e ;
        font-size: medium;
        /* font-weight: 600; */
    }
    .register button {
        padding: 7px 30px;
        border:2px solid #7e7e7e;
        font-size: medium;
        font-weight: 600;
        border-radius: 7px;
        background-color: #7e7e7e;
        color: #fff;
    }
    .register button:checked{
        background-color: rgb(15, 15, 15);
    }
    .register input::placeholder{
        color: rgb(104, 104, 104);
        opacity: 0.3;
    }


</style>