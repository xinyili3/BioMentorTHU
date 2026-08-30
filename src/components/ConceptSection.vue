<script setup>
import { localized } from '../composables/useLanguage'

const copy = localized({
  en: {
    eyebrow: 'The Idea',
    watermark: 'Share',
    title: 'Knowledge travels further when it is shared.',
    description: 'BioMentor THU turns individual experience into a path others can follow—not by prescribing one answer, but by making room for better questions and more informed choices.',
    stages: [
      { number: '01', title: 'Lived experience', text: 'Mentors bring honest lessons from research, applications, and PhD life.' },
      { number: '02', title: 'Focused conversation', text: 'One-on-one dialogue turns broad uncertainty into questions that can be addressed.' },
      { number: '03', title: 'Informed direction', text: 'Mentees leave with clearer thinking, stronger materials, and decisions they own.' },
    ],
  },
  zh: {
    eyebrow: '项目理念',
    watermark: '共享',
    title: '经验在分享中走得更远。',
    description: 'BioMentor THU 将个人经历转化为后来者可以参考的道路——不是给出唯一答案，而是为更好的问题和更充分的选择创造空间。',
    stages: [
      { number: '01', title: '亲身经验', text: '导师分享来自科研、申请与博士生活的真实经验。' },
      { number: '02', title: '专注对话', text: '一对一交流把笼统的不确定，转化为可以具体讨论的问题。' },
      { number: '03', title: '自主方向', text: '学生带着更清晰的思考、更扎实的材料，以及属于自己的决定继续前行。' },
    ],
  },
})
</script>

<template>
  <section class="concept-section">
    <div class="page-shell">
      <div class="concept-panel" :data-watermark="copy.watermark">
        <div class="concept-intro">
          <span class="eyebrow">{{ copy.eyebrow }}</span>
          <h2>{{ copy.title }}</h2>
          <p>{{ copy.description }}</p>
        </div>
        <div class="concept-stages">
          <article v-for="(stage, index) in copy.stages" :key="stage.number" class="concept-stage">
            <div class="concept-stage-top">
              <span>{{ stage.number }}</span>
              <span v-if="index < copy.stages.length - 1" class="concept-connector" aria-hidden="true"></span>
            </div>
            <h3>{{ stage.title }}</h3>
            <p>{{ stage.text }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
