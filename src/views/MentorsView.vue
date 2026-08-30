<script setup>
import PageIntro from '../components/PageIntro.vue'
import MentorCallSection from '../components/MentorCallSection.vue'
import MentorsSection from '../components/MentorsSection.vue'
import { localized } from '../composables/useLanguage'

const copy = localized({
  en: { eyebrow: 'Meet Our Team', title: 'Meet the people behind BioMentor THU.', description: 'Get to know the founding mentors and program team who contribute their experience, care, and time to make each connection possible.' },
  zh: { eyebrow: '认识团队', title: '认识 BioMentor THU 背后的同行者。', description: '了解创始导师与项目运营团队——他们投入经验、关怀与时间，让每一次导师连接成为可能。' },
})
</script>

<template>
  <div class="route-view">
    <PageIntro
      :eyebrow="copy.eyebrow"
      :title="copy.title"
      :description="copy.description"
    />
    <MentorsSection />
    <MentorCallSection />
  </div>
</template>
