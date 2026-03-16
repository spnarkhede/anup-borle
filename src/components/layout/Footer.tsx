import Link from 'next/link';

const footerLinks = {
  Navigation: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/profile', label: 'Profile' },
    { href: '/resume', label: 'Resume' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
  Resources: [
    { href: '/blog?category=Strategy', label: 'Strategy Articles' },
    { href: '/blog?category=Leadership', label: 'Leadership Insights' },
    { href: '/blog?category=Execution', label: 'Execution Tips' },
    { href: '/profile#case-studies', label: 'Case Studies' },
    { href: '/profile#tools', label: 'Tools & Stack' },
  ],
};

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ashwiniborle',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#f9fafb] dark:bg-[#1e293b] border-t border-[#e5e7eb] dark:border-[#334155]"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3 group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] rounded-lg"
              aria-label="Alex Chen - Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1a2b4a] to-[#0ea5a0] dark:from-[#3b82f6] dark:to-[#14b8a6] flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-sm">
                <span className="text-white font-extrabold text-xs font-heading tracking-widest">PM</span>
              </div>
              <div>
                <p className="font-heading font-bold text-[#1f2937] dark:text-[#f8fafc] group-hover:text-[#0ea5a0] dark:group-hover:text-[#14b8a6] transition-colors text-base">
                  Ashwini Borle
                </p>
                <p className="text-xs text-[#6b7280] dark:text-[#94a3b8]">Senior Technical Product Manager</p>
              </div>
            </Link>

            <p className="mt-4 text-sm text-[#6b7280] dark:text-[#94a3b8] leading-relaxed max-w-sm">
              Bridging the gap between business intent and engineering execution. 14+ years building
              data platforms and fintech infrastructure that organizations depend on.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} profile`}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white dark:bg-[#0f172a] border border-[#e5e7eb] dark:border-[#334155] text-[#6b7280] dark:text-[#94a3b8] hover:text-[#0ea5a0] dark:hover:text-[#14b8a6] hover:border-[#0ea5a0] dark:hover:border-[#14b8a6] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([groupName, links]) => (
            <div key={groupName}>
              <h3 className="font-heading font-semibold text-sm text-[#1f2937] dark:text-[#f8fafc] uppercase tracking-wider mb-4">
                {groupName}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6b7280] dark:text-[#94a3b8] hover:text-[#0ea5a0] dark:hover:text-[#14b8a6] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0ea5a0] rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-[#e5e7eb] dark:border-[#334155] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6b7280] dark:text-[#94a3b8]">
            &copy; {currentYear} Ashwini Borle. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-[#6b7280] dark:text-[#94a3b8]">
            <span>Built with</span>
            <span className="text-[#0ea5a0] dark:text-[#14b8a6] font-medium">Next.js 14</span>
            <span>&amp;</span>
            <span className="text-[#0ea5a0] dark:text-[#14b8a6] font-medium">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
