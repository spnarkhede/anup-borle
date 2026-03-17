'use client';

const companies = [
  {
    name: 'Deutsche Bank',
    years: '2022 – Present',
    role: 'SRE Engineer · AVP',
    color: '#0018A8',
    bg: '#EEF0FF',
    darkBg: '#070B2E',
    abbr: 'DB',
    logo: '/logos/detuschebank.png',
  },
  {
    name: 'Credit Suisse',
    years: '2019 – 2022',
    role: 'Site Reliability Engineer',
    color: '#003155',
    bg: '#E6EEF5',
    darkBg: '#001020',
    abbr: 'CS',
    logo: '/logos/creditsuisse.png',
  },
  {
    name: 'Nokia',
    years: '2016 – 2019',
    role: 'Solutions Specialist',
    color: '#124191',
    bg: '#EBF0FA',
    darkBg: '#07132C',
    abbr: 'NK',
    logo: '/logos/nokia.png',
  },
  {
    name: 'Vodafone',
    years: '2016',
    role: 'Senior Software Engineer',
    color: '#E60000',
    bg: '#FFF0F0',
    darkBg: '#2D1010',
    abbr: 'VF',
    logo: '/logos/vodafone.png',
  },
  {
    name: 'Cognizant',
    years: '2014 – 2015',
    role: 'Senior Software Engineer',
    color: '#1A1A5B',
    bg: '#EEEEFF',
    darkBg: '#0A0A20',
    abbr: 'CG',
    logo: '/logos/cognizant.png',
  },
  {
    name: 'IBM India',
    years: '2012 – 2014',
    role: 'Software Engineer',
    color: '#1F70C1',
    bg: '#EBF4FF',
    darkBg: '#0A1F35',
    abbr: 'IBM',
    logo: '/logos/ibm.png',
  },
];

export default function CompaniesSection() {
  return (
    <section
      className="py-16 bg-white dark:bg-[#0f172a]"
      aria-labelledby="companies-heading"
      id="companies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#0ea5a0] dark:text-[#14b8a6] uppercase tracking-wider mb-3">
            Career History
          </p>
          <h2
            id="companies-heading"
            className="font-heading font-bold text-3xl md:text-4xl text-[#1f2937] dark:text-[#f8fafc] mb-4"
          >
            Experience Across Leading Organisations
          </h2>
          <div
            className="w-16 h-1 bg-gradient-to-r from-[#0ea5a0] to-[#d4af37] rounded-full mx-auto"
            aria-hidden="true"
          />
        </div>

        {/* Company cards grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
          role="list"
          aria-label="Companies worked at"
        >
          {companies.map((company) => (
            <div
              key={company.name}
              role="listitem"
              className="card-hover animate-on-scroll group relative flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-[#1e293b] border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                borderColor: `${company.color}30`,
              }}
            >
              {/* Logo */}
              <div
                className="w-20 h-14 rounded-xl flex items-center justify-center mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110 overflow-hidden p-2 bg-white dark:bg-[#f8fafc]"
                style={{ border: `1.5px solid ${company.color}20` }}
                aria-hidden="true"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <span
                  className="font-heading font-bold text-sm tracking-wide hidden w-full h-full items-center justify-center"
                  style={{ color: company.color }}
                >
                  {company.abbr}
                </span>
              </div>

              {/* Company name */}
              <p
                className="font-heading font-bold text-sm leading-tight mb-1"
                style={{ color: company.color }}
              >
                {company.name}
              </p>

              {/* Role */}
              <p className="text-xs font-medium text-[#1f2937] dark:text-[#f8fafc] mb-1 leading-snug">
                {company.role}
              </p>

              {/* Years */}
              <p className="text-xs text-[#6b7280] dark:text-[#94a3b8] font-medium">
                {company.years}
              </p>

              {/* Subtle bottom accent */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: company.color }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
