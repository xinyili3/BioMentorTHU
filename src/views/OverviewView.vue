<script setup>
import HeroSection from '../components/HeroSection.vue'
import { localized } from '../composables/useLanguage'

const links = localized({
  en: {
    missionEyebrow: 'Why BioMentor THU',
    missionTitle: 'Mentorship should not depend on who you happen to know.',
    missionText: 'We turn alumni experience into guidance that Tsinghua students can actually access.',
    items: [
      { number: '01', label: 'For Mentees', detail: 'Support, resources, and the mentoring process', to: '/mentees' },
      { number: '02', label: 'For Mentors', detail: 'Responsibilities, benefits, and ways to contribute', to: '/for-mentors' },
      { number: '03', label: 'Meet Our Team', detail: 'Founding mentors and the operations team', to: '/mentors' },
      { number: '04', label: 'FAQ', detail: 'Eligibility, matching, boundaries, and common questions', to: '/faq' },
      { number: '05', label: '2026 Pilot', detail: 'Eligibility, applications, and next steps', to: '/apply' },
    ],
  },
  zh: {
    missionEyebrow: '为什么创立 BioMentor THU',
    missionTitle: '获得导师指引，不应取决于你恰好认识谁。',
    missionText: '我们把校友的亲身经验，转化为清华学生真正能够获得的指导。',
    items: [
      { number: '01', label: '学生专区', detail: '支持内容、实用资源与导师流程', to: '/mentees' },
      { number: '02', label: '导师专区', detail: '导师责任、收获与参与方式', to: '/for-mentors' },
      { number: '03', label: '认识团队', detail: '创始导师与项目运营团队', to: '/mentors' },
      { number: '04', label: '常见问题', detail: '参与资格、导师匹配、指导边界与常见疑问', to: '/faq' },
      { number: '05', label: '2026 试点', detail: '参与资格、申请与下一步', to: '/apply' },
    ],
  },
})
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
