import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#0f172a]"
      aria-label="Hero section"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#0ea5a0]/10 to-[#1a2b4a]/8 dark:from-[#14b8a6]/10 dark:to-[#3b82f6]/8 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-[#d4af37]/8 to-[#0ea5a0]/8 dark:from-[#d4af37]/8 dark:to-[#14b8a6]/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#1a2b4a 1px, transparent 1px), linear-gradient(90deg, #1a2b4a 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="order-1 lg:order-1">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#0ea5a0]/10 dark:bg-[#14b8a6]/10 border border-[#0ea5a0]/20 dark:border-[#14b8a6]/20">
              <span className="w-2 h-2 rounded-full bg-[#0ea5a0] dark:bg-[#14b8a6] animate-pulse" aria-hidden="true" />
              <span className="text-sm font-semibold text-[#0ea5a0] dark:text-[#14b8a6]">
                Available for New Opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-[#1f2937] dark:text-[#f8fafc] leading-[1.05] mb-4">
              Anup{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#0ea5a0] to-[#1a2b4a] dark:from-[#14b8a6] dark:to-[#3b82f6] bg-clip-text text-transparent">
                  Borle
                </span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#0ea5a0] to-[#d4af37] rounded-full opacity-60"
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Title */}
            <p className="font-heading font-semibold text-xl sm:text-2xl text-[#1a2b4a] dark:text-[#3b82f6] mb-4">
              SRE Engineer – AVP
            </p>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-[#6b7280] dark:text-[#94a3b8] leading-relaxed mb-8 max-w-lg">
              Engineering reliability into production systems — from CI/CD pipeline automation to zero-downtime deployments and proactive observability at Deutsche Bank.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a2b4a] dark:bg-[#3b82f6] text-white font-semibold rounded-xl hover:bg-[#243d6b] dark:hover:bg-[#2563eb] transition-all duration-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] focus-visible:ring-offset-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Consultation
              </Link>

              <Link
                href="/profile"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-[#1a2b4a] dark:text-[#f8fafc] font-semibold rounded-xl border-2 border-[#1a2b4a]/20 dark:border-[#f8fafc]/20 hover:border-[#0ea5a0] dark:hover:border-[#14b8a6] hover:text-[#0ea5a0] dark:hover:text-[#14b8a6] transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] focus-visible:ring-offset-2"
              >
                Explore My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-[#6b7280] dark:text-[#94a3b8]">
              <div className="flex -space-x-2">
                {['ST', 'SR', 'ZR', 'GN'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-[#0f172a] shadow-sm"
                    style={{ background: `hsl(${i * 60 + 200}, 60%, 45%)` }}
                    aria-hidden="true"
                  >
                    {initials[0]}
                  </div>
                ))}
              </div>
              <span>
                Trusted by teams at <strong className="text-[#1f2937] dark:text-[#f8fafc]">Deutsche Bank, Credit Suisse & more</strong>
              </span>
            </div>
          </div>

          {/* Right: Abstract Graphic */}
          <div className="order-2 lg:order-2 flex items-center justify-center">
            <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg">
              {/* Main card */}
              <div className="relative z-10 bg-white dark:bg-[#1e293b] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-8 border border-[#e5e7eb] dark:border-[#334155]">
                {/* Profile area */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a2b4a] to-[#0ea5a0] dark:from-[#3b82f6] dark:to-[#14b8a6] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-bold text-xl font-heading">AB</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[#1f2937] dark:text-[#f8fafc]">Anup Borle</p>
                    <p className="text-sm text-[#6b7280] dark:text-[#94a3b8]">SRE Engineer · AVP @ Deutsche Bank</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className="w-3 h-3 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats mini grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Years Experience', value: '12+' },
                    { label: 'Organisations', value: '6+' },
                    { label: 'Uptime Delivered', value: '99.95%' },
                    { label: 'Faster Deploys', value: '3×' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[#f9fafb] dark:bg-[#0f172a] rounded-xl p-3 text-center border border-[#e5e7eb] dark:border-[#334155]"
                    >
                      <p className="font-heading font-bold text-lg text-[#1a2b4a] dark:text-[#3b82f6]">{stat.value}</p>
                      <p className="text-xs text-[#6b7280] dark:text-[#94a3b8] mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Skill bars mini */}
                <div className="space-y-2.5">
                  {[
                    { name: 'CI/CD Pipeline Design', pct: 95 },
                    { name: 'Site Reliability Engineering', pct: 93 },
                    { name: 'Infrastructure Automation', pct: 90 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-medium text-[#6b7280] dark:text-[#94a3b8]">{skill.name}</span>
                        <span className="text-xs font-bold text-[#0ea5a0] dark:text-[#14b8a6]">{skill.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-[#e5e7eb] dark:bg-[#334155] rounded-full overflow-hidden" aria-label={`${skill.name}: ${skill.pct}%`}>
                        <div
                          className="h-full bg-gradient-to-r from-[#0ea5a0] to-[#1a2b4a] dark:from-[#14b8a6] dark:to-[#3b82f6] rounded-full"
                          style={{ width: `${skill.pct}%` }}
                          role="progressbar"
                          aria-valuenow={skill.pct}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge 1 */}
              <div
                className="absolute -top-4 -right-4 z-20 bg-white dark:bg-[#1e293b] rounded-2xl shadow-lg border border-[#e5e7eb] dark:border-[#334155] px-4 py-2.5 flex items-center gap-2"
                aria-hidden="true"
              >
                <div className="w-8 h-8 rounded-xl bg-[#d4af37]/15 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1f2937] dark:text-[#f8fafc]">Deutsche Bank</p>
                  <p className="text-xs text-[#6b7280] dark:text-[#94a3b8]">SRE Engineer · AVP</p>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div
                className="absolute -bottom-4 -left-4 z-20 bg-white dark:bg-[#1e293b] rounded-2xl shadow-lg border border-[#e5e7eb] dark:border-[#334155] px-4 py-2.5 flex items-center gap-2"
                aria-hidden="true"
              >
                <div className="w-8 h-8 rounded-xl bg-[#0ea5a0]/12 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#0ea5a0] dark:text-[#14b8a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1f2937] dark:text-[#f8fafc]">Available Now</p>
                  <p className="text-xs text-[#6b7280] dark:text-[#94a3b8]">Open to projects</p>
                </div>
              </div>

              {/* Decorative circle */}
              <div
                className="absolute -z-10 -top-8 -right-8 w-64 h-64 rounded-full bg-gradient-to-br from-[#0ea5a0]/12 to-[#d4af37]/8 dark:from-[#14b8a6]/10 dark:to-[#3b82f6]/10 blur-2xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#6b7280] dark:text-[#94a3b8]"
        aria-hidden="true"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-[#6b7280]/40 dark:border-[#94a3b8]/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-[#6b7280] dark:bg-[#94a3b8] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
