<template>
  <div class="container text-center">
    <h1>{{ project.name }}</h1>
    <p>{{ project.description }}</p>

    <router-link :to="{ name: 'home' }" class="btn btn-primary mt-4">Back to home</router-link>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "ProjectCard",
  data() {
    return {
      singleProjectUrl: 'http://localhost:8000/api/project-show/',
      project: {}
    }
  },
  methods: {
    loadProjects(target) {
      axios.get(target)
        .then(response => {
          this.project = response.data.project;
        })
        .catch(error => {
          console.log('error: ', error)
        })
    }
  },
  mounted() {
    this.loadProjects(this.singleProjectUrl + this.$route.params.id)
  }
}
</script>
<style></style>