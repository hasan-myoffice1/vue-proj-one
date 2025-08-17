<template>
    <img alt="Vue logo" src="https://www.shutterstock.com/image-vector/sab-letter-monogram-logo-design-260nw-1809547399.jpg" class="logo">
    <h1>Login here</h1>
    <div class="login">
        <input type="email" placeholder="Enter your Email" v-model="email">
        <input type="password" placeholder="Enter your Password" v-model="password">
        <button type="button" v-on:click="login">Login</button>
        <p>
            <router-link to="/sign-up">Sign Up</router-link>
        </p>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name:'LogIn',
        data () {
            return {
                email:'',
                password:''
            }
        },
        methods:{
            async login(){
                let result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                );
                console.warn(result)
                if (result.status==200 && result.data.length > 0) {
                    localStorage.setItem('user-info', JSON.stringify(result.data[0]));
                    this.$router.push({name:"HomePage"})
                }
            }
        },
        mounted() {
            let user = localStorage.getItem('user-info');
            if(user) {
                this.$router.push({name:'HomePage'})
            }
        }
    }
</script>