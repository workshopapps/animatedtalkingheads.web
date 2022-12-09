export const routes = {
  home: '/',
  about: '/about',
  blog: '/blog',
  customizeAudio: '/podcast/customize',
  ForgotPassword: '/forgot-password',

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
  termsUse: '/terms-of-use/term',
  term: '/terms-of-use/term',
  policy: '/terms-of-use/policy',
  settings: '/settings-appearance',
  settingsAppearance: '/settings-appearance',
    settingsIntegration: '/settings-integration',
      settingsCommunity: '/settings-community',
        settingsVoxclips: '/settings-voxclips',
          settingsAccessibility: '/settings-accessibility',
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
  pressWatchnow: '/press/watch-now',
  signUp: '/sign-up',
  signIn: '/sign-in'
};

export const links = [
  { name: 'Home', link: routes.home },
  { name: 'How it works', link: routes.howItWorks },
  { name: 'Use cases', link: `${routes.useCases}/1` }
];

export const linksMobile = [
  { name: 'Home', link: routes.home },
  { name: 'How it works', link: routes.howItWorks },
  { name: 'Use cases', link: `${routes.useCases}/1` },
  { name: 'Avatars', link: routes.avatars },
  { name: 'Contact us', link: routes.contact }
];
export const navLinks = [
  { name: 'Documentation', link: '/api/documentation' },
  { name: 'Database', link: '/api/database' },
  { name: 'API Status', link: '/api/status' },
  { name: 'API History', link: '/api/history' }
];
