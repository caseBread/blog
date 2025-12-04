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
      info: 'Frontend Developer',
      link: '',
    },
    {
      category: 'Activity',
      date: '2025.08 - ING',
      en: 'AUSG',
      kr: 'AWSKRUG 소속 대학생 클라우드 동아리',
      info: '9기 참여',
      link: 'https://ausg.me/',
    },
    {
      category: 'Activity',
      date: '2025.06 - 2025.08',
      en: 'KUSITHMS',
      kr: '한국대학생IT경영학회',
      info: '32기 프론트엔드 개발자로 참여',
      link: 'https://www.kusitms.com/',
    },
    {
      category: 'Activity',
      date: '2025.06 - 2025.08',
      en: 'DND',
      kr: '개발자와 디자이너를 위한 계속해서 성장하는 IT비영리단체',
      info: '13기 프론트엔드 개발자로 참여',
      link: 'https://dnd.ac/',
    },
    {
      category: 'Activity',
      date: '2022.07 - 2022.12',
      en: '네이버 커넥트재단 부스트캠프',
      kr: '',
      info: '웹·모바일 7기 챌린지,맴버십 수료',
      link: 'https://drive.google.com/file/d/1-tmkoZglX00lIDFwmyEt_guhUK21-jgH/view?usp=sharing',
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
        post: '1',
        github: '1',
        demo: '1',
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
