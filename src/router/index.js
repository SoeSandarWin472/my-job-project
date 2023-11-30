import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import JobView from '../views/jobs/JobView.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  },
  {
    path: '/jobs',
    name: 'job',
    component:JobView
  },
  {
    path: '/jobDetail/:id',
    name: 'jobDetail',
    component:JobDetails,
    props:true
  },
  //redirect
  {
    path:"/all-jobs",
    redirect:"/jobs"
  },
  //catchAll
  {
    path:"/:catchAll(.*)",
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
