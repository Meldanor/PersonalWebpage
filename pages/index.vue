<template>
  <div class="container mx-auto">
    <starter />
    <self-description />
    <hr>
    <skill-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Starter from '~/components/Starter.vue'
import SelfDescription from '~/components/SelfDescription.vue'
import SkillList from '~/components/SkillList.vue'

export default Vue.extend({
  components: {
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
</style>
