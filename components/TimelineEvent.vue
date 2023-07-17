<template>
  <div class="flex items-center relative">
    <!-- This is for bigger devices -->
    <div class="text-sm text-center hidden md:block self-start w-20 h-full">
      <div class="flex flex-col self-start mt-0.5">
        <div v-if="endDate">
          {{ endDate }}
        </div>
        <div v-if="endDate">
          |
        </div>
        <div>
          {{ startDate }}
        </div>
      </div>
    </div>

    <div v-if="!last" class="line">
      <div class="dot" />
    </div>
    <div v-else class="dot md:left-20 left-1" />

    <div class="ml-10 md:ml-14 w-full">
      <div class="text-xl font-bold">
        <slot name="title" />
      </div>
      <div class="italic md:mb-4">
        <slot name="sub-title" />
      </div>
      <div class="mb-8 mt-2 md:hidden">
        <div class="text-sm font-bold">
          {{ dateHorizontal }}
        </div>
      </div>
      <div class="mb-16">
        <slot name="description" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { computed } from 'vue'

const props = defineProps({
  startDate: String,
  endDate: String,
  last: Boolean
});

const dateHorizontal = computed(() => {
  if (props.endDate) {
  return props.endDate + ' - ' + props.startDate
  } else {
  return props.startDate
  }
});

</script>

<style>
.line {
  --tw-border-opacity: 1;
  border-color: rgba(195, 224, 241, var(--tw-border-opacity));
  @apply border-r-2 absolute h-full left-1 md:left-20 top-2 z-10
}
.dot {
  background-color: #c3e0f1;
  @apply w-3.5 h-3.5 rounded-full -top-1 -ml-1.5 absolute
}
</style>
