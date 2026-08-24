<script setup>
import SectionHeading from './SectionHeading.vue'
import { join } from '../content/siteContent'
</script>

<template>
  <section id="join">
    <div class="page-shell">
      <div class="section-card">
        <SectionHeading v-bind="join.heading" />
        <div class="join-grid">
          <article v-for="item in join.options" :key="item.title" class="join-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <div class="hero-actions">
              <a class="button" :class="item.buttonClass" :href="item.href">{{ item.label }}</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
