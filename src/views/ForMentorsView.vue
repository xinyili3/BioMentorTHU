<script setup>
import PageIntro from '../components/PageIntro.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { mentorPageContent as copy } from '../content/pageContent'
</script>

<template>
  <div class="route-view">
    <PageIntro v-bind="copy.intro" />

    <section class="mentor-benefits-section">
      <div class="page-shell">
        <div class="section-card">
          <SectionHeading v-bind="copy.benefitsHeading" />
          <div class="advantage-grid">
            <article v-for="item in copy.benefits" :key="item.number" class="advantage-card mentor-benefit-card">
              <span>{{ item.number }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="mentor-fit-section">
      <div class="page-shell">
        <div class="section-card">
          <SectionHeading v-bind="copy.fitHeading" />
          <div class="mentor-eligibility">
            <strong>{{ copy.eligibilityLabel }}</strong>
            <p>{{ copy.eligibility }}</p>
          </div>
          <div class="advantage-grid">
            <article v-for="item in copy.contributions" :key="item.number" class="advantage-card">
              <span>{{ item.number }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="mentor-expectations-section">
      <div class="page-shell">
        <div class="section-card">
          <SectionHeading v-bind="copy.expectationsHeading" />
          <div class="mentor-expectations-layout">
            <ul>
              <li v-for="item in copy.responsibilities" :key="item">{{ item }}</li>
            </ul>
            <div class="mentor-commitment">
              <h3>{{ copy.commitmentTitle }}</h3>
              <p>{{ copy.commitment }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mentor-join-process">
      <div class="page-shell">
        <div class="section-card">
          <SectionHeading v-bind="copy.processHeading" />
          <div class="mentor-step-grid">
            <article v-for="step in copy.steps" :key="step.number" class="step">
              <div class="step-number">{{ step.number }}</div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="mentee-links-section">
      <div class="page-shell">
        <div class="section-card">
          <SectionHeading v-bind="copy.linksHeading" />
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
