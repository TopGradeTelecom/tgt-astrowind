import type { Image, Item } from '~/types';

export type ServiceCategory = 'IT' | 'Communications' | 'Security';

export interface ServicePageData {
  slug: string;
  title: string;
  category: ServiceCategory;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  scopeTitle: string;
  scopeSubtitle: string;
  included: Item[];
  approach: string;
  outcomes: Item[];
  image: Image;
  related: string[];
  relatedSummary: string;
}

export const servicePages: Record<string, ServicePageData> = {
  'it-solutions': {
    slug: 'it-solutions',
    title: 'IT Solutions',
    category: 'IT',
    icon: 'tabler:settings',
    metaTitle: 'IT Solutions',
    metaDescription:
      'Comprehensive IT solutions that combine support, infrastructure, and planning to improve uptime and reduce business risk.',
    heroSubtitle:
      'A unified technology program that keeps systems reliable, teams productive, and decisions aligned with business priorities.',
    scopeTitle: 'What IT Solutions Includes',
    scopeSubtitle:
      'This offering combines daily operations, long-term planning, and continuity controls into one practical service stack.',
    included: [
      {
        title: 'Managed IT Operations',
        description: 'Proactive support, issue resolution, and endpoint standards to keep day-to-day work moving.',
        icon: 'tabler:headset',
      },
      {
        title: 'Resilient Infrastructure',
        description: 'Network, cloud, and redundancy planning built to avoid avoidable outages.',
        icon: 'tabler:network',
      },
      {
        title: 'Strategic Technology Guidance',
        description: 'Quarterly planning and roadmap decisions tied to growth, risk, and budget goals.',
        icon: 'tabler:clipboard-check',
      },
    ],
    approach:
      'We start with operational realities, then build service coverage around the systems and workflows your team depends on most.',
    outcomes: [
      {
        title: 'Lower Downtime',
        description: 'Fewer service interruptions through monitoring, standards, and faster escalation paths.',
        icon: 'tabler:clock-check',
      },
      {
        title: 'Stronger Risk Posture',
        description: 'Security controls become part of operations instead of a separate, reactive effort.',
        icon: 'tabler:shield-lock',
      },
      {
        title: 'Cleaner Decision Making',
        description: 'Better visibility into performance and cost makes technology planning less guesswork.',
        icon: 'tabler:chart-bar',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_1927499990-optimized.jpg',
      alt: 'Business leadership team reviewing IT strategy in a conference room',
    },
    related: ['managed-it', 'network-infrastructure', 'projects-strategy'],
    relatedSummary: 'Explore the core service areas inside the full IT solutions program.',
  },
  'managed-it': {
    slug: 'managed-it',
    title: 'Managed IT',
    category: 'IT',
    icon: 'tabler:device-desktop',
    metaTitle: 'Managed IT Services',
    metaDescription:
      'Managed IT services with proactive monitoring, help desk support, and endpoint management to keep business operations stable.',
    heroSubtitle:
      'Daily IT coverage that prevents common failures, speeds support response, and keeps teams productive without unnecessary friction.',
    scopeTitle: 'What Managed IT Covers',
    scopeSubtitle: 'The service focuses on prevention first, then fast resolution when issues still appear.',
    included: [
      {
        title: '24/7 Monitoring and Alerting',
        description: 'Continuous health checks to catch failures early and reduce business interruption.',
        icon: 'tabler:activity',
      },
      {
        title: 'US-Based Help Desk',
        description: 'Live technical support for users, devices, and common workflow blockers.',
        icon: 'tabler:headset',
      },
      {
        title: 'Patch and Endpoint Management',
        description: 'Routine patching, hardening, and policy enforcement to improve reliability and security.',
        icon: 'tabler:tool',
      },
    ],
    approach:
      'Managed IT works best when support, standards, and automation are coordinated instead of handled as separate tasks.',
    outcomes: [
      {
        title: 'Faster Issue Resolution',
        description: 'Structured triage and response cut the time users spend waiting for help.',
        icon: 'tabler:bolt',
      },
      {
        title: 'Consistent Device Health',
        description: 'Endpoint baselines reduce repeat tickets and improve overall performance.',
        icon: 'tabler:devices',
      },
      {
        title: 'Predictable Support Experience',
        description: 'Teams know where to go for help and what service levels to expect.',
        icon: 'tabler:list-check',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_660436612-optimized.jpg',
      alt: 'IT technician performing desktop support and hardware maintenance',
    },
    related: ['network-infrastructure', 'projects-strategy', 'cybersecurity-solutions'],
    relatedSummary: 'Managed IT pairs best with strong infrastructure and clear planning.',
  },
  'network-infrastructure': {
    slug: 'network-infrastructure',
    title: 'Network and Infrastructure',
    category: 'IT',
    icon: 'tabler:network',
    metaTitle: 'Network and Infrastructure Services',
    metaDescription:
      'Network and infrastructure services that improve availability, performance, and resilience across office and cloud environments.',
    heroSubtitle:
      'Reliable connectivity and infrastructure design for teams that cannot afford unstable networks or avoidable outages.',
    scopeTitle: 'What Network and Infrastructure Covers',
    scopeSubtitle:
      'From routing and wireless to cloud and redundancy, this service targets the systems your business runs on.',
    included: [
      {
        title: 'Managed Network Operations',
        description: 'Ongoing tuning and oversight for routing, switching, wireless, and core connectivity.',
        icon: 'tabler:route',
      },
      {
        title: 'Internet and Power Redundancy',
        description: 'Failover planning that keeps operations online when primary systems go down.',
        icon: 'tabler:plug-connected',
      },
      {
        title: 'Cloud Infrastructure Support',
        description: 'IaaS oversight for performance, stability, and right-sized capacity planning.',
        icon: 'tabler:cloud-computing',
      },
    ],
    approach:
      'We focus on the weak points that usually cause downtime: single points of failure, unclear ownership, and poor visibility.',
    outcomes: [
      {
        title: 'Higher Uptime',
        description: 'Redundancy and active management reduce the impact of network and provider issues.',
        icon: 'tabler:server',
      },
      {
        title: 'Better User Experience',
        description: 'Stable connectivity supports voice quality, cloud apps, and day-to-day collaboration.',
        icon: 'tabler:wifi',
      },
      {
        title: 'Simpler Troubleshooting',
        description: 'Documented infrastructure and monitoring shorten root-cause analysis time.',
        icon: 'tabler:search',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_1672119235-optimized.jpg',
      alt: 'Engineer connecting network cables in rack infrastructure',
    },
    related: ['managed-it', 'projects-strategy', 'reliable-phone-systems'],
    relatedSummary: 'Infrastructure decisions affect support quality and communication performance.',
  },
  'projects-strategy': {
    slug: 'projects-strategy',
    title: 'Projects and Strategy',
    category: 'IT',
    icon: 'tabler:clipboard-check',
    metaTitle: 'Technology Projects and IT Strategy',
    metaDescription:
      'Technology projects and IT strategy services that align investments with uptime goals, risk reduction, and growth plans.',
    heroSubtitle:
      'Structured project execution and practical strategy support for organizations that need outcomes, not slide decks.',
    scopeTitle: 'What Projects and Strategy Covers',
    scopeSubtitle: 'Delivery, planning, and governance work together to keep technology changes on track and low-risk.',
    included: [
      {
        title: 'Technology Project Delivery',
        description: 'Scoping, implementation, and rollout support with clear ownership and milestones.',
        icon: 'tabler:timeline',
      },
      {
        title: 'IT Consulting and Roadmaps',
        description: 'Prioritized planning tied to business goals, not generic refresh cycles.',
        icon: 'tabler:map-2',
      },
      {
        title: 'vCIO and Vendor Coordination',
        description: 'Executive-level guidance for budgeting, licensing, and provider accountability.',
        icon: 'tabler:briefcase',
      },
    ],
    approach:
      'Good strategy is operational. We combine executive planning with execution details so initiatives actually ship.',
    outcomes: [
      {
        title: 'Fewer Project Surprises',
        description: 'Stronger planning and dependencies reduce rework, delays, and hidden risk.',
        icon: 'tabler:checklist',
      },
      {
        title: 'Smarter Spend',
        description: 'Licensing and vendor decisions align to utilization and business priorities.',
        icon: 'tabler:coin',
      },
      {
        title: 'Clear Accountability',
        description: 'Defined ownership keeps stakeholders aligned through delivery and handoff.',
        icon: 'tabler:users-group',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_1254815659-optimized.jpg',
      alt: 'Project planning session with business and technology metrics',
    },
    related: ['managed-it', 'network-infrastructure', 'it-solutions'],
    relatedSummary: 'Project success depends on the operational foundation around it.',
  },
  'computer-repair-services': {
    slug: 'computer-repair-services',
    title: 'Computer Repair Services',
    category: 'IT',
    icon: 'tabler:tool',
    metaTitle: 'Computer Repair Services',
    metaDescription:
      'Computer repair services for diagnostics, hardware repair, malware cleanup, and performance optimization for business and home systems.',
    heroSubtitle:
      'Hands-on repair services that restore reliability fast, protect important data, and keep your systems running smoothly.',
    scopeTitle: 'What Computer Repair Services Covers',
    scopeSubtitle:
      'This service combines diagnostics, repair, cleanup, and performance tuning for workstations, laptops, and custom desktops.',
    included: [
      {
        title: 'Hardware and Software Diagnostics',
        description: 'Root-cause troubleshooting for crashes, boot failures, instability, and slow performance.',
        icon: 'tabler:search',
      },
      {
        title: 'Data Recovery and Transfer',
        description: 'Recover important files from failing systems and migrate data to safe storage.',
        icon: 'tabler:database',
      },
      {
        title: 'Virus and Malware Removal',
        description: 'Remove malicious software and close common reinfection paths.',
        icon: 'tabler:shield-x',
      },
      {
        title: 'Performance Optimization',
        description: 'Tune devices for faster startup, smoother workflows, and better stability.',
        icon: 'tabler:cpu',
      },
    ],
    approach:
      'We fix the immediate issue, then address the underlying causes so systems stay dependable after the repair is complete.',
    outcomes: [
      {
        title: 'Faster System Recovery',
        description: 'Devices return to working condition quickly with clear remediation steps.',
        icon: 'tabler:bolt',
      },
      {
        title: 'Protected Critical Files',
        description: 'Important business and personal data is recovered or safely migrated when possible.',
        icon: 'tabler:file-check',
      },
      {
        title: 'Improved Day-to-Day Performance',
        description: 'Systems become more responsive and stable for ongoing use.',
        icon: 'tabler:activity',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_660436612-optimized.jpg',
      alt: 'Technician repairing desktop hardware and internal computer components',
    },
    related: ['data-recovery', 'virus-removal', 'optimization'],
    relatedSummary: 'Specialized repair services recover data, remove malware, and restore system performance.',
  },
  'data-recovery': {
    slug: 'data-recovery',
    title: 'Data Recovery',
    category: 'IT',
    icon: 'tabler:database',
    metaTitle: 'Data Recovery Services',
    metaDescription:
      'Data recovery services for failed drives, corrupted systems, accidental deletion, and secure migration of recovered files.',
    heroSubtitle:
      'Recover important files from damaged or inaccessible systems with a structured process focused on data integrity.',
    scopeTitle: 'What Data Recovery Covers',
    scopeSubtitle:
      'The service addresses diagnosis, recovery strategy, and secure transfer so recovered files are usable and protected.',
    included: [
      {
        title: 'Storage Failure Assessment',
        description: 'Evaluate drive health, corruption risks, and the most viable recovery approach.',
        icon: 'tabler:database',
      },
      {
        title: 'Logical and File-Level Recovery',
        description: 'Recover deleted, damaged, or inaccessible files from supported storage media.',
        icon: 'tabler:file-search',
      },
      {
        title: 'Secure Data Migration',
        description: 'Move recovered data to verified storage with folder structure checks.',
        icon: 'tabler:folders',
      },
    ],
    approach:
      'We prioritize data safety first, then recover and validate files using repeatable procedures that reduce further loss risk.',
    outcomes: [
      {
        title: 'Higher Recovery Success Rates',
        description: 'Methodical diagnostics improve the chances of recovering critical files.',
        icon: 'tabler:chart-line',
      },
      {
        title: 'Lower Data Loss Impact',
        description: 'Recovered files reduce operational and financial disruption after incidents.',
        icon: 'tabler:lifebuoy',
      },
      {
        title: 'Safer Storage Practices',
        description: 'Post-recovery guidance helps prevent repeat data-loss events.',
        icon: 'tabler:shield-check',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_345985838-optimized.jpg',
      alt: 'Enterprise storage and server infrastructure used for data protection and recovery',
    },
    related: ['virus-removal', 'optimization', 'computer-repair-services'],
    relatedSummary: 'Data recovery is strongest when paired with malware cleanup and performance stabilization.',
  },
  'virus-removal': {
    slug: 'virus-removal',
    title: 'Virus Removal',
    category: 'IT',
    icon: 'tabler:shield-x',
    metaTitle: 'Virus and Malware Removal',
    metaDescription:
      'Virus and malware removal services that clean infected systems, restore stability, and harden endpoints against reinfection.',
    heroSubtitle:
      'Remove active malware, repair affected systems, and restore trustworthy operation with practical endpoint hardening.',
    scopeTitle: 'What Virus Removal Covers',
    scopeSubtitle:
      'This service includes containment, malware cleanup, system validation, and preventive hardening steps.',
    included: [
      {
        title: 'Threat Containment and Isolation',
        description: 'Stop spread quickly by isolating infected systems and controlling risky activity.',
        icon: 'tabler:lock',
      },
      {
        title: 'Malware Cleanup and Remediation',
        description: 'Remove malicious files, startup persistence, and suspicious processes.',
        icon: 'tabler:shield-x',
      },
      {
        title: 'Post-Cleanup Hardening',
        description: 'Apply patching and security configuration updates to reduce reinfection risk.',
        icon: 'tabler:shield-check',
      },
    ],
    approach:
      'We remove the threat, verify system stability, and apply practical safeguards so machines stay clean after remediation.',
    outcomes: [
      {
        title: 'Restored System Trust',
        description: 'Devices return to known-good state with verified remediation actions.',
        icon: 'tabler:checklist',
      },
      {
        title: 'Reduced Reinfection Risk',
        description: 'Hardening and cleanup standards close common attack paths.',
        icon: 'tabler:shield-lock',
      },
      {
        title: 'Less Operational Disruption',
        description: 'Faster containment and cleanup shortens malware-related downtime.',
        icon: 'tabler:clock-check',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_1240832179-optimized.jpg',
      alt: 'Security operations staff monitoring threats and incident response workflows',
    },
    related: ['data-recovery', 'optimization', 'computer-repair-services'],
    relatedSummary: 'Malware cleanup pairs with data recovery and optimization to fully restore endpoint health.',
  },
  optimization: {
    slug: 'optimization',
    title: 'Computer Optimization',
    category: 'IT',
    icon: 'tabler:cpu',
    metaTitle: 'Computer Optimization Services',
    metaDescription:
      'Computer optimization services that improve speed, responsiveness, and stability for laptops and desktops.',
    heroSubtitle:
      'Tune systems for faster performance and better reliability with practical, measurable optimization workflows.',
    scopeTitle: 'What Computer Optimization Covers',
    scopeSubtitle:
      'The service focuses on performance bottlenecks, startup overhead, storage health, and operating system tuning.',
    included: [
      {
        title: 'Startup and Process Tuning',
        description: 'Reduce unnecessary startup load and resource-heavy background services.',
        icon: 'tabler:rocket',
      },
      {
        title: 'Storage and System Cleanup',
        description: 'Reclaim disk space and correct system clutter that slows operation.',
        icon: 'tabler:trash',
      },
      {
        title: 'Performance Baseline Validation',
        description: 'Measure before-and-after improvements for speed and stability.',
        icon: 'tabler:chart-bar',
      },
    ],
    approach:
      'We apply targeted optimizations based on bottleneck analysis instead of one-size-fits-all cleanup scripts.',
    outcomes: [
      {
        title: 'Faster Boot and Launch Times',
        description: 'Systems start and open applications with less delay.',
        icon: 'tabler:bolt',
      },
      {
        title: 'Smoother Daily Workflows',
        description: 'Users see more consistent responsiveness during normal operations.',
        icon: 'tabler:activity',
      },
      {
        title: 'Longer Hardware Usability',
        description: 'Optimized configurations help extend practical device lifespan.',
        icon: 'tabler:device-desktop',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_660436612-optimized.jpg',
      alt: 'Technician tuning and upgrading desktop computer hardware for better performance',
    },
    related: ['virus-removal', 'custom-gaming-builds', 'computer-repair-services'],
    relatedSummary: 'Optimization keeps repaired systems responsive and ready for heavier workloads.',
  },
  'custom-gaming-builds': {
    slug: 'custom-gaming-builds',
    title: 'Custom Gaming Builds',
    category: 'IT',
    icon: 'tabler:device-desktop',
    metaTitle: 'Custom Gaming PC Builds',
    metaDescription:
      'Custom gaming PC build services with part selection, assembly, cooling design, and performance tuning.',
    heroSubtitle:
      'Build high-performance gaming systems with component planning, clean assembly, and stability-focused tuning.',
    scopeTitle: 'What Custom Gaming Builds Covers',
    scopeSubtitle:
      'The service includes design consultation, part compatibility planning, assembly standards, and post-build tuning.',
    included: [
      {
        title: 'Component Selection and Compatibility',
        description: 'Match CPU, GPU, RAM, storage, and cooling to performance and budget goals.',
        icon: 'tabler:checklist',
      },
      {
        title: 'Precision Assembly and Cable Management',
        description: 'Build systems with clean internal layout, airflow, and maintainability in mind.',
        icon: 'tabler:tool',
      },
      {
        title: 'Performance and Stability Tuning',
        description: 'Validate thermals and tune system settings for reliable high-load operation.',
        icon: 'tabler:cpu',
      },
    ],
    approach:
      'We design each build around your target games, settings, and upgrade path so performance stays strong over time.',
    outcomes: [
      {
        title: 'Higher Gaming Performance',
        description: 'Optimized component choices deliver smoother frame rates and responsiveness.',
        icon: 'tabler:arrow-up-right',
      },
      {
        title: 'Clean and Serviceable Build Quality',
        description: 'Structured assembly makes maintenance and upgrades easier.',
        icon: 'tabler:settings',
      },
      {
        title: 'Reliable Thermals Under Load',
        description: 'Cooling and airflow design reduce throttling and instability.',
        icon: 'tabler:activity',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_1089987056-optimized.jpg',
      alt: 'High-performance custom gaming PC build with advanced cooling and cable management',
    },
    related: ['optimization', 'computer-repair-services', 'data-recovery'],
    relatedSummary: 'Custom builds benefit from ongoing optimization and trusted repair support.',
  },
  'cybersecurity-solutions': {
    slug: 'cybersecurity-solutions',
    title: 'Cybersecurity',
    category: 'IT',
    icon: 'tabler:shield-lock',
    metaTitle: 'Cybersecurity Solutions',
    metaDescription:
      'Cybersecurity solutions focused on prevention, detection, and response planning to reduce attack impact and downtime.',
    heroSubtitle:
      'Layered security controls designed to block common attack paths and improve recovery when incidents happen.',
    scopeTitle: 'What Cybersecurity Covers',
    scopeSubtitle:
      'Coverage includes technical safeguards, user readiness, and recovery planning across critical systems.',
    included: [
      {
        title: 'Risk and Vulnerability Management',
        description: 'Continuous scanning and prioritization of exploitable weaknesses.',
        icon: 'tabler:shield-search',
      },
      {
        title: 'Ransomware Prevention Controls',
        description: 'Identity, endpoint, and backup defenses that limit spread and business impact.',
        icon: 'tabler:shield-lock',
      },
      {
        title: 'Incident Readiness',
        description: 'Playbooks, escalation paths, and training so teams respond with less confusion.',
        icon: 'tabler:alert-triangle',
      },
    ],
    approach:
      'Security programs succeed when controls are practical, measurable, and integrated into daily operations.',
    outcomes: [
      {
        title: 'Reduced Attack Surface',
        description: 'Fewer exposed services and weak configurations available to threat actors.',
        icon: 'tabler:lock',
      },
      {
        title: 'Faster Detection and Response',
        description: 'Clear monitoring and response paths shorten containment time.',
        icon: 'tabler:activity',
      },
      {
        title: 'Improved Business Resilience',
        description: 'Recovery planning lowers operational and financial impact after incidents.',
        icon: 'tabler:lifebuoy',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_1240832179-optimized.jpg',
      alt: 'Security operations team monitoring threat and incident activity',
    },
    related: ['vulnerability-scanning', 'ransomware-prevention', 'backup-recovery'],
    relatedSummary: 'These focused services strengthen specific parts of your security posture.',
  },
  'vulnerability-scanning': {
    slug: 'vulnerability-scanning',
    title: 'Vulnerability Scanning',
    category: 'IT',
    icon: 'tabler:shield-search',
    metaTitle: 'Vulnerability Scanning Services',
    metaDescription:
      'Vulnerability scanning services that continuously identify exploitable weaknesses and prioritize remediation by business risk.',
    heroSubtitle:
      'Continuous scanning and practical remediation planning to close high-risk security gaps before they are exploited.',
    scopeTitle: 'What Vulnerability Scanning Covers',
    scopeSubtitle: 'Scanning is only useful when findings are prioritized and resolved with clear ownership.',
    included: [
      {
        title: 'Internal and External Scanning',
        description: 'Coverage across internet-facing assets and internal systems.',
        icon: 'tabler:world-search',
      },
      {
        title: 'Risk-Based Prioritization',
        description: 'Findings ranked by exploitability and business impact, not raw volume.',
        icon: 'tabler:sort-descending',
      },
      {
        title: 'Remediation Guidance',
        description: 'Actionable fix plans for IT teams and system owners.',
        icon: 'tabler:list-details',
      },
    ],
    approach:
      'We emphasize repeatable remediation cycles so security findings consistently move from detection to closure.',
    outcomes: [
      {
        title: 'Fewer Critical Exposures',
        description: 'High-risk vulnerabilities are identified and addressed faster.',
        icon: 'tabler:shield-check',
      },
      {
        title: 'Better Compliance Readiness',
        description: 'Documented scanning and remediation support audit expectations.',
        icon: 'tabler:file-certificate',
      },
      {
        title: 'Clear Security Visibility',
        description: 'Leadership gets trend data instead of one-time point-in-time reports.',
        icon: 'tabler:chart-line',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_1515878150-optimized.jpg',
      alt: 'Technical analysts reviewing system architecture and risk data',
    },
    related: ['cybersecurity-solutions', 'ransomware-prevention', 'security-awareness-training'],
    relatedSummary: 'Scanning is strongest when paired with user and endpoint controls.',
  },
  'ransomware-prevention': {
    slug: 'ransomware-prevention',
    title: 'Ransomware Prevention',
    category: 'IT',
    icon: 'tabler:shield-x',
    metaTitle: 'Ransomware Prevention Services',
    metaDescription:
      'Ransomware prevention services that combine endpoint controls, identity protection, and recovery safeguards.',
    heroSubtitle:
      'Practical defense layers that make ransomware harder to execute, harder to spread, and easier to recover from.',
    scopeTitle: 'What Ransomware Prevention Covers',
    scopeSubtitle: 'This service reduces both attack probability and business impact through layered controls.',
    included: [
      {
        title: 'Endpoint Hardening',
        description: 'Policy and detection controls that limit execution of malicious payloads.',
        icon: 'tabler:device-imac-check',
      },
      {
        title: 'Identity and Access Protections',
        description: 'MFA, privileged access controls, and sign-in policies to reduce account abuse.',
        icon: 'tabler:key',
      },
      {
        title: 'Containment and Recovery Planning',
        description: 'Response playbooks that limit spread and restore critical operations quickly.',
        icon: 'tabler:lifebuoy',
      },
    ],
    approach:
      'Ransomware defense is a system, not a single tool. We align controls across users, endpoints, identity, and backups.',
    outcomes: [
      {
        title: 'Lower Blast Radius',
        description: 'Segmentation and control layers reduce lateral movement during an incident.',
        icon: 'tabler:arrows-split-2',
      },
      {
        title: 'Faster Containment',
        description: 'Playbooks and telemetry reduce time to isolate affected systems.',
        icon: 'tabler:stopwatch',
      },
      {
        title: 'Higher Recovery Confidence',
        description: 'Recovery processes are validated before a real emergency occurs.',
        icon: 'tabler:shield-check',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_661113826-optimized.jpg',
      alt: 'IT specialists hardening server infrastructure in a data center',
    },
    related: ['backup-recovery', 'cybersecurity-solutions', 'vulnerability-scanning'],
    relatedSummary: 'Prevention should be paired with tested recovery plans and risk scanning.',
  },
  'backup-recovery': {
    slug: 'backup-recovery',
    title: 'Backups and Recovery',
    category: 'IT',
    icon: 'tabler:database-export',
    metaTitle: 'Backup and Recovery Services',
    metaDescription:
      'Backup and recovery services with retention design, immutable storage options, and tested restore workflows.',
    heroSubtitle:
      'Data protection planning that preserves critical systems and restores operations quickly after deletion, failure, or attack.',
    scopeTitle: 'What Backup and Recovery Covers',
    scopeSubtitle: 'Recovery success depends on backup architecture, retention policy, and regular restore testing.',
    included: [
      {
        title: 'Backup Architecture and Retention',
        description: 'Design by workload criticality, compliance needs, and realistic recovery windows.',
        icon: 'tabler:database',
      },
      {
        title: 'Immutable and Offsite Options',
        description: 'Protection against tampering and site-level disruptions.',
        icon: 'tabler:shield-lock',
      },
      {
        title: 'Restore Testing and Validation',
        description: 'Scheduled restore tests to confirm backups are usable under pressure.',
        icon: 'tabler:flask',
      },
    ],
    approach:
      'We treat recovery as an operational process, with clear runbooks, responsibilities, and verification checkpoints.',
    outcomes: [
      {
        title: 'Faster Restoration',
        description: 'Documented procedures reduce downtime when systems need to be recovered.',
        icon: 'tabler:refresh',
      },
      {
        title: 'Lower Data Loss Risk',
        description: 'Retention strategy and backup frequency align to business tolerance levels.',
        icon: 'tabler:file-check',
      },
      {
        title: 'Audit-Ready Recovery Evidence',
        description: 'Testing records and policy artifacts support compliance and governance reviews.',
        icon: 'tabler:file-analytics',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_345985838-optimized.jpg',
      alt: 'Data center server racks supporting backup and recovery infrastructure',
    },
    related: ['ransomware-prevention', 'cybersecurity-solutions', 'security-awareness-training'],
    relatedSummary: 'Recovery planning is strongest alongside preventive security controls.',
  },
  'security-awareness-training': {
    slug: 'security-awareness-training',
    title: 'Security Awareness Training',
    category: 'IT',
    icon: 'tabler:school',
    metaTitle: 'Security Awareness Training',
    metaDescription:
      'Security awareness training that helps employees identify phishing, social engineering, and risky behavior.',
    heroSubtitle:
      'Practical training programs that improve user judgment and reduce the human-error risks attackers rely on.',
    scopeTitle: 'What Security Awareness Training Covers',
    scopeSubtitle: 'Education works best when it is continuous, role-aware, and tied to real attack patterns.',
    included: [
      {
        title: 'Phishing Simulation Campaigns',
        description: 'Measured simulations that reinforce detection and reporting habits.',
        icon: 'tabler:mail-exclamation',
      },
      {
        title: 'Role-Based Training Content',
        description: 'Training tracks tailored by department risk profile and access level.',
        icon: 'tabler:users',
      },
      {
        title: 'Reporting and Coaching',
        description: 'Behavior insights and targeted follow-up for teams that need extra reinforcement.',
        icon: 'tabler:message-report',
      },
    ],
    approach:
      'The goal is not perfect scores. It is measurable behavior change that lowers incident frequency over time.',
    outcomes: [
      {
        title: 'Fewer Successful Phishing Attempts',
        description: 'Users become better at identifying suspicious content before clicking.',
        icon: 'tabler:shield-check',
      },
      {
        title: 'Faster Incident Reporting',
        description: 'Potential threats are escalated quickly, helping security teams respond sooner.',
        icon: 'tabler:alarm',
      },
      {
        title: 'Stronger Security Culture',
        description: 'Awareness becomes part of day-to-day work, not an annual checkbox task.',
        icon: 'tabler:heart-handshake',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_1927499990-optimized.jpg',
      alt: 'Security awareness training session with business team members',
    },
    related: ['cybersecurity-solutions', 'vulnerability-scanning', 'backup-recovery'],
    relatedSummary: 'User readiness complements technical controls and recovery planning.',
  },
  'cloud-productivity-protection': {
    slug: 'cloud-productivity-protection',
    title: 'Cloud Productivity Protection',
    category: 'IT',
    icon: 'tabler:shield-lock',
    metaTitle: 'Cloud Productivity Protection Services',
    metaDescription:
      'Cloud productivity protection services for email security, account hardening, backup resilience, and user-risk reduction.',
    heroSubtitle:
      'Protect cloud email, shared files, and user identities with layered controls designed for daily operations, not one-time projects.',
    scopeTitle: 'What Cloud Productivity Protection Covers',
    scopeSubtitle:
      'This service aligns account security, email defense, retention strategy, and user training into one operating model.',
    included: [
      {
        title: 'Account and Access Hardening',
        description: 'Baseline policies for authentication, access control, and privilege reduction.',
        icon: 'tabler:key',
      },
      {
        title: 'Email Threat and Impersonation Defense',
        description: 'Layered controls that reduce phishing, spoofing, and malicious payload delivery.',
        icon: 'tabler:mail-check',
      },
      {
        title: 'Recovery and Compliance Readiness',
        description: 'Retention, backup, and audit workflows that support fast restoration and governance.',
        icon: 'tabler:database',
      },
    ],
    approach:
      'We start with how teams actually communicate and share information, then apply security and recovery controls that protect those workflows.',
    outcomes: [
      {
        title: 'Lower Account Takeover Risk',
        description: 'Stronger access controls and detection reduce identity compromise opportunities.',
        icon: 'tabler:user-shield',
      },
      {
        title: 'Fewer Email-Borne Incidents',
        description: 'Threat filtering and impersonation controls lower user exposure to malicious content.',
        icon: 'tabler:mail-check',
      },
      {
        title: 'Faster Restoration',
        description: 'Structured retention and recovery processes shorten disruption after deletion or attack.',
        icon: 'tabler:refresh',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_1515878150-optimized.jpg',
      alt: 'IT team managing cloud collaboration security and operational controls',
    },
    related: [
      'cloud-email-threat-protection',
      'cloud-backup-archiving',
      'managed-security-awareness-program',
    ],
    relatedSummary:
      'These focused services strengthen email defense, data resilience, and user-risk reduction in cloud environments.',
  },
  'cloud-email-threat-protection': {
    slug: 'cloud-email-threat-protection',
    title: 'Cloud Email Threat Protection',
    category: 'IT',
    icon: 'tabler:mail-check',
    metaTitle: 'Cloud Email Threat Protection',
    metaDescription:
      'Cloud email threat protection services for phishing defense, impersonation controls, and malicious attachment containment.',
    heroSubtitle:
      'Protect business email from phishing, impersonation, and payload-driven attacks with policy-driven filtering and rapid response workflows.',
    scopeTitle: 'What Cloud Email Threat Protection Covers',
    scopeSubtitle:
      'The service blends preventive filtering, user reporting workflows, and incident response coordination for business email.',
    included: [
      {
        title: 'Impersonation and Spoofing Controls',
        description: 'Domain alignment, sender validation, and policy tuning to reduce trust-based abuse.',
        icon: 'tabler:user-scan',
      },
      {
        title: 'Malicious Link and Attachment Defense',
        description: 'Automated analysis and blocking policies for suspicious content before user interaction.',
        icon: 'tabler:link-off',
      },
      {
        title: 'Inbox Incident Response Workflow',
        description: 'Coordinated triage and remediation steps for suspicious email reports.',
        icon: 'tabler:alarm',
      },
    ],
    approach:
      'Email security succeeds when prevention, user reporting, and remediation are operated as one process with clear ownership.',
    outcomes: [
      {
        title: 'Reduced Phishing Exposure',
        description: 'Users receive fewer high-risk messages in active inboxes.',
        icon: 'tabler:shield-lock',
      },
      {
        title: 'Faster Threat Containment',
        description: 'Reported email incidents are triaged and remediated before widespread impact.',
        icon: 'tabler:bolt',
      },
      {
        title: 'Stronger Trust in Business Email',
        description: 'Policy alignment improves message authenticity and reduces spoofing risk.',
        icon: 'tabler:mail-check',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_739285162-optimized.jpg',
      alt: 'Security analyst reviewing suspicious business email events',
    },
    related: [
      'managed-security-awareness-program',
      'cloud-backup-archiving',
      'cloud-productivity-protection',
    ],
    relatedSummary: 'Email controls are strongest when paired with user training and recovery planning.',
  },
  'cloud-backup-archiving': {
    slug: 'cloud-backup-archiving',
    title: 'Cloud Backup and Archiving',
    category: 'IT',
    icon: 'tabler:database-export',
    metaTitle: 'Cloud Backup and Archiving Services',
    metaDescription:
      'Cloud backup and archiving services for mailbox and file retention, point-in-time recovery, and compliance-ready restoration.',
    heroSubtitle:
      'Protect cloud mailbox and file data with resilient backup, policy-based retention, and tested restoration workflows.',
    scopeTitle: 'What Cloud Backup and Archiving Covers',
    scopeSubtitle:
      'This service addresses backup frequency, archive retention, and restore execution for business-critical cloud data.',
    included: [
      {
        title: 'Mailbox and File Backup Coverage',
        description: 'Automated backup for core collaboration data with retention by business priority.',
        icon: 'tabler:database',
      },
      {
        title: 'Archive and Legal Hold Controls',
        description: 'Policy-driven retention to support discovery, governance, and audit requirements.',
        icon: 'tabler:archive',
      },
      {
        title: 'Point-in-Time Restore Validation',
        description: 'Regular test restores to verify backup integrity and recovery speed.',
        icon: 'tabler:clock',
      },
    ],
    approach:
      'We align retention and backup depth to operational risk so recovery is practical during real incidents, not theoretical.',
    outcomes: [
      {
        title: 'Faster Data Recovery',
        description: 'Structured restore playbooks reduce downtime after deletion, corruption, or compromise.',
        icon: 'tabler:refresh',
      },
      {
        title: 'Lower Data Loss Risk',
        description: 'Retention policies and backup cadence protect against both user error and malicious activity.',
        icon: 'tabler:file-check',
      },
      {
        title: 'Better Compliance Support',
        description: 'Archived records and restore evidence support legal and governance workflows.',
        icon: 'tabler:file-analytics',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_345985838-optimized.jpg',
      alt: 'Operations team validating cloud data backup and archive retention controls',
    },
    related: ['cloud-email-threat-protection', 'cloud-productivity-protection', 'backup-recovery'],
    relatedSummary: 'Cloud data resilience improves when recovery planning and email security are coordinated.',
  },
  'managed-security-awareness-program': {
    slug: 'managed-security-awareness-program',
    title: 'Managed Security Awareness Program',
    category: 'IT',
    icon: 'tabler:school',
    metaTitle: 'Managed Security Awareness Program',
    metaDescription:
      'Managed security awareness services with phishing simulations, role-based training, and behavior reporting.',
    heroSubtitle:
      'Build measurable user-risk reduction through continuous training, realistic simulations, and actionable coaching.',
    scopeTitle: 'What Managed Security Awareness Covers',
    scopeSubtitle:
      'The program combines campaigns, role-aware learning paths, and reporting loops that drive behavior change.',
    included: [
      {
        title: 'Phishing Simulation Program',
        description: 'Ongoing simulations calibrated to threat trends and department-level risk patterns.',
        icon: 'tabler:mail-exclamation',
      },
      {
        title: 'Role-Based Awareness Training',
        description: 'Targeted content by function, data exposure, and access level.',
        icon: 'tabler:users',
      },
      {
        title: 'Behavior Reporting and Coaching',
        description: 'Performance insights and focused coaching for teams that need reinforcement.',
        icon: 'tabler:chart-dots-2',
      },
    ],
    approach:
      'Security awareness is managed as an operational program with regular cycles, clear metrics, and leadership visibility.',
    outcomes: [
      {
        title: 'Lower Human-Error Incident Rate',
        description: 'Users identify suspicious activity earlier and avoid high-risk actions.',
        icon: 'tabler:shield-check',
      },
      {
        title: 'Stronger Reporting Culture',
        description: 'Potential attacks are escalated sooner, improving containment speed.',
        icon: 'tabler:alarm',
      },
      {
        title: 'Continuous Risk Improvement',
        description: 'Campaign data guides program tuning over time instead of one-time training events.',
        icon: 'tabler:trending-up',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_1927499990-optimized.jpg',
      alt: 'Business users participating in a managed security awareness session',
    },
    related: ['cloud-email-threat-protection', 'cloud-productivity-protection', 'security-awareness-training'],
    relatedSummary:
      'User training programs are most effective when coordinated with email defenses and broader security operations.',
  },
  'email-signature-management': {
    slug: 'email-signature-management',
    title: 'Email Signature Management',
    category: 'IT',
    icon: 'tabler:signature',
    metaTitle: 'Email Signature Management Services',
    metaDescription:
      'Email signature management services for centralized branding, disclaimers, campaign banners, and policy enforcement.',
    heroSubtitle:
      'Standardize outbound email signatures, legal disclaimers, and marketing banners across the organization with centralized control.',
    scopeTitle: 'What Email Signature Management Covers',
    scopeSubtitle:
      'The service handles template governance, role-based assignment, and controlled updates to outbound email identity.',
    included: [
      {
        title: 'Central Signature Template Governance',
        description: 'Maintain approved templates with controlled fields for consistency and compliance.',
        icon: 'tabler:template',
      },
      {
        title: 'Role-Based Branding and Disclaimers',
        description: 'Apply department and role-specific legal and brand elements automatically.',
        icon: 'tabler:badge',
      },
      {
        title: 'Campaign Banner Scheduling',
        description: 'Coordinate time-bound promotions and announcements across all outbound signatures.',
        icon: 'tabler:calendar-time',
      },
    ],
    approach:
      'Signature management works best as a governed process with clear approval flows and integration into employee lifecycle changes.',
    outcomes: [
      {
        title: 'Consistent Outbound Branding',
        description: 'Customer-facing email has uniform identity and formatting across teams.',
        icon: 'tabler:palette',
      },
      {
        title: 'Stronger Disclaimer Compliance',
        description: 'Required legal language is applied reliably without manual user effort.',
        icon: 'tabler:file-certificate',
      },
      {
        title: 'Faster Organization-Wide Updates',
        description: 'Template changes can be rolled out centrally without touching each mailbox.',
        icon: 'tabler:send',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_1254815659-optimized.jpg',
      alt: 'Marketing and operations teams managing standardized email signature templates',
    },
    related: ['cloud-productivity-protection', 'cloud-email-threat-protection', 'managed-security-awareness-program'],
    relatedSummary:
      'Signature governance complements cloud email security and user-risk programs by standardizing outbound communication.',
  },
  'unified-communications': {
    slug: 'unified-communications',
    title: 'Unified Communications',
    category: 'Communications',
    icon: 'tabler:messages',
    metaTitle: 'Unified Communications Services',
    metaDescription:
      'Unified communications services that combine voice, messaging, and collaboration with fully managed telecom operations and US-based support.',
    heroSubtitle:
      'Bring calling, messaging, and collaboration into one dependable environment with live support and managed operations built to scale.',
    scopeTitle: 'What Unified Communications Covers',
    scopeSubtitle:
      'The service aligns phone systems, call workflows, and collaboration tools into a single communication strategy.',
    included: [
      {
        title: 'Business Voice Platforms',
        description: 'Cloud and hybrid calling environments designed for uptime and call quality.',
        icon: 'tabler:phone-call',
      },
      {
        title: 'Call Flow and Queue Optimization',
        description: 'Routing and overflow logic that protects customer response times.',
        icon: 'tabler:arrows-shuffle',
      },
      {
        title: 'Collaboration Integration',
        description: 'Teams and document workflows connected for smoother internal coordination.',
        icon: 'tabler:brand-teams',
      },
      {
        title: 'Fully Managed Telecom Operations',
        description: 'Day-to-day administration, change requests, and provider coordination handled by our team.',
        icon: 'tabler:briefcase',
      },
    ],
    approach:
      'We design communications around real call patterns and workflows, then run operations with live US-based support so your team is not stuck managing telecom complexity.',
    outcomes: [
      {
        title: 'Improved Caller Experience',
        description: 'Calls reach the right team faster with less transfer friction.',
        icon: 'tabler:user-scan',
      },
      {
        title: 'More Reliable Operations',
        description: 'Redundancy and administration standards reduce communication outages.',
        icon: 'tabler:phone-check',
      },
      {
        title: 'Reduced Telecom Management Burden',
        description: 'A managed operating model removes day-to-day telecom administration from internal teams.',
        icon: 'tabler:clipboard-check',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_656511496-optimized.jpg',
      alt: 'Team using headsets and desktop tools for unified communications',
    },
    related: ['reliable-phone-systems', 'call-management', 'collaboration-tools'],
    relatedSummary: 'Unified communications combines voice and collaboration into one operating model.',
  },
  'reliable-phone-systems': {
    slug: 'reliable-phone-systems',
    title: 'Phone Systems',
    category: 'Communications',
    icon: 'tabler:phone',
    metaTitle: 'Business Phone Systems',
    metaDescription:
      'Business phone system services with managed hardware, tailored provisioning, US-based support, and staff training.',
    heroSubtitle:
      'Modern phone systems built for dependable uptime, intuitive usability, and fully managed telecom operations.',
    scopeTitle: 'What Phone Systems Covers',
    scopeSubtitle:
      'The service combines reliable voice infrastructure, tailored phone setup, live support, and training so teams can communicate with confidence.',
    included: [
      {
        title: 'Cloud and Hybrid Voice Engineering',
        description: 'Voice platform architecture designed for availability, clear call quality, and predictable operations.',
        icon: 'tabler:phone-plus',
      },
      {
        title: 'Business-Grade Phone Hardware',
        description: 'Professional desk phones and endpoints provisioned for dependable day-to-day performance.',
        icon: 'tabler:device-imac-check',
      },
      {
        title: 'Tailored Endpoint Provisioning',
        description: 'Role-based button layouts, extensions, and workflows configured for easier adoption.',
        icon: 'tabler:settings',
      },
      {
        title: 'US-Based Live Support',
        description: 'Direct access to skilled support engineers instead of automated call trees.',
        icon: 'tabler:headset',
      },
      {
        title: 'Staff Training and Adoption',
        description: 'No-cost onboarding and refresher training to improve confidence and reduce user friction.',
        icon: 'tabler:school',
      },
      {
        title: 'Fully Managed Telecom Administration',
        description: 'Moves, adds, changes, and carrier coordination handled by specialists.',
        icon: 'tabler:briefcase',
      },
    ],
    approach:
      'Phone systems should be easy for users and low-maintenance for leadership. We design for reliability, then operate it as a managed service with clear accountability.',
    outcomes: [
      {
        title: 'Round-the-Clock Communication Continuity',
        description: 'Resilient design and active operations reduce communication disruptions across business hours and after-hours.',
        icon: 'tabler:phone-check',
      },
      {
        title: 'Faster User Adoption',
        description: 'Tailored phone setup and structured training help teams use the system correctly from day one.',
        icon: 'tabler:users',
      },
      {
        title: 'Lower Internal Telecom Overhead',
        description: 'A fully managed model removes day-to-day phone administration from your internal staff.',
        icon: 'tabler:clipboard-check',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_377884705-optimized.jpg',
      alt: 'Modern VoIP desk phones in a business conference setting',
    },
    related: ['call-management', 'call-recording', 'unified-communications'],
    relatedSummary: 'Phone reliability improves when managed operations, call controls, and quality workflows are aligned.',
  },
  'call-management': {
    slug: 'call-management',
    title: 'Call Management',
    category: 'Communications',
    icon: 'tabler:phone-call',
    metaTitle: 'Call Management Services',
    metaDescription:
      'Call management services for queue design, overflow routing, and analytics that improve answer rates.',
    heroSubtitle:
      'Optimize the way calls move through your business so customers reach the right team without long delays.',
    scopeTitle: 'What Call Management Covers',
    scopeSubtitle: 'The service focuses on visibility, routing logic, and staffing-aware queue control.',
    included: [
      {
        title: 'Queue and Overflow Design',
        description: 'Routing strategy that reduces hold times and abandoned calls.',
        icon: 'tabler:arrows-transfer-up',
      },
      {
        title: 'Call Analytics and Reporting',
        description: 'Performance tracking for answer rates, transfer patterns, and service gaps.',
        icon: 'tabler:chart-dots-2',
      },
      {
        title: 'Policy-Based Call Controls',
        description: 'Rules for schedules, escalation, and priority handling during peak windows.',
        icon: 'tabler:adjustments',
      },
    ],
    approach: 'We tune call workflows around your busiest hours and service commitments, not generic default settings.',
    outcomes: [
      {
        title: 'Higher Answer Rates',
        description: 'Smarter routing gets more callers to the right person on the first attempt.',
        icon: 'tabler:phone-check',
      },
      {
        title: 'Lower Abandonment',
        description: 'Queue controls shorten wait times and reduce caller drop-off.',
        icon: 'tabler:user-off',
      },
      {
        title: 'Improved Team Utilization',
        description: 'Performance data helps align staffing and call volume more accurately.',
        icon: 'tabler:users-plus',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_377884705-optimized.jpg',
      alt: 'Business call management planning with desk phones and analytics tools',
    },
    related: ['call-recording', 'reliable-phone-systems', 'unified-communications'],
    relatedSummary: 'Call management creates the operating layer for modern phone systems.',
  },
  'collaboration-tools': {
    slug: 'collaboration-tools',
    title: 'Collaboration',
    category: 'Communications',
    icon: 'tabler:brand-teams',
    metaTitle: 'Collaboration Tools Services',
    metaDescription:
      'Collaboration services for Microsoft Teams and SharePoint that improve communication, file access, and workflow consistency.',
    heroSubtitle:
      'Collaboration environments configured for secure teamwork, cleaner file sharing, and faster internal execution.',
    scopeTitle: 'What Collaboration Covers',
    scopeSubtitle:
      'This service connects meetings, messaging, and documents so teams can coordinate without tool sprawl.',
    included: [
      {
        title: 'Teams Collaboration Design',
        description: 'Channel structure, meeting policy, and governance tailored to business workflows.',
        icon: 'tabler:brand-teams',
      },
      {
        title: 'SharePoint Information Architecture',
        description: 'Document libraries and permissions designed for easier discovery and control.',
        icon: 'tabler:folders',
      },
      {
        title: 'Workflow Integration',
        description: 'Connected Teams and SharePoint processes that reduce manual handoffs.',
        icon: 'tabler:share',
      },
    ],
    approach:
      'Collaboration should reduce noise, not create it. We tune structure and governance to support real team behavior.',
    outcomes: [
      {
        title: 'Faster Internal Coordination',
        description: 'Teams spend less time chasing files, updates, and approvals.',
        icon: 'tabler:clock-play',
      },
      {
        title: 'Cleaner Knowledge Access',
        description: 'Documents and conversations are easier to find and manage.',
        icon: 'tabler:search',
      },
      {
        title: 'Stronger Collaboration Security',
        description: 'Permissions and sharing controls reduce accidental exposure.',
        icon: 'tabler:lock-access',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_1515878150-optimized.jpg',
      alt: 'Team collaborating on shared digital workflows at a workstation',
    },
    related: ['microsoft-teams', 'sharepoint', 'unified-communications'],
    relatedSummary: 'Platform-specific services can deepen Teams and SharePoint outcomes.',
  },
  'call-recording': {
    slug: 'call-recording',
    title: 'Call Recording',
    category: 'Communications',
    icon: 'tabler:microphone-2',
    metaTitle: 'Call Recording Services',
    metaDescription: 'Call recording services with policy controls, retention settings, and quality review workflows.',
    heroSubtitle:
      'Capture business calls with clear policy controls to support quality assurance, coaching, and accountability.',
    scopeTitle: 'What Call Recording Covers',
    scopeSubtitle: 'Recording strategy should balance compliance, quality needs, and operational practicality.',
    included: [
      {
        title: 'Recording Policy Design',
        description: 'Define who is recorded, when recording starts, and how notices are handled.',
        icon: 'tabler:clipboard-text',
      },
      {
        title: 'Storage and Retention Controls',
        description: 'Retention settings aligned to legal, operational, and review requirements.',
        icon: 'tabler:archive',
      },
      {
        title: 'Quality Review Workflow',
        description: 'Structured review process for coaching, dispute handling, and service consistency.',
        icon: 'tabler:message-check',
      },
    ],
    approach: 'Recording delivers value when data is easy to search, securely stored, and actually used in operations.',
    outcomes: [
      {
        title: 'Higher Service Quality',
        description: 'Recorded interactions create concrete coaching opportunities.',
        icon: 'tabler:arrow-up-right',
      },
      {
        title: 'Better Dispute Handling',
        description: 'Teams can reference objective conversation history when issues arise.',
        icon: 'tabler:file-search',
      },
      {
        title: 'More Consistent Compliance',
        description: 'Policy enforcement and retention controls reduce ad hoc handling.',
        icon: 'tabler:shield-check',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_656511496-optimized.jpg',
      alt: 'Support agents on headsets in a call recording and QA environment',
    },
    related: ['call-management', 'reliable-phone-systems', 'unified-communications'],
    relatedSummary: 'Recording works best as part of broader call operations management.',
  },
  'microsoft-teams': {
    slug: 'microsoft-teams',
    title: 'Microsoft Teams',
    category: 'Communications',
    icon: 'tabler:brand-teams',
    metaTitle: 'Microsoft Teams Services',
    metaDescription:
      'Microsoft Teams services for governance, voice integration, channel design, and operational adoption.',
    heroSubtitle:
      'Configure Teams for structured communication, secure collaboration, and less day-to-day coordination overhead.',
    scopeTitle: 'What Microsoft Teams Covers',
    scopeSubtitle: 'The service blends platform setup, governance, and user adoption support.',
    included: [
      {
        title: 'Teams Governance and Standards',
        description: 'Policies for teams, channels, guests, and lifecycle management.',
        icon: 'tabler:settings',
      },
      {
        title: 'Meetings and Calling Configuration',
        description: 'Calling plans and meeting controls tuned for business communication needs.',
        icon: 'tabler:phone-plus',
      },
      {
        title: 'Adoption and Workflow Guidance',
        description: 'Operational best practices that help teams use the platform effectively.',
        icon: 'tabler:user-check',
      },
    ],
    approach:
      'Teams should be organized enough to scale but simple enough that users can navigate it without confusion.',
    outcomes: [
      {
        title: 'Cleaner Team Communication',
        description: 'Channel structure reduces duplicate conversations and missed updates.',
        icon: 'tabler:message-2',
      },
      {
        title: 'More Reliable Meetings and Calls',
        description: 'Policy and configuration tuning improves day-to-day call quality.',
        icon: 'tabler:video',
      },
      {
        title: 'Improved Platform Adoption',
        description: 'Users understand where work happens and how to use shared standards.',
        icon: 'tabler:users',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_1515878150-optimized.jpg',
      alt: 'Team collaborating in a digital workspace for meetings and chat',
    },
    related: ['sharepoint', 'collaboration-tools', 'unified-communications'],
    relatedSummary: 'Teams value increases when file workflows and governance are aligned.',
  },
  sharepoint: {
    slug: 'sharepoint',
    title: 'SharePoint',
    category: 'Communications',
    icon: 'tabler:folders',
    metaTitle: 'SharePoint Services',
    metaDescription:
      'SharePoint services for document structure, permissions, and workflow design that improve control and findability.',
    heroSubtitle:
      'Create a SharePoint environment that supports clear document ownership, faster search, and secure collaboration.',
    scopeTitle: 'What SharePoint Covers',
    scopeSubtitle: 'The service focuses on practical information architecture and governance that teams can maintain.',
    included: [
      {
        title: 'Site and Library Architecture',
        description: 'Organize information so users can find what they need without excessive clicks.',
        icon: 'tabler:sitemap',
      },
      {
        title: 'Permissions and Sharing Controls',
        description: 'Set access boundaries that support collaboration without oversharing.',
        icon: 'tabler:lock-access',
      },
      {
        title: 'Document Lifecycle and Workflows',
        description: 'Versioning, approvals, and metadata patterns tailored to business processes.',
        icon: 'tabler:file-text',
      },
    ],
    approach:
      'Strong SharePoint design balances usability with governance, so users adopt it instead of working around it.',
    outcomes: [
      {
        title: 'Faster Document Retrieval',
        description: 'Structured metadata and libraries improve search and reduce duplicate files.',
        icon: 'tabler:search',
      },
      {
        title: 'Better Access Control',
        description: 'Permission models reduce accidental exposure of sensitive content.',
        icon: 'tabler:shield-lock',
      },
      {
        title: 'More Consistent Processes',
        description: 'Standard workflows help teams manage approvals and document lifecycle reliably.',
        icon: 'tabler:repeat',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_1254815659-optimized.jpg',
      alt: 'Document and workflow planning session for structured collaboration',
    },
    related: ['microsoft-teams', 'collaboration-tools', 'unified-communications'],
    relatedSummary: 'SharePoint effectiveness depends on how collaboration tools are structured together.',
  },
  'security-solutions': {
    slug: 'security-solutions',
    title: 'Security Solutions',
    category: 'Security',
    icon: 'tabler:shield',
    metaTitle: 'Physical Security Solutions',
    metaDescription:
      'Physical security solutions including surveillance cameras and access control for safer facilities and stronger oversight.',
    heroSubtitle:
      'Protect facilities with modern physical security systems that provide visibility, control, and actionable records.',
    scopeTitle: 'What Security Solutions Covers',
    scopeSubtitle: 'This service combines video surveillance and access control into one managed security posture.',
    included: [
      {
        title: 'Cloud-Managed Surveillance',
        description: 'Centralized camera visibility and management across one or multiple locations.',
        icon: 'tabler:camera',
      },
      {
        title: 'Access Control Infrastructure',
        description: 'Credential-based entry systems with audit-ready event trails.',
        icon: 'tabler:door-enter',
      },
      {
        title: 'Security Policy Alignment',
        description: 'Rules for access schedules, retention, and incident response workflows.',
        icon: 'tabler:shield-check',
      },
    ],
    approach:
      'Effective physical security comes from system integration, clear policy, and day-to-day operational ownership.',
    outcomes: [
      {
        title: 'Improved Facility Visibility',
        description: 'Teams can review incidents quickly with searchable footage and event history.',
        icon: 'tabler:video',
      },
      {
        title: 'Tighter Entry Controls',
        description: 'Access is managed by role, time, and location with better accountability.',
        icon: 'tabler:key',
      },
      {
        title: 'Faster Incident Investigation',
        description: 'Video and access logs provide reliable context when events occur.',
        icon: 'tabler:file-search',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_1240832179-optimized.jpg',
      alt: 'Security personnel monitoring multi-camera surveillance systems',
    },
    related: ['surveillance-cameras', 'access-control', 'cybersecurity-solutions'],
    relatedSummary: 'Physical and cyber controls work best when they are coordinated.',
  },
  'surveillance-cameras': {
    slug: 'surveillance-cameras',
    title: 'Surveillance Cameras',
    category: 'Security',
    icon: 'tabler:camera',
    metaTitle: 'Surveillance Camera Systems',
    metaDescription:
      'Surveillance camera services for cloud-managed video, smart alerts, and searchable footage across facilities.',
    heroSubtitle:
      'Deploy and manage camera systems that improve situational awareness and speed up response when incidents occur.',
    scopeTitle: 'What Surveillance Cameras Covers',
    scopeSubtitle: 'Camera strategy includes hardware placement, retention policy, and operational response planning.',
    included: [
      {
        title: 'Camera Placement and Coverage Design',
        description: 'Coverage planning for entry points, sensitive zones, and operational blind spots.',
        icon: 'tabler:map-pin',
      },
      {
        title: 'Cloud Video Management',
        description: 'Centralized monitoring, remote access, and device health visibility.',
        icon: 'tabler:cloud',
      },
      {
        title: 'Searchable Footage and Alerts',
        description: 'Event filtering and alerting to reduce time spent reviewing incidents.',
        icon: 'tabler:bell-ringing',
      },
    ],
    approach: 'We design camera systems for practical use during real events, not just passive recording.',
    outcomes: [
      {
        title: 'Stronger Incident Documentation',
        description: 'Reliable video records support investigation and post-incident review.',
        icon: 'tabler:video',
      },
      {
        title: 'Faster Security Response',
        description: 'Alerts and remote visibility speed up validation and escalation decisions.',
        icon: 'tabler:bolt',
      },
      {
        title: 'Lower Monitoring Overhead',
        description: 'Smarter search and event tagging reduce manual footage review time.',
        icon: 'tabler:clock-hour-4',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_1240832179-optimized.jpg',
      alt: 'Security operations center reviewing live surveillance camera feeds',
    },
    related: ['access-control', 'security-solutions', 'cybersecurity-solutions'],
    relatedSummary: 'Camera visibility improves when tied to entry control and incident workflows.',
  },
  'access-control': {
    slug: 'access-control',
    title: 'Access Control',
    category: 'Security',
    icon: 'tabler:door-enter',
    metaTitle: 'Access Control Systems',
    metaDescription:
      'Access control services with credential management, policy automation, and centralized reporting.',
    heroSubtitle: 'Secure and manage facility entry with modern credential systems and policy-driven access rules.',
    scopeTitle: 'What Access Control Covers',
    scopeSubtitle: 'The service addresses entry hardware, identity lifecycle, and location-level policy governance.',
    included: [
      {
        title: 'Door Access System Deployment',
        description: 'Readers, controllers, and credentials configured for reliable operation.',
        icon: 'tabler:building',
      },
      {
        title: 'Centralized User and Policy Management',
        description: 'Role-based permissions, schedules, and multi-site access governance.',
        icon: 'tabler:user-cog',
      },
      {
        title: 'Audit Trail and Reporting',
        description: 'Entry event logs that support investigations and compliance reviews.',
        icon: 'tabler:file-analytics',
      },
    ],
    approach:
      'Access control should be simple for approved users and strict for everyone else, with a clear audit trail.',
    outcomes: [
      {
        title: 'Reduced Unauthorized Entry Risk',
        description: 'Policy-based controls limit access to sensitive areas by role and schedule.',
        icon: 'tabler:shield-lock',
      },
      {
        title: 'Faster Credential Changes',
        description: 'Onboarding and offboarding updates happen quickly and consistently.',
        icon: 'tabler:user-edit',
      },
      {
        title: 'Better Security Accountability',
        description: 'Reliable event history supports incident review and operational oversight.',
        icon: 'tabler:clipboard-data',
      },
    ],
    image: {
      src: '~/assets/images/shutterstock_739165318-optimized.jpg',
      alt: 'Badge-based access control reader securing facility entry',
    },
    related: ['surveillance-cameras', 'security-solutions', 'cybersecurity-solutions'],
    relatedSummary: 'Access controls are strongest when paired with camera coverage and policy governance.',
  },
};

export const servicePageList = Object.values(servicePages);
