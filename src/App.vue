<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue'
import AppHome from './components/AppHome.vue'

export default {
  components: {
    AppHeader,
    AppHome
  }
}

</script>

<template>
  <AppHeader />
  <router-view></router-view>
</template>

<style></style>
