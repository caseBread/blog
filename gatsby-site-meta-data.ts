export default {
  /**
   * basic Information
   */
  title: `caseBread`,
  description: `개발자 김건우`,
  language: `ko`,
  siteUrl: `https://effervescent-kataifi-08bcb7.netlify.app`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: `caseBread/blog`, //`danmin20/danmin-gatsby-blog`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `김건우`,
    nickname: `caseBread`,
    stack: ['Frontend', 'Next.js', 'Typescript'],
    bio: {
      email: `kgu0515@gmail.com`,
      residence: 'YongIn, South Korea',
      bachelorDegree: 'Kyunghee Univ. Computer Engineering (2021.09-ing)',
    },
    social: {
      github: `https://github.com/caseBread`,
      linkedIn: `https://www.linkedin.com/in/quw/`,
      resume: `https://drive.google.com/file/d/1NwWOXW4zOFzW8_8-ALDOY_d7c2AlcK84/view?usp=sharing`,
    },
    dropdown: {
      tistory: 'https://ohoweht.tistory.com/',
      velog: '',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'Frontend',
      category: 'Frontend',
    },
    {
      title: 'Career',
      category: 'Career',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2023.03.14 - 2025.06.20',
      en: '넛지헬스케어(주)',
      kr: '',
      info: '프론트엔드 팀',
      link: '',
    },
    {
      category: 'Activity',
      date: '2025.08 - ING',
      en: 'AUSG',
      kr: '아우쓱',
      info: '클라우드 동아리',
      link: 'https://ausg.me/',
    },
    {
      category: 'Activity',
      date: '2025.06 - 2025.08',
      en: 'KUSITHMS',
      kr: '큐시즘',
      info: 'IT 연합동아리',
      link: 'https://www.kusitms.com/',
    },
    {
      category: 'Activity',
      date: '2025.06 - 2025.08',
      en: 'DND',
      kr: '',
      info: 'IT 연합동아리',
      link: 'https://dnd.ac/',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'Portfolio',
      description: '포트폴리오',
      techStack: ['React', 'Next.js', 'Typescript'],
      thumbnailUrl: '', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: '',
        demo: '',
        googlePlay: '',
        appStore: '',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'kakao_qr.svg', // Path to your in the 'assets' folder
    },
  },
};
