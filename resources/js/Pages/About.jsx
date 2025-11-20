import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Target, Heart, Shield, Users, TrendingUp, Award, Zap, CheckCircle, Star, Home, DollarSign, Clock, Mail, Phone, MapPin } from 'lucide-react';
import MainLayout from '@/Layouts/MainLayout';

function About() {
  const stats = [
    {
      icon: Home,
      number: '2,500+',
      label: 'Properties Listed'
    },
    {
      icon: Users,
      number: '5,000+',
      label: 'Happy Customers'
    },
    {
      icon: DollarSign,
      number: '$50M+',
      label: 'Total Value'
    },
    {
      icon: Award,
      number: '#1',
      label: 'In Oklahoma'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do. Your success is our success.'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'No hidden fees, no surprises. We believe in honest, transparent relationships.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously improve our platform to provide the best experience possible.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'We focus on delivering real results - helping you buy or sell quickly and profitably.'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      location: 'Oklahoma City, OK',
      rating: 5,
      text: 'I saved over $18,000 in commission fees by using OK BY OWNER. The platform was incredibly easy to use, and I had my home sold in just 3 weeks!'
    },
    {
      name: 'Robert Thompson',
      location: 'Tulsa, OK',
      rating: 5,
      text: 'Best decision I ever made! The MLS listing gave me maximum exposure, and I maintained complete control over the selling process. Highly recommend!'
    },
    {
      name: 'Lisa Anderson',
      location: 'Norman, OK',
      rating: 5,
      text: 'The support team was amazing throughout the entire process. They answered all my questions and made selling by owner stress-free.'
    }
  ];

  const features = [
    'Zero commission fees',
    'MLS syndication available',
    'Professional photography services',
    'Virtual tour integration',
    'Direct buyer connections',
    'Legal document templates',
    '24/7 customer support',
    'Mobile-friendly platform'
  ];

  return (
    <>
      <Head title="About Us - OK BY OWNER" />

      {/* Hero Section */}
      <div className="relative pt-0 md:pt-[77px]">
        <div className="relative min-h-[60vh] flex items-center py-16 md:py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Oklahoma neighborhood"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </div>

          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10 w-full">
            <div className="max-w-3xl">
              {/* Main Heading */}
              <h1
                className="text-white text-[40px] sm:text-[50px] md:text-[60px] font-medium leading-[1.1] mb-5 drop-shadow-2xl"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                Empowering Homeowners Across <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Oklahoma</span>
              </h1>

              {/* Subheading */}
              <p
                className="text-white text-[14px] sm:text-[16px] font-medium mb-8 leading-relaxed max-w-2xl drop-shadow-lg"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                We're on a mission to revolutionize real estate by putting control back in the hands of homeowners. No agents, no commissions, just direct connections between buyers and sellers.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-[0.4rem] mb-12">
                <Link
                  href="/list-property"
                  className="button inline-flex items-center justify-center gap-[0.4rem] bg-[#A41E34] text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-[#8B1A2C]"
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
                  href="/contact"
                  className="button inline-flex items-center justify-center gap-[0.4rem] bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-white/20"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  <span>Contact Us</span>
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-[#EEEDEA] rounded-2xl p-4 md:p-6 flex flex-col justify-between min-h-[140px] md:h-[195px]"
                >
                  {/* Icon */}
                  <div>
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-[#3D3D3D]" />
                  </div>

                  {/* Stats Content */}
                  <div>
                    <h4
                      className="text-[24px] md:text-[28px] text-[#111] font-medium mb-1"
                      style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 500 }}
                    >
                      {stat.number}
                    </h4>
                    <p
                      className="text-[12px] md:text-[14px] text-[#666] font-medium"
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
      </section>

      {/* Our Story Section */}
      <section className="bg-[#EEEDEA] py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
                <Heart className="w-4 h-4 text-[#666]" />
                <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  Our Story
                </span>
              </div>

              {/* Main Heading */}
              <h2
                className="text-[28px] md:text-[40px] text-[#111] font-medium leading-tight mb-6"
                style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 500 }}
              >
                Changing the Way Oklahoma <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Buys & Sells</span>
              </h2>

              {/* Story Text */}
              <div className="space-y-4 mb-8">
                <p
                  className="text-[14px] md:text-[16px] text-[#666] font-medium leading-relaxed"
                  style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 500 }}
                >
                  OK BY OWNER was founded in 2019 with a simple belief: homeowners deserve to keep their hard-earned equity. After watching countless friends and family members pay tens of thousands in real estate commissions, we knew there had to be a better way.
                </p>
                <p
                  className="text-[14px] md:text-[16px] text-[#666] font-medium leading-relaxed"
                  style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 500 }}
                >
                  Today, we're proud to be Oklahoma's leading For Sale By Owner platform, helping thousands of homeowners save money and take control of their real estate journey. From free listings to premium marketing services, we provide everything you need to succeed.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/properties"
                  className="inline-flex items-center gap-[0.4rem] bg-[#413936] text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-[#312926]"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  <span>Browse Properties</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_56_2206" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                      <rect width="20" height="20" transform="matrix(-1 0 0 1 20 0)" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_56_2206)">
                      <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="white"/>
                    </g>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Side - Features List */}
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <h3 className="text-[20px] md:text-[24px] font-medium text-[#111] mb-6" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                What We Offer
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A41E34] flex-shrink-0" />
                    <span className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-[#666]" />
              <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Our Values
              </span>
            </div>
            <h2 className="text-[32px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              What We <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Stand For</span>
            </h2>
            <p className="text-[14px] md:text-[16px] text-[#666] font-medium max-w-2xl mx-auto px-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              The principles that guide everything we do
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-[#EEEDEA] rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="bg-[#E5E1DC] p-3 rounded-xl w-fit mb-4">
                    <IconComponent className="w-6 h-6 text-[#3D3D3D]" />
                  </div>
                  <h3 className="text-[18px] md:text-xl font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#666] font-medium leading-relaxed" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Oklahoma Showcase Section */}
      <section className="bg-[#EEEDEA] py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
              <Home className="w-4 h-4 text-[#666]" />
              <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Our Impact
              </span>
            </div>
            <h2 className="text-[32px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              Helping Oklahoma <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Homeowners</span>
            </h2>
            <p className="text-[14px] md:text-[16px] text-[#666] font-medium max-w-2xl mx-auto px-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              From Tulsa to Oklahoma City and everywhere in between
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-2xl h-[195px] md:h-[260px]">
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beautiful Oklahoma neighborhood"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl h-[195px] md:h-[260px]">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern home exterior"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl h-[195px] md:h-[260px]">
              <img
                src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Stunning property listing"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl h-[195px] md:h-[260px]">
              <img
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury home for sale"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl h-[195px] md:h-[260px]">
              <img
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beautiful residential property"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl h-[195px] md:h-[260px]">
              <img
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Charming Oklahoma home"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-[#666]" />
              <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Testimonials
              </span>
            </div>
            <h2 className="text-[32px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              What Our <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Customers Say</span>
            </h2>
            <p className="text-[14px] md:text-[16px] text-[#666] font-medium max-w-2xl mx-auto px-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              Real stories from Oklahoma homeowners who saved thousands
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#EEEDEA] rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#A41E34]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-[14px] md:text-[15px] text-[#111] font-medium mb-6 leading-relaxed" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-[#D0CCC7]">
                  <h4 className="text-[16px] font-medium text-[#111] mb-1" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-[#EEEDEA] py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-6 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Side */}
              <div>
                <h2 className="text-[28px] md:text-[40px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  Have Questions? <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Let's Talk</span>
                </h2>
                <p className="text-[14px] md:text-[16px] text-[#666] font-medium leading-relaxed mb-6" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  We're here to help you every step of the way. Whether you're buying or selling, our team is ready to answer your questions.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#A41E34] text-white rounded-full px-6 md:px-8 py-3 md:py-4 font-medium transition-all duration-300 hover:bg-[#8B1A2C] hover:shadow-lg"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  Contact Us
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_56_2208" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                      <rect width="20" height="20" transform="matrix(-1 0 0 1 20 0)" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_56_2208)">
                      <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="white"/>
                    </g>
                  </svg>
                </Link>
              </div>

              {/* Right Side - Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-[#F8F7F5] rounded-xl">
                  <div className="bg-[#E5E1DC] p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-[#3D3D3D]" />
                  </div>
                  <div>
                    <h4 className="text-[#111] font-medium mb-1" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Email Us</h4>
                    <p className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>support@okbyowner.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#F8F7F5] rounded-xl">
                  <div className="bg-[#E5E1DC] p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-[#3D3D3D]" />
                  </div>
                  <div>
                    <h4 className="text-[#111] font-medium mb-1" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Call Us</h4>
                    <p className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>1-800-OK-OWNER</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#F8F7F5] rounded-xl">
                  <div className="bg-[#E5E1DC] p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-[#3D3D3D]" />
                  </div>
                  <div>
                    <h4 className="text-[#111] font-medium mb-1" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Visit Us</h4>
                    <p className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Oklahoma City, OK 73102</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#E8E4DF] py-12 md:py-20 border-t border-[#D0CCC7]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[32px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
            Ready to Get <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Started?</span>
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#666] font-medium mb-8 max-w-2xl mx-auto px-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
            Join thousands of Oklahoma homeowners who have taken control of their real estate journey
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
            <Link
              href="/list-property"
              className="inline-flex items-center justify-center gap-2 bg-[#A41E34] text-white rounded-full px-6 md:px-8 py-3 md:py-4 font-medium text-base md:text-lg transition-all duration-300 hover:bg-[#8B1A2C] hover:shadow-lg"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              Start Listing Free
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_56_2209" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                  <rect width="20" height="20" transform="matrix(-1 0 0 1 20 0)" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_56_2209)">
                  <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="white"/>
                </g>
              </svg>
            </Link>
            <Link
              href="/properties"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#111] rounded-full px-6 md:px-8 py-3 md:py-4 font-medium text-base md:text-lg border border-[#D0CCC7] transition-all duration-300 hover:bg-[#F8F7F5]"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// Specify MainLayout for this page to include Header and Footer
About.layout = (page) => <MainLayout>{page}</MainLayout>;

export default About;
