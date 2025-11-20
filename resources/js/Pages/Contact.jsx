import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, HelpCircle, ChevronDown } from 'lucide-react';
import MainLayout from '@/Layouts/MainLayout';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const toggleFAQ = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'support@okbyowner.com',
      link: 'mailto:support@okbyowner.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '(405) 555-0123',
      link: 'tel:4055550123'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Oklahoma City, OK 73102',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: 'Mon-Fri: 9AM - 6PM CST',
      link: '#'
    }
  ];

  const faqs = [
    {
      question: 'How do I list my property?',
      answer: 'Click on "List Property" and follow the simple steps to create your listing. It takes just a few minutes!'
    },
    {
      question: 'Is there a fee to list?',
      answer: 'Our basic listing is completely FREE. We also offer premium packages with additional features.'
    },
    {
      question: 'How long does my listing stay active?',
      answer: 'Your listing stays active until you sell your property or choose to remove it.'
    }
  ];

  return (
    <>
      <Head title="Contact Us - OK BY OWNER" />

      {/* Hero Section */}
      <div className="relative pt-0 md:pt-[77px]">
        <div className="relative min-h-[60vh] flex items-center py-16 md:py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Contact us"
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
                Get in <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Touch</span>
              </h1>

              {/* Subheading */}
              <p
                className="text-white text-[14px] md:text-[16px] font-medium mb-8 leading-relaxed max-w-2xl drop-shadow-lg"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                Have questions about listing or buying? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <section className="bg-[#EEEDEA] py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="bg-[#E5E1DC] p-3 rounded-xl w-fit mb-4 group-hover:bg-[#A41E34] transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-[#3D3D3D] group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="text-lg font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#666] font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    {item.info}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Form */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
                <MessageSquare className="w-4 h-4 text-[#666]" />
                <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  Send us a message
                </span>
              </div>

              <h2 className="text-[32px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Contact <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Form</span>
              </h2>

              <p className="text-[16px] text-[#666] font-medium mb-8" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors"
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#D0CCC7] rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors"
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#D0CCC7] rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors"
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                      placeholder="(405) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors bg-white"
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="listing">Listing a Property</option>
                    <option value="buying">Buying a Property</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors resize-none"
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#A41E34] text-white rounded-full px-8 py-4 font-medium transition-all duration-300 hover:bg-[#8B1A2C] hover:shadow-lg"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Side - FAQ */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E5E1DC] rounded-lg px-4 py-2 mb-6">
                <HelpCircle className="w-4 h-4 text-[#666]" />
                <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  Quick Answers
                </span>
              </div>

              <h2 className="text-[32px] md:text-[40px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Frequently Asked <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Questions</span>
              </h2>

              <p className="text-[16px] text-[#666] font-medium mb-8" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Here are some common questions we receive. Don't see your question? Send us a message!
              </p>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-[#DCD8D5] rounded-2xl overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-6 text-left transition-colors group"
                    >
                      <span
                        style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                        className="text-[18px] font-medium text-[#111] pr-4 transition-colors"
                      >
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 transition-all duration-300">
                        <ChevronDown
                          className={`w-6 h-6 text-[#111] transition-transform duration-300 ${
                            openFaqIndex === index ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {openFaqIndex === index && (
                      <div className="px-6 pb-6 pt-0 animate-fadeIn">
                        <p
                          style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                          className="text-[14px] font-medium text-[#666] leading-relaxed"
                        >
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-[#A41E34] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-medium mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  Still have questions?
                </h3>
                <p className="text-sm mb-4 text-white/90" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  Check out our comprehensive FAQ page for more answers.
                </p>
                <Link
                  href="/faqs"
                  className="inline-flex items-center gap-2 bg-white text-[#A41E34] rounded-full px-6 py-3 font-medium transition-all duration-300 hover:bg-white/90"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  View All FAQs
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#EEEDEA] py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-[32px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              Visit Our <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Office</span>
            </h2>
            <p className="text-[16px] text-[#666] font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              Stop by our office in Oklahoma City or reach out through any of our contact channels
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-[21/9] bg-gray-200">
              {/* Placeholder for map - You can integrate Google Maps or similar */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207429.38395794713!2d-97.66703782812499!3d35.467560399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b217a8f7c1f0e7%3A0x8c6c5c6e1f7a8a8a!2sOklahoma%20City%2C%20OK!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OK BY OWNER Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-20 border-t border-[#D0CCC7]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[32px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
            Ready to Get <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Started?</span>
          </h2>
          <p className="text-[16px] text-[#666] font-medium mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
            List your property for FREE or start browsing available homes today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/list-property"
              className="inline-flex items-center gap-2 bg-[#A41E34] text-white rounded-full px-8 py-4 font-medium text-lg transition-all duration-300 hover:bg-[#8B1A2C] hover:shadow-lg"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              List Your Property
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
              className="inline-flex items-center gap-2 bg-transparent border-2 border-[#A41E34] text-[#A41E34] rounded-full px-8 py-4 font-medium text-lg transition-all duration-300 hover:bg-[#A41E34] hover:text-white"
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
Contact.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Contact;
