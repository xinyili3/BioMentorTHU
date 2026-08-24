<script setup>
import SectionHeading from './SectionHeading.vue'
import { mentors } from '../content/siteContent'
</script>

<template>
  <section id="mentors">
    <div class="page-shell">
      <div class="section-card">
        <SectionHeading v-bind="mentors.heading" />
        <div class="mentor-grid">
          <article v-for="mentor in mentors.people" :key="mentor.role" class="mentor-card">
            <h3>{{ mentor.name }}</h3>
            <p class="mentor-role">{{ mentor.role }}</p>
            <strong>Research Interests</strong>
            <p>{{ mentor.research }}</p>
            <strong>Mentoring Areas</strong>
            <p>{{ mentor.areas }}</p>
            <RouterLink class="button button-secondary" to="/apply">View Profile</RouterLink>
          </article>
        </div>
        <div class="hero-actions section-actions">
          <RouterLink class="button button-secondary" to="/apply">Meet All Mentors</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
