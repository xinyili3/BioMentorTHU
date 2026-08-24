<script setup>
import SectionHeading from './SectionHeading.vue'
import { principles } from '../content/siteContent'
</script>

<template>
  <section id="principles">
    <div class="page-shell">
      <div class="section-card">
        <SectionHeading v-bind="principles.heading" />
        <div class="principles-grid">
          <article v-for="item in principles.items" :key="item.title" class="principle-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
