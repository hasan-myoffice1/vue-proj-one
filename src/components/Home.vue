<template>
    <HeaderPage />
    <h1>Hello {{ name }}, Welcome on Home Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, doloremque.</p>
</template>

<script>
    import HeaderPage from './Header.vue';
     export default {
        name:"HomePage",
        components: {
            HeaderPage
        },
        data() {
            return {
                name:'',
            }
        },
        mounted(){
            let user = localStorage.getItem('user-info');
            this.name=  JSON.parse(user).name
            if(!user){
                this.$router.push({name:'SignUp'})
            }
        }
     }
</script>