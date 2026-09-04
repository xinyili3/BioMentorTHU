<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import PageIntro from '../components/PageIntro.vue'
import { applyPageContent as copy, siteIdentity } from '../content/pageContent'

const forms = computed(() => copy.value.forms.map((form) => ({
  ...form,
  downloadUrl: `${import.meta.env.BASE_URL}downloads/BioMentor%20THU_2026%20Mentee%20Application%20Form.pdf`,
})))
const mentorContact = computed(() => copy.value.mentorContact)
const disclaimerItems = computed(() => copy.value.disclaimerItems)

const selectedForm = ref(null)
const acceptedItems = ref([])
const modalCloseButton = ref(null)
const allAccepted = computed(() => acceptedItems.value.length === disclaimerItems.value.length)

const openDisclaimer = async (form) => {
  selectedForm.value = form
  acceptedItems.value = []
  await nextTick()
  modalCloseButton.value?.focus()
}

const closeDisclaimer = () => {
  selectedForm.value = null
  acceptedItems.value = []
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') closeDisclaimer()
}

const confirmDownload = () => {
  if (!selectedForm.value || !allAccepted.value) return
  const link = document.createElement('a')
  link.href = selectedForm.value.downloadUrl ?? `${import.meta.env.BASE_URL}downloads/test.pdf`
  link.download = selectedForm.value.filename
  document.body.appendChild(link)
  link.click()
  link.remove()
  closeDisclaimer()
}

watch(selectedForm, (form) => {
  document.body.style.overflow = form ? 'hidden' : ''
  if (form) document.addEventListener('keydown', handleKeydown)
  else document.removeEventListener('keydown', handleKeydown)
})

watch(forms, (items) => {
  if (selectedForm.value) {
    selectedForm.value = items.find(({ id }) => id === selectedForm.value.id) ?? null
    acceptedItems.value = []
  }
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="route-view">
    <PageIntro
      :eyebrow="copy.eyebrow"
      :title="copy.title"
      :description="copy.description"
      :highlight="copy.highlight"
    />
    <section class="application-process" aria-labelledby="application-process-title">
    <div class="page-shell">
      <div class="section-heading application-process-heading">
        <span class="eyebrow">{{ copy.how }}</span>
        <h2 id="application-process-title">{{ copy.twoSteps }}</h2>
      </div>
      <ol class="application-steps">
        <li class="application-step">
          <span class="application-step-number">{{ copy.stepOneNumber }}</span>
          <div>
            <h3>{{ copy.stepOne }}</h3>
            <p>{{ copy.stepOneText }}</p>
          </div>
        </li>
        <li class="application-step">
          <span class="application-step-number">{{ copy.stepTwoNumber }}</span>
          <div>
            <h3>{{ copy.stepTwo }}</h3>
            <p>
              {{ copy.stepTwoPrefix }}
              <a class="email-link" :href="`mailto:${siteIdentity.email}`">{{ siteIdentity.email }}</a>{{ copy.sentenceEnd }}
            </p>
          </div>
        </li>
      </ol>
    </div>
    </section>
    <section class="downloads-section" aria-labelledby="downloads-title">
    <div class="page-shell">
      <div class="section-heading downloads-heading">
        <span class="eyebrow">{{ copy.downloads }}</span>
        <h2 id="downloads-title">{{ copy.formsHeading }}</h2>
      </div>
      <div class="application-downloads">
        <article v-for="form in forms" :key="form.id" class="download-card">
          <div>
            <h3>{{ form.title }}</h3>
            <p>{{ form.description }}</p>
          </div>
          <button
            class="button"
            :class="form.buttonClass"
            type="button"
            @click="openDisclaimer(form)"
          >
            {{ form.buttonLabel }}
          </button>
        </article>
        <article class="download-card mentor-contact-card">
          <div>
            <h3>{{ mentorContact.title }}</h3>
            <p>{{ mentorContact.description }}</p>
          </div>
          <a
            class="button button-secondary"
            href="mailto:biomentorthu@gmail.com?subject=BioMentor%20THU%20-%20Prospective%20Mentor"
          >
            {{ mentorContact.buttonLabel }}
          </a>
        </article>
      </div>
    </div>
    </section>

    <Teleport to="body">
    <div
      v-if="selectedForm"
      class="disclaimer-modal-backdrop"
      role="presentation"
      @click.self="closeDisclaimer"
    >
      <section
        class="disclaimer-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
        aria-describedby="disclaimer-description"
      >
        <button
          ref="modalCloseButton"
          class="modal-close"
          type="button"
          :aria-label="copy.close"
          :title="copy.close"
          @click="closeDisclaimer"
        >
          ×
        </button>
        <span class="eyebrow">{{ copy.before }}</span>
        <h2 id="disclaimer-title">{{ copy.disclaimer }}</h2>
        <p id="disclaimer-description" class="disclaimer-intro">
          {{ copy.introBefore }} {{ selectedForm.title }}{{ copy.introAfter }}
        </p>
        <div class="disclaimer-items">
          <label v-for="(item, index) in disclaimerItems" :key="item" class="disclaimer-item">
            <input v-model="acceptedItems" type="checkbox" :value="index" />
            <span>{{ item }}</span>
          </label>
        </div>
        <div class="disclaimer-actions">
          <button class="button button-secondary" type="button" @click="closeDisclaimer">
            {{ copy.cancel }}
          </button>
          <button
            class="button button-primary"
            type="button"
            :disabled="!allAccepted"
            @click="confirmDownload"
          >
            {{ copy.confirm }}
          </button>
        </div>
      </section>
    </div>
    </Teleport>
  </div>
</template>
