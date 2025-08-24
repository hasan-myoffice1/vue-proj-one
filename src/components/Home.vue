<template>
    <HeaderPage />
    <h1>Hello {{ name }}, Welcome on Home Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, doloremque.</p>
    <table>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Action</th>
        </tr>
        <tr v-for="item in restaurants" in :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.contact }}</td>
            <td>
                <router-link :to="'/update/'+item.id">Update</router-link>
                <button v-on:click="deleteRestaurant(item.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>

<script>
    import axios from 'axios';
    import HeaderPage from './Header.vue';
     export default {
        name:"HomePage",
        components: {
            HeaderPage
        },
        data() {
            return {
                name:'',
                restaurants:[],
            }
        },
        methods: {
            async deleteRestaurant(id){
                // console.warn(id)
                let result = await axios.delete("http://localhost:3000/restaurant/"+id);
                if(result.status==200){
                    this.loadData()
                }
            },
            async loadData(){
                let user = localStorage.getItem('user-info');
                this.name=  JSON.parse(user).name
                if(!user){
                    this.$router.push({name:'SignUp'})
                }
                let result = await axios.get("http://localhost:3000/restaurant");
                console.warn(result)
                this.restaurants = result.data
            }
        },
        mounted(){
            this.loadData()
        }
     }
</script>
<style>
   table{
        padding: 10px;
        border-radius:5px;
        margin:20px auto;
   }
   td, th {
        padding: 10px;
        border-radius:5px;
        border: 1px solid #333;
   }
   td button {
        margin-left: 10px;
        border: none;
        padding:5px 10px;
        border-radius:3px;
   }
   td a {
    text-decoration: none;
   }
</style>