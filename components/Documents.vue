<template>
  <div class="download-content">
    <div class="flex">
      <OpenFile
        display-name="Lebenslauf"
        url="/files/Lebenslauf_Kilian_Gaertner_2022.pdf"
      />
      <OpenFile
        display-name="ISAQB-F Zertifakt"
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
  </div>
</template>

<script lang="ts">

import OpenFile from '~/components/documents/OpenFile.vue'

export default {
  components: { OpenFile }
}
</script>

<style>
.download-content {
  border-color: rgba(195, 224, 241, var(--tw-border-opacity));
  @apply border shadow border-2 py-4
}
</style>
