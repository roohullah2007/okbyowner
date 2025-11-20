import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Heart, Info } from 'lucide-react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200">
      {/* Property Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* FOR SALE Badge */}
        <div className="absolute top-4 right-4 bg-[#413936] text-white px-3 py-1.5 text-xs font-medium rounded-full" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
          FOR SALE
        </div>

        {/* Price and Action Buttons */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent p-4">
          <div className="flex items-center justify-between">
            <span className="text-white text-2xl font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              ${property.price.toLocaleString()}
            </span>
            <div className="flex gap-2">
              <button className="bg-white/90 hover:bg-white p-2 rounded-lg transition-all duration-300 hover:scale-105">
                <Maximize2 className="w-4 h-4 text-gray-800" />
              </button>
              <button className="bg-white/90 hover:bg-white p-2 rounded-lg transition-all duration-300 hover:scale-105">
                <Heart className="w-4 h-4 text-[#413936]" />
              </button>
              <button className="bg-white/90 hover:bg-white p-2 rounded-lg transition-all duration-300 hover:scale-105">
                <Info className="w-4 h-4 text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-5">
        <h3 className="text-lg font-medium text-[#111] mb-1" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
          {property.title}
        </h3>
        <p className="text-sm text-[#666] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
          {property.location}
        </p>

        {/* Property Stats */}
        <div className="flex items-center gap-4 text-sm text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
          <span className="flex items-center gap-1">
            <span className="font-medium">{property.beds}</span> Beds
          </span>
          <span className="text-gray-300">•</span>
          <span className="flex items-center gap-1">
            <span className="font-medium">{property.baths}</span> Baths
          </span>
          <span className="text-gray-300">•</span>
          <span className="flex items-center gap-1">
            <span className="font-medium">{property.sqft.toLocaleString()}</span> sqft
          </span>
        </div>
      </div>
    </div>
  );
};

const PropertiesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample properties data - Replace with actual data from API/database
  const properties = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 299000,
      title: 'Charming Family Home',
      location: 'Oklahoma City, OK',
      beds: 4,
      baths: 3,
      sqft: 2500
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 425000,
      title: 'Modern Ranch Estate',
      location: 'Tulsa, OK',
      beds: 3,
      baths: 2,
      sqft: 1800
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 350000,
      title: 'Spacious Luxury Villa',
      location: 'Norman, OK',
      beds: 5,
      baths: 4,
      sqft: 3200
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 275000,
      title: 'Cozy Family Cottage',
      location: 'Edmond, OK',
      beds: 3,
      baths: 2,
      sqft: 1500
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 520000,
      title: 'Executive Estate Home',
      location: 'Broken Arrow, OK',
      beds: 6,
      baths: 5,
      sqft: 4000
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 195000,
      title: 'Perfect Starter Home',
      location: 'Lawton, OK',
      beds: 2,
      baths: 2,
      sqft: 1200
    }
  ];

  const propertiesPerSlide = 3;
  const totalSlides = Math.ceil(properties.length / propertiesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentProperties = () => {
    const start = currentSlide * propertiesPerSlide;
    return properties.slice(start, start + propertiesPerSlide);
  };

  return (
    <section className="bg-[#EEEDEA] py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-[40px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
            Featured <span className="italic">Properties</span>
          </h2>
          <p className="text-[16px] text-[#666] font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
            Browse our selection of properties for sale by owner across Oklahoma
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-7 bg-[#413936] hover:bg-[#312926] p-3.5 rounded-full shadow-lg z-10 transition-all duration-300"
            aria-label="Previous properties"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-7 bg-[#413936] hover:bg-[#312926] p-3.5 rounded-full shadow-lg z-10 transition-all duration-300"
            aria-label="Next properties"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Property Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentProperties().map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-8 bg-[#413936]' : 'w-2 bg-[#D0CCC7] hover:bg-[#B0ACA7]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;