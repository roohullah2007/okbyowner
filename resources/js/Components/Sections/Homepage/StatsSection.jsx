import React from 'react';
import { Link } from '@inertiajs/react';
import { Home, Users, Handshake, Sun } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Home,
      number: '3,200+',
      label: 'Properties Sold'
    },
    {
      icon: Users,
      number: '6,500+',
      label: 'Oklahoma Homeowners'
    },
    {
      icon: Handshake,
      number: '$12K',
      label: 'Average Savings'
    },
    {
      icon: Sun,
      number: '98%',
      label: 'Satisfaction Rate'
    }
  ];

  return (
    <section className="bg-[#EEEDEA] py-[156px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
              <Home className="w-4 h-4 text-[#666]" />
              <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Why Choose Us
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className="text-[28px] text-[#111] font-medium leading-tight mb-6"
              style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 500 }}
            >
              Selling your home doesn't have to cost a fortune. OK BY OWNER empowers Oklahoma homeowners to list, market, and sell their properties without paying hefty realtor commissions.
            </h2>

            {/* Subheading */}
            <p
              className="text-[14px] text-[#666] font-medium mb-8 leading-relaxed"
              style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 500 }}
            >
              Join thousands of homeowners who have saved thousands with our free listing platform, MLS access, and expert support.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/list-property"
                className="inline-flex items-center gap-[0.4rem] bg-[#A41E34] text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-[#8B1A2C]"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                <span>List Your Property</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_56_2205" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" transform="matrix(-1 0 0 1 20 0)" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_56_2205)">
                    <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="white"/>
                  </g>
                </svg>
              </Link>
              <Link
                href="/properties"
                className="inline-flex items-center gap-[0.4rem] bg-transparent border border-[#D0CCC7] text-[#111] rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-[#E5E1DC]"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                <span>Browse Properties</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_56_2206" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" transform="matrix(-1 0 0 1 20 0)" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_56_2206)">
                    <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="currentColor"/>
                  </g>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side - Stats Grid */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#DCD8D5] rounded-2xl p-6 flex flex-col justify-between h-[195px]"
                  >
                    {/* Icon */}
                    <div>
                      <IconComponent className="w-8 h-8 text-[#3D3D3D]" />
                    </div>

                    {/* Stats Content */}
                    <div>
                      <h4
                        className="text-[28px] text-[#111] font-medium mb-1"
                        style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 500 }}
                      >
                        {stat.number}
                      </h4>
                      <p
                        className="text-[14px] text-[#666] font-medium"
                        style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 500 }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
