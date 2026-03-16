import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Anup Borle — SRE Engineer AVP at Deutsche Bank. Available worldwide for SRE consulting, DevOps advisory roles, and select full-time opportunities.',
};

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'anup.borle@yahoo.com',
    href: 'mailto:anup.borle@yahoo.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone / WhatsApp',
    value: '+91 9960827111',
    href: 'tel:+919960827111',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Pune, India',
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
    label: 'Availability',
    value: 'Worldwide — India · USA · EU',
    href: null,
  },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anupborle-367410138',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:anup.borle@yahoo.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    href: 'tel:+919960827111',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: 'What types of SRE engagements does Anup take on?',
    a: 'Anup works with financial institutions and enterprise technology companies on production reliability, CI/CD pipeline design, DevOps transformation, and observability platform implementation. Engagements range from one-time pipeline audits and architecture reviews to ongoing advisory retainers covering SRE practice build-out.',
  },
  {
    q: 'How quickly can Anup improve deployment pipelines?',
    a: 'Typical CI/CD improvement engagements show measurable gains within the first 4–8 weeks — automated build/test stages, reduced pipeline run times, and elimination of manual release steps. Full deployment frequency improvements of 2–3× are typically realised within 3–6 months depending on the current state of the pipeline.',
  },
  {
    q: 'Does Anup work with regulated industries?',
    a: 'Yes — the majority of Anup\'s career has been in highly regulated environments. At Deutsche Bank and Credit Suisse, all SRE and DevOps work operated under strict financial services regulatory requirements including change management controls, audit trails, and ITIL-aligned incident management. This background makes Anup particularly well-suited to engagements where compliance and reliability must coexist.',
  },
  {
    q: 'What is Anup\'s preferred working style?',
    a: 'Anup is fully flexible — Remote, Hybrid, or Onsite depending on the engagement. He is based in Pune, India and available for engagements across India, USA, EU, and worldwide. On-call culture and async-first collaboration are second nature.',
  },
  {
    q: 'What is the typical response time?',
    a: 'Anup responds to all serious inquiries within 1–2 business days. For urgent matters, please mention it in the subject line or reach out directly by phone/WhatsApp.',
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-18">
      {/* Header */}
      <section className="relative py-20 md:py-28 bg-white dark:bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#0ea5a0]/8 to-transparent dark:from-[#14b8a6]/8 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-tr from-[#d4af37]/8 to-transparent blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-on-scroll">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5a0]/10 dark:bg-[#14b8a6]/10 text-[#0ea5a0] dark:text-[#14b8a6] text-xs font-semibold tracking-widest uppercase mb-6">
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#1f2937] dark:text-[#f8fafc] mb-5 leading-tight">
              Let&apos;s build something{' '}
              <span className="text-gradient">great together</span>
            </h1>
            <p className="text-[#6b7280] dark:text-[#94a3b8] text-lg leading-relaxed mb-6">
              Whether you&apos;re looking for an SRE consulting partner, DevOps advisory support, a reliability engineer for your team, or want to explore a full-time collaboration — Anup Borle would love to hear from you.
            </p>

            {/* Working style + location chips */}
            <div className="flex flex-wrap gap-2">
              {['Remote', 'Hybrid', 'Onsite'].map((style) => (
                <span key={style} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1a2b4a]/8 dark:bg-[#3b82f6]/10 text-[#1a2b4a] dark:text-[#3b82f6] text-xs font-semibold border border-[#1a2b4a]/15 dark:border-[#3b82f6]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5a0]" aria-hidden="true" />
                  {style}
                </span>
              ))}
              <span className="w-px bg-[#e5e7eb] dark:bg-[#334155] mx-1" aria-hidden="true" />
              {['India', 'USA', 'EU', 'Worldwide'].map((loc) => (
                <span key={loc} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0ea5a0]/8 dark:bg-[#14b8a6]/10 text-[#0ea5a0] dark:text-[#14b8a6] text-xs font-semibold border border-[#0ea5a0]/15 dark:border-[#14b8a6]/20">
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-20 bg-[#f9fafb] dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Sidebar */}
            <aside className="lg:col-span-2 space-y-6 animate-on-scroll-left">
              {/* Contact info card */}
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[#e5e7eb] dark:border-[#334155]">
                <h2 className="font-heading font-semibold text-lg text-[#1f2937] dark:text-[#f8fafc] mb-5">
                  Contact Anup Borle
                </h2>
                <ul className="space-y-4">
                  {contactInfo.map((info) => (
                    <li key={info.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#0ea5a0]/10 dark:bg-[#14b8a6]/10 text-[#0ea5a0] dark:text-[#14b8a6] flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#6b7280] dark:text-[#94a3b8] uppercase tracking-wider mb-0.5">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm font-medium text-[#1f2937] dark:text-[#f8fafc] hover:text-[#0ea5a0] dark:hover:text-[#14b8a6] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] rounded break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-[#1f2937] dark:text-[#f8fafc]">{info.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Social / quick links */}
                <div className="mt-6 pt-6 border-t border-[#e5e7eb] dark:border-[#334155]">
                  <p className="text-xs font-semibold text-[#6b7280] dark:text-[#94a3b8] uppercase tracking-wider mb-3">
                    Connect Directly
                  </p>
                  <div className="flex gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : undefined}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        aria-label={`${social.label}`}
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#f9fafb] dark:bg-[#0f172a] border border-[#e5e7eb] dark:border-[#334155] text-[#6b7280] dark:text-[#94a3b8] hover:text-[#0ea5a0] dark:hover:text-[#14b8a6] hover:border-[#0ea5a0] dark:hover:border-[#14b8a6] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0]"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Availability card */}
              <div className="bg-gradient-to-br from-[#1a2b4a] to-[#0ea5a0] dark:from-[#1e293b] dark:to-[#0f172a] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                  <p className="font-semibold text-white text-sm">Anup is Available Now</p>
                </div>
                <p className="text-white/75 text-sm leading-relaxed mb-5">
                  Open to SRE consulting, DevOps advisory roles, and select full-time opportunities globally.
                </p>
                <ul className="space-y-2">
                  {['SRE Consulting', 'DevOps Advisory', 'Full-Time (select)', 'Architecture Reviews'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Working style + location */}
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-5 border border-[#e5e7eb] dark:border-[#334155]">
                <p className="text-xs font-semibold text-[#6b7280] dark:text-[#94a3b8] uppercase tracking-wider mb-3">Working Style</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Remote', 'Hybrid', 'Onsite'].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full bg-[#f9fafb] dark:bg-[#0f172a] border border-[#e5e7eb] dark:border-[#334155] text-xs font-semibold text-[#1f2937] dark:text-[#f8fafc]">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-xs font-semibold text-[#6b7280] dark:text-[#94a3b8] uppercase tracking-wider mb-3">Available In</p>
                <div className="flex flex-wrap gap-2">
                  {['India', 'USA', 'EU', 'Worldwide'].map((l) => (
                    <span key={l} className="px-3 py-1 rounded-full bg-[#0ea5a0]/8 dark:bg-[#14b8a6]/10 border border-[#0ea5a0]/20 dark:border-[#14b8a6]/20 text-xs font-semibold text-[#0ea5a0] dark:text-[#14b8a6]">
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-5 border border-[#e5e7eb] dark:border-[#334155] flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#d4af37]/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#1f2937] dark:text-[#f8fafc]">Quick Response</p>
                  <p className="text-xs text-[#6b7280] dark:text-[#94a3b8]">Typically replies within 1–2 business days</p>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-3 animate-on-scroll-right">
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-[#e5e7eb] dark:border-[#334155] shadow-sm">
                <h2 className="font-heading font-bold text-2xl text-[#1f2937] dark:text-[#f8fafc] mb-2">
                  Send Anup a Message
                </h2>
                <p className="text-[#6b7280] dark:text-[#94a3b8] text-sm mb-8">
                  All fields marked with <span className="text-red-500">*</span> are required.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white dark:bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-[#1f2937] dark:text-[#f8fafc] mb-8 text-center animate-on-scroll">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className={`animate-on-scroll delay-${Math.min((i + 1) * 100, 400)} group bg-[#f9fafb] dark:bg-[#1e293b] rounded-xl border border-[#e5e7eb] dark:border-[#334155]`}
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-medium text-[#1f2937] dark:text-[#f8fafc] hover:text-[#0ea5a0] dark:hover:text-[#14b8a6] transition-colors duration-200 select-none list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0ea5a0]">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 flex-shrink-0 ml-4 text-[#6b7280] dark:text-[#94a3b8] transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-[#6b7280] dark:text-[#94a3b8] text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#f9fafb] dark:bg-[#1e293b]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <p className="text-[#6b7280] dark:text-[#94a3b8] text-lg mb-6">
            Prefer to explore Anup&apos;s work before reaching out?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resume"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1a2b4a] dark:bg-[#3b82f6] text-white font-semibold rounded-xl hover:bg-[#243d6b] dark:hover:bg-[#2563eb] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] focus-visible:ring-offset-2"
            >
              View Resume
            </Link>
            <Link
              href="/profile"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#e5e7eb] dark:border-[#334155] text-[#1f2937] dark:text-[#f8fafc] font-semibold rounded-xl hover:bg-white dark:hover:bg-[#0f172a] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] focus-visible:ring-offset-2"
            >
              View Profile &amp; Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
