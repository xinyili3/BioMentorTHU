<script setup>
import PageIntro from '../components/PageIntro.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { localized } from '../composables/useLanguage'

const copy = localized({
  en: {
    intro: { eyebrow: 'For Mentors', title: 'Share what you have learned—and grow as a mentor.', description: 'Help Tsinghua students coming after you while building meaningful connections and hands-on mentoring experience.' },
    fitHeading: { eyebrow: 'Who & How', title: 'Contribute where your experience is most useful.' },
    eligibilityLabel: 'Who can mentor?',
    eligibility: 'Current PhD students, recent PhD graduates, and postdoctoral researchers with a Tsinghua background in the life, biomedical, and related sciences.',
    contributions: [
      { number: '01', title: 'Application planning', description: 'Help a student think through research fit, schools, and programs.' },
      { number: '02', title: 'Document feedback', description: 'Review a CV, statement of purpose, or personal statement.' },
      { number: '03', title: 'Interview practice', description: 'Conduct a mock interview and offer focused feedback.' },
      { number: '04', title: 'PhD perspective', description: 'Share honest experience of research training and doctoral life.' },
    ],
    benefitsHeading: { eyebrow: 'What You Gain', title: 'Give back, connect, and grow.' },
    benefits: [
      { number: '01', title: 'Share your experience', description: 'Turn lessons from applications, research, and PhD life into practical guidance for someone facing those decisions now.' },
      { number: '02', title: 'Support the next generation', description: 'Help younger Tsinghua students approach graduate study with better information and greater confidence.' },
      { number: '03', title: 'Build meaningful connections', description: 'Meet students, alumni, and researchers across the wider Tsinghua life-sciences community.' },
      { number: '04', title: 'Develop mentoring experience', description: 'Practice giving feedback, listening carefully, setting expectations, and guiding productive conversations.' },
    ],
    expectationsHeading: { eyebrow: 'Clear Expectations', title: 'Guide thoughtfully. Keep clear boundaries.' },
    responsibilities: [
      'Share experience without presenting it as the only correct answer.',
      'Give feedback without writing application materials for the mentee.',
      'Communicate your availability and respond within agreed timelines.',
      'Protect personal information and application materials.',
    ],
    commitmentTitle: 'A flexible commitment',
    commitment: 'Support one student, one application component, or one mock interview. We match requests to your expertise and stated availability.',
    processHeading: { eyebrow: 'How to Join', title: 'Three simple steps.' },
    steps: [
      { number: '01', title: 'Contact us', description: 'Email the program team from the 2026 pilot page.' },
      { number: '02', title: 'Share your scope', description: 'Tell us your expertise, preferred support areas, and availability.' },
      { number: '03', title: 'Get matched', description: 'We contact you when a mentee request fits what you can offer.' },
    ],
    linksHeading: { eyebrow: 'Useful Links', title: 'Learn more or get involved.' },
    links: [
      { title: 'Meet Our Team', description: 'See the mentors and people running BioMentor THU.', label: 'View the Team', to: '/mentors' },
      { title: 'Read the FAQ', description: 'Review matching, time commitment, and confidentiality details.', label: 'View FAQ', to: '/faq' },
      { title: 'Become a Mentor', description: 'Contact the program team directly through the 2026 pilot page.', label: 'Contact Us', to: '/apply', primary: true },
    ],
  },
  zh: {
    intro: { eyebrow: '导师专区', title: '分享一路所学，也在指导中继续成长。', description: '帮助正在准备研究生申请的学弟学妹，同时建立有意义的连接，积累真实的导师指导经验。' },
    fitHeading: { eyebrow: '参与对象与方式', title: '在你的经验最有价值之处提供帮助。' },
    eligibilityLabel: '谁可以成为导师？',
    eligibility: '具有清华背景，来自生命科学、生物医学及相关领域的在读博士生、近期博士毕业生和博士后研究人员。',
    contributions: [
      { number: '01', title: '申请规划', description: '帮助学生思考研究匹配度、学校与项目选择。' },
      { number: '02', title: '材料反馈', description: '反馈简历、学术目的陈述或个人陈述。' },
      { number: '03', title: '面试练习', description: '开展模拟面试，并给出有针对性的建议。' },
      { number: '04', title: '博士视角', description: '坦诚分享科研训练与博士生活的亲身经验。' },
    ],
    benefitsHeading: { eyebrow: '你可以获得什么', title: '回馈、连接，也继续成长。' },
    benefits: [
      { number: '01', title: '分享亲身经验', description: '把申请、科研与博士生活中的经验，转化为对正在面对这些选择的学生有用的建议。' },
      { number: '02', title: '帮助学弟学妹', description: '帮助年轻的清华学生获得更充分的信息，更有信心地走向研究生阶段。' },
      { number: '03', title: '建立有意义的连接', description: '认识更广泛的清华生命科学学生、校友与科研人员。' },
      { number: '04', title: '积累导师指导经验', description: '练习给予反馈、认真倾听、管理预期，并引导有成效的交流。' },
    ],
    expectationsHeading: { eyebrow: '明确预期', title: '用心指导，守好边界。' },
    responsibilities: [
      '分享个人经验，但不把它当作唯一正确答案。',
      '提供反馈，但不代替学生撰写申请材料。',
      '明确自己的可用时间，并按双方约定及时沟通。',
      '保护学生的个人信息与申请材料。',
    ],
    commitmentTitle: '灵活的时间投入',
    commitment: '你可以指导一名学生、反馈一项申请材料，或开展一次模拟面试。我们只会匹配符合你专长和可用时间的需求。',
    processHeading: { eyebrow: '如何加入', title: '只需三个步骤。' },
    steps: [
      { number: '01', title: '联系我们', description: '从 2026 试点页面向项目团队发送邮件。' },
      { number: '02', title: '说明参与范围', description: '告诉我们你的专长、希望支持的领域与可用时间。' },
      { number: '03', title: '接受匹配', description: '当学生需求与你可以提供的支持相符时，我们会联系你。' },
    ],
    linksHeading: { eyebrow: '实用入口', title: '进一步了解或参与项目。' },
    links: [
      { title: '认识我们的团队', description: '查看导师与 BioMentor THU 运营团队。', label: '查看团队', to: '/mentors' },
      { title: '阅读常见问题', description: '了解匹配、时间投入与保密要求。', label: '查看 FAQ', to: '/faq' },
      { title: '成为导师', description: '通过 2026 试点页面直接联系项目团队。', label: '联系我们', to: '/apply', primary: true },
    ],
  },
})
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
