<script setup>
import PageIntro from '../components/PageIntro.vue'
import JoinSection from '../components/JoinSection.vue'

const downloadUrl = `${import.meta.env.BASE_URL}downloads/test.pdf`
</script>

<template>
  <PageIntro
    eyebrow="Applications"
    title="Join the BioMentoring community."
    description="Choose the role that fits you, review the available program material, and begin your application."
  />
  <JoinSection />
  <section class="downloads-section" aria-labelledby="downloads-title">
    <div class="page-shell">
      <div class="download-panel">
        <div>
          <span class="eyebrow">Downloads</span>
          <h2 id="downloads-title">Application material</h2>
          <p>Download the available PDF attachment for reference.</p>
        </div>
        <a class="button button-primary" :href="downloadUrl" download>
          Download test PDF
        </a>
      </div>
    </div>
  </section>
</template>
