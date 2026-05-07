<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <SectionsNavbar />
    <SectionsHero />
    <SectionsAbout />
    <SectionsExperience />
    <SectionsProjects />
    <SectionsExpertise />
    <SectionsEducation />
    <SectionsFooter />
  </div>
</template>
