import type { ReactNode } from 'react';
import PrintButton from '@/components/ui/PrintButton';

export const metadata = {
  title: 'Resume',
  description:
    'Professional resume of Anup Borle — SRE Engineer AVP at Deutsche Bank with 12+ years in site reliability engineering, CI/CD automation, and DevOps transformation.',
};

// ─── Data ────────────────────────────────────────────────────────────────────

const competencies = [
  'CI/CD Pipeline Design',
  'Site Reliability Engineering',
  'Infrastructure Automation',
  'Jenkins & TeamCity',
  'Kubernetes & Docker',
  'Splunk & Geneos',
  'Release Management',
  'Incident Management',
  'ITIL 4 Framework',
  'Linux Administration',
  'Azure Cloud',
  'Shell Scripting & Bash',
];

const experience = [
  {
    company: 'Deutsche Bank',
    title: 'SRE Engineer – AVP',
    period: 'Mar 2025 – Present',
    location: 'Pune, India',
    highlights: [
      'Leading SRE practice for critical banking applications serving global markets.',
      'Architecting and optimising CI/CD pipelines using Jenkins and TeamCity, driving 3× improvement in deployment frequency.',
      'Maintaining 99.95%+ production uptime through proactive monitoring, SLO/SLI frameworks, and error budget policies.',
      'Establishing SRE culture across development teams through runbook standardisation and chaos engineering practices.',
    ],
  },
  {
    company: 'Deutsche Bank',
    title: 'SRE Engineer Associate',
    period: 'May 2022 – Mar 2025',
    location: 'Pune, India',
    highlights: [
      'Built enterprise monitoring platform using Splunk and Geneos, achieving unified observability across production systems.',
      'Reduced MTTR by 55% through intelligent alerting, automated remediation, and structured incident response.',
      'Automated release pipelines eliminating 80% of manual deployment steps and reducing release errors significantly.',
      'Implemented Kubernetes-based container orchestration for production workloads, improving resource utilisation and deployment reliability.',
    ],
  },
  {
    company: 'Credit Suisse',
    title: 'Site Reliability Engineer',
    period: 'Feb 2019 – May 2022',
    location: 'Pune, India',
    highlights: [
      'Introduced SRE practices and DevOps transformation across development teams, establishing error budget and SLO/SLI frameworks.',
      'Containerised applications using Docker and deployed on Kubernetes, enabling consistent and reproducible deployments.',
      'Increased deployment frequency by 200% while reducing production downtime by 60% through pipeline automation.',
      'Defined and implemented ITIL-aligned incident management processes reducing escalation rate by 45%.',
    ],
  },
  {
    company: 'Nokia',
    title: 'Solutions Specialist',
    period: 'Oct 2016 – Feb 2019',
    location: 'Pune, India',
    highlights: [
      'Managed release automation and operational excellence initiatives across telecom infrastructure platforms.',
      'Implemented ITIL-aligned change management processes reducing change-related incidents by 50%.',
      'Reduced release cycle time by 60% through pipeline automation and standardised deployment procedures.',
      'Standardised runbooks reducing manual release errors by 75% and improving on-call efficiency.',
    ],
  },
  {
    company: 'Vodafone',
    title: 'Senior Software Engineer',
    period: 'Jan 2016 – Oct 2016',
    location: 'Pune, India',
    highlights: [
      'Production support and automation for critical telecom infrastructure systems.',
      'Implemented monitoring and alerting frameworks for high-availability services.',
    ],
  },
];

const certifications = [
  { name: 'ITIL 4 Foundation', issuer: 'PeopleCert', year: '2021' },
  { name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft', year: '2020' },
  { name: 'DevOps Engineer', issuer: 'Edureka', year: '2020' },
  { name: 'ITIL V3 Foundation', issuer: 'PeopleCert', year: '2015' },
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
                Anup Borle
              </h1>
              <p className="font-heading font-semibold text-lg text-[#0ea5a0] print:text-[#0ea5a0] mb-2">
                SRE Engineer – AVP
              </p>
              <p className="text-sm text-white/80 print:text-[#6b7280] mb-5 max-w-xl leading-relaxed">
                Engineering production reliability, CI/CD automation, and observability platforms at Deutsche Bank
              </p>

              {/* Contact row */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/90 print:text-[#374151]">
                <a
                  href="mailto:anup.borle@yahoo.com"
                  className="flex items-center gap-1.5 hover:text-[#0ea5a0] transition-colors"
                >
                  <span aria-hidden="true">📧</span>
                  <span>anup.borle@yahoo.com</span>
                </a>
                <a
                  href="tel:+919960827111"
                  className="flex items-center gap-1.5 hover:text-[#0ea5a0] transition-colors"
                >
                  <span aria-hidden="true">📞</span>
                  <span>+91 9960827111</span>
                </a>
                <span className="flex items-center gap-1.5">
                  <span aria-hidden="true">📍</span>
                  <span>Pune, India (Worldwide Available)</span>
                </span>
                <a
                  href="https://linkedin.com/in/anupborle-367410138"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#0ea5a0] transition-colors"
                >
                  <span aria-hidden="true">🔗</span>
                  <span>linkedin.com/in/anupborle-367410138</span>
                </a>
              </div>

              {/* Availability */}
              <p className="mt-3 text-xs font-medium text-white/70 print:text-[#6b7280]">
                Available: Remote / Hybrid / Open to Relocation
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
            Results-driven SRE Engineer with 12+ years of experience building reliable production systems,
            automating CI/CD pipelines, and implementing observability platforms across global financial
            institutions including Deutsche Bank and Credit Suisse. Deep expertise in Jenkins/TeamCity,
            Kubernetes, Docker, Splunk, Geneos, and ITIL service management. Proven track record of
            achieving 99.95%+ uptime, reducing MTTR by 55%, and accelerating deployment frequency by 3×.
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
                BE – Mechanical Engineering
              </h3>
              <p className="text-sm font-medium text-[#0ea5a0]">
                Bapurao Deshmukh College of Engineering, Wardha
              </p>
              <p className="text-xs text-[#6b7280] mt-0.5">Wardha, India</p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-[#eff6ff] text-[#1d4ed8] border border-[#bfdbfe] rounded-lg print:bg-transparent print:border-[#d1d5db] print:text-[#374151]">
                2004 – 2011
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
              { label: 'Engagement', value: 'Remote / Hybrid / Open to Relocation' },
              { label: 'Open to', value: 'SRE Consulting · Advisory · Full-Time' },
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
          anup.borle@yahoo.com &nbsp;·&nbsp; linkedin.com/in/anupborle-367410138 &nbsp;·&nbsp; Pune, India
        </div>

      </div>
    </div>
  );
}
