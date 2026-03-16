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
  { id: '1',  name: 'Product Strategy & Roadmapping',       level: 95, category: 'Core PM' },
  { id: '2',  name: 'Requirements Engineering (BRD/FRD)',    level: 95, category: 'Core PM' },
  { id: '3',  name: 'Agile / Scrum Delivery',               level: 93, category: 'Process' },
  { id: '4',  name: 'Stakeholder Management',               level: 92, category: 'Leadership' },
  { id: '5',  name: 'Cross-functional Leadership',          level: 92, category: 'Leadership' },
  { id: '6',  name: 'Data Platform Product Ownership',      level: 93, category: 'Technical' },
  { id: '7',  name: 'Data Pipelines & ETL Systems',         level: 88, category: 'Technical' },
  { id: '8',  name: 'API & Integration Design',             level: 85, category: 'Technical' },
  { id: '9',  name: 'Cloud Data Platforms (Azure/AWS)',     level: 83, category: 'Technical' },
  { id: '10', name: 'SQL & Data Analysis',                  level: 87, category: 'Analytics' },
  { id: '11', name: 'BI & Reporting Analytics',             level: 85, category: 'Analytics' },
  { id: '12', name: 'Compliance (PCI / PII / Regulatory)',  level: 90, category: 'Strategy' },
  { id: '13', name: 'AI-Driven Automation',                 level: 82, category: 'Strategy' },
  { id: '14', name: 'Legacy System Modernization',          level: 88, category: 'Strategy' },
  { id: '15', name: 'Data Governance & Quality',            level: 87, category: 'Technical' },
  // PM with AI
  { id: '16', name: 'AI-Powered Product Discovery',        level: 85, category: 'PM with AI' },
  { id: '17', name: 'AI-Assisted Requirements Analysis',   level: 83, category: 'PM with AI' },
  { id: '18', name: 'LLM Integration & Roadmapping',       level: 80, category: 'PM with AI' },
  { id: '19', name: 'AI Workflow Automation (Fireflies / Otter / Jasper)', level: 88, category: 'PM with AI' },
  { id: '20', name: 'Prompt Engineering for PM Use Cases', level: 78, category: 'PM with AI' },
  // Emerging / Futuristic
  { id: '21', name: 'Agentic AI Platform Design',          level: 75, category: 'Emerging' },
  { id: '22', name: 'Generative AI Product Strategy',      level: 78, category: 'Emerging' },
  { id: '23', name: 'Data Mesh Architecture PM',           level: 80, category: 'Emerging' },
  { id: '24', name: 'Real-Time Data Streaming (Kafka)',     level: 76, category: 'Emerging' },
];

export const tools: Tool[] = [
  { id: '1',  name: 'Jira',           category: 'Project Mgmt',    icon: 'Ji' },
  { id: '2',  name: 'Confluence',     category: 'Documentation',   icon: 'Co' },
  { id: '3',  name: 'Apache Spark',   category: 'Data Processing', icon: 'Sp' },
  { id: '4',  name: 'Microsoft Azure',category: 'Cloud Platform',  icon: 'Az' },
  { id: '5',  name: 'SQL / Hive',     category: 'Data & Query',    icon: 'SQ' },
  { id: '6',  name: 'Apache NiFi',    category: 'Data Pipelines',  icon: 'NF' },
  { id: '7',  name: 'Rally',          category: 'Project Mgmt',    icon: 'Ra' },
  { id: '8',  name: 'Fireflies.ai',   category: 'AI Tools',        icon: 'FF' },
  { id: '9',  name: 'Otter.ai',       category: 'AI Tools',        icon: 'Ot' },
  { id: '10', name: 'Jasper AI',      category: 'AI Tools',        icon: 'Ja' },
  { id: '11', name: 'Copy.ai',        category: 'AI Tools',        icon: 'Cp' },
  { id: '12', name: 'Salesforce',     category: 'CRM',             icon: 'Sf' },
  { id: '13', name: 'Tableau',        category: 'Data Viz',        icon: 'Tb' },
  { id: '14', name: 'Miro',           category: 'Whiteboarding',   icon: 'Mi' },
  { id: '15', name: 'Toad / PuTTY',  category: 'Data Tools',      icon: 'Td' },
];
