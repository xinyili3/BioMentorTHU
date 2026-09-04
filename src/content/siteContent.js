import { computed } from 'vue'
import { locale } from '../composables/useLanguage'
import { mentorProfiles } from './mentorProfiles'

const en = {
  navigation: [
    { label: 'Program Overview', to: '/' }, { label: 'For Mentees', to: '/mentees' },
    { label: 'For Mentors', to: '/for-mentors' }, { label: 'Meet Our Team', to: '/mentors' },
    { label: 'FAQ', to: '/faq' }, { label: 'Apply for the 2026 Pilot', to: '/apply' },
  ],
  mission: {
    heading: { eyebrow: 'Our Mission', title: 'Mentorship should not depend on who you happen to know.', description: 'Preparing for a PhD often involves questions that are difficult to answer from websites or application guides alone. This program brings students and alumni together through structured, personalized mentorship so that the path toward advanced research training feels clearer and more supportive.' },
    questions: ['What kind of research do I want to pursue?', 'How should I choose programs?', 'How do I communicate my research experience clearly?', 'What should I expect from a PhD interview, or from PhD life itself?'],
    note: 'Many Tsinghua alumni have recently navigated these same questions. The BioMentoring Program helps turn that lived experience into a community resource students can actually access.',
  },
  support: {
    heading: { eyebrow: 'Resources & Support', title: 'Practical help where it matters most.' },
    items: [
      { title: 'Research Direction & Program Fit', description: 'Clarify your interests and compare programs, labs, and research environments.', details: ['Research direction', 'School and program selection', 'Evaluating research fit'] },
      { title: 'CV & Application Statements', description: 'Get focused feedback on how clearly your experience, motivation, and goals come through.', details: ['CV review', 'Statement of purpose', 'Personal statement'] },
      { title: 'Interview Preparation', description: 'Practice explaining your research and responding thoughtfully to common interview questions.', details: ['Mock interviews', 'Research presentation', 'Questions for programs'] },
      { title: 'PhD Life & Decision-Making', description: 'Have honest conversations about doctoral training, research culture, and possible career paths.', details: ['PhD expectations', 'Research life', 'Career perspectives'] },
    ],
  },
  menteeAdvantages: {
    heading: { eyebrow: 'Why BioMentor THU', title: 'Support grounded in experience.' },
    pilotLabel: '2026 Pilot Focus',
    pilotText: 'Due to time and resource constraints, the 2026 pilot is limited to Tsinghua students in the life, biomedical, and related sciences applying to overseas PhD programs this cycle, primarily in the United States.',
    items: [
      { number: '01', title: 'Tsinghua alumni perspective', description: 'Learn from people who understand both your starting point and the path into PhD training.' },
      { number: '02', title: 'Matching based on your needs', description: 'Research interests, requested support, and availability guide each mentor match.' },
      { number: '03', title: 'The right mentor for each task', description: 'Different mentors may support program choice, written materials, or interviews based on their expertise.' },
      { number: '04', title: 'Honest, human guidance', description: 'Get practical perspective without one-size-fits-all answers or pressure to follow a single path.' },
    ],
  },
  pilot: {
    heading: { eyebrow: '2026 Pilot Cohort', title: 'Starting small. Building thoughtfully.', description: 'The inaugural cohort supports Tsinghua students applying to overseas PhD programs during the current application cycle, with a primary focus on the United States.' },
    focusDescription: 'Because the program is launching during application season, this pilot concentrates on the areas where timely feedback can make the greatest difference.',
    focusAreas: ['School / Program Selection', 'CV Review', 'Statement of Purpose', 'Personal Statement', 'Interview Preparation'],
    reason: 'A focused first cohort allows the team to provide useful support right away while learning how to build a stronger and more sustainable mentoring program for future years.',
  },
  process: {
    heading: { eyebrow: 'How It Works', title: 'Four steps from application to action.' },
    steps: [
      { number: '01', title: 'Apply', description: 'Tell us your interests, plans, support needs, and availability.' },
      { number: '02', title: 'Match', description: 'We identify mentors whose experience and availability fit your request.' },
      { number: '03', title: 'Connect', description: 'Meet online for focused conversation, feedback, or interview practice.' },
      { number: '04', title: 'Act', description: 'Use the feedback to strengthen your materials and make your own decisions.' },
    ],
  },
  mentorCall: {
    heading: { eyebrow: 'Ways to Contribute', title: 'Mentor in the way that fits you.', description: 'We welcome current PhD students, recent PhD graduates, and postdoctoral researchers with a Tsinghua background in the life, biomedical, and related sciences. Mentoring is entirely volunteer-based and designed to be flexible.' },
    contributions: ['Mentoring one student through part of the application cycle', 'Providing feedback on a specific application component', 'Conducting a mock interview', 'Supporting the program in more than one way'],
    flexibility: "There is no expectation that every mentor supports every part of an application. The program is built to respect mentors' expertise, availability, and boundaries.",
  },
  mentors: {
    heading: { eyebrow: 'Our Community', title: 'Experience, guidance, and care from across our community.' },
    mentorLabel: 'Founding Mentors',
    operatorHeading: {
  eyebrow: 'Program Team',
  title: 'Operations Team',
  description:
    'We work together to develop and operate BioMentor THU, turning shared ideas into action through close collaboration.'
},
  
operators: [
  {
    id: 'founding-member-1',
    name: 'Sihui Mao',
    role: 'Founder'
  },
  {
    id: 'founding-member-2',
    name: 'Xinyi Li',
    role: 'Founding Member'
  },
  {
    id: 'founding-member-3',
    name: 'Tianhua Zhao',
    role: 'Founding Member'
  },
  {
    id: 'founding-member-4',
    name: 'Jiayi He',
    role: 'Founding Member'
  }
],
  },
  principles: {
    heading: { eyebrow: 'Our Mentoring Principles', title: "Guide, don't write." },
    items: [
      { title: "Guide, don't write.", description: "Mentors provide feedback, perspective, and guidance. Application materials remain the student's own work." },
      { title: 'Share experience, not universal answers.', description: 'There is rarely one correct path to a PhD. Mentors are encouraged to distinguish personal experience from general advice.' },
      { title: 'Respect different paths.', description: 'Students may have different research interests, backgrounds, priorities, and definitions of success.' },
      { title: 'Respect time and boundaries.', description: 'Mentoring is voluntary. Clear, thoughtful, and professional communication is expected from both mentors and mentees.' },
      { title: 'Maintain confidentiality.', description: 'Application materials and personal information shared through mentoring should remain confidential.' },
    ],
  },
  menteeExpectations: {
    heading: { eyebrow: 'What to Expect', title: 'What you can expect from mentoring.' },
    items: [
      { title: 'Guidance, not ghostwriting.', description: 'Mentors help you think, revise, and make informed decisions. Your ideas and application materials remain your own.' },
      { title: 'Respect for your path.', description: 'Mentors share perspective without assuming there is only one correct route to research training or success.' },
      { title: 'A respectful, confidential space.', description: 'Your personal information and application materials are treated with care, with clear respect for everyone’s time and boundaries.' },
    ],
  },
  join: {
    heading: { eyebrow: 'Join the Community', title: 'One conversation can make the path a little clearer.', description: 'Whether you are preparing for the next stage of your scientific training or hoping to share what you have learned along the way, this program is designed to make those connections possible.' },
    options: [
      { title: 'Apply as a Mentee', description: 'For students seeking application guidance, perspective on research training, and more clarity about the path ahead.', label: 'Open Mentee Application', href: '#', buttonClass: 'button-primary' },
      { title: 'Become a Mentor', description: 'For alumni and researchers who want to contribute thoughtful, experience-based guidance in a flexible volunteer role.', label: 'Email the Program Team', href: 'mailto:biomentorthu@gmail.com?subject=BioMentor%20THU%20-%20Prospective%20Mentor', buttonClass: 'button-secondary' },
    ],
  },
};

const zh = {
  navigation: [
    { label: '项目概览', to: '/' }, { label: '学生专区', to: '/mentees' },
    { label: '导师专区', to: '/for-mentors' }, { label: '认识团队', to: '/mentors' },
    { label: '常见问题', to: '/faq' }, { label: '申请 2026 试点', to: '/apply' },
  ],
  mission: {
    heading: { eyebrow: '我们的使命', title: '可靠的经验和指导，不应取决于你恰好认识谁。', description: '准备博士申请时，许多问题仅靠网站或申请指南很难找到答案。本项目通过有组织、个性化的导师交流连接清华学生与校友，让通往进阶科研训练的道路更清晰，也更有支持。' },
    questions: ['我真正想从事哪一类研究？', '我应该如何选择学校和项目？', '怎样清晰地呈现自己的科研经历？', '博士面试会问什么？博士阶段的学习与生活又是什么样？'],
    note: '许多清华校友不久前也曾面对同样的问题。BioMentor THU 希望将这些亲身经验转化为学生真正能够获得的社群资源。',
  },
  support: {
    heading: { eyebrow: '资源与支持', title: '在最关键的环节提供实际帮助。' },
    items: [
      { title: '研究方向与项目匹配', description: '梳理研究兴趣，比较不同项目、实验室与科研环境。', details: ['研究方向', '学校与项目选择', '判断研究匹配度'] },
      { title: '简历与申请陈述', description: '获得针对性反馈，更清楚地呈现经历、动机与未来目标。', details: ['简历反馈', '学术目的陈述', '个人陈述'] },
      { title: '面试准备', description: '练习介绍自己的研究，并更从容地回应常见面试问题。', details: ['模拟面试', '科研介绍', '向项目提问'] },
      { title: '博士生活与决策', description: '坦诚了解博士训练、科研文化与可能的职业道路。', details: ['博士阶段预期', '科研生活', '职业视角'] },
    ],
  },
  menteeAdvantages: {
    heading: { eyebrow: '为什么选择 BioMentor THU', title: '一手的经验和真诚的指导，不应取决于“你恰好认识谁”。' },
    pilotLabel: '2026 试点对象',
    pilotText: '由于时间和资源有限，2026 试点仅面向生命科学、生物医学及相关领域，正在本申请季申请海外博士项目的清华学生，并以美国博士项目为主。',
    items: [
      { number: '01', title: '清华校友的切身视角', description: '导师既理解你的起点，也亲身走过类似的道路。' },
      { number: '02', title: '围绕实际需求匹配', description: '每次匹配都综合考虑研究兴趣、具体支持需求与双方时间。' },
      { number: '03', title: '为不同目标寻找合适导师', description: '项目选择、申请材料和面试可分别由具备相应经验的导师支持。' },
      { number: '04', title: '真诚且温暖的指导', description: '获得最实用、可操作的建议，而不是千篇一律的答案或只能照搬的单一路径。' },
    ],
  },
  pilot: {
    heading: { eyebrow: '2026 首期试点', title: '从小规模起步，用心把它做好。', description: '首期项目面向正在本申请季申请海外博士项目的清华学生，并以美国博士项目为主。' },
    focusDescription: '由于项目在申请季期间启动，本期试点将重点放在及时反馈最能产生帮助的环节。',
    focusAreas: ['学校与项目选择', '简历修改', '学术目的陈述', '个人陈述', '面试准备'],
    reason: '聚焦首期规模，既能让团队立即提供切实支持，也能从实践中学习，为未来建立更完善、更可持续的导师项目。',
  },
  process: {
    heading: { eyebrow: '参与流程', title: '从申请到行动，只需四步。' },
    steps: [
      { number: '01', title: '提交申请', description: '告诉我们你的兴趣、计划、支持需求与可用时间。' },
      { number: '02', title: '导师匹配', description: '我们寻找经验和时间与需求相符的导师。' },
      { number: '03', title: '建立联系', description: '在线进行有重点的交流、材料反馈或面试练习。' },
      { number: '04', title: '付诸行动', description: '运用反馈完善材料，并做出属于自己的决定。' },
    ],
  },
  mentorCall: {
    heading: { eyebrow: '参与方式', title: '选择适合你的方式参与指导。', description: '我们欢迎具有清华背景、来自生命科学、生物医学及相关领域的在读博士生、近期博士毕业生和博士后研究人员加入。导师工作完全基于志愿参与，并可灵活安排。' },
    contributions: ['在申请季的某一阶段指导一名学生', '针对某一项申请材料提供反馈', '开展模拟面试', '以多种方式支持本项目'],
    flexibility: '我们不要求每位导师覆盖申请的所有环节。项目充分尊重导师的专业经验、时间安排与个人边界。',
  },
  mentors: {
    heading: { eyebrow: '我们的社群', title: '汇聚社群中的经验、指引与关怀。' },
    mentorLabel: '创始导师',
operatorHeading: {
    eyebrow: '项目团队',
    title: '运营团队',
    description: '我们共同参与 BioMentor THU 的建设与运营，通过紧密协作，将共同的想法付诸实践。'
  },

  operators: [
    {
      id: 'founding-member-1',
      name: '毛斯慧',
      role: '发起人'
    },
    {
      id: 'founding-member-2',
      name: '李昕仪',
      role: '创始成员'
    },
    {
      id: 'founding-member-3',
      name: '赵天骅',
      role: '创始成员'
    },
    {
      id: 'founding-member-4',
      name: '何嘉艺',
      role: '创始成员'
    },
  ],
},
  principles: {
    heading: { eyebrow: '导师指导原则', title: '引导，而非代写。' },
    items: [
      { title: '引导，而非代写。', description: '导师提供反馈、视角与建议；申请材料始终应由学生本人完成。' },
      { title: '分享经验，而非给出唯一答案。', description: '通往博士阶段几乎从来没有唯一正确的道路。导师应明确区分个人经历与一般性建议。' },
      { title: '尊重不同的道路。', description: '每位学生的研究兴趣、成长背景、优先事项与成功标准都可能不同。' },
      { title: '尊重时间与边界。', description: '导师指导基于志愿参与。导师与学生都应保持清晰、周到且专业的沟通。' },
      { title: '保护隐私与保密信息。', description: '指导过程中分享的申请材料与个人信息均应严格保密。' },
    ],
  },
  menteeExpectations: {
    heading: { eyebrow: '指导预期', title: '你可以期待怎样的导师指导。' },
    items: [
      { title: '提供引导，而非代写。', description: '导师帮助你梳理思路、修改材料并做出充分判断；你的想法和申请材料始终属于你自己。' },
      { title: '尊重属于你的道路。', description: '导师分享个人视角，但不会假设通往科研训练或成功只有一条正确路径。' },
      { title: '尊重且保密的交流空间。', description: '你的个人信息与申请材料会被审慎对待，双方的时间与个人边界也会得到明确尊重。' },
    ],
  },
  join: {
    heading: { eyebrow: '加入社群', title: '一次真诚的交流，就能让前路清晰一点。', description: '无论你正在为科研训练的下一阶段做准备，还是希望把一路所学分享给后来者，本项目都致力于让这样的连接成为可能。' },
    options: [
      { title: '申请成为学生', description: '面向希望获得申请指导、了解科研训练并更清晰规划未来道路的学生。', label: '打开学生申请', href: '#', buttonClass: 'button-primary' },
      { title: '申请成为导师', description: '面向希望以灵活志愿形式分享亲身经验、为学生提供指导的校友与科研工作者。', label: '邮件联系项目团队', href: 'mailto:biomentorthu@gmail.com?subject=BioMentor%20THU%20-%20Prospective%20Mentor', buttonClass: 'button-secondary' },
    ],
  },
}

const translations = { en, zh }
const section = (key) => computed(() => ({
  ...translations[locale.value][key],
  ...(key === 'mentors' ? { people: mentorProfiles.value } : {}),
}))

export const navigation = computed(() => translations[locale.value].navigation)
export const mission = section('mission')
export const support = section('support')
export const menteeAdvantages = section('menteeAdvantages')
export const pilot = section('pilot')
export const process = section('process')
export const mentorCall = section('mentorCall')
export const mentors = section('mentors')
export const principles = section('principles')
export const menteeExpectations = section('menteeExpectations')
export const join = section('join')
