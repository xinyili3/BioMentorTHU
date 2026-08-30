<script setup>
import SectionHeading from './SectionHeading.vue'
import { menteeExpectations } from '../content/siteContent'
</script>

<template>
  <section id="mentee-expectations">
    <div class="page-shell">
      <div class="section-card">
        <SectionHeading v-bind="menteeExpectations.heading" />
        <div class="expectations-grid">
          <article v-for="item in menteeExpectations.items" :key="item.title" class="principle-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
