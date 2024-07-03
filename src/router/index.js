import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import JobList from '../views/JobList.vue'
import JobDetails from '../views/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/JobList',
            name: 'JobList',
            component: JobList
        },
        {
            path: '/JobDetails/:id',
            name: 'JobDetails',
            component: JobDetails,
            props: true
        },
        {
            path: '/:PathMatch(.*)*',
            name: 'NotFound',
            component: NotFound,
        }
    ]

})

export default router