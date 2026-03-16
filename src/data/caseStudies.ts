export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  company: string;
  category: string;
  duration: string;
  year: string;
  tags: string[];
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  color: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'deutsche-bank-cicd-pipeline-optimization',
    title: 'CI/CD Pipeline Optimization at Scale',
    company: 'Deutsche Bank',
    category: 'DevOps / CI-CD',
    duration: '6 months',
    year: '2024',
    tags: ['CI/CD', 'Jenkins', 'TeamCity', 'Release Automation'],
    challenge:
      'Deployment pipelines across Deutsche Bank\'s engineering teams were slow, fragmented and heavily manual. Release windows stretched to 3–4 hours, manual handoff steps between build, test and deploy stages introduced human error, and the low release frequency was creating a growing backlog of unshipped features. Each failed deployment required lengthy manual investigation with no standardised rollback path.',
    solution:
      'Redesigned the end-to-end CI/CD pipeline architecture using Jenkins and TeamCity, introducing parallel execution stages that ran unit tests, integration tests and static analysis simultaneously rather than sequentially. Automated build and deployment stages eliminated the manual handoff steps that had been the primary source of release errors. Integrated Artifactory for centralised artifact management with full traceability, and implemented automated rollback triggers tied to post-deployment health checks — reducing the manual effort required to recover from a failed release.',
    result:
      'Deployment time was reduced significantly across all pipeline stages, release frequency tripled as teams gained confidence in the automated process, and rollback time dropped from over an hour to under five minutes. The reduction in manual steps also removed a major compliance risk by ensuring every deployment followed an auditable, consistent process.',
    metrics: [
      { label: 'Deployment Time', value: '-65%' },
      { label: 'Release Frequency', value: '3× faster' },
      { label: 'Manual Steps', value: '-80%' },
      { label: 'Rollback Time', value: '<5 min' },
    ],
    color: '#0018A8',
  },
  {
    id: '2',
    slug: 'deutsche-bank-monitoring-platform',
    title: 'Enterprise Monitoring & Observability Platform',
    company: 'Deutsche Bank',
    category: 'Monitoring / Observability',
    duration: '9 months',
    year: '2023',
    tags: ['Splunk', 'Geneos', 'Observability', 'MTTR'],
    challenge:
      'Monitoring was fragmented across Deutsche Bank\'s technology estate — each team maintained its own alerting configuration, resulting in inconsistent coverage, alert fatigue from thousands of low-quality notifications, and a reactive incident response culture where issues were discovered through user complaints rather than operational monitoring. Mean time to resolution was high because engineers lacked the diagnostic context needed to act quickly when incidents occurred.',
    solution:
      'Consolidated the monitoring estate onto a unified platform built around Splunk for log aggregation and analytics and Geneos for real-time system monitoring. Introduced intelligent alert correlation rules that grouped related alerts and suppressed noise, reducing the volume of actionable notifications dramatically. Standardised runbook automation tied alerts directly to diagnostic and remediation procedures, and overhauled the on-call rotation structure to ensure engineers had the context and tools needed to respond effectively.',
    result:
      'MTTR improved significantly as engineers could diagnose and resolve incidents faster with centralised observability data. Alert noise fell by 70%, allowing on-call engineers to focus on genuinely actionable signals. Proactive detection caught several potential production issues before they impacted users, and system uptime across monitored services reached 99.95%.',
    metrics: [
      { label: 'MTTR Reduction', value: '-55%' },
      { label: 'Alert Noise', value: '-70%' },
      { label: 'Incident Detection', value: 'Proactive' },
      { label: 'System Uptime', value: '99.95%' },
    ],
    color: '#003155',
  },
  {
    id: '3',
    slug: 'credit-suisse-devops-transformation',
    title: 'DevOps Transformation & SRE Practice',
    company: 'Credit Suisse',
    category: 'SRE / DevOps',
    duration: '14 months',
    year: '2021',
    tags: ['SRE', 'DevOps', 'Kubernetes', 'Docker'],
    challenge:
      'Development and operations teams at Credit Suisse operated in silos, with separate ownership boundaries that created friction at every deployment. Release cycles were slow, deployments were manual and error-prone, and there was no formal SLO/SLI framework in place — meaning reliability targets were undefined and teams had no shared language for discussing production health. Scaling was manual and reactive, with engineers provisioning capacity in response to incidents rather than ahead of demand.',
    solution:
      'Introduced Site Reliability Engineering practices that broke down the dev/ops boundary by embedding reliability as a shared engineering concern. Containerised workloads using Docker and deployed orchestration with Kubernetes, enabling consistent, repeatable deployments and automated horizontal scaling. Defined a formal SLO/SLI/SLA framework for all critical services, establishing the error budget policy that gave teams a principled mechanism for balancing feature delivery against reliability investment. Implemented blameless postmortem processes and on-call rotation standards to sustain the cultural shift.',
    result:
      'Deployment frequency doubled and then more than tripled as the containerised pipeline replaced the manual process. Downtime fell by 60% in the first year as the SLO framework surfaced reliability gaps that had previously been invisible. Teams had clear, measurable reliability targets for the first time, and the error budget model gave engineering leadership a rational basis for roadmap prioritisation decisions.',
    metrics: [
      { label: 'Deployment Frequency', value: '+200%' },
      { label: 'Downtime', value: '-60%' },
      { label: 'Toil Reduction', value: '45%' },
      { label: 'SLO Achievement', value: '99.9%' },
    ],
    color: '#003155',
  },
  {
    id: '4',
    slug: 'nokia-release-management-automation',
    title: 'Release Automation & Operational Excellence',
    company: 'Nokia',
    category: 'Release Management',
    duration: '18 months',
    year: '2018',
    tags: ['Release Management', 'Automation', 'ITIL', 'Operations'],
    challenge:
      'Release coordination at Nokia was a manual, error-prone process that required weeks of effort per release cycle. Teams relied on informal communication channels and individually maintained checklists, resulting in inconsistent execution and a high rate of post-deployment errors. There were no standardised runbooks, no automated pre or post-deployment validation, and ITIL change management processes were applied inconsistently — creating audit gaps and increasing the risk of unplanned service disruption.',
    solution:
      'Designed and implemented an automated release pipeline that eliminated manual coordination steps and standardised the end-to-end release process. Developed a comprehensive runbook library covering all critical release and rollback scenarios, ensuring consistent execution regardless of which team member was on duty. Integrated the pipeline with Nokia\'s ITIL change management system to automate change record creation, approval routing and closure — maintaining compliance without manual overhead. Automated pre-deployment validation gates and post-deployment smoke tests caught issues before and immediately after each release.',
    result:
      'Release cycle time dropped by 60% as automation replaced the manual coordination overhead. Release error rates fell by 75% as standardised runbooks and automated validation gates replaced ad-hoc checklists. Manual effort per release was halved, freeing the team to focus on reliability improvements rather than release coordination. Customer satisfaction scores improved by 35% as service stability increased and downtime events declined.',
    metrics: [
      { label: 'Release Cycle Time', value: '-60%' },
      { label: 'Release Errors', value: '-75%' },
      { label: 'Manual Effort', value: '-50%' },
      { label: 'Customer Satisfaction', value: '+35%' },
    ],
    color: '#124191',
  },
];
