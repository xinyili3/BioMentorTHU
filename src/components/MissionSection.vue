<script setup>
import SectionHeading from './SectionHeading.vue'
import { mission } from '../content/siteContent'
</script>

<template>
  <section id="mission">
    <div class="page-shell">
      <div class="section-card">
        <span class="mission-mark" aria-hidden="true">?</span>
        <SectionHeading v-bind="mission.heading" />
        <div class="mission-questions">
          <div v-for="(question, index) in mission.questions" :key="question" class="question">
            <span class="question-number">0{{ index + 1 }}</span>
            <span>{{ question }}</span>
          </div>
        </div>
        <p class="section-note">{{ mission.note }}</p>
      </div>
    </div>
  </section>
</template>
