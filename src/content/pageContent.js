import { localized } from '../composables/useLanguage'

export const siteIdentity = {
  brand: 'BioMentor THU',
  brandParts: ['Bio', 'Mentor', 'THU'],
  email: 'biomentorthu@gmail.com',
}

export const siteChrome = localized({
  en: {
    primaryNavigation: 'Primary navigation',
    languageSelector: 'Select language',
    languageEnglish: 'EN',
    languageChinese: '中文',
    footer: 'BioMentor THU is a volunteer-led mentoring initiative serving students in the life and biomedical sciences.',
  },
  zh: {
    primaryNavigation: '主导航',
    languageSelector: '选择语言',
    languageEnglish: 'EN',
    languageChinese: '中文',
    footer: 'BioMentor THU 是一个由志愿者发起、面向生命科学与生物医学领域学生的导师项目。',
  },
})

export const heroContent = localized({
  en: {
    eyebrow: 'Volunteer-led mentoring initiative · 2026 Pilot',
    statement: 'Experience should become a bridge, not a gate.',
    lead: 'One-to-one guidance for Tsinghua students in the life and biomedical sciences, from alumni who have recently navigated PhD training in China and abroad.',
    mapLabel: 'A shared path',
    nodes: [
      { number: '01', title: 'Experience', text: 'What mentors have learned' },
      { number: '02', title: 'Conversation', text: 'What students need now' },
      { number: '03', title: 'Direction', text: 'What becomes possible next' },
    ],
    goal: 'More transparent. More humane. More collaborative.',
    edition: 'TSINGHUA · LIFE SCIENCES · 2026',
  },
  zh: {
    eyebrow: '由清华校友志愿发起的导师项目 · 2026 试点',
    statement: '让经验成为桥梁，助推你的博士申请。。',
    lead: '我们希望通过BioMentor项目，连接正在生物医药领域探索的清华本科生，与如今正在国内外继续科研和深造的学长学姐，通过一对一的交流与陪伴，解决你前进道路上的困惑。',
    mapLabel: '让曾经走过这条路的人，陪你走向自己的远方。',
    nodes: [
      { number: '01', title: '经验', text: '导师一路所学' },
      { number: '02', title: '对话', text: '学生此刻所需' },
      { number: '03', title: '方向', text: '下一步的更多可能' },
    ],
    goal: '让通往科研与博士训练的道路，少一分信息差，多一分真诚；少一点孤独摸索，多一点彼此照亮。',
    edition: '清华 · 生命科学 · 2026',
  },
})

export const conceptContent = localized({
  en: {
    eyebrow: 'The Idea',
    watermark: 'Share',
    title: 'Knowledge travels further when it is shared.',
    description: 'BioMentor THU turns individual experience into a path others can follow—not by prescribing one answer, but by making room for better questions and more informed choices.',
    stages: [
      { number: '01', title: 'Lived experience', text: 'Mentors bring honest lessons from research, applications, and PhD life.' },
      { number: '02', title: 'Focused conversation', text: 'One-on-one dialogue turns broad uncertainty into questions that can be addressed.' },
      { number: '03', title: 'Informed direction', text: 'Mentees leave with clearer thinking, stronger materials, and decisions they own.' },
    ],
  },
  zh: {
    eyebrow: '项目理念',
    watermark: '共享',
    title: '经验在分享中走得更远。',
    description: 'BioMentor THU 将个人经历转化为后来者可以参考的道路。绝非给出唯一答案，而是为更好的问题和更充分的选择创造空间。',
    stages: [
      { number: '01', title: '亲身经验', text: '导师分享来自科研、申请与博士生活的真实经验。' },
      { number: '02', title: '专注对话', text: '一对一交流把笼统的困惑，转化为可以具体改进的方向。' },
      { number: '03', title: '自主方向', text: '学生带着更清晰的思考、更扎实的信息，以及属于自己的决定继续前行。' },
    ],
  },
})

export const overviewContent = localized({
  en: {
    missionEyebrow: 'Why BioMentor THU',
    missionTitle: 'Mentorship should not depend on who you happen to know.',
    missionText: 'We turn alumni experience into guidance that Tsinghua students can actually access.',
    items: [
      { number: '01', label: 'For Mentees', detail: 'Support, resources, and the mentoring process', to: '/mentees' },
      { number: '02', label: 'For Mentors', detail: 'Responsibilities, benefits, and ways to contribute', to: '/for-mentors' },
      { number: '03', label: 'Meet Our Team', detail: 'Founding mentors and the operations team', to: '/mentors' },
      { number: '04', label: 'FAQ', detail: 'Eligibility, matching, boundaries, and common questions', to: '/faq' },
      { number: '05', label: '2026 Pilot', detail: 'Eligibility, applications, and next steps', to: '/apply' },
    ],
  },
  zh: {
    missionEyebrow: '为什么创立 BioMentor THU',
    missionTitle: '一手的经验和真诚的指导，不应取决于“你恰好认识谁”。',
    missionText: '我们把校友的亲身经验，转化为清华学生真正能够获得的指导。',
    items: [
      { number: '01', label: '学生专区', detail: '学生支持、实用资源与指导流程', to: '/mentees' },
      { number: '02', label: '导师专区', detail: '导师责任、收获与参与方式', to: '/for-mentors' },
      { number: '03', label: '认识团队', detail: '创始导师与项目运营团队', to: '/mentors' },
      { number: '04', label: '常见问题', detail: '参与资格、导师匹配、指导内容与常见疑问', to: '/faq' },
      { number: '05', label: '2026 试点', detail: '参与资格、如何申请与下一步', to: '/apply' },
    ],
  },
})

export const menteesPageContent = localized({
  en: {
    eyebrow: 'For Mentees', title: 'Get practical guidance for your next step.', description: 'See who the 2026 pilot is for, what support is available, and how to take part.',
    linksEyebrow: 'Useful Links', linksTitle: 'Explore the program or take the next step.',
    links: [
      { title: 'Meet Our Team', description: 'Browse mentor backgrounds and areas of support.', label: 'View Mentors', to: '/mentors' },
      { title: 'Read the FAQ', description: 'Check eligibility, matching, confidentiality, and other details.', label: 'View FAQ', to: '/faq' },
      { title: 'Apply for the 2026 Pilot', description: 'Download the mentee form and review submission instructions.', label: 'Start Your Application', to: '/apply', primary: true },
    ],
  },
  zh: {
    eyebrow: '学生专区', title: '如何获取帮助', description: '快速了解 2026 的试点对象、能够获得哪些支持，以及如何参与。',
    linksEyebrow: '实用入口', linksTitle: '进一步了解项目，或开始申请。',
    links: [
      { title: '认识我们的团队', description: '查看导师背景与指导领域。', label: '查看导师', to: '/mentors' },
      { title: '阅读常见问题', description: '了解参与资格、匹配方式、保密要求等细节。', label: '查看 FAQ', to: '/faq' },
      { title: '申请 2026 试点', description: '下载学生申请表并查看提交说明。', label: '开始申请', to: '/apply', primary: true },
    ],
  },
})

export const mentorsPageContent = localized({
  en: { eyebrow: 'Meet Our Team', title: 'Meet our team.', description: 'Get to know the founding mentors and program team who contribute their experience, care, and time to make each connection possible.' },
  zh: { eyebrow: '认识团队', title: '认识我们的团队。', description: '了解创始导师与项目运营团队——他们投入经验、关怀与时间，让每一次导师连接成为可能。' },
})

export const mentorPageContent = localized({
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
    intro: { eyebrow: '导师专区', title: '分享你的一路所学，也在陪伴与指导中共同成长。', description: '帮助正在准备研究生申请的学弟学妹，积累真实的教学指导经验。' },
    fitHeading: { eyebrow: '参与方式', title: '在你的过往经验持续发光发热' },
    eligibilityLabel: '谁可以成为项目导师？',
    eligibility: '清华校友，来自生命科学、生物医学及相关领域的在读博士生、近期博士毕业生和博士后研究人员。',
    contributions: [
      { number: '01', title: '申请规划', description: '引导学生思考研究兴趣、学校与项目选择。' },
      { number: '02', title: '材料反馈', description: '针对简历、SOP或个人陈述提供反馈和建议。' },
      { number: '03', title: '面试练习', description: '开展模拟面试，并给出针对性的指导。' },
      { number: '04', title: '博士视角', description: '坦诚分享科研训练与博士生活的亲身经验。' },
    ],
    benefitsHeading: { eyebrow: '你可以获得什么', title: '回馈、连接，以及教学相长。' },
    benefits: [
      { number: '01', title: '分享亲身经验', description: '把申请、科研与博士生活中的经验，总结为对学弟学妹们的建议。' },
      { number: '02', title: '帮助学弟学妹', description: '帮助下一代的清华学子获得更充分的信息，让他们更有信心地走向研究生阶段。' },
      { number: '03', title: '建立有意义的连接', description: '认识更广泛的清华学生、校友与科研人员。' },
      { number: '04', title: '积累教学指导经验', description: '练习给予反馈、认真倾听、管理预期，并引导有成效的交流。' },
    ],
    expectationsHeading: { eyebrow: '明确预期', title: '用心指导，守好边界。' },
    responsibilities: ['分享个人经验，但不把它当作问题的唯一正解。', '提供反馈，但不代替学生自己思考和撰写申请材料。', '明确自己的可用时间，并按双方约定及时沟通。', '保护学生的个人信息与申请材料。'],
    commitmentTitle: '灵活的时间投入',
    commitment: '你可以指导一名学生、反馈一项申请材料，或开展一次模拟面试。我们会匹配符合你专长和可投入时间的需求。',
    processHeading: { eyebrow: '如何加入', title: '只需三个步骤。' },
    steps: [
      { number: '01', title: '联系我们', description: '从 2026 试点页面向项目团队发送邮件。' },
      { number: '02', title: '说明参与范围', description: '告诉我们你的专长、希望支持的领域与时间安排。' },
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

export const faqPageContent = localized({
  en: {
    intro: { eyebrow: 'Frequently Asked Questions', title: 'Questions are part of the process.', description: 'Find practical information about eligibility, matching, mentoring boundaries, applications, and the 2026 pilot.' },
    groups: [
      { title: 'Participation & Matching', items: [
        { question: 'Who can apply as a mentee?', answer: 'Due to time and resource constraints, the 2026 pilot is limited to Tsinghua students in the life, biomedical, and related sciences who are applying to overseas PhD programs during the current application cycle, primarily programs in the United States.' },
        { question: 'Who can become a mentor?', answer: 'We welcome current PhD students, recent PhD graduates, and postdoctoral researchers with a Tsinghua background in the life, biomedical, and related sciences.' },
        { question: 'How are mentors and mentees matched?', answer: 'Matches are based primarily on research interests, the kind of support requested, and availability. We also consider stated preferences whenever possible.' },
        { question: 'Does applying guarantee a mentor match?', answer: 'No. Matching depends on mentor availability, expertise, and fit. The program team will communicate clearly about the outcome of each application.' },
        { question: 'Is there a fee to participate?', answer: 'No. BioMentor THU is a volunteer-led initiative, and there is no participation fee for mentors or mentees.' },
      ] },
      { title: 'Mentoring & Applications', items: [
        { question: 'What kind of support can a mentee receive?', answer: 'Support may include PhD planning, research direction, school and program selection, CV or statement feedback, interview preparation, and honest conversations about research training.' },
        { question: 'Will a mentor edit or write application materials for me?', answer: 'Mentors may offer feedback and help you strengthen your thinking and communication, but they will not write application materials on your behalf. All submitted work must remain your own.' },
        { question: 'How much time does mentoring require?', answer: 'The format is flexible. A mentor may support one student, one application component, or one mock interview depending on expertise and availability.' },
        { question: 'Will my application materials remain confidential?', answer: 'Yes. Mentors and mentees are expected to protect personal information and application materials shared through the program.' },
        { question: 'How do prospective mentors get in touch?', answer: 'Visit the 2026 pilot application page and use the mentor contact button to email the program team directly.' },
      ] },
    ],
    contactEyebrow: 'Still Have a Question?', contactTitle: 'We are happy to help.', contactText: 'Contact the BioMentor THU program team directly by email.', contactButton: 'Email the Program Team',
  },
  zh: {
    intro: { eyebrow: '常见问题', title: '提出问题，是前行路上的第一步。', description: '了解参与资格、导师匹配、指导内容、申请方式和 2026 试点项目的实用信息。' },
    groups: [
      { title: '参与与匹配', items: [
        { question: '哪些学生可以申请？', answer: '由于时间和资源有限，2026 试点仅面向生命科学、生物医学及相关领域，正在本申请季申请海外博士项目的清华学生，并以美国博士项目为主。' },
        { question: '哪些人可以成为导师？', answer: '我们欢迎具有清华背景、来自生命科学、生物医学及相关领域的在读博士生、近期博士毕业生和博士后研究人员。' },
        { question: '导师与学生如何匹配？', answer: '我们主要根据研究兴趣、希望获得的支持类型和双方时间进行匹配，并在条件允许时考虑个人偏好。' },
        { question: '提交申请后一定能匹配到导师吗？', answer: '不能保证。匹配结果取决于导师的时间、专业经验和双方适配度，项目团队会清晰告知每位申请者结果。' },
        { question: '参加项目需要付费吗？', answer: '不需要。BioMentor THU 是由志愿者发起的项目，导师和学生均无需支付参与费用。' },
      ] },
      { title: '导师指导与申请', items: [
        { question: '学生可以获得哪些支持？', answer: '支持内容可能包括博士规划、研究方向、学校和项目选择、简历或陈述反馈、面试准备，以及有关科研训练的坦诚交流。' },
        { question: '导师会帮我修改或撰写申请材料吗？', answer: '导师可以提供反馈，帮助你完善思考与表达，但不会代写申请材料。所有提交的内容都必须是学生本人的工作。' },
        { question: '导师指导需要投入多少时间？', answer: '参与方式灵活。导师可以根据专长与时间，从指导一名学生、反馈一项申请材料，或开展一次模拟面试开始。' },
        { question: '我的申请材料会被保密吗？', answer: '会。导师和学生都应保护项目交流中分享的个人信息与申请材料。' },
        { question: '有意成为导师的人如何联系项目？', answer: '请前往 2026 试点申请页面，点击导师联系按钮，直接通过电子邮件联系项目团队。' },
      ] },
    ],
    contactEyebrow: '还有其他问题？', contactTitle: '欢迎随时联系我们。', contactText: '你可以直接通过电子邮件联系 BioMentor THU 项目团队。', contactButton: '邮件联系项目团队',
  },
})

export const applyPageContent = localized({
  en: {
    eyebrow: '2026 Pilot Applications', title: 'Apply for the 2026 pilot.', highlight: 'Due to time and resource constraints, the 2026 pilot supports overseas PhD applications only, with a primary focus on programs in the United States.', description: 'Mentees can download the application form below, and prospective mentors can contact the program team directly by email.',
    how: 'Mentee Application', twoSteps: 'Complete your mentee application in two steps.', stepOneNumber: '01', stepOne: 'Download and complete the form', stepOneText: 'Download the mentee application form and fill in all required information.', stepTwoNumber: '02', stepTwo: 'Submit by email', stepTwoPrefix: 'Send your completed application form to', sentenceEnd: '.', downloads: 'Apply or Get in Touch', formsHeading: 'Choose your next step', close: 'Close disclaimer', before: 'Before You Download', disclaimer: 'Application disclaimer', introBefore: 'Please review and confirm every statement before downloading the', introAfter: '.', cancel: 'Cancel', confirm: 'Confirm and Download',
    forms: [{ id: 'mentee', title: 'Mentee Application Form', description: 'For Tsinghua students seeking mentoring and application guidance.', buttonLabel: 'Download Mentee Form', buttonClass: 'button-primary', filename: 'BioMentor THU_2026 Mentee Application Form.pdf' }],
    mentorContact: { title: 'Interested in Becoming a Mentor?', description: 'Alumni and researchers who would like to support Tsinghua students can contact the program team directly by email.', buttonLabel: 'Email the Program Team' },
    disclaimerItems: [
      'I understand that this is a volunteer-led mentoring program and that submitting an application does not guarantee participation or a mentor match.',
      'I confirm that the information I provide in the application is accurate and represents my own experience and work.',
      'I understand that mentors provide guidance and feedback, but will not write or complete application materials on my behalf.',
      'I agree to communicate respectfully, protect confidential information, and respect the time and boundaries of other participants.',
      'I consent to the information in this form being used to review my application and administer the BioMentoring Program.',
    ],
  },
  zh: {
    eyebrow: '2026 试点申请', title: '申请加入 2026 试点项目。', highlight: '由于时间和资源有限，2026 试点仅支持海外博士项目申请，并以美国博士项目为主。', description: '学生可在下方下载申请表；有意加入的导师可直接通过电子邮件联系项目团队。',
    how: '学生申请', twoSteps: '分两步完成学生申请。', stepOneNumber: '01', stepOne: '下载并填写申请表', stepOneText: '下载学生申请表，并填写全部必填信息。', stepTwoNumber: '02', stepTwo: '通过电子邮件提交', stepTwoPrefix: '请将填写完整的申请表发送至', sentenceEnd: '。', downloads: '申请或联系我们', formsHeading: '选择你的下一步', close: '关闭申请说明', before: '下载之前', disclaimer: '申请须知', introBefore: '下载', introAfter: '前，请阅读并确认以下全部声明。', cancel: '取消', confirm: '确认并下载',
    forms: [{ id: 'mentee', title: '学生申请表', description: '面向希望获得导师指导和申请建议的清华学生。', buttonLabel: '下载学生申请表', buttonClass: 'button-primary', filename: 'BioMentor THU_2026 Mentee Application Form.pdf' }],
    mentorContact: { title: '有意成为导师？', description: '希望志愿支持清华学生的校友与科研工作者，可以直接通过电子邮件联系项目团队。', buttonLabel: '邮件联系项目团队' },
    disclaimerItems: [
      '我理解本项目由志愿者组织，提交申请并不保证一定能够参与项目或匹配到导师。',
      '我确认申请中提供的信息准确无误，并如实反映我本人的经历与工作。',
      '我理解导师只提供指导和反馈，不会代我撰写或完成申请材料。',
      '我同意保持尊重的沟通方式，保护保密信息，并尊重其他参与者的时间与个人边界。',
      '我同意本表中的信息用于审核申请及 BioMentor THU 项目的组织与管理。',
    ],
  },
})

export const componentLabels = localized({
  en: {
    mentorCall: { contribute: 'You may contribute by', flexibility: 'Designed for flexibility' },
    mentors: { research: 'Field', areas: 'Area', intro: 'Self-Intro', profile: 'View Profile', all: 'Learn About Becoming a Mentor', close: 'Close mentor profile', profileEyebrow: 'Mentor Profile' },
    pilot: { focus: "This year's mentoring focus", why: 'Why a Pilot?', action: 'Learn About the 2026 Pilot' },
  },
  zh: {
    mentorCall: { contribute: '你可以这样参与', flexibility: '灵活参与，量力而行' },
    mentors: { research: '研究领域', areas: '指导范围', intro: '自我介绍', profile: '查看简介', all: '了解如何成为导师', close: '关闭导师简介', profileEyebrow: '导师简介' },
    pilot: { focus: '本年度导师指导重点', why: '为什么从试点开始？', action: '了解 2026 试点项目' },
  },
})
