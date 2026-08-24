<script setup>
import SectionHeading from './SectionHeading.vue'
import { process } from '../content/siteContent'
</script>

<template>
  <section id="process">
    <div class="page-shell">
      <div class="section-card">
        <SectionHeading v-bind="process.heading" />
        <div class="steps-grid">
          <article v-for="step in process.steps" :key="step.number" class="step">
            <div class="step-number">{{ step.number }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
