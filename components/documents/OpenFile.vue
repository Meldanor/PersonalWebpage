<template>
  <a class="open-file" target="_blank" rel="noreferrer" :href="url">
    {{ displayName }}
    <img class="w-8 h-8" src="/logos/download-minimalistic-svgrepo-com.svg" alt="github logo">
  </a>
</template>

<script setup lang="ts">
  const props = defineProps({
    displayName: String,
    url: String
  });
</script>

<style>
.open-file {
  background-color: rgba(195, 224, 241, var(--tw-border-opacity));
  @apply w-52 h-16 p-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-between
}
</style>
