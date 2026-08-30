<script setup>
import SectionHeading from './SectionHeading.vue'
import { mentorCall } from '../content/siteContent'
import { localized } from '../composables/useLanguage'

const copy = localized({
  en: { contribute: 'You may contribute by', flexibility: 'Designed for flexibility', action: 'Contact Us to Become a Mentor' },
  zh: { contribute: '你可以这样参与', flexibility: '灵活参与，量力而行', action: '联系我们成为导师' },
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
            <div class="hero-actions compact-actions">
              <a
                class="button button-primary"
                href="mailto:biomentorthu@gmail.com?subject=BioMentor%20THU%20-%20Prospective%20Mentor"
              >
                {{ copy.action }}
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
