import type { Metadata } from 'next';
import Link from 'next/link';
import SkillsSection from '@/components/sections/SkillsSection';
import TimelineSection from '@/components/sections/TimelineSection';
import { caseStudies } from '@/data/caseStudies';
import { tools } from '@/data/skills';

export const metadata: Metadata = {
  title: 'Profile',
  description:
    'Full professional profile of Anup Borle — case studies, skills breakdown, career timeline, and tools. 12+ years in SRE, CI/CD automation, and DevOps engineering.',
};

export default function ProfilePage() {
  return (
    <div className="pt-16 md:pt-18">
      {/* Page header */}
      <section className="py-16 md:py-20 bg-white dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5a0]/10 dark:bg-[#14b8a6]/10 text-[#0ea5a0] dark:text-[#14b8a6] text-xs font-semibold tracking-widest uppercase mb-6">
            Full Profile
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#1f2937] dark:text-[#f8fafc] mb-4">
            Work & Expertise
          </h1>
          <p className="text-[#6b7280] dark:text-[#94a3b8] text-lg max-w-2xl">
            A detailed look at the case studies, skills, tools, and career history behind 12+ years of SRE and DevOps engineering across global financial institutions and enterprise infrastructure.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-[#f9fafb] dark:bg-[#0f172a]" id="case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-on-scroll">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1f2937] dark:text-[#f8fafc] mb-3">
              Case Studies
            </h2>
            <p className="text-[#6b7280] dark:text-[#94a3b8] text-lg max-w-2xl">
              Real challenges, real solutions, real results.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0ea5a0] to-[#d4af37] rounded-full mt-4" />
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, i) => (
              <article
                key={study.id}
                className={`animate-on-scroll delay-${Math.min((i + 1) * 100, 400)} bg-white dark:bg-[#1e293b] rounded-2xl border border-[#e5e7eb] dark:border-[#334155] overflow-hidden card-hover`}
              >
                {/* Accent top bar */}
                <div className="h-1.5" style={{ backgroundColor: study.color }} />

                <div className="p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span
                          className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-white"
                          style={{ backgroundColor: study.color }}
                        >
                          {study.category}
                        </span>
                        <span className="text-sm text-[#6b7280] dark:text-[#94a3b8]">
                          {study.company} · {study.year} · {study.duration}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-[#1f2937] dark:text-[#f8fafc]">
                        {study.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-[#f9fafb] dark:bg-[#0f172a] border border-[#e5e7eb] dark:border-[#334155] text-xs font-medium text-[#6b7280] dark:text-[#94a3b8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {[
                      { label: 'Challenge', text: study.challenge },
                      { label: 'Solution', text: study.solution },
                      { label: 'Result', text: study.result },
                    ].map(({ label, text }) => (
                      <div key={label}>
                        <h4 className="text-xs font-bold tracking-widest uppercase text-[#6b7280] dark:text-[#94a3b8] mb-2">
                          {label}
                        </h4>
                        <p className="text-[#1f2937] dark:text-[#f8fafc] text-sm leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#e5e7eb] dark:border-[#334155]">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <dt className="text-xs text-[#6b7280] dark:text-[#94a3b8] mb-1">{metric.label}</dt>
                        <dd className="font-heading font-bold text-lg text-[#1f2937] dark:text-[#f8fafc]" style={{ color: study.color }}>
                          {metric.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <SkillsSection />

      {/* Tools */}
      <section className="py-20 bg-white dark:bg-[#0f172a]" id="tools">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-on-scroll">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1f2937] dark:text-[#f8fafc] mb-3">
              Tools & Technologies
            </h2>
            <p className="text-[#6b7280] dark:text-[#94a3b8] text-lg max-w-2xl">
              The toolkit I use to research, design, build, and measure.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0ea5a0] to-[#d4af37] rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {tools.map((tool, i) => (
              <div
                key={tool.id}
                className={`animate-on-scroll delay-${Math.min((i % 5 + 1) * 100, 500)} flex flex-col items-center gap-3 p-5 bg-[#f9fafb] dark:bg-[#1e293b] rounded-xl border border-[#e5e7eb] dark:border-[#334155] card-hover text-center`}
              >
                <div className="w-11 h-11 rounded-lg bg-[#0ea5a0]/10 dark:bg-[#14b8a6]/10 flex items-center justify-center">
                  <span className="font-heading font-bold text-sm text-[#0ea5a0] dark:text-[#14b8a6]">
                    {tool.icon}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm text-[#1f2937] dark:text-[#f8fafc] leading-tight">{tool.name}</p>
                  <p className="text-xs text-[#6b7280] dark:text-[#94a3b8] mt-0.5">{tool.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <TimelineSection />

      {/* CTA */}
      <section className="py-16 bg-[#f9fafb] dark:bg-[#1e293b]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1f2937] dark:text-[#f8fafc] mb-4">
            Interested in working together?
          </h2>
          <p className="text-[#6b7280] dark:text-[#94a3b8] text-lg mb-8">
            I'm available for consulting projects, advisory roles, and strategic collaborations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a2b4a] dark:bg-[#3b82f6] text-white font-bold rounded-xl hover:bg-[#243d6b] dark:hover:bg-[#2563eb] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] focus-visible:ring-offset-2"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
