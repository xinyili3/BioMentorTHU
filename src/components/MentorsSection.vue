<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import SectionHeading from './SectionHeading.vue'
import { mentors } from '../content/siteContent'

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
        <div class="mentor-grid">
          <article v-for="mentor in mentors.people" :key="mentor.id" class="mentor-card">
            <h3>{{ mentor.name }}</h3>
            <p class="mentor-role">{{ mentor.role }}</p>
            <strong>Research Interests</strong>
            <p>{{ mentor.research }}</p>
            <strong>Mentoring Areas</strong>
            <p>{{ mentor.areas }}</p>
            <button class="button button-secondary" type="button" @click="selectedMentor = mentor">
              View Profile
            </button>
          </article>
        </div>
        <div class="hero-actions section-actions">
          <RouterLink class="button button-secondary" to="/apply">Meet All Mentors</RouterLink>
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
          aria-label="Close mentor profile"
          title="Close"
          @click="closeProfile"
        >
          ×
        </button>
        <div class="mentor-modal-photo">
          <img :src="resolvePublicAsset(selectedMentor.photo)" :alt="selectedMentor.photoAlt" />
        </div>
        <div class="mentor-modal-content">
          <span class="eyebrow">Mentor Profile</span>
          <h2 :id="`mentor-profile-${selectedMentor.id}`">{{ selectedMentor.name }}</h2>
          <p class="mentor-modal-role">{{ selectedMentor.role }}</p>
          <p class="mentor-modal-bio">{{ selectedMentor.bio }}</p>
          <dl class="mentor-profile-details">
            <div>
              <dt>Research Interests</dt>
              <dd>{{ selectedMentor.research }}</dd>
            </div>
            <div>
              <dt>Mentoring Areas</dt>
              <dd>{{ selectedMentor.areas }}</dd>
            </div>
            <div>
              <dt>What This Mentor Can Share</dt>
              <dd>{{ selectedMentor.experience }}</dd>
            </div>
            <div>
              <dt>Available Support</dt>
              <dd>{{ selectedMentor.availability }}</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  </Teleport>
</template>
