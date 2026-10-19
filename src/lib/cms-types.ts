export interface CMSFieldDefinition {
  key: string;
  label: string;
  description: string;
  section: 'Hero & Homepage' | 'Heritage & Metrics' | 'About Us' | 'Contact & Channels' | 'Services Copy' | 'Cybersecurity Copy' | 'Products Copy';
  type: 'text' | 'textarea';
  defaultValue: string;
}

export const CMS_FIELDS: CMSFieldDefinition[] = [
  // 1. Hero & Homepage
  {
    key: 'hero_pill',
    label: 'Hero Accreditation Pill',
    description: 'Header pill text displayed above the main headline.',
    section: 'Hero & Homepage',
    type: 'text',
    defaultValue: 'APRA CPS 234 & ISO 27001 Certified Architecture',
  },
  {
    key: 'hero_headline',
    label: 'Main Hero Headline',
    description: 'The primary display headline on the landing page.',
    section: 'Hero & Homepage',
    type: 'textarea',
    defaultValue: 'Autonomous Core Banking & Critical Financial Infrastructure',
  },
  {
    key: 'hero_subtitle',
    label: 'Hero Subtitle / Positioning',
    description: 'Executive summary of capabilities beneath the headline.',
    section: 'Hero & Homepage',
    type: 'textarea',
    defaultValue: 'Envisioned and engineered by enterprise veterans with two decades of banking delivery. We deploy proprietary AI-driven CBS, modernize SAP Banking architectures, and deliver zero-downtime Temenos T24 upgrades with military-grade cybersecurity assurance.',
  },
  {
    key: 'hero_cta_primary',
    label: 'Primary CTA Button Text',
    description: 'Text for the main button in the hero section.',
    section: 'Hero & Homepage',
    type: 'text',
    defaultValue: 'Schedule Technical Advisory',
  },
  {
    key: 'hero_cta_secondary',
    label: 'Secondary CTA Button Text',
    description: 'Text for the secondary button in the hero section.',
    section: 'Hero & Homepage',
    type: 'text',
    defaultValue: 'Explore CBS Architecture',
  },

  // 2. Heritage & Metrics
  {
    key: 'hero_metric_1_val',
    label: 'Pillar 1: Value / Count',
    description: 'Top numerical or badge metric for Pillar 1.',
    section: 'Heritage & Metrics',
    type: 'text',
    defaultValue: '20+',
  },
  {
    key: 'hero_metric_1_label',
    label: 'Pillar 1: Title Label',
    description: 'Short uppercase label for Pillar 1.',
    section: 'Heritage & Metrics',
    type: 'text',
    defaultValue: 'Years Banking Heritage',
  },
  {
    key: 'hero_metric_1_desc',
    label: 'Pillar 1: Description',
    description: 'Supporting narrative for Pillar 1.',
    section: 'Heritage & Metrics',
    type: 'textarea',
    defaultValue: 'Two decades of proven implementation track record across large banking organizations.',
  },
  {
    key: 'hero_metric_2_val',
    label: 'Pillar 2: Value / Count',
    description: 'Top numerical or badge metric for Pillar 2.',
    section: 'Heritage & Metrics',
    type: 'text',
    defaultValue: '3 Suites',
  },
  {
    key: 'hero_metric_2_label',
    label: 'Pillar 2: Title Label',
    description: 'Short uppercase label for Pillar 2.',
    section: 'Heritage & Metrics',
    type: 'text',
    defaultValue: 'Core Banking Engines',
  },
  {
    key: 'hero_metric_2_desc',
    label: 'Pillar 2: Description',
    description: 'Supporting narrative for Pillar 2.',
    section: 'Heritage & Metrics',
    type: 'textarea',
    defaultValue: 'Specialized expertise spanning SAP Banking, Temenos T24, and proprietary AI-driven CBS.',
  },
  {
    key: 'hero_metric_3_val',
    label: 'Pillar 3: Value / Count',
    description: 'Top numerical or badge metric for Pillar 3.',
    section: 'Heritage & Metrics',
    type: 'text',
    defaultValue: 'Zero',
  },
  {
    key: 'hero_metric_3_label',
    label: 'Pillar 3: Title Label',
    description: 'Short uppercase label for Pillar 3.',
    section: 'Heritage & Metrics',
    type: 'text',
    defaultValue: 'Unplanned Downtime',
  },
  {
    key: 'hero_metric_3_desc',
    label: 'Pillar 3: Description',
    description: 'Supporting narrative for Pillar 3.',
    section: 'Heritage & Metrics',
    type: 'textarea',
    defaultValue: 'Mission-critical upgrade and technology migration methodology built to eliminate operational pauses.',
  },
  {
    key: 'hero_metric_4_val',
    label: 'Pillar 4: Value / Count',
    description: 'Top numerical or badge metric for Pillar 4.',
    section: 'Heritage & Metrics',
    type: 'text',
    defaultValue: '100%',
  },
  {
    key: 'hero_metric_4_label',
    label: 'Pillar 4: Title Label',
    description: 'Short uppercase label for Pillar 4.',
    section: 'Heritage & Metrics',
    type: 'text',
    defaultValue: 'Pre-Acceptance Reviews',
  },
  {
    key: 'hero_metric_4_desc',
    label: 'Pillar 4: Description',
    description: 'Supporting narrative for Pillar 4.',
    section: 'Heritage & Metrics',
    type: 'textarea',
    defaultValue: 'Rigorous source code and security reviews ensuring zero day-1 vulnerabilities.',
  },

  // 3. About Us
  {
    key: 'about_heading',
    label: 'About Us Heading',
    description: 'Main heading on the /about page.',
    section: 'About Us',
    type: 'text',
    defaultValue: 'Core Banking Engineering & Technology Consulting',
  },
  {
    key: 'about_lead',
    label: 'About Us Lead Paragraph',
    description: 'Primary positioning paragraph on the about page.',
    section: 'About Us',
    type: 'textarea',
    defaultValue: 'Our company is a specialized consulting firm in the CORE BANKING DOMAIN, offering expertise in SAP Core Banking and the Temenos T24 Core Banking System.',
  },
  {
    key: 'about_story_1',
    label: 'Company Heritage Narrative',
    description: 'Paragraph explaining company track record and foundation.',
    section: 'About Us',
    type: 'textarea',
    defaultValue: 'With over 20 years of experience, we provide cutting edge solutions to the banking industry. We understand the unique challenges faced by financial institutions in modernizing legacy architectures while keeping operations resilient.',
  },
  {
    key: 'about_story_2',
    label: 'Engineering Philosophy',
    description: 'Paragraph explaining engineering standards and execution.',
    section: 'About Us',
    type: 'textarea',
    defaultValue: 'Our senior architects and delivery engineers combine deep domain banking knowledge with modern software engineering methodologies, ensuring every deployment meets rigorous institutional standards.',
  },

  // 4. Contact & Channels
  {
    key: 'contact_phone',
    label: 'Direct Advisory Hotline',
    description: 'Primary advisory telephone number.',
    section: 'Contact & Channels',
    type: 'text',
    defaultValue: '+61 457 170 962',
  },
  {
    key: 'contact_email',
    label: 'General Inquiries Email',
    description: 'Main corporate contact email.',
    section: 'Contact & Channels',
    type: 'text',
    defaultValue: 'info@qodessystems.com',
  },
  {
    key: 'careers_email',
    label: 'Talent & Careers Email',
    description: 'Recruitment and job application contact email.',
    section: 'Contact & Channels',
    type: 'text',
    defaultValue: 'careers@qodessystems.com',
  },
  {
    key: 'contact_address',
    label: 'Corporate Office Location',
    description: 'Office headquarters address shown across footer & contact.',
    section: 'Contact & Channels',
    type: 'text',
    defaultValue: 'Sydney, NSW, Australia',
  },
  {
    key: 'contact_hours',
    label: 'Trading & Advisory Hours',
    description: 'Business hours for advisory desk.',
    section: 'Contact & Channels',
    type: 'text',
    defaultValue: 'Monday – Friday, 9:00 AM – 5:30 PM AEST',
  },
  {
    key: 'cta_headline',
    label: 'Advisory Banner Headline',
    description: 'Banner headline above contact trigger.',
    section: 'Contact & Channels',
    type: 'text',
    defaultValue: "Architect Your Bank's Next Generation Technology",
  },
  {
    key: 'cta_subtext',
    label: 'Advisory Banner Subtext',
    description: 'Explanatory subtext on the bottom CTA banner.',
    section: 'Contact & Channels',
    type: 'textarea',
    defaultValue: 'Connect directly with our principal banking architects to evaluate core modernisation, Temenos migrations, or APRA CPS 234 cybersecurity reviews.',
  },

  // 5. Services Copy
  {
    key: 'service_qodes_cbs_desc',
    label: 'Qodes AI Core Banking System Description',
    description: 'Summary copy for Qodes CBS.',
    section: 'Services Copy',
    type: 'textarea',
    defaultValue: 'Proprietary AI-driven autonomous CBS with microservices architecture and zero-friction ledger settlement.',
  },
  {
    key: 'service_sap_cbs_desc',
    label: 'SAP Core Banking Modernization Description',
    description: 'Summary copy for SAP Banking practice.',
    section: 'Services Copy',
    type: 'textarea',
    defaultValue: 'End-to-end implementation, transactional banking modules, and seamless S/4HANA migrations.',
  },
  {
    key: 'service_temenos_desc',
    label: 'Temenos T24 Core Banking Description',
    description: 'Summary copy for Temenos T24 practice.',
    section: 'Services Copy',
    type: 'textarea',
    defaultValue: 'Comprehensive upgrades, pack deployment, and low-latency API integration with zero downtime.',
  },
  {
    key: 'service_testing_desc',
    label: 'Software Quality Testing Description',
    description: 'Summary copy for QA and test automation.',
    section: 'Services Copy',
    type: 'textarea',
    defaultValue: 'Automated regression pipelines, simulated bank transaction stress testing, and acceptance validation.',
  },
  {
    key: 'service_staff_desc',
    label: 'Staff Augmentation Description',
    description: 'Summary copy for specialized staff augmentation.',
    section: 'Services Copy',
    type: 'textarea',
    defaultValue: 'Elite core banking domain architects, security specialists, and delivery engineers on demand.',
  },
  {
    key: 'service_appdev_desc',
    label: 'Application Development Description',
    description: 'Summary copy for enterprise app engineering.',
    section: 'Services Copy',
    type: 'textarea',
    defaultValue: 'Custom cloud-native financial services, high-throughput microservices, and regulatory reporting systems.',
  },

  // 6. Cybersecurity Copy
  {
    key: 'cyber_pentest_desc',
    label: 'Penetration Testing Description',
    description: 'Summary copy for Red Teaming & Pen Testing.',
    section: 'Cybersecurity Copy',
    type: 'textarea',
    defaultValue: 'Offensive security testing and red teaming simulating advanced threat actor tactics.',
  },
  {
    key: 'cyber_compliance_desc',
    label: 'APRA CPS 234 Compliance Description',
    description: 'Summary copy for regulatory security compliance.',
    section: 'Cybersecurity Copy',
    type: 'textarea',
    defaultValue: 'APRA CPS 234 and ISO 27001 institutional governance, gap analysis, and regulatory alignment.',
  },
  {
    key: 'cyber_vulnerability_desc',
    label: 'Vulnerability Assessment Description',
    description: 'Summary copy for vulnerability assessment.',
    section: 'Cybersecurity Copy',
    type: 'textarea',
    defaultValue: 'Continuous vulnerability discovery and risk prioritization across digital banking assets.',
  },
  {
    key: 'cyber_codereview_desc',
    label: 'Source Code Security Review Description',
    description: 'Summary copy for source code review.',
    section: 'Cybersecurity Copy',
    type: 'textarea',
    defaultValue: 'Static and dynamic analysis of core financial software to eliminate injection and logic flaws.',
  },

  // 7. Products Copy
  {
    key: 'product_cbs_desc',
    label: 'Core Banking Product Summary',
    description: 'Summary copy for Core Banking Product.',
    section: 'Products Copy',
    type: 'textarea',
    defaultValue: 'Comprehensive, scalable core banking solution addressing end-to-end retail and commercial operations.',
  },
  {
    key: 'product_internet_desc',
    label: 'Internet Banking Platform Summary',
    description: 'Summary copy for Internet Banking platform.',
    section: 'Products Copy',
    type: 'textarea',
    defaultValue: 'Institutional-grade digital banking web portal with multi-factor biometric authentication.',
  },
  {
    key: 'product_mobile_desc',
    label: 'Mobile Banking Platform Summary',
    description: 'Summary copy for Mobile Banking app.',
    section: 'Products Copy',
    type: 'textarea',
    defaultValue: 'Secure, responsive iOS & Android mobile banking client with offline session protection.',
  },
  {
    key: 'product_loan_desc',
    label: 'Loan & Credit Origination Summary',
    description: 'Summary copy for Loan Software.',
    section: 'Products Copy',
    type: 'textarea',
    defaultValue: 'Automated credit origination, multi-tier risk assessment, and repayment scheduling engine.',
  },
];

export function getDefaultContentMap(): Record<string, string> {
  const map: Record<string, string> = {};
  CMS_FIELDS.forEach((f) => {
    map[f.key] = f.defaultValue;
  });
  return map;
}
