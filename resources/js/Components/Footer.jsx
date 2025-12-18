import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Add your email submission logic here
  };

  return (
    <footer className="w-full bg-[#1a1a1a]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Contact Info */}
          <div>
            <h4
              style={{ fontFamily: '"Instrument Sans", sans-serif' }}
              className="text-white text-lg font-medium mb-4"
            >
              Contact Us
            </h4>
            <a
              href="tel:888-441-6526"
              style={{ fontFamily: '"Instrument Sans", sans-serif' }}
              className="text-[#DCD8D5] text-base hover:text-white transition-colors block mb-2"
            >
              888-441-OKBO (6526)
            </a>
            <p
              style={{ fontFamily: '"Instrument Sans", sans-serif' }}
              className="text-[#DCD8D5] text-sm leading-relaxed"
            >
              <span className="text-white/60">Mailing Address:</span><br />
              1611 S Utica Avenue #515<br />
              Tulsa, OK 74104
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{ fontFamily: '"Instrument Sans", sans-serif' }}
              className="text-white text-lg font-medium mb-4"
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'List Property', href: '/list-property' },
                { label: 'Properties', href: '/properties' },
                { label: 'Our Packages', href: '/our-packages' },
                { label: 'FAQs', href: '/faqs' },
                { label: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    className="text-[#DCD8D5] text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              style={{ fontFamily: '"Instrument Sans", sans-serif' }}
              className="text-white text-lg font-medium mb-4"
            >
              Resources
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'For Sellers', href: '/sellers' },
                { label: 'For Buyers', href: '/buyers' },
                { label: 'About Us', href: '/about' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Use', href: '/terms-of-use' }
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    className="text-[#DCD8D5] text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              style={{ fontFamily: '"Instrument Sans", sans-serif' }}
              className="text-white text-lg font-medium mb-4"
            >
              Newsletter
            </h4>
            <form onSubmit={handleSubmit} className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-[#DCD8D5]/50 focus:outline-none focus:border-white/40 transition-colors mb-2"
              />
              <button
                type="submit"
                style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                className="w-full bg-[#A41E34] text-white rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-[#8B1A2C]"
              >
                Subscribe
              </button>
            </form>
            <p
              style={{ fontFamily: '"Instrument Sans", sans-serif' }}
              className="text-[#DCD8D5]/70 text-xs leading-relaxed"
            >
              * By subscribing, you agree to our{' '}
              <Link href="/privacy-policy" className="underline hover:text-white">
                Privacy Policy
              </Link>{' '}
              and provide consent to receive updates from our company.
            </p>
          </div>
        </div>

        {/* Broker Disclaimer */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <p
            style={{ fontFamily: '"Instrument Sans", sans-serif' }}
            className="text-[#DCD8D5]/70 text-sm text-center leading-relaxed"
          >
            M&T REALTY GROUP, License #180717, will perform all services that require a licensed broker in Oklahoma.{' '}
            <a
              href="https://www.zillow.com/profile/mntrealty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DCD8D5] underline hover:text-white"
            >
              Check out their Zillow Reviews
            </a>
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-white/10">
          <p
            style={{ fontFamily: '"Instrument Sans", sans-serif' }}
            className="text-[#DCD8D5]/70 text-sm text-center md:text-left"
          >
            © 1997-2025 OKByOwner. All Rights Reserved. Licensed by M&T REALTY GROUP, License #180717
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.zillow.com/profile/mntrealty"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: '"Instrument Sans", sans-serif' }}
              className="text-[#DCD8D5] text-sm hover:text-white transition-colors"
            >
              Zillow Reviews
            </a>
            <span className="text-[#DCD8D5]/30">|</span>
            <a
              href="https://www.facebook.com/OKByOwner"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: '"Instrument Sans", sans-serif' }}
              className="text-[#DCD8D5] text-sm hover:text-white transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
