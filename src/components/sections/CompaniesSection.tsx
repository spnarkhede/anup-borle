const companies = [
  {
    name: 'Mastercard',
    years: '2022–Present',
    role: 'Senior TPM',
    color: '#EB001B',
    bg: '#FFF1F1',
    darkBg: '#2D1515',
    abbr: 'MC',
  },
  {
    name: 'IBM',
    years: '2020–2022',
    role: 'Assoc. Consultant PM',
    color: '#054ADA',
    bg: '#EFF4FF',
    darkBg: '#0D1B3E',
    abbr: 'IBM',
  },
  {
    name: 'Tech Mahindra',
    years: '2019–2020',
    role: 'Senior SWE',
    color: '#6B2286',
    bg: '#F5EEFF',
    darkBg: '#1E0D2E',
    abbr: 'TM',
  },
  {
    name: 'Vodafone',
    years: '2017–2019',
    role: 'Asst. Manager',
    color: '#E60000',
    bg: '#FFF0F0',
    darkBg: '#2D1010',
    abbr: 'VF',
  },
  {
    name: 'Infosys',
    years: '2014–2017',
    role: 'Senior SWE',
    color: '#007CC3',
    bg: '#EBF6FF',
    darkBg: '#0A1F30',
    abbr: 'IN',
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
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
              {/* Monogram badge */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: company.bg,
                  border: `2px solid ${company.color}25`,
                }}
                aria-hidden="true"
              >
                <span
                  className="font-heading font-bold text-sm tracking-wide"
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
