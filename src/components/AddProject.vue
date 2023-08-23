<template>
  <h2>Nuovo progetto</h2>

  <!-- Form creazione nuovo progetto -->
  <form class="container mt-4" @submit.prevent="submit">
    <div class=" d-flex flex-column align-items-center">
      <div class="d-flex justify-content-between gap-4">
        <div>
          <label for="name" class="me-2"><strong>Nome</strong></label>
          <input type="text" id="name" name="name" v-model="project.name">
        </div>
        <div class="d-flex align-items-start gap-2">
          <label for="description"><strong>Descrizione:</strong></label>
          <textarea style="height: 60px" type="text" id="description" name="description"
            v-model="project.description"></textarea>
        </div>
      </div>
      <div class="my-3">
        <label class="form-label me-3"><strong>Visibilità:</strong></label>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" checked name="private" value="0" id="public"
            v-model="project.private">
          <label class="form-check-label" for="public">Pubblico</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="private" value="1" id="private" v-model="project.private">
          <label class="form-check-label" for="private">Privato</label>
        </div>
      </div>
      <div class="d-flex justify-content-between gap-4">

        <div>
          <label for="collaborators" class="me-2"><strong>Collaboratori</strong></label>
          <input type="text" id="collaborators" name="collaborators" v-model="project.collaborators">
        </div>

        <div>
          <label for="type_id" class="me-2"><strong>Tipologia</strong></label>
          <select name="type_id" id="type_id" v-model="project.type_id">
            <option v-for="type in types" :key="type.id" :value="type.id">
              {{ type.name }}
            </option>
          </select>
        </div>
      </div>

      <label class="my-2"><strong>Tecnologie:</strong></label>
      <div v-for="tech in technologies">
        <label :for="'technology' + tech.id" class="me-2">{{ tech.name }}</label>
        <input type="checkbox" :name="'technology' + tech.id" :id="'technology' + tech.id" :value="tech.id"
          v-model="project.technologies">
      </div>
    </div>
    <div>
      <div class=" d-flex justify-content-center gap-4 mt-3">
        <button type="submit" class="btn btn-secondary">Crea progetto</button>
      </div>
    </div>

  </form>

  <!-- Bottone back to home -->
  <div class="text-center">
    <button @click="$emit('toggleCreate')" class="btn btn-primary mt-4">Back to home</button>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "AddProject",
  // Messo anche qua altrimenti genera uno warning
  emits: ['toggleCreate'],
  data() {
    return {
      project: {
        name: '',
        description: '',
        private: 0,
        collaborators: '',
        type_id: '',
        technologies: []
      },
      projectUrl: 'http://localhost:8000/api/',
      types: [],
      technologies: []
    }
  },
  methods: {
    submit() {
      console.log(JSON.stringify(this.project, null, 2));
      // axios.post(this.projectUrl + 'store', this.project)
      //   .then(res => {
      //     const dati = res.data;
      //     console.log(dati);
      //   })
    }
  },
  mounted() {
    axios.get(this.projectUrl + 'types')
      .then(res => {
        this.types = res.data.types;
      })
      .catch(err => {
        console.log('error: ', err);
      });
    axios.get(this.projectUrl + 'technologies')
      .then(res => {
        this.technologies = res.data.technologies;
      })
      .catch(err => {
        console.log('error: ', err);
      })
  }


}
</script>
<style></style>