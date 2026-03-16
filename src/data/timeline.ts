export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  type: 'work' | 'education' | 'achievement';
}

export const timelineItems: TimelineItem[] = [
  {
    id: '1',
    year: 'Mar 2025 – Present',
    title: 'AVP SRE Engineer',
    company: 'Deutsche Bank',
    location: 'Pune, Maharashtra, India',
    description:
      'Leading site reliability engineering at AVP level, driving platform stability, release governance, and engineering excellence across critical banking infrastructure. Responsible for defining SLOs, owning CI/CD strategy, and mentoring a team of SRE engineers to ensure zero-defect production deployments across global trading and risk platforms.',
    highlights: [
      'Achieved 99.98% platform uptime across trading and risk systems by establishing comprehensive SLO frameworks and automated alerting thresholds',
      'Reduced deployment lead time by 45% by re-architecting Jenkins and TeamCity CI/CD pipelines with parallel execution and automated gate checks',
      'Decreased MTTR by 38% through structured post-incident review processes and runbook automation in Splunk and Geneos',
      'Led a team of 6 SRE engineers, implementing shift-left reliability practices and embedding SRE principles into the development lifecycle',
    ],
    type: 'work',
  },
  {
    id: '2',
    year: 'May 2022 – Mar 2025',
    title: 'SRE Engineer Associate',
    company: 'Deutsche Bank',
    location: 'Pune, Maharashtra, India',
    description:
      'Delivered site reliability engineering for Deutsche Bank\'s core banking platforms, owning end-to-end CI/CD pipeline operations, release management, and production monitoring. Collaborated with development and infrastructure teams to automate toil, improve deployment frequency, and maintain system reliability at scale.',
    highlights: [
      'Improved deployment frequency by 60% by standardizing CI/CD workflows across Jenkins and TeamCity with automated smoke tests and rollback triggers',
      'Reduced production incidents by 35% through proactive Geneos alerting and Splunk dashboards covering 200+ application services',
      'Cut release cycle time from 3 weeks to 5 days by introducing automated release gates, change management integration, and UDeploy orchestration',
      'Automated infrastructure provisioning using Bash scripting and Azure DevOps pipelines, eliminating 20+ hours of manual operational work per week',
    ],
    type: 'work',
  },
  {
    id: '3',
    year: 'Feb 2019 – May 2022',
    title: 'Site Reliability Engineer',
    company: 'Credit Suisse',
    location: 'Pune, Maharashtra, India',
    description:
      'Owned reliability engineering for Credit Suisse\'s wealth management and investment banking platforms. Built and maintained CI/CD pipelines, implemented observability solutions, and managed incident response processes ensuring high availability for global financial applications.',
    highlights: [
      'Maintained 99.95% SLA compliance across wealth management platforms by implementing multi-layer monitoring with Splunk and Prometheus',
      'Reduced MTTR from 4 hours to under 45 minutes by building automated incident detection and escalation workflows integrated with JIRA',
      'Decreased deployment failures by 50% by introducing pre-deployment validation stages and canary release strategies in the CI/CD pipeline',
      'Built self-healing infrastructure scripts in Bash and Python that automatically recovered 80% of common failure scenarios without manual intervention',
    ],
    type: 'work',
  },
  {
    id: '4',
    year: 'Oct 2016 – Feb 2019',
    title: 'Solutions Specialist',
    company: 'Nokia',
    location: 'Pune, Maharashtra, India',
    description:
      'Delivered solutions engineering for Nokia\'s telecommunications infrastructure, focusing on network automation, monitoring integration, and operational tooling. Worked at the intersection of product delivery and operations, bridging development and infrastructure teams to improve deployment reliability and network performance.',
    highlights: [
      'Reduced network service deployment time by 40% by automating configuration management and provisioning workflows for telecom infrastructure',
      'Improved system availability to 99.9% by implementing proactive monitoring and alert correlation across distributed telecom nodes',
      'Developed automation scripts reducing manual configuration effort by 55%, enabling faster rollout of network solutions to enterprise clients',
    ],
    type: 'work',
  },
  {
    id: '5',
    year: 'Jan 2016 – Oct 2016',
    title: 'Senior Software Engineer',
    company: 'Vodafone',
    location: 'Pune, Maharashtra, India',
    description:
      'Supported production engineering and application reliability for Vodafone\'s customer-facing platforms. Managed incident response, production monitoring, and release coordination while contributing to automation initiatives that improved operational efficiency.',
    highlights: [
      'Maintained 99.9% uptime for customer service platforms through proactive monitoring and rapid incident response',
      'Reduced manual release effort by 35% by scripting deployment automation and integrating release checklists into workflow tooling',
      'Decreased incident escalations by 30% through structured root-cause analysis and creation of comprehensive operational runbooks',
    ],
    type: 'work',
  },
  {
    id: '6',
    year: 'Sep 2014 – Dec 2015',
    title: 'Senior Software Engineer',
    company: 'Cognizant',
    location: 'Pune, Maharashtra, India',
    description:
      'Contributed to enterprise application development and production support for banking and financial services clients. Gained foundational experience in release management, incident handling, and operational tooling within large-scale enterprise environments.',
    highlights: [
      'Reduced production defect leakage by 40% by implementing structured pre-release testing checklists and code review processes',
      'Improved application performance by 25% through query optimization and targeted refactoring of high-frequency service endpoints',
      'Supported smooth delivery of quarterly releases for banking clients with zero SLA breaches over a 15-month tenure',
    ],
    type: 'work',
  },
  {
    id: '7',
    year: 'Feb 2012 – Sep 2014',
    title: 'Software Engineer',
    company: 'IBM India',
    location: 'Pune, Maharashtra, India',
    description:
      'Started professional career at IBM India, working on enterprise application development and operations for global clients. Built strong foundations in Linux administration, scripting, and ITIL-aligned service management practices that became central to a future career in SRE.',
    highlights: [
      'Administered Linux-based application servers and maintained 99.8% service availability across production environments',
      'Developed Bash automation scripts reducing routine operational tasks by 30% and improving team throughput',
      'Resolved 95% of assigned incidents within SLA targets, contributing to consistent client satisfaction scores',
    ],
    type: 'work',
  },
  {
    id: '8',
    year: '2004 – 2011',
    title: 'BE Mechanical Engineering',
    company: 'Bapurao Deshmukh College of Engineering',
    location: 'Wardha, Maharashtra, India',
    description:
      'Bachelor of Engineering in Mechanical Engineering, building a strong analytical and systems-thinking foundation. The engineering discipline cultivated structured problem-solving and technical rigor that underpins a career in site reliability engineering and complex infrastructure management.',
    highlights: [
      'Graduated with a Bachelor of Engineering in Mechanical Engineering',
      'Developed strong analytical and systems-thinking capabilities applied throughout an SRE career',
    ],
    type: 'education',
  },
];

export const certifications = [
  {
    id: '1',
    name: 'ITIL 4 Foundation',
    issuer: 'PeopleCert',
    year: '2021',
    badge: 'ITIL',
    color: '#0018A8',
  },
  {
    id: '2',
    name: 'Azure Fundamentals',
    issuer: 'Microsoft',
    year: '2020',
    badge: 'AZ',
    color: '#1F70C1',
  },
  {
    id: '3',
    name: 'DevOps Engineer Expert',
    issuer: 'Edureka',
    year: '2020',
    badge: 'DE',
    color: '#124191',
  },
  {
    id: '4',
    name: 'ITIL V3 Foundation',
    issuer: 'PeopleCert',
    year: '2015',
    badge: 'V3',
    color: '#003155',
  },
];
