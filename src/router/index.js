import { createRouter, createWebHashHistory } from "./gouter.js"
import Home from "../pages/Home.vue"
import About from "../pages/About.vue"
import Animation from "../pages/Animation.vue"
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/animation',
        name: 'Animation',
        component: Animation
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router 