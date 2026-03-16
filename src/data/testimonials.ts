export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  relationship: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Saksham Taletiya',
    role: 'Director',
    company: 'Deutsche Bank',
    avatar: 'ST',
    rating: 5,
    date: 'February 2025',
    relationship: 'Team member at Deutsche Bank',
    text: "Anup has been a fantastic colleague and an absolute asset to our team. I am proud to have worked alongside him. In the ever-evolving field of site reliability engineering, Anup's deep technical expertise and commitment to continuous improvement are qualities that every team needs. I have no doubt that wherever Anup goes, he will be a valuable asset, a dependable colleague, and a standout engineer.",
  },
  {
    id: '2',
    name: 'Srikanth Reddy',
    role: 'SRE Engineer',
    company: 'Deutsche Bank',
    avatar: 'SR',
    rating: 5,
    date: 'February 2025',
    relationship: 'Colleague at Deutsche Bank',
    text: "Anup has been a great mentor and an excellent team player. He is a quick learner and always ready to help others. He is a great asset to any team. His dedication to excellence, combined with his collaborative spirit, makes him an exceptional colleague. His ability to navigate complex technical challenges and provide clear, thoughtful solutions has been invaluable to our team.",
  },
  {
    id: '3',
    name: 'Zeeshan Rafique',
    role: 'Solutions Architect',
    company: 'Deutsche Bank',
    avatar: 'ZR',
    rating: 5,
    date: 'February 2025',
    relationship: 'Colleague at Deutsche Bank',
    text: "I have had the pleasure of working with Anup Borle, and I can confidently say he is an exceptional SRE professional. His expertise in managing CI/CD pipelines, ensuring system reliability, and implementing best practices in site reliability engineering is truly impressive. What stands out most is his ability to proactively identify and resolve potential issues before they impact production. His collaborative nature and deep technical knowledge make him an invaluable asset to any team.",
  },
  {
    id: '4',
    name: 'Gaurav Naik',
    role: 'Senior SRE Engineer',
    company: 'Deutsche Bank',
    avatar: 'GN',
    rating: 5,
    date: 'February 2025',
    relationship: 'Colleague at Deutsche Bank',
    text: "I have had the pleasure of working alongside Anup Borle for several years, and I can wholeheartedly recommend him as an outstanding Site Reliability Engineer. His technical prowess in areas such as CI/CD pipelines, infrastructure automation, and incident management is unmatched. What truly distinguishes Anup is his proactive approach to problem-solving and his unwavering commitment to ensuring system reliability and stability. His ability to analyze complex issues and develop innovative solutions under pressure is remarkable.",
  },
  {
    id: '5',
    name: 'Balaji Raghvin',
    role: 'SRE Engineer',
    company: 'Deutsche Bank',
    avatar: 'BR',
    rating: 5,
    date: 'January 2025',
    relationship: 'Colleague at Deutsche Bank',
    text: "I had the privilege of working with Anup and he's one of the most skilled and dependable SREs I've encountered. His expertise in CI/CD, monitoring infrastructure, and release management is exceptional. What sets him apart is his ability to bridge the gap between development and operations teams, ensuring smooth and reliable deployments. Anup's deep knowledge of tools like Jenkins, Splunk, Kubernetes, and Geneos, combined with his ITIL best practices knowledge, makes him a complete SRE package.",
  },
  {
    id: '6',
    name: 'Deepak K.',
    role: 'Lead SRE',
    company: 'Deutsche Bank',
    avatar: 'DK',
    rating: 5,
    date: 'January 2025',
    relationship: 'Colleague at Deutsche Bank',
    text: "Anup is an exceptional Site Reliability Engineer with a remarkable ability to manage complex infrastructure and ensure system stability. His expertise in CI/CD pipelines, release management and monitoring solutions like Splunk and Geneos has been invaluable. He excels at implementing proactive monitoring strategies that significantly reduce downtime and improve system performance. What truly distinguishes Anup is his collaborative nature and strong communication skills, making him an effective bridge between development teams and operations.",
  },
];
