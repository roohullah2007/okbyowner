import React, { useState, useMemo } from 'react';
import { Head, Link } from '@inertiajs/react';
import { Calculator, DollarSign, Shield, Clock, CheckCircle, ChevronRight, ChevronDown, ChevronUp, FileText, Home, Percent, BadgeCheck, Building2, Users, CreditCard, PiggyBank, FileCheck, TrendingUp, HelpCircle, Info, MapPin, User, Briefcase, Search, FileSignature, Handshake, Phone, Mail, ShoppingCart } from 'lucide-react';
import MainLayout from '@/Layouts/MainLayout';

function Mortgages() {
  // Mortgage Rates Form State
  const [loanPurpose, setLoanPurpose] = useState('purchase');
  const [purchasePrice, setPurchasePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [zipCode, setZipCode] = useState('73003');
  const [creditScore, setCreditScore] = useState('740+');
  const [annualIncome, setAnnualIncome] = useState(150000);
  const [selectedLoanType, setSelectedLoanType] = useState('all');
  const [selectedTerm, setSelectedTerm] = useState('all');
  const [expandedLoan, setExpandedLoan] = useState(null);
  const [sortBy, setSortBy] = useState('rate');

  // Handle down payment changes
  const handleDownPaymentChange = (value) => {
    const amount = Math.min(purchasePrice, Math.max(0, parseFloat(value) || 0));
    setDownPayment(amount);
    setDownPaymentPercent(Math.round((amount / purchasePrice) * 100));
  };

  const handleDownPaymentPercentChange = (value) => {
    const percent = Math.min(100, Math.max(0, parseFloat(value) || 0));
    setDownPaymentPercent(percent);
    setDownPayment(Math.round(purchasePrice * (percent / 100)));
  };

  // Handle purchase price changes
  const handlePurchasePriceChange = (value) => {
    const price = Math.max(0, parseFloat(value) || 0);
    setPurchasePrice(price);
    setDownPayment(Math.round(price * (downPaymentPercent / 100)));
  };

  // Sample mortgage rates data
  const mortgageRates = useMemo(() => {
    const loanAmount = purchasePrice - downPayment;
    const isLowDown = downPaymentPercent < 20;

    const rates = [
      {
        id: 1,
        type: 'CONVENTIONAL',
        term: '5/6 ARM',
        interestRate: 5.625,
        apr: 6.480,
        loanCosts: 10549,
        monthlyInsurance: 100,
        mortgageInsurance: isLowDown ? 83 : 0,
        propertyTaxes: 400,
      },
      {
        id: 2,
        type: 'FHA',
        term: '30-YR FIXED',
        interestRate: 5.500,
        apr: 6.146,
        loanCosts: 13234,
        monthlyInsurance: 100,
        mortgageInsurance: 145,
        propertyTaxes: 400,
      },
      {
        id: 3,
        type: 'CONVENTIONAL',
        term: '30-YR FIXED',
        interestRate: 6.125,
        apr: 6.267,
        loanCosts: 7578,
        monthlyInsurance: 100,
        mortgageInsurance: isLowDown ? 83 : 0,
        propertyTaxes: 400,
      },
      {
        id: 4,
        type: 'CONVENTIONAL',
        term: '15-YR FIXED',
        interestRate: 5.250,
        apr: 5.480,
        loanCosts: 7578,
        monthlyInsurance: 100,
        mortgageInsurance: isLowDown ? 83 : 0,
        propertyTaxes: 400,
      },
      {
        id: 5,
        type: 'FHA',
        term: '15-YR FIXED',
        interestRate: 5.125,
        apr: 5.751,
        loanCosts: 12969,
        monthlyInsurance: 100,
        mortgageInsurance: 145,
        propertyTaxes: 400,
      },
      {
        id: 6,
        type: 'VA',
        term: '30-YR FIXED',
        interestRate: 5.375,
        apr: 5.890,
        loanCosts: 9500,
        monthlyInsurance: 100,
        mortgageInsurance: 0,
        propertyTaxes: 400,
      },
      {
        id: 7,
        type: 'CONVENTIONAL',
        term: '7/6 ARM',
        interestRate: 5.875,
        apr: 6.320,
        loanCosts: 9200,
        monthlyInsurance: 100,
        mortgageInsurance: isLowDown ? 83 : 0,
        propertyTaxes: 400,
      },
      {
        id: 8,
        type: 'JUMBO',
        term: '30-YR FIXED',
        interestRate: 6.500,
        apr: 6.650,
        loanCosts: 12000,
        monthlyInsurance: 150,
        mortgageInsurance: 0,
        propertyTaxes: 500,
      },
    ];

    // Calculate monthly P&I for each rate
    return rates.map(rate => {
      const termYears = rate.term.includes('15') ? 15 : 30;
      const monthlyRate = rate.interestRate / 100 / 12;
      const numberOfPayments = termYears * 12;

      let monthlyPI = 0;
      if (monthlyRate > 0) {
        monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      } else {
        monthlyPI = loanAmount / numberOfPayments;
      }

      const totalMonthly = monthlyPI + rate.monthlyInsurance + rate.mortgageInsurance + rate.propertyTaxes;
      const otherCosts = 3530;
      const totalCashToClose = rate.loanCosts + otherCosts + downPayment;

      return {
        ...rate,
        monthlyPI: Math.round(monthlyPI),
        totalMonthly: Math.round(totalMonthly),
        otherCosts,
        totalCashToClose,
        loanAmount
      };
    });
  }, [purchasePrice, downPayment, downPaymentPercent]);

  // Filter and sort rates
  const filteredRates = useMemo(() => {
    let filtered = [...mortgageRates];

    if (selectedLoanType !== 'all') {
      filtered = filtered.filter(r => r.type === selectedLoanType);
    }

    if (selectedTerm !== 'all') {
      filtered = filtered.filter(r => r.term.includes(selectedTerm));
    }

    // Sort
    if (sortBy === 'rate') {
      filtered.sort((a, b) => a.interestRate - b.interestRate);
    } else if (sortBy === 'payment') {
      filtered.sort((a, b) => a.monthlyPI - b.monthlyPI);
    } else if (sortBy === 'costs') {
      filtered.sort((a, b) => a.loanCosts - b.loanCosts);
    }

    return filtered;
  }, [mortgageRates, selectedLoanType, selectedTerm, sortBy]);

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatCurrencyDetailed = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  // Get type badge color
  const getTypeBadgeColor = (type) => {
    switch (type) {
      case 'CONVENTIONAL': return 'bg-blue-100 text-blue-800';
      case 'FHA': return 'bg-green-100 text-green-800';
      case 'VA': return 'bg-purple-100 text-purple-800';
      case 'JUMBO': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  const howItWorks = [
    {
      step: '01',
      icon: Search,
      title: 'Find Your Rate',
      description: 'Instantly find the most competitive deal from over 25 lenders. Compare rates, terms, and costs side by side.'
    },
    {
      step: '02',
      icon: FileSignature,
      title: 'Get Pre-Approved',
      description: 'Complete a simple online application to receive a fast pre-approval. Show sellers you\'re a serious, qualified buyer.'
    },
    {
      step: '03',
      icon: Handshake,
      title: 'Close With Ease',
      description: 'Enjoy a streamlined closing process with digital tools and expert support every step of the way.'
    }
  ];

  const mortgageTypes = [
    {
      icon: Home,
      title: 'Conventional Loans',
      description: 'Traditional mortgages not backed by the government. Typically require 3-20% down payment and good credit scores.',
      features: ['Competitive interest rates', 'Flexible terms (15-30 years)', 'PMI removed at 20% equity']
    },
    {
      icon: Shield,
      title: 'FHA Loans',
      description: 'Government-backed loans ideal for first-time buyers. Lower down payment and credit requirements.',
      features: ['3.5% minimum down payment', 'Credit scores as low as 580', 'Lower closing costs']
    },
    {
      icon: BadgeCheck,
      title: 'VA Loans',
      description: 'Exclusive benefits for veterans and active military. Often the best mortgage option available.',
      features: ['No down payment required', 'No PMI requirement', 'Competitive rates']
    },
    {
      icon: Building2,
      title: 'USDA Loans',
      description: 'Zero down payment loans for rural property buyers. Income limits apply.',
      features: ['No down payment', 'Low mortgage insurance', 'Below-market rates']
    }
  ];

  const mortgageTips = [
    {
      icon: CreditCard,
      title: 'Improve Your Credit Score',
      description: 'Pay down debts, avoid new credit inquiries, and dispute any errors on your credit report before applying for a mortgage.'
    },
    {
      icon: PiggyBank,
      title: 'Save for Down Payment',
      description: 'Aim for 20% down to avoid PMI, but many programs allow as little as 3% down. Don\'t forget closing costs (2-5%).'
    },
    {
      icon: Calculator,
      title: 'Calculate Your Budget',
      description: 'Your monthly housing payment (including taxes and insurance) shouldn\'t exceed 28% of your gross monthly income.'
    },
    {
      icon: FileCheck,
      title: 'Gather Documentation',
      description: 'Prepare pay stubs, W-2s, tax returns, bank statements, and ID. Self-employed buyers need 2 years of tax returns.'
    },
    {
      icon: TrendingUp,
      title: 'Lock Your Rate',
      description: 'Once you find a good rate, lock it in. Rate locks typically last 30-60 days and protect you from market fluctuations.'
    },
    {
      icon: HelpCircle,
      title: 'Ask About Assistance',
      description: 'Oklahoma offers down payment assistance programs. Ask your lender about first-time buyer programs and grants.'
    }
  ];

  const faqs = [
    {
      question: 'What credit score do I need for a mortgage?',
      answer: 'For conventional loans, most lenders require a minimum score of 620. FHA loans may accept scores as low as 580 with 3.5% down, or 500-579 with 10% down. Higher scores get better interest rates.'
    },
    {
      question: 'How much down payment do I need?',
      answer: 'It depends on the loan type. Conventional loans require 3-20%, FHA loans need 3.5%, VA and USDA loans offer 0% down options. Putting 20% down avoids private mortgage insurance (PMI).'
    },
    {
      question: 'What\'s the difference between pre-qualification and pre-approval?',
      answer: 'Pre-qualification is an estimate based on self-reported information. Pre-approval involves a credit check and document verification, making it a stronger commitment from the lender and more attractive to sellers.'
    },
    {
      question: 'How long does it take to get a mortgage?',
      answer: 'From application to closing typically takes 30-45 days. However, getting pre-approved can be done in 1-3 days. Having all documents ready speeds up the process.'
    },
    {
      question: 'Should I get a fixed or adjustable rate?',
      answer: 'Fixed rates stay the same for the loan term, providing payment stability. Adjustable rates (ARMs) start lower but can change after the initial period. Fixed is usually better if you plan to stay long-term.'
    }
  ];

  return (
    <>
      <Head title="Mortgages - OK BY OWNER" />

      {/* Hero Section */}
      <div className="relative pt-0 md:pt-[77px]">
        <div className="relative min-h-[60vh] flex items-center py-16 md:py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/7578939/pexels-photo-7578939.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Mortgage Financing - Oklahoma"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </div>

          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10 w-full">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-white text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  Powered by T&M Mortgages
                </span>
              </div>

              {/* Main Heading */}
              <h1
                className="text-white text-[40px] sm:text-[50px] md:text-[60px] font-medium leading-[1.1] mb-5 drop-shadow-2xl"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                Your Home,<br />Our Mortgage
              </h1>

              {/* Subheading */}
              <p
                className="text-white text-[14px] md:text-[16px] font-medium mb-8 leading-relaxed max-w-2xl drop-shadow-lg"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                OK BY OWNER now offers in-house mortgage services through T&M Mortgages. Get pre-approved in minutes, compare rates from 25+ lenders, and close with confidence. One seamless experience from home search to keys in hand.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-[0.4rem] mb-12">
                <a
                  href="https://tandmmortgages.morty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button inline-flex items-center gap-[0.4rem] bg-[#A41E34] text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-[#8B1A2C]"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  <BadgeCheck className="w-5 h-5" />
                  <span>Get Pre-Approved</span>
                </a>
                <Link
                  href="#rates"
                  className="button inline-flex items-center gap-[0.4rem] bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-white/20"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  <Calculator className="w-5 h-5" />
                  <span>Compare Rates</span>
                </Link>
                <Link
                  href="#why-us"
                  className="button inline-flex items-center gap-[0.4rem] bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-white/20"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  <Info className="w-5 h-5" />
                  <span>Why T&M?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - After Hero */}
      <div className="bg-[#EEEDEA] border-b border-gray-300">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 text-center">
              <div className="bg-[#A41E34]/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Percent className="w-8 h-8 text-[#A41E34]" />
              </div>
              <h3 className="text-[#111] font-semibold text-xl mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>25+ Lender Network</h3>
              <p className="text-[#666] text-sm leading-relaxed" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>We shop your loan across our network of 25+ lenders to find you the absolute best rate</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 text-center">
              <div className="bg-[#A41E34]/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-[#A41E34]" />
              </div>
              <h3 className="text-[#111] font-semibold text-xl mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>15-Min Pre-Approval</h3>
              <p className="text-[#666] text-sm leading-relaxed" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Get pre-approved online in as little as 15 minutes. No office visits required.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 text-center">
              <div className="bg-[#A41E34]/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Handshake className="w-8 h-8 text-[#A41E34]" />
              </div>
              <h3 className="text-[#111] font-semibold text-xl mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Seamless Experience</h3>
              <p className="text-[#666] text-sm leading-relaxed" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>One partner from property search to closing. We understand FSBO transactions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why T&M Mortgages Section */}
      <section id="why-us" className="bg-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center bg-[#A41E34]/10 rounded-lg px-4 py-2 mb-6">
                <span className="text-[#A41E34] text-sm font-semibold" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  T&M Mortgages
                </span>
              </div>

              {/* Main Heading */}
              <h2
                className="text-[28px] md:text-[36px] text-[#111] font-medium leading-tight mb-6"
                style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 500 }}
              >
                Why Get Your Mortgage Through Us?
              </h2>

              {/* Description */}
              <p
                className="text-[16px] text-[#666] font-medium mb-8 leading-relaxed"
                style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 500 }}
              >
                When you find your dream home on OK BY OWNER, getting financing shouldn't slow you down. T&M Mortgages is our in-house mortgage partner, providing you with a seamless home buying experience from start to finish.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#A41E34] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Insider Understanding</h4>
                    <p className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>We know FSBO transactions inside and out. No confusion, no delays.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#A41E34] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Better Communication</h4>
                    <p className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>One team handling your home search and mortgage. Everything stays coordinated.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#A41E34] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Wholesale Rates</h4>
                    <p className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Access to wholesale rates from 25+ lenders that you won't find shopping on your own.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#A41E34] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Oklahoma Focused</h4>
                    <p className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Local expertise with knowledge of Oklahoma-specific programs and assistance.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://tandmmortgages.morty.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#A41E34] text-white rounded-full px-6 py-4 font-medium hover:bg-[#8B1A2C] transition-all duration-300"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                Start Your Application
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            {/* Right Side - Card */}
            <div className="bg-gradient-to-br from-[#A41E34] to-[#7A1628] rounded-3xl p-8 md:p-10 text-white">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-medium mb-3" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  Ready to Get Pre-Approved?
                </h3>
                <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  It only takes 15 minutes. No impact to your credit score for pre-qualification.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Simple Online Application</p>
                    <p className="text-white/70 text-sm" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Complete from your phone or computer</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Secure & Confidential</p>
                    <p className="text-white/70 text-sm" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Bank-level encryption protects your data</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Personal Support</p>
                    <p className="text-white/70 text-sm" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Real humans available to help you</p>
                  </div>
                </div>
              </div>

              <a
                href="https://tandmmortgages.morty.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-[#A41E34] text-center py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                Get Pre-Approved Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mortgage Rates Today Section */}
      <section id="rates" className="bg-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
              <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Compare Rates
              </span>
            </div>
            <h2 className="text-[32px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              Mortgage Rates Today
            </h2>
            <p className="text-[16px] text-[#666] font-medium max-w-3xl mx-auto" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              We search thousands of loan options so you don't have to! Find the most competitive rates including: 15, 20 and 30-year fixed rates, 10/6, 7/6 and 5/6 ARMs, FHA, Jumbo, low down payment options and more.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side - Form */}
            <div className="lg:col-span-1">
              <div className="bg-[#EEEDEA] rounded-2xl p-6 sticky top-[100px]">
                {/* Loan Purpose Tabs */}
                <div className="flex mb-6 bg-white rounded-xl p-1">
                  {['purchase', 'refinance', 'heloc'].map((purpose) => (
                    <button
                      key={purpose}
                      onClick={() => setLoanPurpose(purpose)}
                      className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all capitalize ${loanPurpose === purpose ? 'bg-[#A41E34] text-white' : 'text-[#666] hover:text-[#111]'}`}
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                    >
                      {purpose === 'heloc' ? 'HELOC' : purpose}
                    </button>
                  ))}
                </div>

                {/* Purchase Price */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    Purchase price
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666]">$</span>
                    <input
                      type="number"
                      value={purchasePrice}
                      onChange={(e) => handlePurchasePriceChange(e.target.value)}
                      className="w-full pl-8 pr-4 py-3 border border-[#D0CCC7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A41E34] focus:border-transparent bg-white text-[#111]"
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Down Payment */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    Down payment
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666]">$</span>
                      <input
                        type="number"
                        value={downPayment}
                        onChange={(e) => handleDownPaymentChange(e.target.value)}
                        className="w-full pl-8 pr-4 py-3 border border-[#D0CCC7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A41E34] focus:border-transparent bg-white text-[#111]"
                        style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                      />
                    </div>
                    <div className="relative w-24">
                      <input
                        type="number"
                        value={downPaymentPercent}
                        onChange={(e) => handleDownPaymentPercentChange(e.target.value)}
                        className="w-full pl-4 pr-8 py-3 border border-[#D0CCC7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A41E34] focus:border-transparent bg-white text-[#111]"
                        style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666]">%</span>
                    </div>
                  </div>
                </div>

                {/* Zip Code */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    Zip code
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]" />
                    <input
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      maxLength={5}
                      className="w-full pl-10 pr-4 py-3 border border-[#D0CCC7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A41E34] focus:border-transparent bg-white text-[#111]"
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Credit Score */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    Credit score
                  </label>
                  <select
                    value={creditScore}
                    onChange={(e) => setCreditScore(e.target.value)}
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A41E34] focus:border-transparent bg-white text-[#111] appearance-none cursor-pointer"
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                  >
                    <option value="740+">740+</option>
                    <option value="720-739">720-739</option>
                    <option value="700-719">700-719</option>
                    <option value="680-699">680-699</option>
                    <option value="660-679">660-679</option>
                    <option value="640-659">640-659</option>
                    <option value="620-639">620-639</option>
                    <option value="below 620">Below 620</option>
                  </select>
                </div>

                {/* Annual Income */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    Annual income
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666]">$</span>
                    <input
                      type="number"
                      value={annualIncome}
                      onChange={(e) => setAnnualIncome(parseFloat(e.target.value) || 0)}
                      className="w-full pl-8 pr-4 py-3 border border-[#D0CCC7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A41E34] focus:border-transparent bg-white text-[#111]"
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Loan Type Filter */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    Loan type
                  </label>
                  <select
                    value={selectedLoanType}
                    onChange={(e) => setSelectedLoanType(e.target.value)}
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A41E34] focus:border-transparent bg-white text-[#111] appearance-none cursor-pointer"
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                  >
                    <option value="all">All Types</option>
                    <option value="CONVENTIONAL">Conventional</option>
                    <option value="FHA">FHA</option>
                    <option value="VA">VA</option>
                    <option value="JUMBO">Jumbo</option>
                  </select>
                </div>

                {/* Term Filter */}
                <div>
                  <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    Term
                  </label>
                  <select
                    value={selectedTerm}
                    onChange={(e) => setSelectedTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A41E34] focus:border-transparent bg-white text-[#111] appearance-none cursor-pointer"
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                  >
                    <option value="all">All Terms</option>
                    <option value="30">30-Year</option>
                    <option value="15">15-Year</option>
                    <option value="ARM">ARM</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right Side - Rate Cards */}
            <div className="lg:col-span-2">
              {/* Sort Header */}
              <div className="flex items-center justify-between mb-4 bg-[#EEEDEA] rounded-xl p-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    {filteredRates.length} loan options found
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-[#D0CCC7] rounded-lg text-sm bg-white text-[#111] appearance-none cursor-pointer"
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                  >
                    <option value="rate">Interest Rate</option>
                    <option value="payment">Monthly Payment</option>
                    <option value="costs">Loan Costs</option>
                  </select>
                </div>
              </div>

              {/* Rate Cards */}
              <div className="space-y-4">
                {filteredRates.map((rate) => (
                  <div
                    key={rate.id}
                    className="bg-white border border-[#E5E1DC] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    {/* Card Header */}
                    <div
                      className="p-5 cursor-pointer"
                      onClick={() => setExpandedLoan(expandedLoan === rate.id ? null : rate.id)}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        {/* Type & Term */}
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeBadgeColor(rate.type)}`}>
                            {rate.type}
                          </span>
                          <span className="text-lg font-semibold text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                            {rate.term}
                          </span>
                        </div>

                        {/* Rate Info */}
                        <div className="flex flex-wrap items-center gap-6 md:gap-8">
                          <div className="text-center">
                            <p className="text-2xl md:text-3xl font-bold text-[#A41E34]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                              {rate.interestRate.toFixed(3)}%
                            </p>
                            <p className="text-xs text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Interest Rate</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-semibold text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                              {rate.apr.toFixed(3)}%
                            </p>
                            <p className="text-xs text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>APR</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-semibold text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                              {formatCurrency(rate.monthlyPI)}/mo
                            </p>
                            <p className="text-xs text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Principal & Interest</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-semibold text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                              {formatCurrency(rate.loanCosts)}
                            </p>
                            <p className="text-xs text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Est. Loan Costs</p>
                          </div>
                          <div>
                            {expandedLoan === rate.id ? (
                              <ChevronUp className="w-5 h-5 text-[#666]" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-[#666]" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {expandedLoan === rate.id && (
                      <div className="border-t border-[#E5E1DC] bg-[#FAFAF9] p-5">
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Monthly Costs */}
                          <div className="bg-white rounded-xl p-5">
                            <h5 className="text-sm font-semibold text-[#111] mb-4 flex items-center gap-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                              <Calculator className="w-4 h-4 text-[#A41E34]" />
                              Monthly Costs
                            </h5>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Principal & interest</span>
                                <span className="text-sm font-medium text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>{formatCurrency(rate.monthlyPI)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Homeowner's insurance</span>
                                <span className="text-sm font-medium text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>{formatCurrency(rate.monthlyInsurance)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Mortgage insurance</span>
                                <span className="text-sm font-medium text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>{formatCurrency(rate.mortgageInsurance)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Property taxes & fees</span>
                                <span className="text-sm font-medium text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>{formatCurrency(rate.propertyTaxes)}</span>
                              </div>
                              <div className="border-t border-[#E5E1DC] pt-3 flex justify-between">
                                <span className="text-sm font-semibold text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Total payment</span>
                                <span className="text-lg font-bold text-[#A41E34]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>{formatCurrency(rate.totalMonthly)}/mo</span>
                              </div>
                            </div>
                          </div>

                          {/* Cash to Close */}
                          <div className="bg-white rounded-xl p-5">
                            <h5 className="text-sm font-semibold text-[#111] mb-4 flex items-center gap-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                              <DollarSign className="w-4 h-4 text-[#A41E34]" />
                              Cash to Close
                            </h5>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Estimated loan costs</span>
                                <span className="text-sm font-medium text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>{formatCurrency(rate.loanCosts)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Estimated other costs</span>
                                <span className="text-sm font-medium text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>{formatCurrency(rate.otherCosts)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Down payment ({downPaymentPercent}%)</span>
                                <span className="text-sm font-medium text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>{formatCurrency(downPayment)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Deposits & credits</span>
                                <span className="text-sm font-medium text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>$0</span>
                              </div>
                              <div className="border-t border-[#E5E1DC] pt-3 flex justify-between">
                                <span className="text-sm font-semibold text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Total cash to close</span>
                                <span className="text-lg font-bold text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>{formatCurrency(rate.totalCashToClose)}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Loan Details Summary */}
                        <div className="mt-4 p-4 bg-[#E5E1DC] rounded-xl">
                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-6">
                              <div>
                                <p className="text-xs text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Loan Amount</p>
                                <p className="text-sm font-semibold text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>{formatCurrency(rate.loanAmount)}</p>
                              </div>
                              <div>
                                <p className="text-xs text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Home Price</p>
                                <p className="text-sm font-semibold text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>{formatCurrency(purchasePrice)}</p>
                              </div>
                              <div>
                                <p className="text-xs text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Down Payment</p>
                                <p className="text-sm font-semibold text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>{downPaymentPercent}%</p>
                              </div>
                            </div>
                            <a
                              href="https://tandmmortgages.morty.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-[#A41E34] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#8B1A2C] transition-all"
                              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                            >
                              Apply with T&M
                              <ChevronRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="mt-6 p-4 bg-[#EEEDEA] rounded-xl">
                <p className="text-xs text-[#666] leading-relaxed" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  <strong>Disclaimer:</strong> The rates shown above are sample rates for illustration purposes only. Actual rates may vary based on your credit profile, loan amount, and other factors. Contact a lender for personalized rate quotes. APR and monthly payment calculations are estimates and may not include all costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#EEEDEA] py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
                <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  Mortgage Guide
                </span>
              </div>

              {/* Main Heading */}
              <h2
                className="text-[24px] md:text-[28px] text-[#111] font-medium leading-tight mb-6"
                style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 500 }}
              >
                Getting a mortgage doesn't have to be complicated. Understanding your options and preparing properly can save you thousands over the life of your loan.
              </h2>

              {/* Subheading */}
              <p
                className="text-[14px] text-[#666] font-medium mb-8 leading-relaxed"
                style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 500 }}
              >
                Whether you're a first-time buyer or refinancing, we'll help you understand the mortgage landscape in Oklahoma.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/buyers"
                  className="inline-flex items-center gap-[0.4rem] bg-[#A41E34] text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-[#8B1A2C]"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  <span>Buyer's Guide</span>
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
                  <span>Contact Us</span>
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

            {/* Right Side - Image Grid */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl h-[195px]">
                  <img
                    src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Couple reviewing mortgage documents"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl h-[195px]">
                  <img
                    src="https://images.pexels.com/photos/7578939/pexels-photo-7578939.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Home keys"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl h-[195px]">
                  <img
                    src="https://images.pexels.com/photos/8293651/pexels-photo-8293651.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Financial planning"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl h-[195px]">
                  <img
                    src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Dream home"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
              <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Simple Process
              </span>
            </div>
            <h2 className="text-[32px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              How It Works
            </h2>
            <p className="text-[16px] text-[#666] font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              Get from application to closing in three simple steps
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {howItWorks.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-[#EEEDEA] rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 text-center">
                    <div className="bg-[#A41E34] p-4 rounded-full w-16 h-16 mx-auto mb-5 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-[#A41E34] text-sm font-semibold mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                      STEP {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-[#111] mb-3" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#666] font-medium leading-relaxed" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                      {item.description}
                    </p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ChevronRight className="w-8 h-8 text-[#D0CCC7]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://tandmmortgages.morty.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#A41E34] text-white rounded-full px-8 py-4 font-medium hover:bg-[#8B1A2C] transition-all duration-300"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              Get Pre-Approved with T&M
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Mortgage Types Section */}
      <section id="mortgage-types" className="bg-[#EEEDEA] py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
              <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Loan Options
              </span>
            </div>
            <h2 className="text-[32px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              Types of Mortgages
            </h2>
            <p className="text-[16px] text-[#666] font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              Choose the right loan type for your situation. Each has unique benefits and requirements.
            </p>
          </div>

          {/* Mortgage Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mortgageTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-[#E5E1DC] p-3 rounded-xl">
                      <IconComponent className="w-6 h-6 text-[#3D3D3D]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                        {type.title}
                      </h3>
                      <p className="text-sm text-[#666] leading-relaxed" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                        {type.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-[60px]">
                    {type.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#A41E34] flex-shrink-0" />
                        <span className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Oklahoma Programs Box */}
          <div className="bg-white rounded-2xl p-8 md:p-10 mt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  Oklahoma Assistance Programs
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#A41E34] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>OHFA (Oklahoma Housing Finance Agency) first-time buyer programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#A41E34] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Down payment assistance up to 3.5% of the loan amount</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#A41E34] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Homebuyer education classes that unlock special rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#A41E34] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Teacher, police, and firefighter home purchase programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#A41E34] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Rural development loans with no down payment required</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#A41E34] to-[#7A1628] rounded-xl p-6 text-white">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                    <BadgeCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-medium mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    Get Pre-Approved with T&M
                  </h4>
                  <p className="text-sm text-white/80 mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    Our in-house mortgage team understands Oklahoma programs and FSBO transactions. Let us help you get the best rate.
                  </p>
                  <a
                    href="https://tandmmortgages.morty.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-[#A41E34] rounded-full px-6 py-3 font-medium transition-all duration-300 hover:bg-gray-100"
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                  >
                    Start Application
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mortgage Tips Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
              <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Expert Advice
              </span>
            </div>
            <h2 className="text-[32px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              Mortgage Tips
            </h2>
            <p className="text-[16px] text-[#666] font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              Smart strategies to get the best mortgage terms and save money over the life of your loan
            </p>
          </div>

          {/* Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mortgageTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <div key={index} className="bg-[#EEEDEA] rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="bg-[#E5E1DC] p-3 rounded-xl w-fit mb-4">
                    <IconComponent className="w-6 h-6 text-[#3D3D3D]" />
                  </div>
                  <h3 className="text-xl font-medium text-[#111] mb-3" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[#666] font-medium leading-relaxed" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    {tip.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#EEEDEA] py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Header */}
            <div>
              <div className="inline-flex items-center bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
                <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  FAQs
                </span>
              </div>
              <h2 className="text-[32px] md:text-[40px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Mortgage Questions<br />Answered
              </h2>
              <p className="text-[16px] text-[#666] font-medium leading-relaxed" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Common questions about home financing, answered simply. Still have questions? Contact us for personalized guidance.
              </p>
            </div>

            {/* Right Side - FAQs */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
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

    </>
  );
}

// Specify MainLayout for this page to include Header and Footer
Mortgages.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Mortgages;
