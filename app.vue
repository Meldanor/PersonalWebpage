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

<style>
  body {
    font-family: Trirong,serif;
  }
  a {
    @apply text-green-500
  }
</style>
