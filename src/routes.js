// npm install vue-router@next

import HomePage from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import { createRouter,createWebHistory } from 'vue-router'
import LogIn from './components/Login.vue'
import AddRestu from './components/Add.vue'
import UpdateRestu from './components/Updated.vue'

const routes = [
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'LogIn',
        component:LogIn,
        path:'/login'
    },
    {
        name:'AddRestu',
        component:AddRestu,
        path:'/add'
    },
    {
        name:'UpdateRestu',
        component:UpdateRestu,
        path:"/update/:id"
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router