import React from 'react';
import { Link } from '@inertiajs/react';
import { Camera, Compass, Video, Box, Sun, TrendingUp, Clock, DollarSign, Eye } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Clock,
      number: '32%',
      label: 'Faster Sales',
      description: 'with professional photos'
    },
    {
      icon: DollarSign,
      number: '4%',
      label: 'Higher Price',
      description: 'on average sale price'
    },
    {
      icon: Eye,
      number: '118%',
      label: 'More Views',
      description: 'online engagement'
    },
    {
      icon: TrendingUp,
      number: '95%',
      label: 'Start Online',
      description: 'of home searches'
    }
  ];

  const services = [
    { icon: Camera, label: 'Professional Photos + Drone', color: '#A41E34' },
    { icon: Compass, label: 'Floor Plans', color: '#3B82F6' },
    { icon: Video, label: 'Video Walkthrough Tours', color: '#10B981' },
    { icon: Box, label: 'Matterport 3D Tours', color: '#8B5CF6' },
    { icon: Sun, label: 'Virtual Twilight', color: '#F59E0B' }
  ];

  return (
    <section className="bg-[#EEEDEA] py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
            <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              Our Services
            </span>
          </div>
          <h2 className="text-[32px] md:text-[40px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
            Enhance Your Listing with Professional Multimedia
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#666] font-medium max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
            High-quality photos and videos attract more buyers, reduce time on market, and secure higher sale prices.
            Create a strong first impression that turns online browsers into serious buyers.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#A41E34]/10 rounded-xl mb-4">
                  <IconComponent className="w-6 h-6 text-[#A41E34]" />
                </div>
                <h4
                  className="text-[32px] md:text-[40px] text-[#111] font-semibold mb-1"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  {stat.number}
                </h4>
                <p
                  className="text-[14px] text-[#111] font-medium"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  {stat.label}
                </p>
                <p
                  className="text-[12px] text-[#666]"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Services & Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Services */}
          <div>
            <h3
              className="text-[24px] font-medium text-[#111] mb-6"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              Our Multimedia Services
            </h3>
            <div className="space-y-3">
              {services.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#EEEDEA] rounded-xl p-4 flex items-center gap-4 hover:bg-[#E5E1DC] transition-all duration-300 cursor-pointer group"
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <IconComponent
                        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: service.color }}
                      />
                    </div>
                    <span
                      className="text-[#111] text-[16px] font-medium"
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                    >
                      {service.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Benefits */}
          <div className="bg-[#EEEDEA] rounded-2xl p-8">
            <h3
              className="text-[24px] font-medium text-[#111] mb-6"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              Why Invest in Professional Media?
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#A41E34] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[14px] text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  <strong className="text-[#111]">Faster Sales:</strong> Professional photos help listings sell up to 32% faster than those with amateur images.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#A41E34] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[14px] text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  <strong className="text-[#111]">Higher Prices:</strong> Professionally presented homes command around 4% higher selling price on average.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#A41E34] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[14px] text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  <strong className="text-[#111]">Better First Impressions:</strong> Quality visuals build buyer trust and make them less likely to click away to competitors.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#A41E34] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[14px] text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  <strong className="text-[#111]">Showcase Best Features:</strong> Professionals use lighting and angles to highlight your property's unique selling points.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#A41E34] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[14px] text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  <strong className="text-[#111]">Competitive Edge:</strong> In a digital-first world, great images make buyers stay and explore your listing.
                </p>
              </li>
            </ul>

            <Link
              href="/services"
              className="inline-flex items-center gap-[0.4rem] bg-[#A41E34] text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-[#8B1A2C]"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              <span>View Our Services</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_stats" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                  <rect width="20" height="20" transform="matrix(-1 0 0 1 20 0)" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_stats)">
                  <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="white"/>
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
