<template>
  <div class="container mx-auto">
    <starter />
    <self-description />
    <hr class="my-16">
    <skill-list />
    <hr class="my-16">
    <timeline />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Starter from '~/components/Starter.vue'
import SelfDescription from '~/components/SelfDescription.vue'
import SkillList from '~/components/SkillList.vue'
import Timeline from '~/components/Timeline.vue'

export default Vue.extend({
  components: {
    Timeline,
    SkillList,
    SelfDescription,
    Starter
  }
})
</script>

<style>
  body {
    font-family: Trirong,serif;
  }
  a {
    @apply text-green-500
  }
</style>
