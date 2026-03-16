import type { ReactNode } from 'react';
import PrintButton from '@/components/ui/PrintButton';

export const metadata = {
  title: 'Resume',
  description:
    'Professional resume of Ashwini Borle — Senior Technical Product Manager with 14+ years in global fintech and data platforms.',
};

// ─── Data ────────────────────────────────────────────────────────────────────

const competencies = [
  'Product Strategy & Roadmapping',
  'Requirements Engineering (BRD/FRD)',
  'Data Platform Product Ownership',
  'Agile / Scrum Delivery',
  'Compliance (PCI / PII / Regulatory)',
  'Stakeholder Management',
  'AI-Driven Automation',
  'Cross-functional Leadership',
  'Data Pipelines & ETL Systems',
  'API & Integration Design',
  'Cloud Platforms (Azure/AWS)',
  'Legacy System Modernization',
  'SQL & Data Analysis',
  'BI & Reporting Analytics',
  'Data Governance & Quality',
  'AI-Powered Product Discovery',
];

const experience = [
  {
    company: 'Mastercard',
    title: 'Senior Technical Product Manager',
    period: '2022 – Present',
    location: 'Pune, India',
    highlights: [
      'Owned roadmap for 5 global data platforms ensuring PCI/PII compliance, reducing clarification cycles by 30% and operational overhead by 20%.',
      'Reduced production incidents by 40% and accelerated partner onboarding by 35% by modernising a legacy payment platform.',
      'Boosted feature adoption by 45% and increased transaction volume by 18% within two quarters.',
      'Automated SPARK-based data pipelines eliminating manual intervention and accelerating release velocity by 40%.',
    ],
  },
  {
    company: 'IBM',
    title: 'Associate Consultant – Product Manager',
    period: '2020 – 2022',
    location: 'Pune, India',
    highlights: [
      'Reduced job failures by 60% and improved batch processing time by 25%.',
      'Achieved 40% reduction in manual effort and improved data accuracy to 99.5%.',
      'Drove BI analytics improvements delivering 25% better project delivery efficiency for GM CDAO.',
    ],
  },
  {
    company: 'Tech Mahindra',
    title: 'Senior Software Engineer',
    period: '2019 – 2020',
    location: 'Pune, India',
    highlights: [
      'Enhanced application performance by 35% and reduced defects by 45%.',
      'Cut release cycles from 4 weeks to 2 weeks.',
    ],
  },
  {
    company: 'Vodafone Idea Limited',
    title: 'Assistant Manager – Production Support',
    period: '2017 – 2019',
    location: 'Pune, India',
    highlights: [
      'Maintained 99.9% system uptime with zero order loss.',
      'Reduced manual effort by 50% through process automation.',
    ],
  },
  {
    company: 'Infosys Public Services',
    title: 'Senior Software Engineer',
    period: '2014 – 2017',
    location: 'Pune, India',
    highlights: [
      'Reduced average resolution time by 30% and escalation rate by 40%.',
      'Improved customer satisfaction scores by 20%.',
    ],
  },
];

const certifications = [
  { name: 'ITIL Foundation Level', issuer: 'AXELOS', year: '2020' },
  { name: 'Product Management First Steps', issuer: 'LinkedIn Learning', year: '2021' },
  { name: 'Microsoft Azure Data Engineer', issuer: 'Microsoft', year: '2022' },
  { name: 'Containers & Kubernetes Essentials', issuer: 'IBM', year: '2022' },
  { name: 'Technical Product Management', issuer: 'Product School', year: '2023' },
];

// ─── Section divider ─────────────────────────────────────────────────────────

function SectionDivider() {
  return (
    <div
      className="my-8 h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent print:via-[#d1d5db]"
      aria-hidden="true"
    />
  );
}

// ─── Section heading ─────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-heading font-bold text-base uppercase tracking-[0.12em] text-[#1a2b4a] mb-5 flex items-center gap-3">
      <span
        className="inline-block w-3 h-3 rounded-sm bg-[#0ea5a0] flex-shrink-0"
        aria-hidden="true"
      />
      {children}
    </h2>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResumePage() {
  return (
    <div className="pt-16 md:pt-18 print:pt-0 print:shadow-none min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 print:px-0 print:py-6">

        {/* ── HEADER ─────────────────────────────────────────────────────── */}
        <header className="relative mb-0 rounded-2xl overflow-hidden print:rounded-none">
          {/* Subtle gradient background */}
          <div
            className="absolute inset-0 print:hidden"
            style={{
              background: 'linear-gradient(135deg, #1a2b4a 0%, #1e3a5f 60%, #0ea5a0 100%)',
            }}
            aria-hidden="true"
          />
          {/* Print-friendly solid bg */}
          <div
            className="hidden print:block absolute inset-0"
            style={{ background: '#f8fafc' }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 p-8 print:p-4 print:border print:border-[#e5e7eb] print:rounded-lg">
            {/* Left: name + contact */}
            <div className="flex-1">
              <h1 className="font-heading font-bold text-3xl md:text-4xl text-white print:text-[#1a2b4a] leading-tight mb-1">
                Ashwini Borle
              </h1>
              <p className="font-heading font-semibold text-lg text-[#0ea5a0] print:text-[#0ea5a0] mb-2">
                Senior Technical Product Manager
              </p>
              <p className="text-sm text-white/80 print:text-[#6b7280] mb-5 max-w-xl leading-relaxed">
                Bridging business intent and engineering execution across global fintech and data platforms
              </p>

              {/* Contact row */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/90 print:text-[#374151]">
                <a
                  href="mailto:contact@ashwiniborle.com"
                  className="flex items-center gap-1.5 hover:text-[#0ea5a0] transition-colors"
                >
                  <span aria-hidden="true">📧</span>
                  <span>contact@ashwiniborle.com</span>
                </a>
                <span className="flex items-center gap-1.5">
                  <span aria-hidden="true">📍</span>
                  <span>Pune, India (Worldwide Available)</span>
                </span>
                <a
                  href="https://linkedin.com/in/ashwiniborle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#0ea5a0] transition-colors"
                >
                  <span aria-hidden="true">🔗</span>
                  <span>linkedin.com/in/ashwiniborle</span>
                </a>
              </div>

              {/* Availability */}
              <p className="mt-3 text-xs font-medium text-white/70 print:text-[#6b7280]">
                Available: Remote / Hybrid / Onsite &nbsp;·&nbsp; India / USA / EU / Worldwide
              </p>
            </div>

            {/* Right: print button */}
            <div className="flex-shrink-0 sm:pt-1">
              <PrintButton />
            </div>
          </div>
        </header>

        <SectionDivider />

        {/* ── PROFESSIONAL SUMMARY ───────────────────────────────────────── */}
        <section aria-labelledby="summary-heading">
          <SectionHeading>
            <span id="summary-heading">Professional Summary</span>
          </SectionHeading>
          <p className="text-sm text-[#374151] leading-relaxed">
            Senior Technical Product Manager with 14+ years of experience leading data platform
            strategy, product delivery and cross-functional teams at Mastercard, IBM, Tech Mahindra,
            Vodafone and Infosys. Specialist in translating complex engineering architecture into clear
            product direction, embedding PCI/PII compliance from discovery, and driving measurable
            outcomes — 40% production incident reduction, 60% operational efficiency improvement, 35%
            faster partner onboarding.
          </p>
        </section>

        <SectionDivider />

        {/* ── CORE COMPETENCIES ─────────────────────────────────────────── */}
        <section aria-labelledby="competencies-heading">
          <SectionHeading>
            <span id="competencies-heading">Core Competencies</span>
          </SectionHeading>
          <div className="grid grid-cols-2 gap-2">
            {competencies.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f8fafc] border border-[#e5e7eb] text-xs font-medium text-[#1a2b4a] print:border-[#d1d5db]"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#0ea5a0] flex-shrink-0"
                  aria-hidden="true"
                />
                {skill}
              </div>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* ── WORK EXPERIENCE ───────────────────────────────────────────── */}
        <section aria-labelledby="experience-heading">
          <SectionHeading>
            <span id="experience-heading">Work Experience</span>
          </SectionHeading>

          <ol className="space-y-7" aria-label="Work history">
            {experience.map((job, index) => (
              <li key={job.company} className="relative">
                {/* Company + meta row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#1a2b4a]">
                      {job.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#0ea5a0]">{job.company}</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0] rounded-lg print:bg-transparent print:border-[#d1d5db] print:text-[#374151]">
                      {job.period}
                    </span>
                    <p className="text-xs text-[#6b7280] mt-1 sm:text-right">{job.location}</p>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-1.5" aria-label={`Achievements at ${job.company}`}>
                  {job.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#374151]">
                      <svg
                        className="w-3.5 h-3.5 text-[#0ea5a0] flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Separator between jobs (not after last) */}
                {index < experience.length - 1 && (
                  <div
                    className="mt-7 h-px bg-[#f3f4f6] print:bg-[#e5e7eb]"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </section>

        <SectionDivider />

        {/* ── EDUCATION ─────────────────────────────────────────────────── */}
        <section aria-labelledby="education-heading">
          <SectionHeading>
            <span id="education-heading">Education</span>
          </SectionHeading>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
            <div>
              <h3 className="font-heading font-bold text-base text-[#1a2b4a]">
                BE – Electrical, Electronics &amp; Communications Engineering
              </h3>
              <p className="text-sm font-medium text-[#0ea5a0]">
                Rashtrasant Tukadoji Maharaj Nagpur University
              </p>
              <p className="text-xs text-[#6b7280] mt-0.5">Nagpur, India</p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-[#eff6ff] text-[#1d4ed8] border border-[#bfdbfe] rounded-lg print:bg-transparent print:border-[#d1d5db] print:text-[#374151]">
                2008 – 2012
              </span>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ── CERTIFICATIONS ────────────────────────────────────────────── */}
        <section aria-labelledby="certifications-heading">
          <SectionHeading>
            <span id="certifications-heading">Certifications</span>
          </SectionHeading>

          <ul
            className="flex flex-wrap gap-2"
            aria-label="Professional certifications"
          >
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#f8fafc] border border-[#e5e7eb] print:border-[#d1d5db]"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#d4af37] flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold text-[#1a2b4a]">{cert.name}</span>
                <span className="text-xs text-[#6b7280]">
                  &mdash; {cert.issuer} ({cert.year})
                </span>
              </li>
            ))}
          </ul>
        </section>

        <SectionDivider />

        {/* ── AVAILABILITY ──────────────────────────────────────────────── */}
        <section aria-labelledby="availability-heading">
          <SectionHeading>
            <span id="availability-heading">Availability</span>
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Location', value: 'India (Pune) · Worldwide Available' },
              { label: 'Engagement', value: 'Remote / Hybrid / Onsite' },
              { label: 'Open to', value: 'Consulting · Advisory · Full-Time' },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl bg-[#f0fdfa] border border-[#99f6e4] print:bg-transparent print:border-[#d1d5db]"
              >
                <p className="text-xs font-semibold text-[#0ea5a0] uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-[#1a2b4a]">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Print footer */}
        <div className="hidden print:block mt-8 pt-4 border-t border-[#e5e7eb] text-center text-xs text-[#9ca3af]">
          contact@ashwiniborle.com &nbsp;·&nbsp; linkedin.com/in/ashwiniborle &nbsp;·&nbsp; Pune, India
        </div>

      </div>
    </div>
  );
}
