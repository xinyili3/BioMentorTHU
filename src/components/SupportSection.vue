<script setup>
import SectionHeading from './SectionHeading.vue'
import { support } from '../content/siteContent'
</script>

<template>
  <section id="support">
    <div class="page-shell">
      <div class="section-card">
        <SectionHeading v-bind="support.heading" />
        <div class="support-grid">
          <article v-for="item in support.items" :key="item.title" class="support-item">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <ul>
              <li v-for="detail in item.details" :key="detail">{{ detail }}</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
