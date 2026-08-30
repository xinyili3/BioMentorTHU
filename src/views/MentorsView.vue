<script setup>
import PageIntro from '../components/PageIntro.vue'
import MentorCallSection from '../components/MentorCallSection.vue'
import MentorsSection from '../components/MentorsSection.vue'
import { localized } from '../composables/useLanguage'

const copy = localized({
  en: { eyebrow: 'Mentors', title: 'Help mentees navigate the path ahead.', description: 'Learn who can mentor, how volunteering works, and meet the founding mentors behind the program.' },
  zh: { eyebrow: '导师', title: '帮助学生更从容地走好前方的路。', description: '了解谁可以成为导师、志愿指导如何开展，并认识项目的创始导师。' },
})
</script>

<template>
  <div class="route-view">
    <PageIntro
      :eyebrow="copy.eyebrow"
      :title="copy.title"
      :description="copy.description"
    />
    <MentorCallSection />
    <MentorsSection />
  </div>
</template>
