<script setup>
import PageIntro from '../components/PageIntro.vue'
import MentorCallSection from '../components/MentorCallSection.vue'
import MentorsSection from '../components/MentorsSection.vue'
</script>

<template>
  <PageIntro
    eyebrow="Mentors"
    title="Share what you have learned."
    description="Learn who can mentor, how volunteering works, and meet the founding mentors behind the program."
  />
  <MentorCallSection />
  <MentorsSection />
</template>
