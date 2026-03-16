'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ui/ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/profile', label: 'Profile' },
  { href: '/resume', label: 'Resume' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.3)]'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] rounded-lg"
              aria-label="Anup Borle - Home"
            >
              {/* SRE Badge */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1a2b4a] to-[#0ea5a0] dark:from-[#3b82f6] dark:to-[#14b8a6] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-sm">
                <span className="text-white font-extrabold text-xs font-heading tracking-widest">SRE</span>
              </div>
              {/* Wordmark */}
              <div className="flex flex-col leading-none gap-0.5">
                <span className="font-heading font-extrabold text-sm tracking-tight text-[#1f2937] dark:text-[#f8fafc] group-hover:text-[#0ea5a0] dark:group-hover:text-[#14b8a6] transition-colors duration-200 uppercase">
                  Anup Borle
                </span>
                <span className="text-[9px] text-[#6b7280] dark:text-[#94a3b8] font-body tracking-widest uppercase">
                  SRE Engineer · AVP
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] ${
                    isActive(link.href)
                      ? 'text-[#0ea5a0] dark:text-[#14b8a6] bg-[#0ea5a0]/8 dark:bg-[#14b8a6]/10'
                      : 'text-[#6b7280] dark:text-[#94a3b8] hover:text-[#1f2937] dark:hover:text-[#f8fafc] hover:bg-[#f9fafb] dark:hover:bg-[#1e293b]'
                  }`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#0ea5a0] dark:bg-[#14b8a6] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              {/* CTA Button (desktop) */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-[#1a2b4a] dark:bg-[#3b82f6] text-white text-sm font-semibold rounded-lg hover:bg-[#243d6b] dark:hover:bg-[#2563eb] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] focus-visible:ring-offset-2 shadow-sm hover:shadow-md"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Schedule Call
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg bg-[#f9fafb] dark:bg-[#1e293b] hover:bg-[#e5e7eb] dark:hover:bg-[#334155] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0]"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                <span
                  className={`block w-5 h-0.5 bg-[#1f2937] dark:bg-[#f8fafc] rounded-full transition-all duration-300 ${
                    mobileOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-[#1f2937] dark:bg-[#f8fafc] rounded-full transition-all duration-300 ${
                    mobileOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-[#1f2937] dark:bg-[#f8fafc] rounded-full transition-all duration-300 ${
                    mobileOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal="true"
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white dark:bg-[#0f172a] shadow-2xl md:hidden transform transition-transform duration-300 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e7eb] dark:border-[#334155]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a2b4a] to-[#0ea5a0] dark:from-[#3b82f6] dark:to-[#14b8a6] flex items-center justify-center">
              <span className="text-white font-bold text-xs font-heading">AB</span>
            </div>
            <span className="font-heading font-semibold text-sm text-[#1f2937] dark:text-[#f8fafc]">
              Anup Borle
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#f9fafb] dark:hover:bg-[#1e293b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0]"
          >
            <svg
              className="w-4 h-4 text-[#6b7280] dark:text-[#94a3b8]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <nav className="px-4 py-6 space-y-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] ${
                isActive(link.href)
                  ? 'text-[#0ea5a0] dark:text-[#14b8a6] bg-[#0ea5a0]/8 dark:bg-[#14b8a6]/10 font-semibold'
                  : 'text-[#6b7280] dark:text-[#94a3b8] hover:text-[#1f2937] dark:hover:text-[#f8fafc] hover:bg-[#f9fafb] dark:hover:bg-[#1e293b]'
              }`}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {isActive(link.href) && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5a0] dark:bg-[#14b8a6] flex-shrink-0" aria-hidden="true" />
              )}
              {!isActive(link.href) && (
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" aria-hidden="true" />
              )}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div className="absolute bottom-8 left-4 right-4">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#1a2b4a] dark:bg-[#3b82f6] text-white text-sm font-semibold rounded-xl hover:bg-[#243d6b] dark:hover:bg-[#2563eb] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
