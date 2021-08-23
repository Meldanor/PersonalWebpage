<template>
  <div class="container mx-auto">
    <starter />
    <self-description />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Starter from '~/components/Starter.vue'
import SelfDescription from '~/components/SelfDescription.vue'

export default Vue.extend({
  components: {
    SelfDescription,
    Starter
  }
})
</script>

<style>
  body {
    font-family: Trirong,serif;
  }
</style>
