import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue"
import Projects from "../components/Projects.vue"
import ProjectInfo from "../components/ProjectInfo.vue"
import PageNotFound from "../components/PageNotFound.vue"

const router = createRouter({
    mode: 'history',
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },

        {
            path: "/projects",
            name: "projects",
            component: Projects,
            children:[
                {
                    path:"projectinfo/:id",
                    name: 'projectinfo',
                    component: ProjectInfo,
        
                }
            ]
        },

        {
            path: "/:patchMatch(.*)*",
            name:"pagenotfound",
            component: PageNotFound
        }
         
    ]
})

export default router