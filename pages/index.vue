<template>
  <div class="container mx-auto">
    <starter />
    <self-description />
    <documents class="mt-8" />
    <hr class="hidden sm:block my-8">
    <skill-list />
    <hr class="hidden sm:block my-8">
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
import Documents from '~/components/Documents.vue'

export default Vue.extend({
  components: {
    Documents,
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
