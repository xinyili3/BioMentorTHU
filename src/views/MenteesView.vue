<script setup>
import PageIntro from '../components/PageIntro.vue'
import SupportSection from '../components/SupportSection.vue'
import ProcessSection from '../components/ProcessSection.vue'
import MenteeExpectationsSection from '../components/MenteeExpectationsSection.vue'
import MenteeAdvantagesSection from '../components/MenteeAdvantagesSection.vue'
import { localized } from '../composables/useLanguage'

const copy = localized({
  en: {
    eyebrow: 'For Mentees',
    title: 'Get practical guidance for your next step.',
    description: 'See who the 2026 pilot is for, what support is available, and how to take part.',
    linksEyebrow: 'Useful Links',
    linksTitle: 'Explore the program or take the next step.',
    links: [
      { title: 'Meet Our Team', description: 'Browse mentor backgrounds and areas of support.', label: 'View Mentors', to: '/mentors' },
      { title: 'Read the FAQ', description: 'Check eligibility, matching, confidentiality, and other details.', label: 'View FAQ', to: '/faq' },
      { title: 'Apply for the 2026 Pilot', description: 'Download the mentee form and review submission instructions.', label: 'Start Your Application', to: '/apply', primary: true },
    ],
  },
  zh: {
    eyebrow: '学生专区',
    title: '为下一步获得实际帮助。',
    description: '快速了解 2026 试点面向谁、能够提供什么支持，以及如何参与。',
    linksEyebrow: '实用入口',
    linksTitle: '进一步了解项目，或开始申请。',
    links: [
      { title: '认识我们的团队', description: '查看导师背景与可以提供的支持领域。', label: '查看导师', to: '/mentors' },
      { title: '阅读常见问题', description: '了解参与资格、匹配方式、保密要求等细节。', label: '查看 FAQ', to: '/faq' },
      { title: '申请 2026 试点', description: '下载学生申请表并查看提交说明。', label: '开始申请', to: '/apply', primary: true },
    ],
  },
})
</script>

<template>
  <div class="route-view">
    <PageIntro
      :eyebrow="copy.eyebrow"
      :title="copy.title"
      :description="copy.description"
    />
    <MenteeAdvantagesSection />
    <SupportSection />
    <ProcessSection />
    <MenteeExpectationsSection />
    <section class="mentee-links-section">
      <div class="page-shell">
        <div class="section-card">
          <div class="section-heading">
            <span class="eyebrow">{{ copy.linksEyebrow }}</span>
            <h2>{{ copy.linksTitle }}</h2>
          </div>
          <div class="mentee-link-grid">
            <article v-for="item in copy.links" :key="item.to" class="mentee-link-card">
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
              <RouterLink class="button" :class="item.primary ? 'button-primary' : 'button-secondary'" :to="item.to">
                {{ item.label }}
              </RouterLink>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
