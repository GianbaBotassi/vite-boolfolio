<script>
import axios from 'axios';

export default {
  name: 'Project',
  data() {
    return {
      projectUrl: 'http://localhost:8000/api/projects',
      projects: '',
    }
  },
  mounted() {
    axios.get(this.projectUrl)
      .then(response => {
        this.projects = response.data.projects;
        console.log(this.projects);
      })
      .catch(error => {
        console.log('error: ', error)
      })
  }
}
</script>

<template>
  <h1>Progetti</h1>
  <div v-for="project in projects">
    <pre>{{ project.name }}</pre>
  </div>
</template>