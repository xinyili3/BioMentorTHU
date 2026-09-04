<script setup>
import { computed } from 'vue'
import SectionHeading from './SectionHeading.vue'
import { mentorCall } from '../content/siteContent'
import { componentLabels } from '../content/pageContent'

const copy = computed(() => componentLabels.value.mentorCall)
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
