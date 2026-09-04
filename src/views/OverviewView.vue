<script setup>
import HeroSection from '../components/HeroSection.vue'
import { overviewContent as links } from '../content/pageContent'
</script>

<template>
  <div class="route-view">
    <HeroSection />
    <section class="overview-essentials">
      <div class="page-shell">
        <div class="overview-manifesto">
          <span class="eyebrow">{{ links.missionEyebrow }}</span>
          <h2>{{ links.missionTitle }}</h2>
          <p>{{ links.missionText }}</p>
        </div>
        <nav class="editorial-links" :aria-label="links.missionEyebrow">
            <RouterLink
              v-for="item in links.items"
              :key="item.to"
              class="editorial-link"
              :to="item.to"
            >
              <span class="editorial-link-number">{{ item.number }}</span>
              <span class="editorial-link-title">{{ item.label }}</span>
              <span class="editorial-link-detail">{{ item.detail }}</span>
              <span class="editorial-link-arrow" aria-hidden="true">↗</span>
            </RouterLink>
        </nav>
      </div>
    </section>
  </div>
</template>
