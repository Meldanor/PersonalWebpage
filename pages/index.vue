<template>
  <div class="container mx-auto">
    <starter />
    <description />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Description from '~/components/Description.vue'
import Starter from '~/components/Starter.vue'

export default Vue.extend({
  components: {
    Starter,
    Description
  }
})
</script>
