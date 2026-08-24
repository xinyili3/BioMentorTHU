import { mentorProfiles } from './mentorProfiles'

export const navigation = [
  { label: 'Program Overview', to: '/' },
  { label: 'Mentors', to: '/mentors' },
  { label: 'Mentees', to: '/mentees' },
  { label: 'Apply', to: '/apply' },
]

export const mission = {
  heading: {
    eyebrow: 'Our Mission',
    title: 'Mentorship should not depend on who you happen to know.',
    description:
      'Preparing for a PhD often involves questions that are difficult to answer from websites or application guides alone. This program brings students and alumni together through structured, personalized mentorship so that the path toward advanced research training feels clearer and more supportive.',
  },
  questions: [
    'What kind of research do I want to pursue?',
    'How should I choose programs?',
    'How do I communicate my research experience clearly?',
    'What should I expect from a PhD interview, or from PhD life itself?',
  ],
  note:
    'Many Tsinghua alumni have recently navigated these same questions. The BioMentoring Program helps turn that lived experience into a community resource students can actually access.',
}

export const support = {
  heading: {
    eyebrow: 'What We Support',
    title: 'From early questions to final application materials.',
  },
  items: [
    {
      title: 'PhD Journey & Planning',
      description:
        'Explore whether PhD training fits your goals, how your research interests may evolve, and what kinds of programs and research environments are the right fit.',
      details: [
        'PhD planning',
        'Research direction',
        'School / program selection',
        'General PhD life and research career questions',
      ],
    },
    {
      title: 'Application Support',
      description:
        'Receive focused feedback on specific parts of your graduate school application from mentors with relevant experience and availability.',
      details: [
        'CV review',
        'Statement of purpose review',
        'Personal statement review',
        'Interview preparation',
      ],
    },
  ],
}

export const pilot = {
  heading: {
    eyebrow: '2026 Pilot Cohort',
    title: 'Starting small. Building thoughtfully.',
    description:
      'For the inaugural 2026 cohort, the program will primarily support Tsinghua students applying to graduate programs during the current application cycle.',
  },
  focusDescription:
    'Because the program is launching during application season, this pilot concentrates on the areas where timely feedback can make the greatest difference.',
  focusAreas: [
    'School / Program Selection',
    'CV Review',
    'Statement of Purpose',
    'Personal Statement',
    'Interview Preparation',
  ],
  reason:
    'A focused first cohort allows the team to provide useful support right away while learning how to build a stronger and more sustainable mentoring program for future years.',
}

export const process = {
  heading: {
    eyebrow: 'How It Works',
    title: 'A simple process designed around fit, flexibility, and care.',
  },
  steps: [
    {
      number: '01',
      title: 'Apply',
      description:
        'Tell us about your research interests, application plans, mentoring needs, and availability.',
    },
    {
      number: '02',
      title: 'Match',
      description:
        'We match mentees and mentors based primarily on research interest, mentoring need, and availability, while also considering preferences whenever possible.',
    },
    {
      number: '03',
      title: 'Connect',
      description:
        'Meet online for individualized conversations and feedback. Different parts of an application may be supported by different mentors depending on expertise.',
    },
    {
      number: '04',
      title: 'Grow',
      description:
        'Use mentor feedback to refine your thinking, strengthen your application, and make more informed decisions about your next stage of training.',
    },
  ],
}

export const mentorCall = {
  heading: {
    eyebrow: 'For Mentors',
    title: 'Share what you have learned.',
    description:
      'We welcome current PhD students, recent PhD graduates, and postdoctoral researchers with a Tsinghua background in the life, biomedical, and related sciences. Mentoring is entirely volunteer-based and designed to be flexible.',
  },
  contributions: [
    'Mentoring one student through part of the application cycle',
    'Providing feedback on a specific application component',
    'Conducting a mock interview',
    'Supporting the program in more than one way',
  ],
  flexibility:
    "There is no expectation that every mentor supports every part of an application. The program is built to respect mentors' expertise, availability, and boundaries.",
}

export const mentors = {
  heading: {
    eyebrow: 'Founding Mentors',
    title: 'Meet the people behind the program.',
  },
  people: mentorProfiles,
}

export const principles = {
  heading: {
    eyebrow: 'Our Mentoring Principles',
    title: "Guide, don't write.",
  },
  items: [
    {
      title: "Guide, don't write.",
      description:
        "Mentors provide feedback, perspective, and guidance. Application materials remain the student's own work.",
    },
    {
      title: 'Share experience, not universal answers.',
      description:
        'There is rarely one correct path to a PhD. Mentors are encouraged to distinguish personal experience from general advice.',
    },
    {
      title: 'Respect different paths.',
      description:
        'Students may have different research interests, backgrounds, priorities, and definitions of success.',
    },
    {
      title: 'Respect time and boundaries.',
      description:
        'Mentoring is voluntary. Clear, thoughtful, and professional communication is expected from both mentors and mentees.',
    },
    {
      title: 'Maintain confidentiality.',
      description:
        'Application materials and personal information shared through mentoring should remain confidential.',
    },
  ],
}

export const join = {
  heading: {
    eyebrow: 'Join the Community',
    title: 'One conversation can make the path a little clearer.',
    description:
      'Whether you are preparing for the next stage of your scientific training or hoping to share what you have learned along the way, this program is designed to make those connections possible.',
  },
  options: [
    {
      title: 'Apply as a Mentee',
      description:
        'For students seeking application guidance, perspective on research training, and more clarity about the path ahead.',
      label: 'Open Mentee Application',
      href: '#',
      buttonClass: 'button-primary',
    },
    {
      title: 'Become a Mentor',
      description:
        'For alumni and researchers who want to contribute thoughtful, experience-based guidance in a flexible volunteer role.',
      label: 'Open Mentor Sign-Up',
      href: '#',
      buttonClass: 'button-secondary',
    },
  ],
}
