import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/music',
        name: 'Music',
        component: () => import('@/views/Music.vue')
    },
    {
        path: '/redirect',
        name: 'Redirect',
        component: () => import('@/views/Redirect.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export { router }
