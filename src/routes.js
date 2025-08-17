// npm install vue-router@next

import HomePage from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import { createRouter,createWebHistory } from 'vue-router'
import LogIn from './components/Login.vue'

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
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router