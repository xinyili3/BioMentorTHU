<script setup>
import PageIntro from '../components/PageIntro.vue'
import SupportSection from '../components/SupportSection.vue'
import ProcessSection from '../components/ProcessSection.vue'
</script>

<template>
  <div class="route-view">
    <PageIntro
      eyebrow="Mentees"
      title="Find guidance for the path ahead."
      description="See what the program can support and how the mentoring process works from application through connection."
    />
    <SupportSection />
    <ProcessSection />
    <section class="application-cta">
      <div class="page-shell">
        <div class="application-cta-panel">
          <div>
            <span class="eyebrow">Ready to Apply?</span>
            <h2>Take the next step as a mentee.</h2>
            <p>Download the mentee application form from the application page.</p>
          </div>
          <RouterLink class="button button-primary" to="/apply">Go to Applications</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
