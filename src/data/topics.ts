export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string; // SVG path data
  color: string;
}

export const topics: Topic[] = [
  {
    id: 'site-reliability-engineering',
    title: 'Site Reliability Engineering',
    description:
      'Applying SRE principles to production systems at Deutsche Bank — defining SLOs, SLIs and SLAs that align engineering and business expectations. Implementing error budget policies to balance feature velocity with reliability, reducing toil through automation, and building the operational frameworks that keep critical financial systems running at scale.',
    icon: 'M5 12H3a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2h-2M5 12V7a2 2 0 012-2h10a2 2 0 012 2v5M5 12h14',
    color: '#0018A8',
  },
  {
    id: 'cicd-pipelines',
    title: 'CI/CD Pipeline Engineering',
    description:
      'Designing and optimising automated deployment pipelines with Jenkins and TeamCity across Deutsche Bank\'s engineering estate. Driving deployment frequency improvements, reducing manual release steps, and implementing parallel execution strategies that cut deployment windows from hours to minutes — accelerating release velocity without compromising stability.',
    icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v10a2 2 0 002 2h4a2 2 0 002-2V3M9 3l6 6',
    color: '#0ea5a0',
  },
  {
    id: 'infrastructure-automation',
    title: 'Infrastructure Automation & DevOps',
    description:
      'Building infrastructure as code with Docker and Kubernetes to automate provisioning, configuration and scaling of production environments. Eliminating manual toil through repeatable, version-controlled infrastructure definitions — reducing configuration drift, improving operational consistency, and freeing engineering teams to focus on higher-value work.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    color: '#7c3aed',
  },
  {
    id: 'monitoring-observability',
    title: 'Monitoring & Observability',
    description:
      'Building unified observability platforms with Splunk and Geneos that transform reactive incident response into proactive detection. Designing intelligent alert correlation to eliminate noise, creating actionable dashboards that surface the right signals, and reducing MTTR through structured runbooks and automated triage — turning monitoring from a cost centre into a competitive advantage.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    color: '#d4af37',
  },
  {
    id: 'container-orchestration',
    title: 'Container Orchestration',
    description:
      'Containerising workloads with Docker and orchestrating them at scale with Kubernetes to improve microservices reliability and deployment consistency. Implementing health probes, resource quotas, horizontal pod autoscaling and PodDisruptionBudgets to ensure production workloads are resilient, self-healing and capable of scaling under financial services demand profiles.',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    color: '#059669',
  },
  {
    id: 'release-management',
    title: 'Release Management',
    description:
      'Coordinating complex release programmes across Deutsche Bank\'s technology estate — managing change approval workflows, release windows and rollback strategies in alignment with ITIL standards. Driving zero-downtime deployment practices, reducing release cycle times and improving release velocity while maintaining the audit trails and compliance controls required in regulated financial environments.',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    color: '#dc2626',
  },
  {
    id: 'incident-management',
    title: 'Incident Management & MTTR',
    description:
      'Building incident response frameworks that reduce mean time to resolution through structured on-call practices, automated runbooks and blameless postmortem culture. From severity classification and escalation paths to root cause analysis and systemic remediation — establishing the operational discipline that turns incident response from reactive firefighting into continuous reliability improvement.',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
    color: '#1a2b4a',
  },
  {
    id: 'itil-service-management',
    title: 'ITIL & Service Management',
    description:
      'Applying ITIL 4 frameworks to service delivery, change management and problem management within Deutsche Bank\'s regulated environment. Bridging the gap between formal service management discipline and modern SRE/DevOps practices — ensuring that compliance, audit and governance requirements are met without becoming a barrier to engineering velocity and operational improvement.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    color: '#0ea5a0',
  },
];
