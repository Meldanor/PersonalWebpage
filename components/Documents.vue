<template>
  <fieldset class="download-content">
    <legend class="downloads-header">
      Lebenslauf / Zertifikate
    </legend>
    <div class="flex flex-wrap justify-center">
      <DocumentsOpenFile
        display-name="Lebenslauf"
        url="/files/Lebenslauf_Kilian_Gaertner_2022.pdf"
      />
      <DocumentsOpenFile
        display-name="Software-Architect (ISAQB-F)"
        url="/files/SoftwareArchitect_Certificate_2.pdf"
      />
      <DocumentsOpenFile
        display-name="AWS Cloud Practitioner Essentials"
        url="/files/AWS Training & Certification - Certificate of Completion.pdf"
      />
      <DocumentsOpenFile
        display-name="SCRUM PSM"
        url="/files/Kilian_Gaertner_Professional Scrum Master I.pdf"
      />
    </div>
  </fieldset>
</template>

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
