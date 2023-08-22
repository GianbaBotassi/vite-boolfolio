<script>
import axios from 'axios';

export default {
  name: 'Project',
  data() {
    return {
      projectUrl: 'http://localhost:8000/api/projects',
      projects: [],
      links: ''
    }
  },
  methods: {
    loadProject(index) {
      if (index == null) return;
      axios.get(index)
        .then(response => {
          this.projects = response.data.projects.data;
          this.links = response.data.projects.links
          console.log(response.data.projects);
        })
        .catch(error => {
          console.log('error: ', error)
        })
      console.log(index);
    }
  },
  mounted() {
    axios.get(this.projectUrl)
      .then(response => {
        this.projects = response.data.projects.data;
        this.links = response.data.projects.links
        console.log(this.links);
      })
      .catch(error => {
        console.log('error: ', error)
      })
  }
}
</script>

<template>
  <h1>Progetti</h1>
  <div v-for="project in projects" :key="project.id">
    <div>
      <a href="#" class="text-dark text-decoration-none">
        [{{ project.id }}] {{ project.name }}
      </a>
    </div>
  </div>
  <div class="d-flex justify-content-center gap-3 mt-3">
    <a class="text-dark text-decoration-none px-3" v-for="(link, index) in links" :key="index" v-html="link.label"
      @click="loadProject(link.url)" :class="link.active ? 'bg-secondary text-white' : ''">
    </a>
  </div>
</template>

<style>
a {
  cursor: pointer;
}
</style>