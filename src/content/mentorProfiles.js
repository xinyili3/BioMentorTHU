import { computed } from 'vue'
import { locale } from '../composables/useLanguage'

const shared = [
  { id: 'yale-neuroscience-mentor', photo: 'mentors/photos/test_mentorphoto.png' },
  { id: 'tsinghua-immunology-mentor', photo: 'mentors/photos/test_mentorphoto.png' },
  { id: 'harvard-genomics-mentor', photo: 'mentors/photos/test_mentorphoto.png' },
]

const profiles = {
  en: [
    { name: 'Mentor Name', role: 'PhD Student · Yale University', photoAlt: 'Profile portrait of the Yale University mentor', research: 'Neuroscience · Mitochondrial Biology · Stem Cell Models', areas: 'SOP · CV · School / Program Selection · Interview', bio: 'A Tsinghua alum pursuing doctoral training in neuroscience, with experience navigating interdisciplinary research programs and international PhD applications.', experience: 'Can share practical perspectives on identifying research fit, presenting prior research clearly, and preparing for conversations with prospective programs.', availability: 'Application planning · Document feedback · Mock interviews' },
    { name: 'Mentor Name', role: 'PhD Student · Tsinghua University', photoAlt: 'Profile portrait of the Tsinghua University mentor', research: 'Immunology · Cancer Biology · Cell Signaling', areas: 'SOP · Personal Statement · Interview', bio: 'A doctoral researcher working across immunology and cancer biology, with first-hand knowledge of research training and graduate study at Tsinghua.', experience: 'Can help students connect their scientific interests to a clear application narrative and prepare thoughtful responses for graduate interviews.', availability: 'Application narrative · Personal statement · Interview practice' },
    { name: 'Mentor Name', role: 'Postdoctoral Associate · Harvard Medical School', photoAlt: 'Profile portrait of the Harvard Medical School mentor', research: 'Genetics · Genomics · Computational Biology', areas: 'School / Program Selection · CV · SOP', bio: 'A Tsinghua alum and postdoctoral researcher working at the intersection of genetics, genomics, and computational biology.', experience: 'Can offer guidance on evaluating program fit, communicating computational research experience, and organizing application materials for interdisciplinary programs.', availability: 'Program selection · CV feedback · Statement of purpose' },
  ],
  zh: [
    { name: '导师姓名', role: '博士研究生 · 耶鲁大学', photoAlt: '耶鲁大学导师的个人照片', research: '神经科学 · 线粒体生物学 · 干细胞模型', areas: '学术目的陈述 · 简历 · 学校与项目选择 · 面试', bio: '清华校友，目前攻读神经科学博士，具有跨学科研究项目选择与海外博士申请经验。', experience: '可分享如何判断研究方向匹配度、清晰呈现既往科研经历，以及如何准备与意向项目交流的实用经验。', availability: '申请规划 · 材料反馈 · 模拟面试' },
    { name: '导师姓名', role: '博士研究生 · 清华大学', photoAlt: '清华大学导师的个人照片', research: '免疫学 · 肿瘤生物学 · 细胞信号转导', areas: '学术目的陈述 · 个人陈述 · 面试', bio: '研究方向横跨免疫学与肿瘤生物学，对清华的科研训练与研究生学习有切身经验。', experience: '可帮助学生将科研兴趣组织成清晰的申请叙事，并为研究生面试准备有思考、有重点的回答。', availability: '申请叙事 · 个人陈述 · 面试练习' },
    { name: '导师姓名', role: '博士后研究员 · 哈佛医学院', photoAlt: '哈佛医学院导师的个人照片', research: '遗传学 · 基因组学 · 计算生物学', areas: '学校与项目选择 · 简历 · 学术目的陈述', bio: '清华校友，目前从事遗传学、基因组学与计算生物学交叉方向的博士后研究。', experience: '可就评估项目匹配度、呈现计算科研经历，以及为跨学科项目组织申请材料提供建议。', availability: '项目选择 · 简历反馈 · 学术目的陈述' },
  ],
}

export const mentorProfiles = computed(() =>
  profiles[locale.value].map((profile, index) => ({ ...shared[index], ...profile })),
)
