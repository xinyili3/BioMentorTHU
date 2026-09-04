<script setup>
import PageIntro from '../components/PageIntro.vue'
import { faqPageContent as copy } from '../content/pageContent'
</script>

<template>
  <div class="route-view">
    <PageIntro v-bind="copy.intro" />
    <section class="faq-section">
      <div class="page-shell">
        <div v-for="(group, groupIndex) in copy.groups" :key="group.title" class="faq-group">
          <div class="faq-group-heading">
            <span>0{{ groupIndex + 1 }}</span>
            <h2>{{ group.title }}</h2>
          </div>
          <div class="faq-list">
            <details v-for="item in group.items" :key="item.question" class="faq-item">
              <summary>
                <span>{{ item.question }}</span>
                <span class="faq-toggle" aria-hidden="true">+</span>
              </summary>
              <p>{{ item.answer }}</p>
            </details>
          </div>
        </div>
      </div>
    </section>
    <section class="application-cta">
      <div class="page-shell">
        <div class="application-cta-panel">
          <div>
            <span class="eyebrow">{{ copy.contactEyebrow }}</span>
            <h2>{{ copy.contactTitle }}</h2>
            <p>{{ copy.contactText }}</p>
          </div>
          <a class="button button-primary" href="mailto:biomentorthu@gmail.com">{{ copy.contactButton }}</a>
        </div>
      </div>
    </section>
  </div>
</template>
