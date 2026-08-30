<script setup>
import PageIntro from '../components/PageIntro.vue'
import SupportSection from '../components/SupportSection.vue'
import ProcessSection from '../components/ProcessSection.vue'
import PilotSection from '../components/PilotSection.vue'
import PrinciplesSection from '../components/PrinciplesSection.vue'
import { localized } from '../composables/useLanguage'

const copy = localized({
  en: { eyebrow: 'For Mentees', title: 'Everything you need for the path ahead.', description: 'Explore the 2026 pilot, the support available to you, how mentoring works, and the principles that guide every mentor connection.', ready: 'Ready to Apply?', next: 'Take the next step as a mentee.', detail: 'Download the mentee application form from the application page.', action: 'Go to Applications' },
  zh: { eyebrow: '学生专区', title: '把前行所需的信息集中在这里。', description: '了解 2026 试点计划、你可以获得的支持、导师指导流程，以及每一次导师交流所遵循的原则。', ready: '准备申请了吗？', next: '迈出成为学生成员的下一步。', detail: '前往申请页面下载学生申请表。', action: '前往申请页面' },
})
</script>

<template>
  <div class="route-view">
    <PageIntro
      :eyebrow="copy.eyebrow"
      :title="copy.title"
      :description="copy.description"
    />
    <PilotSection />
    <SupportSection />
    <ProcessSection />
    <PrinciplesSection />
    <section class="application-cta">
      <div class="page-shell">
        <div class="application-cta-panel">
          <div>
            <span class="eyebrow">{{ copy.ready }}</span>
            <h2>{{ copy.next }}</h2>
            <p>{{ copy.detail }}</p>
          </div>
          <RouterLink class="button button-primary" to="/apply">{{ copy.action }}</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
