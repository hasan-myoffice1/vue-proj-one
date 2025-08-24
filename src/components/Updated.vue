<template>
    <HeaderPage />
    <h2>Updated Restaurant</h2>
    <form class="add">
        <input type="text" name="name" placeholder="Enter your name" v-model="restaurant.name">
        <input type="text" name="address" placeholder="Enter your Address" v-model="restaurant.address">
        <input type="text" name="contact" placeholder="Enter your contact" v-model="restaurant.contact">
        <button type="button" v-on:click="updateRestaurent">Updated Dat</button>
    </form>
</template>

<script>
    import HeaderPage from './Header.vue';
    import axios from 'axios';

    export default {
        name:'UpdateRestu',
        components:{
            HeaderPage
        },
        data() {
            return {
                restaurant : {
                    name:"",
                    address:"",
                    contact:""
                }
            }
        },
        methods: {
           async updateRestaurent(){
                // console.warn("function Called", this.restaurant)
                const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,
                    {
                        name:this.restaurant.name,
                        address:this.restaurant.address,
                        contact:this.restaurant.contact,
                });
                if(result.status==200){
                    this.$router.push({name:"HomePage"});
                }
                

            }
        }, 
        async mounted() {
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name:'SignUp'})
            }
            // console.warn(this.$route.params.id)
            const result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id);
            console.warn(result.data)
            this.restaurant = result.data
        }
    }
</script>