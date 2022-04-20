<template>
  <div class="w-full flex">
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
  </div>
</template>

<script lang="ts">

import OpenFile from '~/components/documents/OpenFile.vue'

export default {
  components: { OpenFile }
}
</script>
