import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from "@/views/Login";
import Home from "@/views/Home";
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Homepage
        }
    ]
})
export default {
    name: 'router',
    components: {
        router
    }
}