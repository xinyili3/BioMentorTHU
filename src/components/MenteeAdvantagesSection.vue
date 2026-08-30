<script setup>
import SectionHeading from './SectionHeading.vue'
import { menteeAdvantages } from '../content/siteContent'
</script>

<template>
  <section id="mentee-advantages">
    <div class="page-shell">
      <div class="section-card">
        <SectionHeading v-bind="menteeAdvantages.heading" />
        <div class="pilot-scope">
          <strong>{{ menteeAdvantages.pilotLabel }}</strong>
          <p>{{ menteeAdvantages.pilotText }}</p>
        </div>
        <div class="advantage-grid">
          <article v-for="item in menteeAdvantages.items" :key="item.number" class="advantage-card">
            <span>{{ item.number }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
