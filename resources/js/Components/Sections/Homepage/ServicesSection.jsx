import React from 'react';
import { Link } from '@inertiajs/react';

const ServicesSection = () => {
  const services = [
    { title: 'Free MLS Listing', link: '/services/mls-listing' },
    { title: 'Professional Photography', link: '/services/photography' },
    { title: 'Virtual Tours & 3D Walkthrough', link: '/services/virtual-tours' },
    { title: 'Marketing & Promotion', link: '/services/marketing' },
    { title: 'Pricing Strategy Support', link: '/services/pricing-support' },
    { title: 'Legal Document Templates', link: '/services/legal-documents' },
  ];

  return (
    <section className="bg-[#EEEDEA] py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Top Section - Badge, Heading, Description and Buttons */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left Side - Heading */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
              <svg width="32" height="32" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                <mask id="mask_badge" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="20">
                  <rect x="0.5" width="20" height="20" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask_badge)">
                  <path d="M7.83333 9.12501L9.625 7.31251L8.45833 6.12501L8.125 6.45835C7.97222 6.61112 7.78125 6.69098 7.55208 6.69793C7.32292 6.70487 7.125 6.62501 6.95833 6.45835C6.79167 6.29168 6.70833 6.09376 6.70833 5.8646C6.70833 5.63543 6.79167 5.43751 6.95833 5.27085L7.27083 4.95835L6.33333 4.02085L4.52083 5.83335L7.83333 9.12501ZM14.6667 15.9792L16.4792 14.1667L15.5417 13.2292L15.2083 13.5417C15.0417 13.7083 14.8472 13.7917 14.625 13.7917C14.4028 13.7917 14.2083 13.7083 14.0417 13.5417C13.875 13.375 13.7917 13.1806 13.7917 12.9583C13.7917 12.7361 13.875 12.5417 14.0417 12.375L14.3542 12.0417L13.1667 10.875L11.375 12.6667L14.6667 15.9792ZM3.83333 17.5C3.59722 17.5 3.39931 17.4202 3.23958 17.2604C3.07986 17.1007 3 16.9028 3 16.6667V14.3125C3 14.2014 3.02083 14.0938 3.0625 13.9896C3.10417 13.8854 3.16667 13.7917 3.25 13.7083L6.64583 10.3125L3.04167 6.70835C2.80556 6.47223 2.6875 6.18057 2.6875 5.83335C2.6875 5.48612 2.80556 5.19446 3.04167 4.95835L5.45833 2.54168C5.69444 2.30557 5.98611 2.19099 6.33333 2.19793C6.68056 2.20487 6.97222 2.3264 7.20833 2.56251L10.8333 6.16668L13.9792 3.00001C14.1458 2.83335 14.3333 2.70835 14.5417 2.62501C14.75 2.54168 14.9653 2.50001 15.1875 2.50001C15.4097 2.50001 15.625 2.54168 15.8333 2.62501C16.0417 2.70835 16.2292 2.83335 16.3958 3.00001L17.5 4.12501C17.6667 4.29168 17.7917 4.47918 17.875 4.68751C17.9583 4.89585 18 5.11112 18 5.33335C18 5.55557 17.9583 5.76737 17.875 5.96876C17.7917 6.17015 17.6667 6.35418 17.5 6.52085L14.3542 9.68751L17.9583 13.2917C18.1944 13.5278 18.3125 13.8195 18.3125 14.1667C18.3125 14.5139 18.1944 14.8056 17.9583 15.0417L15.5417 17.4583C15.3056 17.6945 15.0139 17.8125 14.6667 17.8125C14.3194 17.8125 14.0278 17.6945 13.7917 17.4583L10.1875 13.8542L6.79167 17.25C6.70833 17.3333 6.61458 17.3958 6.51042 17.4375C6.40625 17.4792 6.29861 17.5 6.1875 17.5H3.83333ZM4.66667 15.8333H5.83333L14 7.68751L12.8125 6.50001L4.66667 14.6667V15.8333Z" fill="#666"/>
                </g>
              </svg>
              <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Services Overview
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className="text-[40px] text-[#111] font-medium leading-tight"
              style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 500 }}
            >
              Everything you need to <span className="italic">sell successfully</span>
            </h2>
          </div>

          {/* Right Side - Description and Buttons */}
          <div className="lg:pt-12">
            {/* Description */}
            <p
              className="text-[16px] text-[#666] font-medium mb-8 leading-relaxed"
              style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 500 }}
            >
              From free MLS listings to professional marketing tools, we provide all the services you need to sell your Oklahoma home without paying realtor commissions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/list-property"
                className="inline-flex items-center gap-[0.4rem] bg-[#A41E34] text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-[#8B1A2C]"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                <span>Start Listing Free</span>
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
                href="/our-packages"
                className="inline-flex items-center gap-[0.4rem] bg-transparent border border-[#D0CCC7] text-[#111] rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-[#E5E1DC]"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                <span>View Packages</span>
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
        </div>

        {/* Services Grid - Full Width Below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group flex items-center justify-between bg-white rounded-full px-8 py-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <svg width="32" height="32" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 opacity-60">
                  <mask id={`mask_${index}`} style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="20">
                    <rect x="0.5" width="20" height="20" fill="#D9D9D9"/>
                  </mask>
                  <g mask={`url(#mask_${index})`}>
                    <path d="M7.83333 9.12501L9.625 7.31251L8.45833 6.12501L8.125 6.45835C7.97222 6.61112 7.78125 6.69098 7.55208 6.69793C7.32292 6.70487 7.125 6.62501 6.95833 6.45835C6.79167 6.29168 6.70833 6.09376 6.70833 5.8646C6.70833 5.63543 6.79167 5.43751 6.95833 5.27085L7.27083 4.95835L6.33333 4.02085L4.52083 5.83335L7.83333 9.12501ZM14.6667 15.9792L16.4792 14.1667L15.5417 13.2292L15.2083 13.5417C15.0417 13.7083 14.8472 13.7917 14.625 13.7917C14.4028 13.7917 14.2083 13.7083 14.0417 13.5417C13.875 13.375 13.7917 13.1806 13.7917 12.9583C13.7917 12.7361 13.875 12.5417 14.0417 12.375L14.3542 12.0417L13.1667 10.875L11.375 12.6667L14.6667 15.9792ZM3.83333 17.5C3.59722 17.5 3.39931 17.4202 3.23958 17.2604C3.07986 17.1007 3 16.9028 3 16.6667V14.3125C3 14.2014 3.02083 14.0938 3.0625 13.9896C3.10417 13.8854 3.16667 13.7917 3.25 13.7083L6.64583 10.3125L3.04167 6.70835C2.80556 6.47223 2.6875 6.18057 2.6875 5.83335C2.6875 5.48612 2.80556 5.19446 3.04167 4.95835L5.45833 2.54168C5.69444 2.30557 5.98611 2.19099 6.33333 2.19793C6.68056 2.20487 6.97222 2.3264 7.20833 2.56251L10.8333 6.16668L13.9792 3.00001C14.1458 2.83335 14.3333 2.70835 14.5417 2.62501C14.75 2.54168 14.9653 2.50001 15.1875 2.50001C15.4097 2.50001 15.625 2.54168 15.8333 2.62501C16.0417 2.70835 16.2292 2.83335 16.3958 3.00001L17.5 4.12501C17.6667 4.29168 17.7917 4.47918 17.875 4.68751C17.9583 4.89585 18 5.11112 18 5.33335C18 5.55557 17.9583 5.76737 17.875 5.96876C17.7917 6.17015 17.6667 6.35418 17.5 6.52085L14.3542 9.68751L17.9583 13.2917C18.1944 13.5278 18.3125 13.8195 18.3125 14.1667C18.3125 14.5139 18.1944 14.8056 17.9583 15.0417L15.5417 17.4583C15.3056 17.6945 15.0139 17.8125 14.6667 17.8125C14.3194 17.8125 14.0278 17.6945 13.7917 17.4583L10.1875 13.8542L6.79167 17.25C6.70833 17.3333 6.61458 17.3958 6.51042 17.4375C6.40625 17.4792 6.29861 17.5 6.1875 17.5H3.83333ZM4.66667 15.8333H5.83333L14 7.68751L12.8125 6.50001L4.66667 14.6667V15.8333Z" fill="#413936"/>
                  </g>
                </svg>
                <span 
                  className="text-[#111] text-lg font-medium"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  {service.title}
                </span>
              </div>
              <div className="bg-[#E5E1DC] rounded-full p-3 group-hover:bg-[#D5D1CC] transition-colors flex-shrink-0">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform group-hover:translate-x-1 transition-transform"
                >
                  <path 
                    d="M5 12H19M19 12L12 5M19 12L12 19" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;