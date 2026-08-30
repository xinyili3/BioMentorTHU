<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  highlight: { type: String, default: '' },
})
</script>

<template>
  <section class="page-intro">
    <div class="page-shell">
      <span class="eyebrow">{{ eyebrow }}</span>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <p v-if="highlight" class="page-intro-highlight">{{ highlight }}</p>
    </div>
  </section>
</template>
