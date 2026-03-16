export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
  category: string;
}

export interface Tool {
  id: string;
  name: string;
  category: string;
  icon: string;
}

export const skills: Skill[] = [
  { id: '1',  name: 'Site Reliability Engineering',        level: 97, category: 'Core SRE' },
  { id: '2',  name: 'CI/CD Pipeline Design',               level: 96, category: 'Core SRE' },
  { id: '3',  name: 'Release Management',                  level: 95, category: 'Core SRE' },
  { id: '4',  name: 'Incident Management & MTTR',          level: 94, category: 'Core SRE' },
  { id: '5',  name: 'SLA/SLO/SLI Definition',              level: 92, category: 'Core SRE' },
  { id: '6',  name: 'Jenkins/TeamCity Pipelines',          level: 95, category: 'DevOps Tools' },
  { id: '7',  name: 'Docker & Containerization',           level: 90, category: 'DevOps Tools' },
  { id: '8',  name: 'Kubernetes Orchestration',            level: 88, category: 'DevOps Tools' },
  { id: '9',  name: 'Artifactory / UDeploy',               level: 87, category: 'DevOps Tools' },
  { id: '10', name: 'GitOps & Version Control',            level: 92, category: 'DevOps Tools' },
  { id: '11', name: 'Splunk & Log Analytics',              level: 93, category: 'Monitoring' },
  { id: '12', name: 'Geneos Alerting',                     level: 91, category: 'Monitoring' },
  { id: '13', name: 'Prometheus & Grafana',                level: 87, category: 'Monitoring' },
  { id: '14', name: 'New Relic / AppDynamics',             level: 82, category: 'Monitoring' },
  { id: '15', name: 'Linux Administration',                level: 92, category: 'Systems & Cloud' },
  { id: '16', name: 'Bash/Shell Scripting',                level: 93, category: 'Systems & Cloud' },
  { id: '17', name: 'Microsoft Azure',                     level: 85, category: 'Systems & Cloud' },
  { id: '18', name: 'Infrastructure as Code',              level: 83, category: 'Systems & Cloud' },
  { id: '19', name: 'ITIL 4 Framework',                    level: 94, category: 'Process & Governance' },
  { id: '20', name: 'JIRA & Confluence',                   level: 90, category: 'Process & Governance' },
  { id: '21', name: 'Change & Problem Management',         level: 91, category: 'Process & Governance' },
  { id: '22', name: 'AIOps & Intelligent Alerting',        level: 78, category: 'Emerging' },
  { id: '23', name: 'Chaos Engineering',                   level: 75, category: 'Emerging' },
  { id: '24', name: 'GitOps & Progressive Delivery',       level: 80, category: 'Emerging' },
];

export const tools: Tool[] = [
  { id: '1',  name: 'Jenkins',              category: 'CI/CD',            icon: 'Je' },
  { id: '2',  name: 'TeamCity',             category: 'CI/CD',            icon: 'TC' },
  { id: '3',  name: 'Docker',               category: 'Containers',       icon: 'Do' },
  { id: '4',  name: 'Kubernetes',           category: 'Orchestration',    icon: 'K8' },
  { id: '5',  name: 'Splunk',               category: 'Monitoring',       icon: 'Sp' },
  { id: '6',  name: 'Geneos',               category: 'Monitoring',       icon: 'Ge' },
  { id: '7',  name: 'Prometheus',           category: 'Monitoring',       icon: 'Pr' },
  { id: '8',  name: 'Grafana',              category: 'Observability',    icon: 'Gr' },
  { id: '9',  name: 'Azure DevOps',         category: 'Cloud & DevOps',   icon: 'Az' },
  { id: '10', name: 'JFrog Artifactory',    category: 'Artifact Mgmt',    icon: 'JF' },
  { id: '11', name: 'UDeploy (UrbanCode)',  category: 'Release Mgmt',     icon: 'UD' },
  { id: '12', name: 'JIRA',                 category: 'Project Mgmt',     icon: 'Ji' },
  { id: '13', name: 'Confluence',           category: 'Documentation',    icon: 'Co' },
  { id: '14', name: 'Bash/Shell',           category: 'Scripting',        icon: 'Sh' },
  { id: '15', name: 'Git/GitHub',           category: 'Version Control',  icon: 'Gi' },
];
