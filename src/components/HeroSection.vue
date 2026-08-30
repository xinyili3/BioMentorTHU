<script setup>
import { localized } from '../composables/useLanguage'

const copy = localized({
  en: {
    eyebrow: 'Volunteer-led mentoring initiative · 2026 Pilot',
    statement: 'Experience should become a bridge, not a gate.',
    lead: 'One-to-one guidance for Tsinghua students in the life and biomedical sciences, from alumni who have recently navigated PhD training in China and abroad.',
    mapLabel: 'A shared path',
    nodes: [
      { number: '01', title: 'Experience', text: 'What mentors have learned' },
      { number: '02', title: 'Conversation', text: 'What students need now' },
      { number: '03', title: 'Direction', text: 'What becomes possible next' },
    ],
    goal: 'More transparent. More humane. More collaborative.',
    edition: 'TSINGHUA · LIFE SCIENCES · 2026',
  },
  zh: {
    eyebrow: '志愿者发起的导师项目 · 2026 试点',
    statement: '让经验成为桥梁，而不是门槛。',
    lead: '由近期在国内外经历博士训练的校友，为生命科学与生物医学领域的清华学生提供一对一指导。',
    mapLabel: '一条共同走出的路',
    nodes: [
      { number: '01', title: '经验', text: '导师一路所学' },
      { number: '02', title: '对话', text: '学生此刻所需' },
      { number: '03', title: '方向', text: '下一步的更多可能' },
    ],
    goal: '更透明 · 更有人情味 · 更具协作精神',
    edition: '清华 · 生命科学 · 2026',
  },
})
</script>

<template>
  <section class="hero">
    <div class="page-shell">
      <div class="hero-panel">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="eyebrow">{{ copy.eyebrow }}</span>
            <h1 aria-label="BioMentor THU">
              <span>Bio</span><span>Mentor</span><span class="hero-title-thu">THU</span>
            </h1>
            <p class="hero-statement">{{ copy.statement }}</p>
            <p class="lead">
              {{ copy.lead }}
            </p>
          </div>
          <div class="hero-side">
            <div class="path-map">
              <svg class="path-map-art" viewBox="0 0 360 360" aria-hidden="true">
                <path d="M58 35 C 300 42, 54 145, 286 176 S 89 292, 302 328" />
                <circle cx="58" cy="35" r="7" />
                <circle cx="286" cy="176" r="7" />
                <circle cx="302" cy="328" r="7" />
              </svg>
              <span class="path-map-label">{{ copy.mapLabel }}</span>
              <div v-for="node in copy.nodes" :key="node.number" class="path-node">
                <span class="path-node-number">{{ node.number }}</span>
                <div>
                  <strong>{{ node.title }}</strong>
                  <p>{{ node.text }}</p>
                </div>
              </div>
              <p class="path-map-goal">{{ copy.goal }}</p>
            </div>
            <span class="hero-edition">{{ copy.edition }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
