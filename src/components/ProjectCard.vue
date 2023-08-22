<template>
  <div id="desc-cont" class="container">
    <h1 class=" text-center my-4"><strong>{{ project.name }}</strong></h1>
    <div class="row gap-2">
      <strong class="col-2">Description: </strong>
      <p class="offset-1 col-7">{{ project.description }}</p>
    </div>
    <div class="row gap-2">
      <strong class="col-2">Collaboratori: </strong>
      <p class="offset-1 col-7">{{ project.collaborators }}</p>
    </div>
    <div class="row gap-2">
      <strong class="col-2">Visibilità: </strong>
      <p class="offset-1 col-7">{{ project.private ? 'Privato' : 'Pubblico' }}</p>
    </div>

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
<style>
#desc-cont {
  width: 700px;
}
</style>