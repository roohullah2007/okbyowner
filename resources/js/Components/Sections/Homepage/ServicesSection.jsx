import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { X, Camera, FileText, Video, Box, Sun, Film, Home } from 'lucide-react';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Photos + Drone',
      link: '/our-packages',
      icon: Camera,
      color: '#A41E34',
      modalTitle: 'Professional Photography + Drone',
      modalImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      modalDescription: 'Make a stunning first impression with professional HDR interior and exterior photography. Our FAA-certified drone pilots capture breathtaking aerial shots that showcase your property and neighborhood from above.',
      features: [
        'HDR photography for vibrant, balanced images',
        'Interior and exterior shots included',
        'FAA-certified drone pilots',
        'High-resolution aerial photos',
        'Quick 24-48 hour turnaround',
        'Edited and optimized for MLS and web'
      ],
      cta: 'View Packages',
      ctaLink: '/our-packages'
    },
    {
      title: 'Basic Floorplan',
      link: '/our-packages',
      icon: FileText,
      color: '#10B981',
      modalTitle: 'Basic Floor Plans',
      modalImage: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
      modalDescription: 'Help buyers visualize the layout and flow of your property with detailed, professionally created floor plans. Essential for serious buyers making informed decisions.',
      features: [
        '2D floor plan layout',
        'Accurate room dimensions',
        'Room labels included',
        'Digital delivery format',
        'Print-ready PDF formats',
        'Fast turnaround'
      ],
      exampleText: 'Professional 2D layout with accurate dimensions, room labels, and square footage calculations.',
      cta: 'View Packages',
      ctaLink: '/our-packages'
    },
    {
      title: 'HD Video Walkthrough',
      link: '/our-packages',
      icon: Video,
      color: '#EF4444',
      modalTitle: 'HD Video Walkthrough',
      modalImage: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=800',
      modalDescription: 'Bring your property to life with a professional HD video walkthrough. Perfect for out-of-town buyers and social media marketing, video tours create an emotional connection with potential buyers.',
      features: [
        'Professional HD videography with stabilization',
        'Smooth cinematic walkthrough',
        'Music-backed production',
        'Drone footage integration available',
        'Social media optimized versions',
        'YouTube and MLS ready'
      ],
      cta: 'View Packages',
      ctaLink: '/our-packages'
    },
    {
      title: 'Matterport 3D Tour',
      link: '/our-packages',
      icon: Box,
      color: '#8B5CF6',
      modalTitle: 'Matterport 3D Tour',
      modalImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      modalDescription: 'Offer buyers an immersive 24/7 open house experience with Matterport 3D tours. Let them explore every room at their own pace from anywhere in the world with industry-leading technology.',
      features: [
        'Dollhouse view of entire property',
        'Self-guided virtual walkthrough',
        'Measurement tools for buyers',
        'Embeddable on any website',
        'VR headset compatible',
        'High-quality capture technology'
      ],
      exampleLink: 'https://flowphotosokc.com/gallery/3d-tours/',
      exampleLinkLabel: 'View Example Tours',
      cta: 'View Packages',
      ctaLink: '/our-packages'
    },
    {
      title: 'Virtual Twilight',
      link: '/our-packages',
      icon: Sun,
      color: '#F59E0B',
      modalTitle: 'Virtual Twilight Photography',
      modalImage: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      modalDescription: 'Transform your daytime exterior photos into stunning twilight shots. Virtual twilight creates dramatic, magazine-worthy images that make your listing stand out from the competition without scheduling an evening shoot.',
      features: [
        'Dramatic dusk/twilight sky effects',
        'Interior lights digitally illuminated',
        'Warm, inviting ambiance',
        'No evening shoot required',
        'Perfect for luxury listings',
        'Quick digital turnaround'
      ],
      exampleBeforeText: 'Standard daytime exterior photo',
      exampleAfterText: 'Stunning twilight with glowing windows & dramatic sky',
      cta: 'View Packages',
      ctaLink: '/our-packages'
    },
    {
      title: 'Reels / TikTok Video',
      link: '/our-packages',
      icon: Film,
      color: '#EC4899',
      modalTitle: 'Reels / TikTok Video',
      modalImage: 'https://images.pexels.com/photos/7578901/pexels-photo-7578901.jpeg?auto=compress&cs=tinysrgb&w=800',
      modalDescription: 'Reach more buyers with short-form vertical video content optimized for Instagram Reels, TikTok, and YouTube Shorts. Engaging, trendy content designed to go viral and attract maximum attention.',
      features: [
        'Vertical video format (9:16)',
        'Trending music and effects',
        'Fast-paced engaging edits',
        'Optimized for social algorithms',
        'Multiple platform ready',
        'Caption-friendly design'
      ],
      cta: 'View Packages',
      ctaLink: '/our-packages'
    },
    {
      title: 'Zillow 3D + Floor Plan',
      link: '/our-packages',
      icon: Home,
      color: '#3B82F6',
      modalTitle: 'Zillow 3D Home Tour + Floor Plan',
      modalImage: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800',
      modalDescription: 'Get featured on Zillow with their native 3D Home Tour and interactive floor plan. Zillow prioritizes listings with 3D tours, giving your property more visibility and engagement on the platform.',
      features: [
        'Zillow-native 3D tour format',
        'Interactive floor plan included',
        'Boosted Zillow visibility',
        'Mobile-friendly experience',
        'Easy buyer navigation',
        'Integrated with Zillow listing'
      ],
      cta: 'View Packages',
      ctaLink: '/our-packages'
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
              Showcase Your Property
            </h2>
            {/* Sub Heading */}
            <p
              className="text-[20px] text-[#666] font-medium mt-2"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              with professional photos, 3D tours, floor plans, and more.
            </p>
          </div>

          {/* Right Side - Description and Buttons */}
          <div className="lg:pt-12">
            {/* Description */}
            <p
              className="text-[16px] text-[#666] font-medium mb-8 leading-relaxed"
              style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 500 }}
            >
              Give your property the best first impression to lead to a faster, higher-priced sale. Listings with professional photos sell up to 32% faster and command around 4% higher prices.
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
            <div className="flex flex-col lg:grid lg:grid-cols-2" style={{ maxHeight: '90vh' }}>
              {/* Left - Image */}
              <div className="relative h-48 lg:h-auto shrink-0">
                <img
                  src={selectedService.modalImage}
                  alt={selectedService.modalTitle}
                  className="w-full h-full object-cover lg:rounded-l-2xl"
                />
              </div>

              {/* Right - Content */}
              <div className="p-6 lg:p-10 flex flex-col overflow-y-auto">
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

                {/* Before/After Text Example */}
                {selectedService.exampleBeforeText && selectedService.exampleAfterText && (
                  <div className="mb-5">
                    <h4
                      className="text-[14px] font-semibold text-[#111] mb-3"
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                    >
                      Example:
                    </h4>
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <div
                          className="rounded-lg p-3 h-full"
                          style={{ backgroundColor: '#f5f5f5' }}
                        >
                          <span
                            className="block text-[10px] font-semibold text-[#999] uppercase mb-1"
                            style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                          >
                            Before
                          </span>
                          <p
                            className="text-[12px] text-[#666]"
                            style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                          >
                            {selectedService.exampleBeforeText}
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div
                          className="rounded-lg p-3 h-full"
                          style={{ backgroundColor: `${selectedService.color}15` }}
                        >
                          <span
                            className="block text-[10px] font-semibold uppercase mb-1"
                            style={{ color: selectedService.color, fontFamily: 'Instrument Sans, sans-serif' }}
                          >
                            After
                          </span>
                          <p
                            className="text-[12px] text-[#666]"
                            style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                          >
                            {selectedService.exampleAfterText}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Single Text Example */}
                {selectedService.exampleText && (
                  <div className="mb-5">
                    <h4
                      className="text-[14px] font-semibold text-[#111] mb-3"
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                    >
                      Example:
                    </h4>
                    <div
                      className="rounded-lg p-3"
                      style={{ backgroundColor: `${selectedService.color}15` }}
                    >
                      <p
                        className="text-[12px] text-[#666]"
                        style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                      >
                        {selectedService.exampleText}
                      </p>
                    </div>
                  </div>
                )}

                {/* Example Link (for tours/videos) */}
                {selectedService.exampleLink && (
                  <div className="mb-5">
                    <h4
                      className="text-[14px] font-semibold text-[#111] mb-3"
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                    >
                      Example:
                    </h4>
                    <a
                      href={selectedService.exampleLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-2 rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 hover:opacity-80"
                      style={{
                        borderColor: selectedService.color,
                        color: selectedService.color,
                        fontFamily: 'Instrument Sans, sans-serif'
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{selectedService.exampleLinkLabel || 'View Example'}</span>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}

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
