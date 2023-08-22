import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/AppHome.vue')
    },
    {
      path: '/projectCard/:id',
      name: 'projectCard',
      component: () => import('./components/ProjectCard.vue')
    },
  ]
})

export { router };