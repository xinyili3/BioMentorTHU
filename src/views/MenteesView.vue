<script setup>
import PageIntro from '../components/PageIntro.vue'
import SupportSection from '../components/SupportSection.vue'
import ProcessSection from '../components/ProcessSection.vue'
import MenteeExpectationsSection from '../components/MenteeExpectationsSection.vue'
import MenteeAdvantagesSection from '../components/MenteeAdvantagesSection.vue'
import { menteesPageContent as copy } from '../content/pageContent'
</script>

<template>
  <div class="route-view">
    <PageIntro
      :eyebrow="copy.eyebrow"
      :title="copy.title"
      :description="copy.description"
    />
    <MenteeAdvantagesSection />
    <SupportSection />
    <ProcessSection />
    <MenteeExpectationsSection />
    <section class="mentee-links-section">
      <div class="page-shell">
        <div class="section-card">
          <div class="section-heading">
            <span class="eyebrow">{{ copy.linksEyebrow }}</span>
            <h2>{{ copy.linksTitle }}</h2>
          </div>
          <div class="mentee-link-grid">
            <article v-for="item in copy.links" :key="item.to" class="mentee-link-card">
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
              <RouterLink class="button" :class="item.primary ? 'button-primary' : 'button-secondary'" :to="item.to">
                {{ item.label }}
              </RouterLink>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
