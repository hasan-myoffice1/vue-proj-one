<template>
    <img alt="Vue logo" src="https://www.shutterstock.com/image-vector/sab-letter-monogram-logo-design-260nw-1809547399.jpg" class="logo">
    <h1>Sign Up for Free</h1>
    <div class="register">
        <input type="text" placeholder="Enter your Name" v-model="name">
        <input type="email" placeholder="Enter your Email" v-model="email">
        <input type="password" placeholder="Enter your Password" v-model="password">
        <button type="button" v-on:click="signUp">Sign Up</button>
    </div>
    <div>
        {{ name }}, {{ email }}, {{ password }}
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name:"SignUp",
        data() {
            return {
                name:'',
                email:'',
                password:'',
            }
        },
        methods: {
            async signUp(){
                // console.warn('SignUp Button was Clicked.', this.name, this.email,this.password)
                let result = await axios.post("http://localhost:3000/users",{
                    email:this.email,
                    name:this.name,
                    password:this.password
                });
                console.warn(result);
                if(result.status==201) {
                    localStorage.setItem('user-info', JSON.stringify(result.data))
                    this.$router.push({name:'HomePage'})
                }
                
            }
        }

    }
</script>
<style scoped>
    .register{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap:10px;
    }
    .register input {
        width: 450px;
        padding: 7px 20px;
        border: 2px solid #7e7e7e;
        border-radius: 7px;
      
    }
    .register button {
        padding: 7px 30px;
        border: 2px solid #7e7e7e;
        border-radius: 7px;
        background-color: #7e7e7e;
        color: #fff;
    }
    .register input::placeholder {
        opacity: 0.4;
    }
</style>