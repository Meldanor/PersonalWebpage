<template>
  <a class="open-file" target="_blank" rel="noreferrer" :href="url">
    {{ displayName }}
    <img src="/logos/195px-PDF_file_icon.svg.png" class="w-5 h-5 ml-1">
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    displayName: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
})
</script>

<style>
.open-file {

  height: 2rem;

  border-color: rgba(195, 224, 241, var(--tw-border-opacity));
  @apply border text-2xl mx-2 flex items-center
}
</style>
