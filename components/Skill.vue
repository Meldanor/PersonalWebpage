<template>
  <div class="skill-block">
    <div class="flex align-middle">
      <img :src="icon" :alt="name" class="w-8 h-8">
      <h3 class="text-3xl font-bold pl-2 h-8">
        {{ name }}
      </h3>
    </div>
    <div class="flex flex-col justify-evenly h-auto sm:h-4/5">
      <div class="h-1/4 sm:pt-0 pt-4">
        <slot name="skill-list" />
      </div>
      <hr>
      <div class="h-1/4 sm:pt-0 pt-4 text-base text-justify">
        <slot name="description" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: { type: String, required: true },
    icon: { type: String, required: true }
  }
})
</script>

<style>
.skill-block {
  border-color: rgba(195, 224, 241, var(--tw-border-opacity));
  @apply border shadow h-full sm:h-96 p-4 text-lg
}
</style>
