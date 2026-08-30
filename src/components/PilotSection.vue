<script setup>
import SectionHeading from './SectionHeading.vue'
import { pilot } from '../content/siteContent'
import { localized } from '../composables/useLanguage'

const copy = localized({
  en: { focus: "This year's mentoring focus", why: 'Why a Pilot?', action: 'Learn About the 2026 Pilot' },
  zh: { focus: '本年度导师指导重点', why: '为什么从试点开始？', action: '了解 2026 试点项目' },
})
</script>

<template>
  <section id="pilot">
    <div class="page-shell">
      <div class="section-card">
        <SectionHeading v-bind="pilot.heading" />
        <div class="pilot-banner">
          <div class="pilot-focus">
            <h3>{{ copy.focus }}</h3>
            <p>{{ pilot.focusDescription }}</p>
            <div class="chip-row">
              <span v-for="item in pilot.focusAreas" :key="item" class="chip">{{ item }}</span>
            </div>
          </div>
          <div class="stat-card">
            <strong>{{ copy.why }}</strong>
            <p>{{ pilot.reason }}</p>
            <div class="hero-actions compact-actions">
              <RouterLink class="button button-secondary" to="/apply">
                {{ copy.action }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
