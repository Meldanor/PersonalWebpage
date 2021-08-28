<template>
  <div class="container mx-auto">
    <starter />
    <self-description />
    <hr class="hidden sm:block my-16">
    <skill-list />
    <hr class="hidden sm:block my-16">
    <timeline class="my-16 sm:my-0" />
    <hr class="my-4">
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Starter from '~/components/Starter.vue'
import SelfDescription from '~/components/SelfDescription.vue'
import SkillList from '~/components/SkillList.vue'
import Timeline from '~/components/Timeline.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: {
    Footer,
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
