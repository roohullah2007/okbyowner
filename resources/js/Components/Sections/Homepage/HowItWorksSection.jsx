import React from 'react';
import { FileText, Camera, Users, Handshake } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Create Your Listing',
      description: 'Sign up and list your property with photos, details, and pricing. It takes just minutes to get started.'
    },
    {
      number: '02',
      icon: Camera,
      title: 'Market Your Property',
      description: 'We promote your listing across our platform and optional MLS syndication for maximum visibility.'
    },
    {
      number: '03',
      icon: Users,
      title: 'Connect with Buyers',
      description: 'Receive inquiries directly from interested buyers. Schedule showings and communicate on your terms.'
    },
    {
      number: '04',
      icon: Handshake,
      title: 'Close the Deal',
      description: 'Accept an offer and work with a closing attorney to finalize the sale. Keep all your equity!'
    }
  ];

  return (
    <section className="bg-[#EEEDEA] py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
            <Handshake className="w-4 h-4 text-[#666]" />
            <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              Simple Process
            </span>
          </div>
          <h2 className="text-[32px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
            How It <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Works</span>
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#666] font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
            Sell your Oklahoma home in four simple steps. No agents, no commissions, just direct results.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 group">
                  {/* Icon */}
                  <div className="bg-[#E5E1DC] p-3 rounded-xl w-fit mb-4 group-hover:bg-[#A41E34] transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-[#3D3D3D] group-hover:text-white transition-all duration-300" />
                  </div>

                  {/* Step Number */}
                  <div className="text-[#A41E34] text-sm font-semibold mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    STEP {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-[18px] md:text-xl font-medium text-[#111] mb-3" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#666] leading-relaxed" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow - Desktop Only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#D0CCC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
