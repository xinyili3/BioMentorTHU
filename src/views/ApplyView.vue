<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import PageIntro from '../components/PageIntro.vue'
import { localized } from '../composables/useLanguage'

const forms = localized({ en: [
  {
    id: 'mentee',
    title: 'Mentee Application Form',
    description: 'For Tsinghua students seeking mentoring and application guidance.',
    buttonLabel: 'Download Mentee Form',
    buttonClass: 'button-primary',
    downloadUrl: `${import.meta.env.BASE_URL}downloads/BioMentor%20THU_2026%20Mentee%20Application%20Form.pdf`,
    filename: 'BioMentor THU_2026 Mentee Application Form.pdf',
  },
], zh: [
  { id: 'mentee', title: '学生申请表', description: '面向希望获得导师指导和申请建议的清华学生。', buttonLabel: '下载学生申请表', buttonClass: 'button-primary', downloadUrl: `${import.meta.env.BASE_URL}downloads/BioMentor%20THU_2026%20Mentee%20Application%20Form.pdf`, filename: 'BioMentor THU_2026 Mentee Application Form.pdf' },
] })

const mentorContact = localized({
  en: { title: 'Interested in Becoming a Mentor?', description: 'Alumni and researchers who would like to support Tsinghua students can contact the program team directly by email.', buttonLabel: 'Email the Program Team' },
  zh: { title: '有意成为导师？', description: '希望志愿支持清华学生的校友与科研工作者，可以直接通过电子邮件联系项目团队。', buttonLabel: '邮件联系项目团队' },
})

const disclaimerItems = localized({ en: [
  'I understand that this is a volunteer-led mentoring program and that submitting an application does not guarantee participation or a mentor match.',
  'I confirm that the information I provide in the application is accurate and represents my own experience and work.',
  'I understand that mentors provide guidance and feedback, but will not write or complete application materials on my behalf.',
  'I agree to communicate respectfully, protect confidential information, and respect the time and boundaries of other participants.',
  'I consent to the information in this form being used to review my application and administer the BioMentoring Program.',
], zh: [
  '我理解本项目由志愿者组织，提交申请并不保证一定能够参与项目或匹配到导师。',
  '我确认申请中提供的信息准确无误，并如实反映我本人的经历与工作。',
  '我理解导师只提供指导和反馈，不会代我撰写或完成申请材料。',
  '我同意保持尊重的沟通方式，保护保密信息，并尊重其他参与者的时间与个人边界。',
  '我同意本表中的信息用于审核申请及 BioMentor THU 项目的组织与管理。',
] })

const copy = localized({
  en: { eyebrow: '2026 Pilot Applications', title: 'Apply for the 2026 pilot.', highlight: 'Due to time and resource constraints, the 2026 pilot supports overseas PhD applications only, with a primary focus on programs in the United States.', description: 'Mentees can download the application form below, and prospective mentors can contact the program team directly by email.', how: 'Mentee Application', twoSteps: 'Complete your mentee application in two steps.', stepOne: 'Download and complete the form', stepOneText: 'Download the mentee application form and fill in all required information.', stepTwo: 'Submit by email', stepTwoPrefix: 'Send your completed application form to', downloads: 'Apply or Get in Touch', forms: 'Choose your next step', close: 'Close disclaimer', before: 'Before You Download', disclaimer: 'Application disclaimer', introBefore: 'Please review and confirm every statement before downloading the', introAfter: '.', cancel: 'Cancel', confirm: 'Confirm and Download' },
  zh: { eyebrow: '2026 试点申请', title: '申请加入 2026 试点项目。', highlight: '由于时间和资源有限，2026 试点仅支持海外博士项目申请，并以美国博士项目为主。', description: '学生可在下方下载申请表；有意加入的导师可直接通过电子邮件联系项目团队。', how: '学生申请', twoSteps: '分两步完成学生申请。', stepOne: '下载并填写申请表', stepOneText: '下载学生申请表，并填写全部必填信息。', stepTwo: '通过电子邮件提交', stepTwoPrefix: '请将填写完整的申请表发送至', downloads: '申请或联系我们', forms: '选择你的下一步', close: '关闭申请说明', before: '下载之前', disclaimer: '申请须知', introBefore: '下载', introAfter: '前，请阅读并确认以下全部声明。', cancel: '取消', confirm: '确认并下载' },
})

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
          <span class="application-step-number">01</span>
          <div>
            <h3>{{ copy.stepOne }}</h3>
            <p>{{ copy.stepOneText }}</p>
          </div>
        </li>
        <li class="application-step">
          <span class="application-step-number">02</span>
          <div>
            <h3>{{ copy.stepTwo }}</h3>
            <p>
              {{ copy.stepTwoPrefix }}
              <a class="email-link" href="mailto:biomentorthu@gmail.com">biomentorthu@gmail.com</a>.
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
        <h2 id="downloads-title">{{ copy.forms }}</h2>
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
