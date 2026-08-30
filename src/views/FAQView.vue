<script setup>
import PageIntro from '../components/PageIntro.vue'
import { localized } from '../composables/useLanguage'

const copy = localized({
  en: {
    intro: { eyebrow: 'Frequently Asked Questions', title: 'Questions are part of the process.', description: 'Find practical information about eligibility, matching, mentoring boundaries, applications, and the 2026 pilot.' },
    groups: [
      {
        title: 'Participation & Matching',
        items: [
          { question: 'Who can apply as a mentee?', answer: 'Due to time and resource constraints, the 2026 pilot is limited to Tsinghua students in the life, biomedical, and related sciences who are applying to overseas PhD programs during the current application cycle, primarily programs in the United States.' },
          { question: 'Who can become a mentor?', answer: 'We welcome current PhD students, recent PhD graduates, and postdoctoral researchers with a Tsinghua background in the life, biomedical, and related sciences.' },
          { question: 'How are mentors and mentees matched?', answer: 'Matches are based primarily on research interests, the kind of support requested, and availability. We also consider stated preferences whenever possible.' },
          { question: 'Does applying guarantee a mentor match?', answer: 'No. Matching depends on mentor availability, expertise, and fit. The program team will communicate clearly about the outcome of each application.' },
          { question: 'Is there a fee to participate?', answer: 'No. BioMentor THU is a volunteer-led initiative, and there is no participation fee for mentors or mentees.' },
        ],
      },
      {
        title: 'Mentoring & Applications',
        items: [
          { question: 'What kind of support can a mentee receive?', answer: 'Support may include PhD planning, research direction, school and program selection, CV or statement feedback, interview preparation, and honest conversations about research training.' },
          { question: 'Will a mentor edit or write application materials for me?', answer: 'Mentors may offer feedback and help you strengthen your thinking and communication, but they will not write application materials on your behalf. All submitted work must remain your own.' },
          { question: 'How much time does mentoring require?', answer: 'The format is flexible. A mentor may support one student, one application component, or one mock interview depending on expertise and availability.' },
          { question: 'Will my application materials remain confidential?', answer: 'Yes. Mentors and mentees are expected to protect personal information and application materials shared through the program.' },
          { question: 'How do prospective mentors get in touch?', answer: 'Visit the 2026 pilot application page and use the mentor contact button to email the program team directly.' },
        ],
      },
    ],
    contactEyebrow: 'Still Have a Question?',
    contactTitle: 'We are happy to help.',
    contactText: 'Contact the BioMentor THU program team directly by email.',
    contactButton: 'Email the Program Team',
  },
  zh: {
    intro: { eyebrow: '常见问题', title: '提出问题，也是前行的一部分。', description: '了解参与资格、导师匹配、指导边界、申请方式和 2026 试点项目的实用信息。' },
    groups: [
      {
        title: '参与与匹配',
        items: [
          { question: '哪些学生可以申请？', answer: '由于时间和资源有限，2026 试点仅面向生命科学、生物医学及相关领域，正在本申请季申请海外博士项目的清华学生，并以美国博士项目为主。' },
          { question: '哪些人可以成为导师？', answer: '我们欢迎具有清华背景、来自生命科学、生物医学及相关领域的在读博士生、近期博士毕业生和博士后研究人员。' },
          { question: '导师与学生如何匹配？', answer: '我们主要根据研究兴趣、希望获得的支持类型和双方时间进行匹配，并在条件允许时考虑个人偏好。' },
          { question: '提交申请后一定能匹配到导师吗？', answer: '不能保证。匹配结果取决于导师的时间、专业经验和双方适配度，项目团队会清晰告知每位申请者结果。' },
          { question: '参加项目需要付费吗？', answer: '不需要。BioMentor THU 是由志愿者发起的项目，导师和学生均无需支付参与费用。' },
        ],
      },
      {
        title: '导师指导与申请',
        items: [
          { question: '学生可以获得哪些支持？', answer: '支持内容可能包括博士规划、研究方向、学校和项目选择、简历或陈述反馈、面试准备，以及有关科研训练的坦诚交流。' },
          { question: '导师会帮我修改或撰写申请材料吗？', answer: '导师可以提供反馈，帮助你完善思考与表达，但不会代写申请材料。所有提交的内容都必须是学生本人的工作。' },
          { question: '导师指导需要投入多少时间？', answer: '参与方式灵活。导师可以根据专长与时间，指导一名学生、反馈一项申请材料，或开展一次模拟面试。' },
          { question: '我的申请材料会被保密吗？', answer: '会。导师和学生都应保护项目交流中分享的个人信息与申请材料。' },
          { question: '有意成为导师的人如何联系项目？', answer: '请前往 2026 试点申请页面，点击导师联系按钮，直接通过电子邮件联系项目团队。' },
        ],
      },
    ],
    contactEyebrow: '还有其他问题？',
    contactTitle: '欢迎随时联系我们。',
    contactText: '你可以直接通过电子邮件联系 BioMentor THU 项目团队。',
    contactButton: '邮件联系项目团队',
  },
})
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
