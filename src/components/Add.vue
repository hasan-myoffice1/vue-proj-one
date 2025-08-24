<template>
    <HeaderPage />
    <h1>Added Restaurant</h1>
    <form class="add">
        <input type="text" placeholder="Enter Name" name="name" v-model="this.restaurant.name">
        <input type="text" placeholder="Enter address" name="address" v-model="this.restaurant.address">
        <input type="text" placeholder="Enter Contact Number" name="contact" v-model="this.restaurant.contact">
        <button type="button" v-on:click="addRestaurant()">Add New Restaurant</button>
    </form>
</template>

<script>
    import axios from 'axios'
import HeaderPage from './Header.vue'
    export default {
        name:'AddRestu',
        components:{
            HeaderPage
        },
        data() {
            return {
                restaurant:{
                    name:'',
                    address:'',
                    contact:''
                }
            }
        },
        methods:{
           async addRestaurant() {           
                console.warn(this.restaurant)
                const result = await axios.post("http://localhost:3000/restaurant",{
                    name:this.restaurant.name,
                    address:this.restaurant.address,
                    contact:this.restaurant.contact,
                });
                if(result.status==201) {
                    this.$router.push({name:'HomePage'});
                    console.warn("result", result)
                }
            }
        },
           async mounted() {
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name:'SignUp'})
            }
            
        }
    }
</script>