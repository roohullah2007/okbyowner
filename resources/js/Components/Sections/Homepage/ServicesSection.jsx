import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { X, Camera, Plane, Box, Compass, Video, Sun } from 'lucide-react';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Professional Photography',
      link: '/services/photography',
      icon: Camera,
      color: '#A41E34',
      modalTitle: 'Professional Photography',
      modalImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      modalDescription: 'Make a stunning first impression with professional real estate photography. Our experienced photographers capture your property in the best light, highlighting key features that attract buyers.',
      features: [
        'HDR photography for vibrant, balanced images',
        'Interior and exterior shots',
        'Twilight/dusk photography available',
        'Quick 24-48 hour turnaround',
        'Edited and optimized for MLS and web'
      ],
      cta: 'Book Photography',
      ctaLink: '/services/photography'
    },
    {
      title: 'Drone & Aerial Footage',
      link: '/services/drone',
      icon: Plane,
      color: '#3B82F6',
      modalTitle: 'Drone & Aerial Footage',
      modalImage: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      modalDescription: 'Showcase your property from breathtaking angles with professional drone photography and video. Perfect for large properties, unique locations, and highlighting neighborhood features.',
      features: [
        'FAA-certified drone pilots',
        'High-resolution aerial photos',
        '4K aerial video footage',
        'Property boundary visualization',
        'Neighborhood context shots'
      ],
      cta: 'Book Drone Service',
      ctaLink: '/services/drone'
    },
    {
      title: 'Virtual Tours & 3D Walkthrough',
      link: '/services/virtual-tours',
      icon: Box,
      color: '#8B5CF6',
      modalTitle: 'Virtual Tours & 3D Walkthrough',
      modalImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      modalDescription: 'Offer buyers an immersive 24/7 open house experience with Matterport 3D tours. Let them explore every room at their own pace from anywhere in the world.',
      features: [
        'Dollhouse view of entire property',
        'Self-guided virtual walkthrough',
        'Measurement tools for buyers',
        'Embeddable on any website',
        'VR headset compatible'
      ],
      cta: 'Get 3D Tour',
      ctaLink: '/services/virtual-tours'
    },
    {
      title: 'Floor Plans',
      link: '/services/floor-plans',
      icon: Compass,
      color: '#10B981',
      modalTitle: 'Professional Floor Plans',
      modalImage: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
      modalDescription: 'Help buyers visualize the layout and flow of your property with detailed, professionally created floor plans. Essential for serious buyers making informed decisions.',
      features: [
        '2D and 3D floor plan options',
        'Accurate room dimensions',
        'Furniture placement visualization',
        'Interactive digital versions',
        'Print-ready PDF formats'
      ],
      cta: 'Order Floor Plans',
      ctaLink: '/services/floor-plans'
    },
    {
      title: 'Video Tours',
      link: '/services/video-tours',
      icon: Video,
      color: '#EF4444',
      modalTitle: 'Video Walkthrough Tours',
      modalImage: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=800',
      modalDescription: 'Bring your property to life with cinematic video tours. Perfect for out-of-town buyers and social media marketing, video tours create an emotional connection with potential buyers.',
      features: [
        'Professional videography with stabilization',
        'Narrated or music-backed options',
        'Drone footage integration',
        'Social media optimized versions',
        'YouTube and MLS ready'
      ],
      cta: 'Book Video Tour',
      ctaLink: '/services/video-tours'
    },
    {
      title: 'Twilight & Lifestyle Shoots',
      link: '/services/twilight-photography',
      icon: Sun,
      color: '#F59E0B',
      modalTitle: 'Twilight & Lifestyle Photography',
      modalImage: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      modalDescription: 'Capture the magic of golden hour with stunning twilight photography. These dramatic images create an emotional connection and make your listing stand out from the competition.',
      features: [
        'Golden hour timing for best lighting',
        'Interior lights on for warm glow',
        'Dramatic sky and ambiance',
        'Virtual twilight conversion available',
        'Perfect for luxury listings'
      ],
      cta: 'Book Twilight Shoot',
      ctaLink: '/services/twilight-photography'
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Top Section - Badge, Heading, Description and Buttons */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left Side - Heading */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
              <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Our Services
              </span>
            </div>
            {/* Main Heading */}
            <h2
              className="text-[40px] text-[#111] font-medium leading-tight uppercase"
              style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 500 }}
            >
              Everything You Need to Sell Successfully
            </h2>
          </div>

          {/* Right Side - Description and Buttons */}
          <div className="lg:pt-12">
            {/* Description */}
            <p
              className="text-[16px] text-[#666] font-medium mb-8 leading-relaxed"
              style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 500 }}
            >
              Listings with professional photos sell up to 32% faster and command around 4% higher prices. High-quality visuals capture buyer attention, build trust, and showcase your property's best features.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/our-packages"
                className="inline-flex items-center gap-[0.4rem] bg-[#A41E34] text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-[#8B1A2C]"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                <span>View Packages</span>
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
                href="/contact"
                className="inline-flex items-center gap-[0.4rem] bg-transparent border border-[#D0CCC7] text-[#111] rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-[#E5E1DC]"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                <span>Get a Quote</span>
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
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="group flex items-center justify-between bg-[#EEEDEA] rounded-full px-8 py-6 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <span
                className="text-[#111] text-lg font-medium"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                {service.title}
              </span>
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
            </div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

          {/* Modal */}
          <div
            className="relative bg-white rounded-2xl w-full max-w-[1232px] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-[#111]" />
            </button>

            {/* Modal Content - Two Column Layout */}
            <div className="grid lg:grid-cols-2 h-[500px]">
              {/* Left - Image */}
              <div className="relative h-full">
                <img
                  src={selectedService.modalImage}
                  alt={selectedService.modalTitle}
                  className="w-full h-full object-cover lg:rounded-l-2xl"
                />
              </div>

              {/* Right - Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${selectedService.color}15` }}
                  >
                    <selectedService.icon
                      className="w-6 h-6"
                      style={{ color: selectedService.color }}
                    />
                  </div>
                  <h3
                    className="text-[22px] md:text-[24px] font-semibold text-[#111]"
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                  >
                    {selectedService.modalTitle}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="text-[14px] text-[#666] mb-5 leading-relaxed"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  {selectedService.modalDescription}
                </p>

                {/* Features */}
                <div className="mb-5">
                  <h4
                    className="text-[14px] font-semibold text-[#111] mb-3"
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                  >
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${selectedService.color}15` }}
                        >
                          <svg className="w-2.5 h-2.5" style={{ color: selectedService.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span
                          className="text-[13px] text-[#666]"
                          style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  href={selectedService.ctaLink}
                  className="inline-flex items-center gap-2 text-white rounded-full px-6 py-3 font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: selectedService.color, fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  <span>{selectedService.cta}</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="white"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
