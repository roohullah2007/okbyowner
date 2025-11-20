import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Home, DollarSign, Shield, Clock, CheckCircle, Users, TrendingUp, Star, ChevronRight, Info, Zap, BarChart3, Award, Target, PieChart, Camera, FileText, Megaphone, Handshake } from 'lucide-react';
import MainLayout from '@/Layouts/MainLayout';

function Sellers() {
  const stats = [
    {
      icon: Home,
      number: '2,500+',
      label: 'Properties Listed'
    },
    {
      icon: DollarSign,
      number: '$15K',
      label: 'Average Savings'
    },
    {
      icon: Users,
      number: '5,000+',
      label: 'Happy Sellers'
    },
    {
      icon: TrendingUp,
      number: '$50M+',
      label: 'Total Value Sold'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Zero Commission',
      description: 'Keep 100% of your sale price. No hidden fees or surprise charges.'
    },
    {
      icon: Zap,
      title: 'Quick Listing',
      description: 'List your property in minutes. Get online and visible instantly.'
    },
    {
      icon: Target,
      title: 'Full Control',
      description: 'You decide on pricing, showings, and negotiations. Stay in control.'
    },
    {
      icon: BarChart3,
      title: 'MLS Exposure',
      description: 'Optional MLS syndication to reach maximum number of buyers.'
    },
    {
      icon: Camera,
      title: 'Professional Tools',
      description: 'Access to professional photography and virtual tour services.'
    },
    {
      icon: Award,
      title: 'Expert Support',
      description: '24/7 customer support and guidance throughout your sale.'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      icon: FileText,
      title: 'Create Your Listing',
      description: 'Fill out our simple form with property details, upload photos, and set your price.'
    },
    {
      step: '02',
      icon: Megaphone,
      title: 'Get Promoted',
      description: 'Your listing goes live instantly and gets promoted to thousands of active buyers.'
    },
    {
      step: '03',
      icon: Users,
      title: 'Connect with Buyers',
      description: 'Receive inquiries directly. Schedule showings and answer questions on your terms.'
    },
    {
      step: '04',
      icon: Handshake,
      title: 'Close the Deal',
      description: 'Accept an offer and work with a closing attorney to complete the sale.'
    }
  ];

  const packages = [
    {
      name: 'Basic',
      price: 'FREE',
      popular: false,
      features: [
        'Property listing on our website',
        'Unlimited photos (up to 25)',
        'Property description',
        'Contact form for buyers',
        'Mobile-friendly listing page',
        'Basic analytics',
        'Email support'
      ]
    },
    {
      name: 'Premium',
      price: '$99',
      period: 'one-time',
      popular: true,
      features: [
        'Everything in Basic',
        'MLS syndication',
        'Featured listing placement',
        'Social media promotion',
        'Virtual tour integration',
        'Priority support',
        'Advanced analytics',
        'Lead management tools'
      ]
    },
    {
      name: 'Pro',
      price: '$199',
      period: 'one-time',
      popular: false,
      features: [
        'Everything in Premium',
        'Professional photography',
        'Drone aerial photos',
        '3D virtual tour',
        'Video walkthrough',
        'Dedicated account manager',
        'Marketing materials',
        'Open house promotion'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How much does it cost to list my property?',
      answer: 'Our basic listing is completely FREE forever. We also offer premium packages starting at $99 for additional exposure and marketing tools.'
    },
    {
      question: 'Do I need a real estate license to sell my own home?',
      answer: 'No, homeowners can sell their own property without a license. We provide all the tools and guidance you need.'
    },
    {
      question: 'How long does my listing stay active?',
      answer: 'Your free listing stays active until your property sells. Premium listings include priority placement and additional marketing.'
    },
    {
      question: 'What is MLS syndication?',
      answer: 'MLS (Multiple Listing Service) syndication puts your property on the same platform real estate agents use, giving you maximum exposure to buyers and agents.'
    },
    {
      question: 'Can I edit my listing after it\'s published?',
      answer: 'Yes! You can edit your listing anytime - update photos, change the price, or modify the description as needed.'
    },
    {
      question: 'What happens when I receive an offer?',
      answer: 'Buyers will contact you directly through our platform. You can review offers, negotiate terms, and accept the one that works best for you.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Oklahoma City, OK',
      image: '/images/avatar-1.jpg',
      rating: 5,
      text: 'Saved over $18,000 in commissions! The platform was easy to use and I had multiple offers within 2 weeks.'
    },
    {
      name: 'Mike Thompson',
      location: 'Tulsa, OK',
      image: '/images/avatar-2.jpg',
      rating: 5,
      text: 'Best decision ever. Listed for free, sold in 3 weeks, and kept all my money. Customer support was excellent!'
    },
    {
      name: 'Jennifer Davis',
      location: 'Norman, OK',
      image: '/images/avatar-3.jpg',
      rating: 5,
      text: 'I was skeptical at first, but the process was smooth and professional. The premium package was worth every penny.'
    }
  ];

  const comparisonData = [
    {
      feature: 'Listing Commission',
      traditional: '6% ($18,000 on $300k)',
      okByOwner: '$0 - $199'
    },
    {
      feature: 'Control Over Process',
      traditional: 'Limited',
      okByOwner: 'Full Control'
    },
    {
      feature: 'Direct Buyer Contact',
      traditional: 'No',
      okByOwner: 'Yes'
    },
    {
      feature: 'Listing Duration',
      traditional: '3-6 month contract',
      okByOwner: 'Until sold'
    }
  ];

  return (
    <>
      <Head title="Sellers - OK BY OWNER" />

      {/* Hero Section */}
      <div className="relative pt-0 md:pt-[77px]">
        <div className="relative min-h-[60vh] flex items-center py-16 md:py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Beautiful home exterior"
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
                Sell Your Home Keep Every <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Dollar</span>
              </h1>

              {/* Subheading */}
              <p
                className="text-white text-[14px] md:text-[16px] font-medium mb-8 leading-relaxed max-w-2xl drop-shadow-lg"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                List your property for FREE on our platform. No commissions, no hidden fees, no surprises. Join thousands of Oklahoma homeowners who've saved thousands by selling without a realtor.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-[0.4rem] mb-12">
                <Link
                  href="/list-property"
                  className="button inline-flex items-center gap-[0.4rem] bg-[#A41E34] text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-[#8B1A2C]"
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
                  href="#packages"
                  className="button inline-flex items-center gap-[0.4rem] bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-white/20"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  <span>View Packages</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - After Hero */}
      <div className="bg-[#EEEDEA] border-b border-gray-300">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            <div className="flex items-start gap-3 bg-white rounded-xl px-6 py-4 hover:shadow-md transition-all duration-300">
              <div className="bg-[#E5E1DC] p-3 rounded-lg flex-shrink-0">
                <Zap className="w-5 h-5 text-[#3D3D3D]" />
              </div>
              <div className="text-left">
                <div className="text-[#111] font-semibold text-base" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Free Listing</div>
                <div className="text-[#666] text-sm" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Forever</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl px-6 py-4 hover:shadow-md transition-all duration-300">
              <div className="bg-[#E5E1DC] p-3 rounded-lg flex-shrink-0">
                <Shield className="w-5 h-5 text-[#3D3D3D]" />
              </div>
              <div className="text-left">
                <div className="text-[#111] font-semibold text-base" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>MLS Access</div>
                <div className="text-[#666] text-sm" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Full Exposure</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl px-6 py-4 hover:shadow-md transition-all duration-300">
              <div className="bg-[#E5E1DC] p-3 rounded-lg flex-shrink-0">
                <Star className="w-5 h-5 text-[#3D3D3D]" />
              </div>
              <div className="text-left">
                <div className="text-[#111] font-semibold text-base" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Expert Support</div>
                <div className="text-[#666] text-sm" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>24/7 Help</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl px-6 py-4 hover:shadow-md transition-all duration-300">
              <div className="bg-[#E5E1DC] p-3 rounded-lg flex-shrink-0">
                <Users className="w-5 h-5 text-[#3D3D3D]" />
              </div>
              <div className="text-left">
                <div className="text-[#111] font-semibold text-base" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Direct Contact</div>
                <div className="text-[#666] text-sm" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>With Buyers</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl px-6 py-4 hover:shadow-md transition-all duration-300">
              <div className="bg-[#E5E1DC] p-3 rounded-lg flex-shrink-0">
                <DollarSign className="w-5 h-5 text-[#3D3D3D]" />
              </div>
              <div className="text-left">
                <div className="text-[#111] font-semibold text-base" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>No Hidden Fees</div>
                <div className="text-[#666] text-sm" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>100% Transparent</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-[#EEEDEA] py-20">
        <div className="max-w-[1400px] mx-auto px-6">
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
                  className="inline-flex items-center gap-[0.4rem] bg-[#413936] text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-[#312926]"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  <span>List Your Property</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_56_2206" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                      <rect width="20" height="20" transform="matrix(-1 0 0 1 20 0)" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_56_2206)">
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
                    <mask id="mask0_56_2207" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                      <rect width="20" height="20" transform="matrix(-1 0 0 1 20 0)" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_56_2207)">
                      <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="currentColor"/>
                    </g>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Side - Image Grid */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl h-[195px]">
                  <img
                    src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Beautiful home for sale"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl h-[195px]">
                  <img
                    src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Luxury property listing"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl h-[195px]">
                  <img
                    src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Modern home exterior"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl h-[195px]">
                  <img
                    src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Stunning property"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
              <PieChart className="w-4 h-4 text-[#666]" />
              <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Cost Comparison
              </span>
            </div>
            <h2 className="text-[40px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              Save <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Thousands</span>
            </h2>
            <p className="text-[16px] text-[#666] font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              See how much you can save compared to traditional real estate agents
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-[#413936]">
                <div className="text-white font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  Feature
                </div>
                <div className="text-white font-medium text-center" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  Traditional Agent
                </div>
                <div className="text-white font-medium text-center" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  OK BY OWNER
                </div>
              </div>

              {/* Rows */}
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 gap-4 p-6 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}`}
                >
                  <div className="text-[#111] font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    {row.feature}
                  </div>
                  <div className="text-[#666] text-center" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    {row.traditional}
                  </div>
                  <div className="text-[#A41E34] font-medium text-center" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    {row.okByOwner}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-[#666]" />
              <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Simple Process
              </span>
            </div>
            <h2 className="text-[40px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              How It <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Works</span>
            </h2>
            <p className="text-[16px] text-[#666] font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              Sell your property in four simple steps
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-[#EEEDEA] rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300">
                    <div className="bg-[#E5E1DC] p-3 rounded-xl w-fit mb-4">
                      <IconComponent className="w-6 h-6 text-[#3D3D3D]" />
                    </div>
                    <div className="text-[#A41E34] text-sm font-medium mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                      STEP {item.step}
                    </div>
                    <h3 className="text-xl font-medium text-[#111] mb-3" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#666] font-medium leading-relaxed" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                      {item.description}
                    </p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ChevronRight className="w-6 h-6 text-[#D0CCC7]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="bg-[#EEEDEA] py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
              <DollarSign className="w-4 h-4 text-[#666]" />
              <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Pricing Plans
              </span>
            </div>
            <h2 className="text-[40px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              Choose Your <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Package</span>
            </h2>
            <p className="text-[16px] text-[#666] font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              From free basic listings to full-service premium packages
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative ${
                  pkg.popular ? 'ring-2 ring-[#A41E34] scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#A41E34] text-white px-4 py-1.5 rounded-full text-xs font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-medium text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                      {pkg.price}
                    </span>
                    {pkg.period && (
                      <span className="text-[#666] text-sm mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                        /{pkg.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#A41E34] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/list-property"
                  className={`block w-full text-center py-3 rounded-full font-medium transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-[#A41E34] text-white hover:bg-[#8B1A2C]'
                      : 'bg-[#E5E1DC] text-[#111] hover:bg-[#D5D1CC]'
                  }`}
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-[#666]" />
              <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Success Stories
              </span>
            </div>
            <h2 className="text-[40px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              What Sellers <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Say</span>
            </h2>
            <p className="text-[16px] text-[#666] font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              Real stories from homeowners who saved thousands
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#EEEDEA] rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-[#111] mb-6 leading-relaxed" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#D0CCC7] rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#666]" />
                  </div>
                  <div>
                    <div className="text-[#111] font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Header */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
                <Info className="w-4 h-4 text-[#666]" />
                <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  FAQ
                </span>
              </div>
              <h2 className="text-[40px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Frequently Asked <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Questions</span>
              </h2>
              <p className="text-[16px] text-[#666] font-medium leading-relaxed" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Have questions? We've got answers. Learn more about selling your property through OK BY OWNER.
              </p>
            </div>

            {/* Right Side - FAQs */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#EEEDEA] rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    {faq.question}
                  </h3>
                  <p className="text-sm text-[#666] leading-relaxed" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#EEEDEA] py-20 border-t border-[#D0CCC7]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-[40px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
            Ready to List Your <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Property?</span>
          </h2>
          <p className="text-[16px] text-[#666] font-medium mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
            Join thousands of Oklahoma homeowners who have saved thousands in commissions
          </p>
          <Link
            href="/list-property"
            className="inline-flex items-center gap-2 bg-[#A41E34] text-white rounded-full px-8 py-4 font-medium text-lg transition-all duration-300 hover:bg-[#8B1A2C] hover:shadow-lg"
            style={{ fontFamily: 'Instrument Sans, sans-serif' }}
          >
            Start Listing Free
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
      </section>
    </>
  );
}

// Specify MainLayout for this page to include Header and Footer
Sellers.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Sellers;
