export const routes = {
  home: '/',
  about: '/about',
  blog: '/blog',
  customizeAudio: '/podcast/customize',

  blogContent: '/blog/content',

  docs: '/fe-docs',
  useCases: '/use-cases',
  careers: '/careers',
  community: '/community',
  contact: '/contact',
  howItWorks: '/how-it-works',
  helperCenter: '/help-center',
  faqs: '/faqs',
  pricing: '/pricing',
  getStarted: '/getstarted',
  checkout: '/checkout',
  privacy: '/privacy-policy',

  privacyAbout: '/privacy-policy/about',
  privaCookies: '/privacy-policy/cookies',
  privacyChangesToPolicy: '/privacy-policy/changes-to-policy',
  privacyhowWeUseInformation: '/privacy-policy/how-we-use-information',
  privacyInformation: '/privacy-policy/information',

  termsCondition: '/terms-and-conditions',
  termsService: '/terms-of-service',
  settings: '/settings',
  podcastUpload: '/podcast/upload',
  podcastCustomize: '/podcast/customize',
  podcastDownload: '/podcast/download',
  podcastCharacters: '/podcast/characters',
  useCaseArticle: '/use-cases/article',
  press: '/press',
  scenery: '/avatar/scenery',
  exploreBackground: '/explore-background',
  avatars: '/avatars',
  exploreAvatar: '/explore-avatar',
  api: '/api-page',
  pressNewsPage: '/press/news-page',
  pressWatchnow: '/press/watch-now'
};

export const links = [
  { name: 'Home', link: routes.home },
  { name: 'Use cases', link: `${routes.useCases}/1` },
  { name: 'Contact', link: routes.contact },
  { name: 'How it work', link: routes.howItWorks }
  // { name: 'Avatars', link: routes.avatars }
];

export const navLinks = [
  { name: 'Documentation', link: '/api/documentation' },
  { name: 'Database', link: '/api/database' },
  { name: 'API Status', link: '/api/status' },
  { name: 'API History', link: '/api/history' }
];
