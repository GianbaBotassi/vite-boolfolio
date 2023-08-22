<script>
import axios from 'axios';

// import ProjectCard from './ProjectCard.vue'
import Pages from './Pages.vue'

export default {
  components: {
    Pages
  },
  data() {
    return {
      projectUrl: 'http://localhost:8000/api/projects',
      projectsName: [],
      links: ''
    }
  },
  methods: {
    loadPage(index) {
      if (index == null) return;
      this.loadProjects(index)
    },
    loadProjects(target) {
      axios.get(target)
        .then(response => {
          // Get links della paginazione
          this.links = response.data.projects.links;
          this.projectsName = [];
          // Ciclo for per creare oggetto con nomi e id progetti
          const data = response.data.projects.data;
          data.forEach(project => {
            this.projectsName.push({ name: project.name, id: project.id })
          });
        })
        .catch(error => {
          console.log('error: ', error)
        })
    }
  },
  mounted() {
    this.loadProjects(this.projectUrl)
  }
}
</script>

<template>
  <div class="container text-center">
    <h1><strong>Progetti</strong></h1>
    <div class="d-flex flex-column my-4">
      <div v-for="(project, index) in projectsName" :key="index">
        <router-link :to="{ name: 'projectCard', params: { id: project.id } }" class="text-decoration-none text-dark">
          {{ project.name.charAt(0).toUpperCase() + project.name.slice(1) }}
        </router-link>
      </div>
    </div>
    <div class="d-flex justify-content-center gap-3">
      <Pages v-for="(link, index) in links" :key="index" @load="loadPage(link.url)" :link="link"
        :class="link.active ? 'bg-secondary text-white' : ''" />
    </div>
  </div>
</template>

<style>
a {
  cursor: pointer;
}
</style>
