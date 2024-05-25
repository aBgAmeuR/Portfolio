import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Antoine JOSSET - Portfolio',
  description:
    'Développeur full stack basé à Laval, France. Passionné de développement informatique depuis plusieurs années.',
  keywords: [
    'Antoine JOSSET',
    'aBgAmeuR',
    'portfolio',
    'développeur',
    'full stack',
    'Laval',
    'Rennes',
    'France',
    'développement',
    'informatique',
    'web',
    'logiciel',
  ],
  url: env.APP_URL,
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
  animationDuration: 0.5,
};
