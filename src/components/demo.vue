<template>
    <h2>Login Here</h2>
    <div class="login">
        <input type="email" placeholder="enter your Email">
        <input type="text" placeholder="enter your Password">
        <button type="submit">Login</button>
        <p><router-link to="/sign-up">Sign Up</router-link></p>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name:'LogIn',
        data(){
            return {
                emil:'',
                password:''
            }
        },
        methods: {
            async login() {
                let result = await axios.get(`http://localhost:3000/sers?email=${this.emil}&password=${this.password}`);
                console.warn(result);
                if(result.status==200 && result.data.length >0){
                    localStorage.setItem('user-info', JSON.stringify(result.data[0]));
                    this.$router.push({name:"HomePage"})
                }
            }
        },
        mounted() {
            let user = localStorage.getItem('user-info');
            if(user) {
                this.$router.push({name:"HomePage"})
            }
        }
    }
</script>