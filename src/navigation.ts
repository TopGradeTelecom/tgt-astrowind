import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'IT Solutions',
      mega: {
        viewAllText: 'View All',
        viewAllHref: getPermalink('/services#it-solutions'),
        sections: [
          { text: 'Managed IT', href: getPermalink('/services#managed-it') },
          { text: 'Managed Network', href: getPermalink('/services#managed-network') },
          { text: 'Professional Services', href: getPermalink('/services#professional-services') },
        ],
        tiles: [
          {
            section: 'Managed IT',
            items: [
              {
                title: 'IT Systems Proactive Monitoring',
                description: '24/7 visibility into critical systems and alerts.',
                href: getPermalink('/services#managed-it'),
              },
              {
                title: 'IT Systems Maintenance',
                description: 'Patch, update, and optimize devices on schedule.',
                href: getPermalink('/services#managed-it'),
              },
              {
                title: '24/7 US-Based Support',
                description: 'Live help when issues appear, day or night.',
                href: getPermalink('/services#managed-it'),
              },
              {
                title: 'Vulnerability Scanning',
                description: 'Identify and prioritize security weaknesses.',
                href: getPermalink('/services#managed-it'),
              },
              {
                title: 'Managed Backups',
                description: 'Automated backups with verified recovery.',
                href: getPermalink('/services#managed-it'),
              },
            ],
          },
          {
            section: 'Managed Network',
            items: [
              {
                title: 'Internet & Power Redundancy',
                description: 'Failover design for continuous operations.',
                href: getPermalink('/services#managed-network'),
              },
              {
                title: 'Infrastructure as a Service',
                description: 'Scalable infrastructure aligned to your needs.',
                href: getPermalink('/services#managed-network'),
              },
              {
                title: 'Structured Cabling',
                description: 'Clean, reliable cabling built to scale.',
                href: getPermalink('/services#managed-network'),
              },
            ],
          },
          {
            section: 'Professional Services',
            items: [
              {
                title: 'IT Projects',
                description: 'Planned deployments delivered on time.',
                href: getPermalink('/services#professional-services'),
              },
              {
                title: 'IT Consulting',
                description: 'Strategy and roadmaps for smarter IT.',
                href: getPermalink('/services#professional-services'),
              },
            ],
          },
        ],
      },
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
