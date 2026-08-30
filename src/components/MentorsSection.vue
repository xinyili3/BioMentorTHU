<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import SectionHeading from './SectionHeading.vue'
import { mentors } from '../content/siteContent'
import { localized } from '../composables/useLanguage'

const copy = localized({
  en: { research: 'Research Interests', areas: 'Mentoring Areas', profile: 'View Profile', all: 'Learn About Becoming a Mentor', close: 'Close mentor profile', profileEyebrow: 'Mentor Profile', share: 'What This Mentor Can Share', support: 'Available Support' },
  zh: { research: '研究兴趣', areas: '指导领域', profile: '查看简介', all: '了解如何成为导师', close: '关闭导师简介', profileEyebrow: '导师简介', share: '这位导师可以分享', support: '可提供的支持' },
})

const selectedMentor = ref(null)
const closeButton = ref(null)
const resolvePublicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const closeProfile = () => {
  selectedMentor.value = null
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') closeProfile()
}

watch(selectedMentor, async (mentor) => {
  document.body.style.overflow = mentor ? 'hidden' : ''
  if (mentor) {
    document.addEventListener('keydown', handleKeydown)
    await nextTick()
    closeButton.value?.focus()
  } else {
    document.removeEventListener('keydown', handleKeydown)
  }
})

watch(mentors, (content) => {
  if (selectedMentor.value) {
    selectedMentor.value = content.people.find(({ id }) => id === selectedMentor.value.id) ?? null
  }
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <section id="mentors">
    <div class="page-shell">
      <div class="section-card">
        <SectionHeading v-bind="mentors.heading" />
        <h3 class="people-group-title">{{ mentors.mentorLabel }}</h3>
        <div class="mentor-grid">
          <article v-for="mentor in mentors.people" :key="mentor.id" class="mentor-card">
            <h3>{{ mentor.name }}</h3>
            <p class="mentor-role">{{ mentor.role }}</p>
            <strong>{{ copy.research }}</strong>
            <p>{{ mentor.research }}</p>
            <strong>{{ copy.areas }}</strong>
            <p>{{ mentor.areas }}</p>
            <button class="button button-secondary" type="button" @click="selectedMentor = mentor">
              {{ copy.profile }}
            </button>
          </article>
        </div>
        <div class="hero-actions section-actions">
          <RouterLink class="button button-secondary" to="/for-mentors">{{ copy.all }}</RouterLink>
        </div>
        <div class="operator-section">
          <SectionHeading v-bind="mentors.operatorHeading" />
          <div class="operator-grid">
            <article v-for="operator in mentors.operators" :key="operator.id" class="operator-card">
              <div class="operator-monogram" aria-hidden="true">{{ operator.name.charAt(0) }}</div>
              <div>
                <h3>{{ operator.name }}</h3>
                <p class="operator-role">{{ operator.role }}</p>
                <p>{{ operator.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Teleport to="body">
    <div
      v-if="selectedMentor"
      class="mentor-modal-backdrop"
      role="presentation"
      @click.self="closeProfile"
    >
      <section
        class="mentor-modal"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`mentor-profile-${selectedMentor.id}`"
      >
        <button
          ref="closeButton"
          class="modal-close"
          type="button"
          :aria-label="copy.close"
          :title="copy.close"
          @click="closeProfile"
        >
          ×
        </button>
        <div class="mentor-modal-photo">
          <img :src="resolvePublicAsset(selectedMentor.photo)" :alt="selectedMentor.photoAlt" />
        </div>
        <div class="mentor-modal-content">
          <span class="eyebrow">{{ copy.profileEyebrow }}</span>
          <h2 :id="`mentor-profile-${selectedMentor.id}`">{{ selectedMentor.name }}</h2>
          <p class="mentor-modal-role">{{ selectedMentor.role }}</p>
          <p class="mentor-modal-bio">{{ selectedMentor.bio }}</p>
          <dl class="mentor-profile-details">
            <div>
              <dt>{{ copy.research }}</dt>
              <dd>{{ selectedMentor.research }}</dd>
            </div>
            <div>
              <dt>{{ copy.areas }}</dt>
              <dd>{{ selectedMentor.areas }}</dd>
            </div>
            <div>
              <dt>{{ copy.share }}</dt>
              <dd>{{ selectedMentor.experience }}</dd>
            </div>
            <div>
              <dt>{{ copy.support }}</dt>
              <dd>{{ selectedMentor.availability }}</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  </Teleport>
</template>
