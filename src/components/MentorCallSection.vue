<script setup>
import SectionHeading from './SectionHeading.vue'
import { mentorCall } from '../content/siteContent'
</script>

<template>
  <section id="mentor-call">
    <div class="page-shell">
      <div class="section-card">
        <SectionHeading v-bind="mentorCall.heading" />
        <div class="support-grid">
          <article class="support-item">
            <h3>You may contribute by</h3>
            <ul>
              <li v-for="item in mentorCall.contributions" :key="item">{{ item }}</li>
            </ul>
          </article>
          <article class="support-item">
            <h3>Designed for flexibility</h3>
            <p>{{ mentorCall.flexibility }}</p>
            <div class="hero-actions compact-actions">
              <RouterLink class="button button-primary" to="/apply">
                Become a Founding Mentor
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
