<script setup>
import SectionHeading from './SectionHeading.vue'
import { mentorCall } from '../content/siteContent'
import { localized } from '../composables/useLanguage'

const copy = localized({
  en: { contribute: 'You may contribute by', flexibility: 'Designed for flexibility' },
  zh: { contribute: '你可以这样参与', flexibility: '灵活参与，量力而行' },
})
</script>

<template>
  <section id="mentor-call">
    <div class="page-shell">
      <div class="section-card">
        <SectionHeading v-bind="mentorCall.heading" />
        <div class="support-grid">
          <article class="support-item">
            <h3>{{ copy.contribute }}</h3>
            <ul>
              <li v-for="item in mentorCall.contributions" :key="item">{{ item }}</li>
            </ul>
          </article>
          <article class="support-item">
            <h3>{{ copy.flexibility }}</h3>
            <p>{{ mentorCall.flexibility }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
