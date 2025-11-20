import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { url } = usePage();
  const isHomePage = url === '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Add your email submission logic here
  };

  return (
    <footer className="w-full bg-[#1a1a1a]">
      {/* CTA Section - Only show on home page */}
      {isHomePage && (
      <div className="w-full bg-cover bg-center bg-no-repeat relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Footer Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontFamily: '"Instrument Sans", sans-serif' }} className="text-white text-sm font-medium">
              Start Selling Today
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-12">
            <span
              style={{ fontFamily: '"Instrument Sans", sans-serif' }}
              className="block text-[72px] font-semibold leading-[110%] text-white"
            >
              Ready to sell your home
            </span>
            <span
              style={{ fontFamily: 'Lora, serif' }}
              className="block text-[72px] font-semibold leading-[110%] text-white italic"
            >
              without
            </span>
            <span
              style={{ fontFamily: '"Instrument Sans", sans-serif' }}
              className="block text-[72px] font-semibold leading-[110%] text-white"
            >
              paying commissions?
            </span>
          </h2>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              className="inline-flex items-center gap-[0.4rem] bg-white text-[#111] rounded-full px-6 py-4 font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-[#E5E1DC]"
              href="/list-property"
              style={{ fontFamily: '"Instrument Sans", sans-serif' }}
            >
              <span>List Your Property</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_footer_buy" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20" style={{ maskType: 'alpha' }}>
                  <rect width="20" height="20" transform="matrix(-1 0 0 1 20 0)" fill="#D9D9D9"></rect>
                </mask>
                <g mask="url(#mask0_footer_buy)">
                  <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="currentColor"></path>
                </g>
              </svg>
            </Link>

            <Link
              className="inline-flex items-center gap-[0.4rem] bg-transparent border-2 border-white/30 text-white rounded-full px-6 py-4 font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-white/10 hover:border-white/50"
              href="/properties"
              style={{ fontFamily: '"Instrument Sans", sans-serif' }}
            >
              <span>Browse Properties</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_footer_customize" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20" style={{ maskType: 'alpha' }}>
                  <rect width="20" height="20" transform="matrix(-1 0 0 1 20 0)" fill="#D9D9D9"></rect>
                </mask>
                <g mask="url(#mask0_footer_customize)">
                  <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="currentColor"></path>
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      )}

      {/* Main Footer Section */}
      <div className="w-full bg-[#1a1a1a] border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            {/* Left Column - Address & Newsletter */}
            <div className="lg:col-span-5">
              {/* Logo */}
              <div className="mb-12">
                <div className="flex items-center gap-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 32L20 8L32 32H8Z" fill="white"/>
                  </svg>
                  <span style={{ fontFamily: '"Instrument Sans", sans-serif' }} className="text-white text-2xl font-semibold">
                    OK BY OWNER
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="mb-8">
                <p
                  style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                  className="text-[#DCD8D5] text-base font-normal mb-2"
                >
                  Address
                </p>
                <h3
                  style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                  className="text-white text-[32px] font-medium leading-[120%]"
                >
                  Oklahoma City, OK
                </h3>
              </div>

              {/* Newsletter Form */}
              <div className="mb-6">
                <p
                  style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                  className="text-[#DCD8D5] text-base font-normal mb-4"
                >
                  Enter Your Email
                </p>
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hello@example.com"
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder:text-[#DCD8D5]/50 focus:outline-none focus:border-white/30 transition-colors"
                  />
                  <button
                    type="submit"
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    className="bg-white text-[#111] rounded-full px-8 py-3 font-medium transition-all duration-[400ms] hover:bg-[#E5E1DC]"
                  >
                    Join Us
                  </button>
                </form>
              </div>

              {/* Privacy Notice */}
              <p
                style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                className="text-[#DCD8D5] text-base font-normal leading-relaxed"
              >
                * By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
              </p>
            </div>

            {/* Right Columns - Links */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* Main Pages */}
                <div>
                  <h4
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    className="text-[#DCD8D5] text-base font-normal mb-6"
                  >
                    Main Pages
                  </h4>
                  <ul className="space-y-4">
                    {[
                      { label: 'Home', href: '/' },
                      { label: 'Properties', href: '/properties' },
                      { label: 'Buyers', href: '/buyers' },
                      { label: 'Sellers', href: '/sellers' },
                      { label: 'Testimonials', href: '/testimonials' },
                      { label: 'About Us', href: '/about' }
                    ].map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                          className="text-white text-xl font-normal transition-colors duration-300 hover:text-[#DCD8D5]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    className="text-[#DCD8D5] text-base font-normal mb-6"
                  >
                    Resources
                  </h4>
                  <ul className="space-y-4">
                    {[
                      { label: 'FAQs', href: '/faqs' },
                      { label: 'Blog', href: '/blog' },
                      { label: 'Privacy Policy', href: '/privacy-policy' },
                      { label: 'Terms Of Use', href: '/terms-of-use' },
                      { label: 'Contact Us', href: '/contact' }
                    ].map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                          className="text-white text-xl font-normal transition-colors duration-300 hover:text-[#DCD8D5]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact & Utility */}
                <div>
                  <h4
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    className="text-[#DCD8D5] text-base font-normal mb-6"
                  >
                    Services
                  </h4>
                  <ul className="space-y-4">
                    {[
                      { label: 'List Property', href: '/list-property' },
                      { label: 'MLS Listing', href: '/mls-listing' },
                      { label: 'Marketing Tools', href: '/marketing-tools' },
                      { label: 'Support', href: '/support' }
                    ].map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                          className="text-white text-xl font-normal transition-colors duration-300 hover:text-[#DCD8D5]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
            {/* License & Credits */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p
                style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                className="text-[#DCD8D5] text-base font-normal text-center md:text-left"
              >
                © 1996-2025 OKByOwner. All Rights Reserved.
              </p>
              <span className="hidden md:inline text-[#DCD8D5]">|</span>
              <p
                style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                className="text-[#DCD8D5] text-sm font-normal text-center md:text-left"
              >
                Licensed by M&T REALTY GROUP, License #180717
              </p>
            </div>

            {/* Right Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.zillow.com/profile/OKByOwner"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                className="text-[#DCD8D5] text-base font-normal hover:text-white transition-colors"
              >
                Zillow Reviews
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                className="text-[#DCD8D5] text-base font-normal hover:text-white transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
