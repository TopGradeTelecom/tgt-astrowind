import { getPermalink as getBasePermalink } from './utils/permalinks';

const getPermalink = (href: string): string => {
  if (href.startsWith('/services#')) {
    const [, serviceSlug] = href.split('#');
    if (serviceSlug) {
      return getBasePermalink(`/services/${serviceSlug}`);
    }
  }

  return getBasePermalink(href);
};

export const headerData = {
  links: [
    {
      text: 'IT',
      mega: {
        viewAllText: 'View All',
        viewAllHref: getPermalink('/services#it-solutions'),
        sections: [
          { text: 'Managed IT', href: getPermalink('/services#managed-it') },
          { text: 'Network & Infrastructure', href: getPermalink('/services#network-infrastructure') },
          { text: 'Projects & Strategy', href: getPermalink('/services#projects-strategy') },
          { text: 'Cybersecurity', href: getPermalink('/services#cybersecurity-solutions') },
          { text: 'Cloud Productivity Protection', href: getPermalink('/services#cloud-productivity-protection') },
        ],
        tiles: [
          {
            section: 'Managed IT',
            items: [
              {
                title: '24/7 Monitoring & Alerting',
                description: 'Continuous visibility into device health and issues.',
                href: getPermalink('/services#managed-it'),
              },
              {
                title: 'US-Based Help Desk',
                description: 'Fast support from technicians who know your environment.',
                href: getPermalink('/services#managed-it'),
              },
              {
                title: 'Patch & Endpoint Management',
                description: 'Reduce risk with disciplined patching and endpoint controls.',
                href: getPermalink('/services#managed-it'),
              },
              {
                title: 'Microsoft 365 Administration',
                description: 'Manage users, licensing, and core Microsoft 365 services.',
                href: getPermalink('/services#managed-it'),
              },
            ],
          },
          {
            section: 'Network & Infrastructure',
            items: [
              {
                title: 'Managed Network',
                description: 'Keep routing, switching, and wireless stable and optimized.',
                href: getPermalink('/services#network-infrastructure'),
              },
              {
                title: 'Internet & Power Redundancy',
                description: 'Failover design for continuous operations.',
                href: getPermalink('/services#network-infrastructure'),
              },
              {
                title: 'Cloud Infrastructure (IaaS)',
                description: 'Scalable cloud infrastructure aligned to business requirements.',
                href: getPermalink('/services#network-infrastructure'),
              },
              {
                title: 'Structured Cabling',
                description: 'Clean, reliable cabling built to scale.',
                href: getPermalink('/services#network-infrastructure'),
              },
            ],
          },
          {
            section: 'Projects & Strategy',
            items: [
              {
                title: 'Technology Projects',
                description: 'Planned deployments delivered on time.',
                href: getPermalink('/services#projects-strategy'),
              },
              {
                title: 'IT Consulting & Roadmaps',
                description: 'Strategic guidance and planning for smarter decisions.',
                href: getPermalink('/services#projects-strategy'),
              },
              {
                title: 'vCIO Services',
                description: 'Executive-level IT planning without full-time overhead.',
                href: getPermalink('/services#projects-strategy'),
              },
              {
                title: 'Vendor & License Management',
                description: 'Coordinate providers and subscriptions to reduce waste.',
                href: getPermalink('/services#projects-strategy'),
              },
            ],
          },
          {
            section: 'Cybersecurity',
            items: [
              {
                title: 'Vulnerability Scanning',
                description: 'Continuously identify and prioritize exploitable weaknesses.',
                href: getPermalink('/services#vulnerability-scanning'),
              },
              {
                title: 'Ransomware Prevention',
                description: 'Layered controls that block ransomware before it spreads.',
                href: getPermalink('/services#ransomware-prevention'),
              },
              {
                title: 'Backups and Recovery',
                description: 'Protect critical data with tested backup and recovery workflows.',
                href: getPermalink('/services#backup-recovery'),
              },
              {
                title: 'Security Awareness Training',
                description: 'Train teams to spot phishing, social engineering, and risky behavior.',
                href: getPermalink('/services#security-awareness-training'),
              },
            ],
          },
          {
            section: 'Cloud Productivity Protection',
            items: [
              {
                title: 'Cloud Productivity Protection',
                description: 'Protect cloud email, files, and accounts with layered controls and clear operating standards.',
                href: getPermalink('/services#cloud-productivity-protection'),
              },
              {
                title: 'Cloud Email Threat Protection',
                description: 'Reduce phishing, impersonation, and malicious attachment risk across business email.',
                href: getPermalink('/services#cloud-email-threat-protection'),
              },
              {
                title: 'Cloud Backup and Archiving',
                description: 'Retain and recover mailbox and file data with policy-driven backup and archive workflows.',
                href: getPermalink('/services#cloud-backup-archiving'),
              },
              {
                title: 'Managed Security Awareness Program',
                description: 'Run continuous user training and simulation campaigns that reduce human-driven incidents.',
                href: getPermalink('/services#managed-security-awareness-program'),
              },
              {
                title: 'Email Signature Management',
                description: 'Centralize signatures, disclaimers, and campaign banners to keep outbound email consistent.',
                href: getPermalink('/services#email-signature-management'),
              },
            ],
          },
        ],
      },
      links: [
        { text: 'Managed IT', href: getPermalink('/services#managed-it') },
        { text: 'Network & Infrastructure', href: getPermalink('/services#network-infrastructure') },
        { text: 'Projects & Strategy', href: getPermalink('/services#projects-strategy') },
        { text: 'Cybersecurity', href: getPermalink('/services#cybersecurity-solutions') },
        { text: 'Cloud Productivity Protection', href: getPermalink('/services#cloud-productivity-protection') },
      ],
    },
    {
      text: 'Communication',
      mega: {
        viewAllText: 'View All',
        viewAllHref: getPermalink('/services#unified-communications'),
        sections: [
          { text: 'Phone Systems', href: getPermalink('/services#reliable-phone-systems') },
          { text: 'Call Management', href: getPermalink('/services#call-management') },
          { text: 'Collaboration', href: getPermalink('/services#collaboration-tools') },
        ],
        tiles: [
          {
            section: 'Phone Systems',
            items: [
              {
                title: 'Reliable Phone Systems',
                description: 'Cloud and hybrid voice systems engineered for round-the-clock reliability and call clarity.',
                href: getPermalink('/services#reliable-phone-systems'),
              },
              {
                title: 'Managed Phone Hardware and Provisioning',
                description: 'Business-grade handsets configured by experts for role-based usability and dependable operation.',
                href: getPermalink('/services#reliable-phone-systems'),
              },
              {
                title: 'US-Based Support and Staff Training',
                description: 'Direct access to live specialists plus onboarding and refresher training for your team.',
                href: getPermalink('/services#reliable-phone-systems'),
              },
            ],
          },
          {
            section: 'Call Management',
            items: [
              {
                title: 'Call Recording',
                description: 'Policy-based recording for training, quality, and accountability.',
                href: getPermalink('/services#call-recording'),
              },
              {
                title: 'Call Analytics',
                description: 'Track answer rates, missed calls, and queue performance trends.',
                href: getPermalink('/services#call-management'),
              },
              {
                title: 'Queue and Overflow Controls',
                description: 'Reduce hold times with smarter queue and overflow routing.',
                href: getPermalink('/services#call-management'),
              },
            ],
          },
          {
            section: 'Collaboration',
            items: [
              {
                title: 'Microsoft Teams',
                description: 'Unify chat, meetings, and voice inside a single workspace.',
                href: getPermalink('/services#microsoft-teams'),
              },
              {
                title: 'SharePoint',
                description: 'Centralized document management with secure team access.',
                href: getPermalink('/services#sharepoint'),
              },
              {
                title: 'Teams and SharePoint Workflows',
                description: 'Connect communication and files to keep projects moving.',
                href: getPermalink('/services#collaboration-tools'),
              },
            ],
          },
        ],
      },
      links: [
        { text: 'Phone Systems', href: getPermalink('/services#reliable-phone-systems') },
        { text: 'Call Management', href: getPermalink('/services#call-management') },
        { text: 'Collaboration', href: getPermalink('/services#collaboration-tools') },
      ],
    },
    {
      text: 'Security',
      mega: {
        viewAllText: 'View All',
        viewAllHref: getPermalink('/services#security-solutions'),
        sections: [
          { text: 'Surveillance Cameras', href: getPermalink('/services#surveillance-cameras') },
          { text: 'Access Control', href: getPermalink('/services#access-control') },
        ],
        tiles: [
          {
            section: 'Surveillance Cameras',
            items: [
              {
                title: 'Cloud-Managed Cameras',
                description: 'Monitor facilities with centralized visibility and remote management.',
                href: getPermalink('/services#surveillance-cameras'),
              },
              {
                title: 'Searchable Footage and Alerts',
                description: 'Find events quickly and respond with real-time notifications.',
                href: getPermalink('/services#surveillance-cameras'),
              },
            ],
          },
          {
            section: 'Access Control',
            items: [
              {
                title: 'Door Access Systems',
                description: 'Control entry points with secure credentials and audit trails.',
                href: getPermalink('/services#access-control'),
              },
              {
                title: 'Centralized Access Policies',
                description: 'Manage users, schedules, and permissions across locations.',
                href: getPermalink('/services#access-control'),
              },
            ],
          },
        ],
      },
      links: [
        { text: 'Surveillance Cameras', href: getPermalink('/services#surveillance-cameras') },
        { text: 'Access Control', href: getPermalink('/services#access-control') },
      ],
    },
    {
      text: 'Repairs',
      mega: {
        viewAllText: 'View All',
        viewAllHref: getPermalink('/services#computer-repair-services'),
        sections: [
          { text: 'Computer Repair Services', href: getPermalink('/services#computer-repair-services') },
          { text: 'Malware and Optimization', href: getPermalink('/services#virus-removal') },
          { text: 'Custom Builds', href: getPermalink('/services#custom-gaming-builds') },
        ],
        tiles: [
          {
            section: 'Computer Repair Services',
            items: [
              {
                title: 'Computer Repair Services',
                description: 'Diagnostics and repair support for business and home systems.',
                href: getPermalink('/services#computer-repair-services'),
              },
              {
                title: 'Data Recovery',
                description: 'Recover files from failed, corrupted, or inaccessible storage devices.',
                href: getPermalink('/services#data-recovery'),
              },
            ],
          },
          {
            section: 'Malware and Optimization',
            items: [
              {
                title: 'Virus Removal',
                description: 'Remove malware and harden systems to reduce reinfection risk.',
                href: getPermalink('/services#virus-removal'),
              },
              {
                title: 'Optimization',
                description: 'Improve startup speed, responsiveness, and overall system stability.',
                href: getPermalink('/services#optimization'),
              },
            ],
          },
          {
            section: 'Custom Builds',
            items: [
              {
                title: 'Custom Gaming Builds',
                description: 'Purpose-built gaming desktops tuned for performance, cooling, and reliability.',
                href: getPermalink('/services#custom-gaming-builds'),
              },
            ],
          },
        ],
      },
      links: [
        { text: 'Computer Repair Services', href: getPermalink('/services#computer-repair-services') },
        { text: 'Data Recovery', href: getPermalink('/services#data-recovery') },
        { text: 'Virus Removal', href: getPermalink('/services#virus-removal') },
        { text: 'Optimization', href: getPermalink('/services#optimization') },
        { text: 'Custom Gaming Builds', href: getPermalink('/services#custom-gaming-builds') },
      ],
    },
    {
      text: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Certifications', href: getPermalink('/about/certifications') },
        { text: 'Careers', href: getPermalink('/careers') },
        { text: 'Privacy Policy', href: getPermalink('/privacy-policy') },
        { text: 'Terms', href: getPermalink('/legal') },
      ],
    },
    {
      text: 'Support',
      links: [
        { text: 'Downtime Calculator', href: getPermalink('/downtime-calculator') },
        { text: 'Contact Support', href: getPermalink('/contact') },
      ],
    },
  ],
  actions: [
    {
      text: 'Get Started',
      href: 'https://meetings-na2.hubspot.com/zachary-price',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'IT',
      links: [
        { text: 'Managed IT', href: getPermalink('/services#managed-it') },
        { text: 'Network & Infrastructure', href: getPermalink('/services#network-infrastructure') },
        { text: 'Projects & Strategy', href: getPermalink('/services#projects-strategy') },
        { text: 'Cybersecurity', href: getPermalink('/services#cybersecurity-solutions') },
        { text: 'Cloud Productivity Protection', href: getPermalink('/services#cloud-productivity-protection') },
        { text: 'Cloud Email Threat Protection', href: getPermalink('/services#cloud-email-threat-protection') },
        { text: 'Cloud Backup and Archiving', href: getPermalink('/services#cloud-backup-archiving') },
        { text: 'Managed Security Awareness Program', href: getPermalink('/services#managed-security-awareness-program') },
        { text: 'Email Signature Management', href: getPermalink('/services#email-signature-management') },
      ],
    },
    {
      title: 'Communication',
      links: [
        { text: 'Phone Systems', href: getPermalink('/services#reliable-phone-systems') },
        { text: 'Call Management', href: getPermalink('/services#call-management') },
        { text: 'Collaboration', href: getPermalink('/services#collaboration-tools') },
      ],
    },
    {
      title: 'Security',
      links: [
        { text: 'Surveillance Cameras', href: getPermalink('/services#surveillance-cameras') },
        { text: 'Access Control', href: getPermalink('/services#access-control') },
      ],
    },
    {
      title: 'Repairs',
      links: [
        { text: 'Computer Repair Services', href: getPermalink('/services#computer-repair-services') },
        { text: 'Data Recovery', href: getPermalink('/services#data-recovery') },
        { text: 'Virus Removal', href: getPermalink('/services#virus-removal') },
        { text: 'Optimization', href: getPermalink('/services#optimization') },
        { text: 'Custom Gaming Builds', href: getPermalink('/services#custom-gaming-builds') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Certifications', href: getPermalink('/about/certifications') },
        { text: 'Careers', href: getPermalink('/careers') },
        { text: 'Terms', href: getPermalink('/legal') },
        { text: 'Privacy Policy', href: getPermalink('/privacy-policy') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Downtime Calculator', href: getPermalink('/downtime-calculator') },
        { text: 'Contact Support', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/legal') },
    { text: 'Privacy Policy', href: getPermalink('/privacy-policy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/topgradetechservices' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/TopGradeTech' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/TopGradeTech' },
    {
      ariaLabel: 'Location',
      icon: 'tabler:map-pin',
      href: 'https://www.google.com/maps/place/Top+Grade+Tech/@38.2855949,-104.5749359,15z/data=!4m2!3m1!1s0x0:0x283b8df7d7d84338?sa=X&ved=2ahUKEwizhJj85diDAxVpOTQIHVr1BiMQ_BJ6BAhHEAA&hl=en',
    },
  ],
  footNote: `
    Top Grade Tech - All rights reserved.
  `,
};
