<template>
  <fieldset class="download-content">
    <legend class="downloads-header">
      Lebenslauf / Zertifikate
    </legend>
    <div class="flex flex-wrap justify-center">
      <OpenFile
        display-name="Lebenslauf"
        url="/files/Lebenslauf_Kilian_Gaertner_2022.pdf"
      />
      <OpenFile
        display-name="Software-Architect (ISAQB-F)"
        url="/files/SoftwareArchitect_Certificate_2.pdf"
      />
      <OpenFile
        display-name="AWS Cloud Practitioner Essentials"
        url="/files/AWS Training & Certification - Certificate of Completion.pdf"
      />
      <OpenFile
        display-name="SCRUM PSM"
        url="/files/Kilian_Gaertner_Professional Scrum Master I.pdf"
      />
    </div>
  </fieldset>
</template>

<script lang="ts">

import OpenFile from '~/components/documents/OpenFile.vue'

export default {
  components: { OpenFile }
}
</script>

<style>
.download-content {
  width: fit-content;
  border-color: rgba(195, 224, 241, var(--tw-border-opacity));
  @apply border shadow border-2 py-4 px-0 sm:px-1
}
.downloads-header {
  @apply ml-2 text-sm
}
</style>
