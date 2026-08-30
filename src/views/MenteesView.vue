<script setup>
import PageIntro from '../components/PageIntro.vue'
import SupportSection from '../components/SupportSection.vue'
import ProcessSection from '../components/ProcessSection.vue'
import { localized } from '../composables/useLanguage'

const copy = localized({
  en: { eyebrow: 'Mentees', title: 'Find guidance for the path ahead.', description: 'See what the program can support and how the mentoring process works from application through connection.', ready: 'Ready to Apply?', next: 'Take the next step as a mentee.', detail: 'Download the mentee application form from the application page.', action: 'Go to Applications' },
  zh: { eyebrow: '学生', title: '为前方的道路找到指引。', description: '了解本项目能够提供哪些支持，以及从申请到建立导师联系的完整流程。', ready: '准备申请了吗？', next: '迈出成为学生成员的下一步。', detail: '前往申请页面下载学生申请表。', action: '前往申请页面' },
})
</script>

<template>
  <div class="route-view">
    <PageIntro
      :eyebrow="copy.eyebrow"
      :title="copy.title"
      :description="copy.description"
    />
    <SupportSection />
    <ProcessSection />
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
