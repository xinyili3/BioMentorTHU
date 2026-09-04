<script setup>
import PageIntro from '../components/PageIntro.vue'
import MentorsSection from '../components/MentorsSection.vue'
import { mentorsPageContent as copy } from '../content/pageContent'
</script>

<template>
  <div class="route-view">
    <PageIntro
      :eyebrow="copy.eyebrow"
      :title="copy.title"
      :description="copy.description"
    />
    <MentorsSection />
  </div>
</template>
