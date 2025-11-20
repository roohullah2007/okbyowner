import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { Search, MapPin, Home, DollarSign, BedDouble, Bath, Maximize2, Heart, Info, SlidersHorizontal, Grid3x3, Map } from 'lucide-react';
import MainLayout from '@/Layouts/MainLayout';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Property Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Status Badge */}
        <div className="absolute top-4 right-4 bg-[#A41E34] text-white px-3 py-1.5 text-xs font-semibold rounded-full" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
          {property.status === 'for-sale' ? 'FOR SALE' : 'FOR RENT'}
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
        <p className="text-sm text-[#666] mb-4 flex items-center gap-1" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
          <MapPin className="w-4 h-4" />
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

function Properties() {
  const [searchParams, setSearchParams] = useState({
    keyword: '',
    location: '',
    propertyType: '',
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    bathrooms: '',
  });

  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'map'
  const [showFilters, setShowFilters] = useState(false);

  // Sample properties data - Replace with actual API data
  const properties = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 299000,
      title: 'Beautiful Family Home',
      location: 'Oklahoma City, OK',
      beds: 4,
      baths: 3,
      sqft: 2500,
      status: 'for-sale',
      type: 'single-family-home'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 425000,
      title: 'Modern Ranch Style',
      location: 'Tulsa, OK',
      beds: 3,
      baths: 2,
      sqft: 1800,
      status: 'for-sale',
      type: 'single-family-home'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 350000,
      title: 'Luxury Villa',
      location: 'Norman, OK',
      beds: 5,
      baths: 4,
      sqft: 3200,
      status: 'for-sale',
      type: 'single-family-home'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 275000,
      title: 'Cozy Cottage',
      location: 'Edmond, OK',
      beds: 3,
      baths: 2,
      sqft: 1500,
      status: 'for-sale',
      type: 'single-family-home'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 520000,
      title: 'Executive Estate',
      location: 'Broken Arrow, OK',
      beds: 6,
      baths: 5,
      sqft: 4000,
      status: 'for-sale',
      type: 'single-family-home'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 195000,
      title: 'Starter Home',
      location: 'Lawton, OK',
      beds: 2,
      baths: 2,
      sqft: 1200,
      status: 'for-sale',
      type: 'single-family-home'
    },
  ];

  const handleSearchChange = (field, value) => {
    setSearchParams({ ...searchParams, [field]: value });
  };

  return (
    <>
      <Head title="Properties - OK BY OWNER" />

      {/* Hero Section */}
      <div className="relative bg-[#EEEDEA] pt-0 md:pt-[77px]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2 mb-6">
              <Home className="w-4 h-4 text-[#A41E34]" />
              <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Browse Properties
              </span>
            </div>

            {/* Page Title */}
            <h1
              className="text-[#111] text-[48px] md:text-[60px] font-medium leading-[1.1] mb-4"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              Find Your Dream <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Property</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-[#666] text-[14px] md:text-[16px] font-medium mb-8 leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              Browse thousands of properties for sale by owner across Oklahoma. No agent fees, direct from owners.
            </p>

            {/* Quick Search Bar */}
            <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-col md:flex-row gap-2 max-w-4xl mx-auto">
              <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-[#F8F7F5] rounded-xl">
                <Search className="w-5 h-5 text-[#666]" />
                <input
                  type="text"
                  placeholder="Search by keyword, city, or address..."
                  className="flex-1 bg-transparent border-none outline-none text-[#111] placeholder:text-[#999] text-sm"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                  value={searchParams.keyword}
                  onChange={(e) => handleSearchChange('keyword', e.target.value)}
                />
              </div>
              <button className="bg-[#A41E34] text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-[#8B1A2C] flex items-center justify-center gap-2"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-white border border-[#D0CCC7] text-[#111] rounded-full px-5 py-2.5 font-medium text-sm transition-all duration-300 hover:bg-[#E5E1DC]"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="flex items-center gap-2 bg-white border border-[#D0CCC7] rounded-full px-2 py-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-[#111] text-white' : 'text-[#111] hover:bg-[#E5E1DC]'
                  }`}
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  <Grid3x3 className="w-4 h-4" />
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    viewMode === 'map' ? 'bg-[#111] text-white' : 'text-[#111] hover:bg-[#E5E1DC]'
                  }`}
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  <Map className="w-4 h-4" />
                  Map
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="border-b border-[#D0CCC7]"></div>
      </div>

      {/* Advanced Filters Panel */}
      {showFilters && (
        <div className="bg-white border-b border-[#D0CCC7] py-6">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]" />
                  <input
                    type="text"
                    placeholder="City or ZIP"
                    className="w-full pl-10 pr-4 py-2.5 border border-[#D0CCC7] rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors"
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                    value={searchParams.location}
                    onChange={(e) => handleSearchChange('location', e.target.value)}
                  />
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  Property Type
                </label>
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]" />
                  <select
                    className="w-full pl-10 pr-4 py-2.5 border border-[#D0CCC7] rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors appearance-none bg-white"
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                    value={searchParams.propertyType}
                    onChange={(e) => handleSearchChange('propertyType', e.target.value)}
                  >
                    <option value="">All Types</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="land">Land</option>
                  </select>
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  Price Range
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]" />
                    <input
                      type="text"
                      placeholder="Min"
                      className="w-full pl-10 pr-2 py-2.5 border border-[#D0CCC7] rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors"
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                      value={searchParams.priceMin}
                      onChange={(e) => handleSearchChange('priceMin', e.target.value)}
                    />
                  </div>
                  <div className="relative flex-1">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]" />
                    <input
                      type="text"
                      placeholder="Max"
                      className="w-full pl-10 pr-2 py-2.5 border border-[#D0CCC7] rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors"
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                      value={searchParams.priceMax}
                      onChange={(e) => handleSearchChange('priceMax', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Beds & Baths */}
              <div>
                <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  Beds & Baths
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <BedDouble className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]" />
                    <select
                      className="w-full pl-10 pr-2 py-2.5 border border-[#D0CCC7] rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors appearance-none bg-white"
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                      value={searchParams.bedrooms}
                      onChange={(e) => handleSearchChange('bedrooms', e.target.value)}
                    >
                      <option value="">Beds</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                    </select>
                  </div>
                  <div className="relative flex-1">
                    <Bath className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]" />
                    <select
                      className="w-full pl-10 pr-2 py-2.5 border border-[#D0CCC7] rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors appearance-none bg-white"
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                      value={searchParams.bathrooms}
                      onChange={(e) => handleSearchChange('bathrooms', e.target.value)}
                    >
                      <option value="">Baths</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Properties Section */}
      <section className="bg-[#EEEDEA] py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          {/* Results Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-[32px] font-medium text-[#111] mb-1" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Available Properties
              </h2>
              <p className="text-sm text-[#666]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Showing {properties.length} properties
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-[#666] hidden sm:inline" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Sort by:
              </span>
              <select className="px-4 py-2 border border-[#D0CCC7] rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors bg-white"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Bedrooms</option>
                <option>Square Feet</option>
              </select>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button className="px-4 py-2 border border-[#D0CCC7] rounded-xl text-sm font-medium text-[#111] hover:bg-white transition-colors"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              Previous
            </button>
            <button className="px-4 py-2 bg-[#A41E34] text-white rounded-xl text-sm font-medium"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              1
            </button>
            <button className="px-4 py-2 border border-[#D0CCC7] rounded-xl text-sm font-medium text-[#111] hover:bg-white transition-colors"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              2
            </button>
            <button className="px-4 py-2 border border-[#D0CCC7] rounded-xl text-sm font-medium text-[#111] hover:bg-white transition-colors"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              3
            </button>
            <button className="px-4 py-2 border border-[#D0CCC7] rounded-xl text-sm font-medium text-[#111] hover:bg-white transition-colors"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-20 border-t border-[#D0CCC7]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[32px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
            Can't Find What You're Looking <span className="italic" style={{ fontFamily: 'Lora, serif' }}>For?</span>
          </h2>
          <p className="text-[16px] text-[#666] font-medium mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
            List your property for FREE and connect directly with buyers across Oklahoma
          </p>
          <Link
            href="/list-property"
            className="inline-flex items-center gap-2 bg-[#A41E34] text-white rounded-full px-8 py-4 font-medium text-lg transition-all duration-300 hover:bg-[#8B1A2C] hover:shadow-lg"
            style={{ fontFamily: 'Instrument Sans, sans-serif' }}
          >
            List Your Property Free
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_56_2205" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                <rect width="20" height="20" transform="matrix(-1 0 0 1 20 0)" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_56_2205)">
                <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="white"/>
              </g>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

// Specify MainLayout for this page to include Footer
Properties.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Properties;
