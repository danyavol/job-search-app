import { createWebHistory, createRouter } from "vue-router"
import Home from '@/pages/Home'
import Job from '@/pages/Job'
import Resume from '@/pages/Resume'
import NotFound from '@/pages/NotFound'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/job",
        name: "Job",
        component: Job,
    },
    {
        path: "/resume",
        name: "Resume",
        component: Resume,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
      },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior () {
        window.scrollTo(0, 0);
        return { x: 0, y: 0 }
    }
});

export default router;