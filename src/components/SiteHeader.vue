<script setup>
import { navigation } from '../content/siteContent'
</script>

<template>
  <header class="site-header">
    <div class="page-shell">
      <div class="brand">
        <!-- <span class="brand-kicker">Demo A</span> -->
        <span class="brand-name">BioMentor THU</span>
      </div>
      <nav class="nav" aria-label="Primary">
        <RouterLink v-for="item in navigation" :key="item.to" :to="item.to">
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
