<template>
  <div v-if="project != null" id="desc-cont" class="container">
    <h1 class=" text-center my-4"><strong>{{ project.name.charAt(0).toUpperCase() + project.name.slice(1) }}</strong></h1>
    <div class="row gap-2">
      <strong class="col-2">Descrizione: </strong>
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
    <div class="row gap-2">
      <strong class="col-2">Tipologia: </strong>
      <p class="offset-1 col-7">{{ project.type.name }}</p>
    </div>
    <div class="row gap-2">
      <strong class="col-2">Tecnologie: </strong>
      <p class="offset-1 col-7">
        <span v-for="tech in project.technologies" class="me-2 bg-primary rounded py-1 px-2 text-white">{{ tech.name ?
          tech.name : ''
        }}</span>
      </p>
    </div>
    <div class="text-center">
      <img v-if="project.user_picture" :src="'http://localhost:8000/storage/' + project.user_picture" :alt="project.name">
      <img v-else="!project.user_picture" src="http://localhost:8000/storage/images/default.jpg" alt="">
    </div>
    <div class="text-center">
      <router-link :to="{ name: 'home' }" class="btn btn-primary mt-4">Back to home</router-link>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "ProjectCard",
  data() {
    return {
      singleProjectUrl: 'http://localhost:8000/api/project-show/',
      project: null
    }
  },
  methods: {
    loadProjects(target) {
      axios.get(target)
        .then(response => {
          this.project = response.data.project;
          // console.log(JSON.stringify(this.project, null, 2));
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
  width: 1000px;
}

img {
  width: 200px;
  height: 300px;
}
</style>