<template>
  <a v-html="link.label" @click="$emit('load')" :class="{
    'bg-secondary': link.active,
    'disabled': link.url == null
  }" class="text-decoration-none text-dark px-3 py-1 rounded">
  </a>
</template>
<script>
export default {
  name: 'Page',
  props: {
    link: Object
  }
}
</script>
<style></style>