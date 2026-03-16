import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import CompaniesSection from '@/components/sections/CompaniesSection';
import TopicsSection from '@/components/sections/TopicsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Ashwini Borle — Senior Technical Product Manager',
  description:
    'Senior Technical Product Manager with 14+ years in global fintech and data platforms. Specializing in data platform strategy, PCI/PII compliance, AI-driven automation and scalable enterprise systems.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CompaniesSection />
      <TopicsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
