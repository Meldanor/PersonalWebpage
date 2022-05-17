<template>
  <a class="open-file" target="_blank" rel="noreferrer" :href="url">
    {{ displayName }}
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
  background-color: rgba(195, 224, 241, var(--tw-border-opacity));
  @apply w-52 h-16 p-2 text-black font-semibold transition-colors flex items-center justify-center text-center mx-2
}
.open-file:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(152, 202, 231, var(--tw-border-opacity));
}
</style>
