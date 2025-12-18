import React from 'react';
import { Head } from '@inertiajs/react';
import HeroSection from '@/Components/Sections/Homepage/HeroSection';
import HowItWorksSection from '@/Components/Sections/Homepage/HowItWorksSection';
import SellingSection from '@/Components/Sections/Homepage/SellingSection';
import StatsSection from '@/Components/Sections/Homepage/StatsSection';
import ServicesSection from '@/Components/Sections/Homepage/ServicesSection';
import PropertiesSection from '@/Components/Sections/Homepage/PropertiesSection';
import HeroSlider from '@/Components/Sections/Homepage/HeroSlider';
import TestimonialsSection from '@/Components/Sections/Homepage/TestimonialsSection';
import FAQSection from '@/Components/Sections/Homepage/FAQSection';

export default function Home({ featuredProperties = [] }) {
  return (
    <>
      <Head title="Home - OK BY OWNER" />

      {/* Hero Section */}
      <HeroSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Selling Section */}
      <SellingSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Properties Section */}
      <PropertiesSection properties={featuredProperties} />

      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}
