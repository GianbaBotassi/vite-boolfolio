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
        <!-- <div>
            <label class="my-2" for="tipologia"><strong>Tipologia</strong></label>
            <select class="my-2" name="type_id" id="type_id">
              <option value=""></option>
            </select>
          </div>
        </div>

        <label class="my-2"><strong>Tecnologie:</strong></label>
        <div>
          <label for=""></label>
          <input type="checkbox" name="" id=""" value="">
          </div>
        </div> -->
      </div>
      <div>
        <div class=" d-flex justify-content-center gap-4 mt-3">
          <button type="submit" class="btn btn-secondary">Crea progetto</button>
        </div>
      </div>
    </div>
  </form>

  <!-- Bottone back to home -->
  <div class="text-center">
    <button @click="$emit('toggleCreate')" class="btn btn-primary mt-4">Back to home</button>
  </div>
</template>
<script>
export default {
  name: "AddProject",
  // Messo anche qua altrimenti genera uno warning
  emits: ['toggleCreate'],
  data() {
    return {
      project: {
        name: '',
        description: '',
        private: '',
        collaborators: '',
        type_id: '',
        technologies: []
      }
    }
  },
  methods: {
    submit() {
      console.log(JSON.stringify(this.project, null, 2));
    }
  }
}
</script>
<style></style>