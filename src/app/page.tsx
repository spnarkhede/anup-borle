import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import CompaniesSection from '@/components/sections/CompaniesSection';
import TopicsSection from '@/components/sections/TopicsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Anup Borle — SRE Engineer · AVP @ Deutsche Bank',
  description:
    'SRE Engineer AVP at Deutsche Bank with 12+ years in site reliability engineering, CI/CD automation, and DevOps transformation. Specialist in Jenkins, Kubernetes, Splunk, Geneos monitoring, and production reliability.',
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
