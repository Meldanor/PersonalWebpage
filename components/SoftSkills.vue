<template>
  <div>
    <h3 class="text-center pt-2 text-2xl font-semibold">
      Soft Skills
    </h3>
    <div class="flex flex-wrap justify-center mt-12 ">
      <div class="bg-yellow-500 skill-block">
        <p>
          Lernfähigkeit
        </p>
      </div>
      <div class="bg-gray-500 skill-block">
        <p>
          Humor
        </p>
      </div>
      <div class="bg-green-500 skill-block">
        <p>
          Führung
        </p>
      </div>
      <div class="bg-red-500 skill-block">
        <p>
          Präsentation
        </p>
      </div>
      <div class="bg-blue-500 skill-block">
        <p>
          Kommunikation
        </p>
      </div>
      <div class="bg-purple-500 skill-block">
        <p>
          Organisation
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.skill-block {
  @apply w-36 h-36 m-4 md:w-48 md:h-48 text-center flex justify-center items-center md:text-lg rounded-full
}

.skill-block p {
  background-color: #c3e0f1;
  @apply rounded-full px-2
}
</style>
