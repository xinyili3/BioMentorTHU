<script setup>
import { localized } from '../composables/useLanguage'

const copy = localized({
  en: { eyebrow: 'Volunteer-led mentoring initiative', lead: 'Connecting Tsinghua students with mentors who have walked the path. We support undergraduates in the life and biomedical sciences through one-on-one guidance from alumni currently pursuing or recently completing PhD training in China and abroad.', mentee: 'Apply as a Mentee', mentor: 'Become a Mentor', focus: 'Program Focus', focusText: 'Personalized conversations, application feedback, and honest guidance about what PhD training and research life can actually look like.', goal: 'Our goal is to make the path toward advanced research training more transparent, more humane, and more collaborative for future generations of Tsinghua students.' },
  zh: { eyebrow: '志愿者发起的导师项目', lead: '连接清华学生与曾经走过这段路的导师。我们面向生命科学与生物医学领域的本科生，由正在国内外攻读博士或近期完成博士训练的校友提供一对一指导。', mentee: '申请成为学生', mentor: '申请成为导师', focus: '项目重点', focusText: '通过个性化交流、申请材料反馈与坦诚分享，帮助学生真实了解博士训练与科研生活。', goal: '我们希望让进阶科研训练的道路对一代代清华学生而言更加透明、更有人情味，也更具协作精神。' },
})
</script>

<template>
  <section class="hero">
    <div class="page-shell">
      <div class="hero-panel">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="eyebrow">{{ copy.eyebrow }}</span>
            <h1>BioMentor THU</h1>
            <p class="lead">
              {{ copy.lead }}
            </p>
            <div class="hero-actions">
              <RouterLink class="button button-primary" to="/mentees">{{ copy.mentee }}</RouterLink>
              <RouterLink class="button button-secondary" to="/mentors">{{ copy.mentor }}</RouterLink>
            </div>
          </div>
          <div class="hero-side">
            <div class="stat-card">
              <strong>{{ copy.focus }}</strong>
              <p>{{ copy.focusText }}</p>
            </div>
            <div class="stat-card hero-note">
              <p>{{ copy.goal }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
