<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import PageIntro from '../components/PageIntro.vue'

const downloadUrl = `${import.meta.env.BASE_URL}downloads/test.pdf`
const forms = [
  {
    id: 'mentee',
    title: 'Mentee Application Form',
    description: 'For Tsinghua students seeking mentoring and application guidance.',
    buttonLabel: 'Download Mentee Form',
    buttonClass: 'button-primary',
    filename: 'mentee-application-form.pdf',
  },
  {
    id: 'mentor',
    title: 'Mentor Application Form',
    description: 'For alumni and researchers volunteering to support Tsinghua students.',
    buttonLabel: 'Download Mentor Form',
    buttonClass: 'button-secondary',
    filename: 'mentor-application-form.pdf',
  },
]

const disclaimerItems = [
  'I understand that this is a volunteer-led mentoring program and that submitting an application does not guarantee participation or a mentor match.',
  'I confirm that the information I provide in the application is accurate and represents my own experience and work.',
  'I understand that mentors provide guidance and feedback, but will not write or complete application materials on my behalf.',
  'I agree to communicate respectfully, protect confidential information, and respect the time and boundaries of other participants.',
  'I consent to the information in this form being used to review my application and administer the BioMentoring Program.',
]

const selectedForm = ref(null)
const acceptedItems = ref([])
const modalCloseButton = ref(null)
const allAccepted = computed(() => acceptedItems.value.length === disclaimerItems.length)

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
  link.href = downloadUrl
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

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="route-view">
    <PageIntro
      eyebrow="Applications"
      title="Download an application form."
      description="Choose the form for your role and download the PDF to begin your application."
    />
    <section class="application-process" aria-labelledby="application-process-title">
    <div class="page-shell">
      <div class="section-heading application-process-heading">
        <span class="eyebrow">How to Apply</span>
        <h2 id="application-process-title">Complete your application in two steps.</h2>
      </div>
      <ol class="application-steps">
        <li class="application-step">
          <span class="application-step-number">01</span>
          <div>
            <h3>Download and complete the form</h3>
            <p>Choose the application form for your role and fill in all required information.</p>
          </div>
        </li>
        <li class="application-step">
          <span class="application-step-number">02</span>
          <div>
            <h3>Submit by email</h3>
            <p>
              Send your completed application form to
              <a class="email-link" href="mailto:xxxx@email.com">xxxx@email.com</a>.
            </p>
          </div>
        </li>
      </ol>
    </div>
    </section>
    <section class="downloads-section" aria-labelledby="downloads-title">
    <div class="page-shell">
      <div class="section-heading downloads-heading">
        <span class="eyebrow">Downloads</span>
        <h2 id="downloads-title">Application forms</h2>
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
          aria-label="Close disclaimer"
          title="Close"
          @click="closeDisclaimer"
        >
          ×
        </button>
        <span class="eyebrow">Before You Download</span>
        <h2 id="disclaimer-title">Application disclaimer</h2>
        <p id="disclaimer-description" class="disclaimer-intro">
          Please review and confirm every statement before downloading the
          {{ selectedForm.title }}.
        </p>
        <div class="disclaimer-items">
          <label v-for="(item, index) in disclaimerItems" :key="item" class="disclaimer-item">
            <input v-model="acceptedItems" type="checkbox" :value="index" />
            <span>{{ item }}</span>
          </label>
        </div>
        <div class="disclaimer-actions">
          <button class="button button-secondary" type="button" @click="closeDisclaimer">
            Cancel
          </button>
          <button
            class="button button-primary"
            type="button"
            :disabled="!allAccepted"
            @click="confirmDownload"
          >
            Confirm and Download
          </button>
        </div>
      </section>
    </div>
    </Teleport>
  </div>
</template>
