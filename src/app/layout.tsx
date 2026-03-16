import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollAnimationProvider from '@/components/providers/ScrollAnimationProvider';

export const metadata: Metadata = {
  title: {
    default: 'Anup Borle — SRE Engineer · AVP @ Deutsche Bank',
    template: '%s | Anup Borle',
  },
  description:
    'SRE Engineer AVP at Deutsche Bank with 12+ years in site reliability engineering, CI/CD automation, and DevOps transformation. Specialist in Jenkins, Kubernetes, Splunk, Geneos monitoring, and production reliability.',
  keywords: [
    'SRE Engineer',
    'Site Reliability Engineering',
    'DevOps',
    'Deutsche Bank',
    'CI/CD',
    'Kubernetes',
    'Jenkins',
    'Anup Borle',
    'Infrastructure Automation',
    'Splunk',
  ],
  authors: [{ name: 'Anup Borle' }],
  creator: 'Anup Borle',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Anup Borle — SRE Engineer · AVP @ Deutsche Bank',
    title: 'Anup Borle — SRE Engineer · AVP @ Deutsche Bank',
    description:
      'SRE Engineer AVP at Deutsche Bank with 12+ years in site reliability engineering, CI/CD automation, and DevOps transformation. Specialist in Jenkins, Kubernetes, Splunk, Geneos monitoring, and production reliability.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anup Borle — SRE Engineer · AVP @ Deutsche Bank',
    description:
      'SRE Engineer AVP at Deutsche Bank with 12+ years in site reliability engineering, CI/CD automation, and DevOps transformation.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased">
        <ThemeProvider>
          <ScrollAnimationProvider>
            {/* Skip to main content for accessibility */}
            <a href="#main-content" className="skip-to-content">
              Skip to main content
            </a>
            <Navigation />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </ScrollAnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
