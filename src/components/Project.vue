<script>
import axios from 'axios';

import ProjectCard from './ProjectCard.vue'
import Pages from './Pages.vue'

export default {
  name: 'Project',
  components: {
    ProjectCard,
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
          // Ciclo for per nomi progetti
          const data = response.data.projects.data;
          data.forEach(project => {
            this.projectsName.push(project.name)
          });
          console.log(JSON.stringify(this.projectsName));
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
  <h1>Progetti</h1>
  <div v-for="(project, index) in projectsName" :key="index">
    {{ project.charAt(0).toUpperCase() + project.slice(1) }}
  </div>
  <div class="d-flex gap-3 mt-3">
    <Pages v-for="(link, index) in links" :key="index" @load="loadPage(link.url)" :link="link"
      :class="link.active ? 'bg-secondary text-white' : ''" />
  </div>
</template>

<style>
a {
  cursor: pointer;
}
</style>