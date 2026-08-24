<script setup>
import SectionHeading from './SectionHeading.vue'
import { mission } from '../content/siteContent'
</script>

<template>
  <section id="mission">
    <div class="page-shell">
      <div class="section-card">
        <SectionHeading v-bind="mission.heading" />
        <div class="mission-questions">
          <div v-for="question in mission.questions" :key="question" class="question">
            {{ question }}
          </div>
        </div>
        <p class="section-note">{{ mission.note }}</p>
      </div>
    </div>
  </section>
</template>
