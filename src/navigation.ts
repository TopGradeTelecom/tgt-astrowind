import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'IT Solutions',
      links: [
        { text: 'Managed IT', href: getPermalink('/services#managed-it') },
        { text: 'Managed Network', href: getPermalink('/services#managed-network') },
        { text: 'Professional Services', href: getPermalink('/services#professional-services') },
      ],
    },
    { text: 'Unified Communications', href: getPermalink('/services#unified-communications') },
    { text: 'Security Solutions', href: getPermalink('/services#security-solutions') },
    { text: 'Company', href: getPermalink('/about') },
    { text: 'Support', href: getPermalink('/contact') },
  ],
  actions: [{ text: 'Request a Consultation', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Managed IT', href: getPermalink('/services') },
        { text: 'Cybersecurity', href: getPermalink('/services') },
        { text: 'Cloud and Microsoft 365', href: getPermalink('/services') },
        { text: 'Physical Security', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/topgradetechservices' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/TopGradeTech' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/TopGradeTech' },
    { ariaLabel: 'Location', icon: 'tabler:map-pin', href: 'https://www.google.com/maps/place/Top+Grade+Tech/@38.2855949,-104.5749359,15z/data=!4m2!3m1!1s0x0:0x283b8df7d7d84338?sa=X&ved=2ahUKEwizhJj85diDAxVpOTQIHVr1BiMQ_BJ6BAhHEAA&hl=en' },
  ],
  footNote: `
    Top Grade Tech - All rights reserved.
  `,
};
