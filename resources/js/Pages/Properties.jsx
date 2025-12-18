import React, { useState } from 'react';
import { Head, Link, useForm, usePage, router } from '@inertiajs/react';
import { Search, MapPin, Home, DollarSign, BedDouble, Bath, Maximize2, Heart, Info, SlidersHorizontal, Grid3x3, Map, CheckCircle2, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import MainLayout from '@/Layouts/MainLayout';

const PropertyCard = ({ property }) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    if (typeof window !== 'undefined') {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      return favorites.includes(property.id);
    }
    return false;
  });

  // Get the first photo or use placeholder
  const propertyImage = property.photos && property.photos.length > 0
    ? property.photos[0]
    : 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800';

  const statusLabel = property.status === 'for-rent' ? 'FOR RENT' : 'FOR SALE';

  // Handle maximize - open in new tab
  const handleMaximize = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`/properties/${property.slug || property.id}`, '_blank');
  };

  // Handle favorite toggle
  const handleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorite) {
      const newFavorites = favorites.filter(id => id !== property.id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(property.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  // Handle info - navigate to property detail
  const handleInfo = (e) => {
    e.preventDefault();
    e.stopPropagation();
    router.visit(`/properties/${property.slug || property.id}`);
  };

  return (
    <Link href={`/properties/${property.slug || property.id}`} className="block h-full">
      <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group w-[300px] h-[330px] flex flex-col">
        {/* Property Image */}
        <div className="relative h-[180px] overflow-hidden flex-shrink-0">
          <img
            src={propertyImage}
            alt={property.property_title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => e.target.src = 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'}
          />
          {/* Status Badge */}
          <div className="absolute top-4 right-4 bg-[#A41E34] text-white px-3 py-1.5 text-xs font-semibold rounded-full" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
            {statusLabel}
          </div>

          {/* MLS Badge */}
          {property.is_mls_listed && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 text-xs font-semibold rounded-full" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              MLS
            </div>
          )}

          {/* Action Buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={handleMaximize}
              className="bg-white/90 hover:bg-white p-2 rounded-lg transition-all duration-300 hover:scale-105"
              title="Open in new tab"
            >
              <Maximize2 className="w-4 h-4 text-gray-800" />
            </button>
            <button
              onClick={handleFavorite}
              className="bg-white/90 hover:bg-white p-2 rounded-lg transition-all duration-300 hover:scale-105"
              title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-[#413936]'}`} />
            </button>
            <button
              onClick={handleInfo}
              className="bg-white/90 hover:bg-white p-2 rounded-lg transition-all duration-300 hover:scale-105"
              title="View details"
            >
              <Info className="w-4 h-4 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Property Details */}
        <div className="px-3 pt-2.5 pb-4 h-[150px] flex flex-col">
          {/* Price */}
          <div className="pb-2 mb-2 border-b border-gray-200">
            <span className="font-bold text-base text-[#293056]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              ${Number(property.price).toLocaleString()}
            </span>
          </div>

          {/* Address */}
          <div className="pb-2 mb-2 border-b border-gray-200">
            <p className="text-sm text-[#293056] line-clamp-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              {property.address}, {property.city}, {property.state} {property.zip_code}
            </p>
          </div>

          {/* Property Stats */}
          <div>
            <p className="text-sm text-[#293056]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              {property.bedrooms}BD | {property.bathrooms}BA | {property.sqft ? `${Number(property.sqft).toLocaleString()} sqft` : 'Area N/A'}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

function Properties({ properties = { data: [] }, filters = {} }) {
  const { flash } = usePage().props;
  const [searchParams, setSearchParams] = useState({
    keyword: filters.keyword || '',
    location: filters.location || '',
    propertyType: filters.propertyType || '',
    priceMin: filters.priceMin || '',
    priceMax: filters.priceMax || '',
    bedrooms: filters.bedrooms || '',
    bathrooms: filters.bathrooms || '',
    sort: filters.sort || 'newest',
  });

  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'map'
  const [showFilters, setShowFilters] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Buyer inquiry form
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    phone: '',
    preferred_area: '',
    price_min: '',
    price_max: '',
    mls_setup: '',
    preapproved: '',
  });

  const handleBuyerFormSubmit = (e) => {
    e.preventDefault();
    post(route('buyer-inquiry.store'), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 5000);
      },
    });
  };

  // Get properties data from pagination
  const propertyList = properties.data || properties || [];
  const pagination = properties.data ? properties : null;

  const handleSearchChange = (field, value) => {
    setSearchParams({ ...searchParams, [field]: value });
  };

  const handleSearch = (e) => {
    e?.preventDefault();
    router.get('/properties', searchParams, { preserveState: true });
  };

  const handleSortChange = (value) => {
    const newParams = { ...searchParams, sort: value };
    setSearchParams(newParams);
    router.get('/properties', newParams, { preserveState: true });
  };

  return (
    <>
      <Head title="Properties - OK BY OWNER" />

      {/* Hero Section */}
      <div className="relative bg-[#EEEDEA] pt-0 md:pt-[77px]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-white rounded-lg px-4 py-2 mb-6">
              <span className="text-[#666] text-sm font-medium" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Browse Properties
              </span>
            </div>

            {/* Page Title */}
            <h1
              className="text-[#111] text-[48px] md:text-[60px] font-medium leading-[1.1] mb-4"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              Find Your Dream Property
            </h1>

            {/* Subtitle */}
            <p
              className="text-[#666] text-[14px] md:text-[16px] font-medium mb-8 leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              Browse thousands of For Sale by Owner properties across Oklahoma.<br />
              No agent fees. Direct from owners.
            </p>

            {/* Quick Search Bar */}
            <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-lg p-2 flex flex-col md:flex-row gap-2 max-w-4xl mx-auto">
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
              <button
                type="submit"
                className="bg-[#A41E34] text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-[#8B1A2C] flex items-center justify-center gap-2"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                <Search className="w-5 h-5" />
                Search
              </button>
            </form>

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

            {/* Apply Filters Button */}
            <div className="flex justify-end mt-4 gap-3">
              <button
                onClick={() => {
                  setSearchParams({
                    keyword: '',
                    location: '',
                    propertyType: '',
                    priceMin: '',
                    priceMax: '',
                    bedrooms: '',
                    bathrooms: '',
                    sort: 'newest',
                  });
                  router.get('/properties');
                  setShowFilters(false);
                }}
                className="px-6 py-2.5 border border-[#D0CCC7] rounded-xl text-sm font-medium text-[#111] hover:bg-gray-50 transition-colors"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                Clear All
              </button>
              <button
                onClick={handleSearch}
                className="px-6 py-2.5 bg-[#A41E34] text-white rounded-xl text-sm font-medium hover:bg-[#8B1A2C] transition-colors"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                Apply Filters
              </button>
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
                {pagination ? (
                  <>Showing {pagination.from || 0} - {pagination.to || 0} of {pagination.total || 0} properties</>
                ) : (
                  <>Showing {propertyList.length} properties</>
                )}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-[#666] hidden sm:inline" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Sort by:
              </span>
              <select
                className="px-4 py-2 border border-[#D0CCC7] rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors bg-white"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                value={searchParams.sort}
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="newest">Newest</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
                <option value="bedrooms">Bedrooms</option>
                <option value="sqft">Square Feet</option>
              </select>
            </div>
          </div>

          {/* Property Grid */}
          {propertyList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
              {propertyList.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center">
              <Home className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-xl font-semibold text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                No Properties Found
              </h3>
              <p className="text-[#666] mb-6" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                {searchParams.keyword || searchParams.location
                  ? 'Try adjusting your search criteria or filters'
                  : 'Check back soon for new listings'}
              </p>
              {(searchParams.keyword || searchParams.location) && (
                <button
                  onClick={() => {
                    setSearchParams({
                      keyword: '',
                      location: '',
                      propertyType: '',
                      priceMin: '',
                      priceMax: '',
                      bedrooms: '',
                      bathrooms: '',
                      sort: 'newest',
                    });
                    router.get('/properties');
                  }}
                  className="inline-flex items-center gap-2 bg-[#A41E34] text-white px-6 py-3 rounded-full font-medium hover:bg-[#8B1A2C] transition-colors"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}

          {/* Pagination */}
          {pagination && pagination.last_page > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              {/* Previous Button */}
              {pagination.prev_page_url ? (
                <Link
                  href={pagination.prev_page_url}
                  className="px-4 py-2 border border-[#D0CCC7] rounded-xl text-sm font-medium text-[#111] hover:bg-white transition-colors flex items-center gap-1"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Link>
              ) : (
                <button
                  disabled
                  className="px-4 py-2 border border-[#D0CCC7] rounded-xl text-sm font-medium text-gray-400 cursor-not-allowed flex items-center gap-1"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
              )}

              {/* Page Numbers */}
              {Array.from({ length: pagination.last_page }, (_, i) => i + 1)
                .filter(page => {
                  // Show first, last, current, and adjacent pages
                  return page === 1 ||
                    page === pagination.last_page ||
                    Math.abs(page - pagination.current_page) <= 1;
                })
                .map((page, index, array) => {
                  // Add ellipsis if there's a gap
                  const showEllipsisBefore = index > 0 && page - array[index - 1] > 1;

                  return (
                    <React.Fragment key={page}>
                      {showEllipsisBefore && (
                        <span className="px-2 text-gray-400">...</span>
                      )}
                      <Link
                        href={`/properties?page=${page}${searchParams.keyword ? `&keyword=${searchParams.keyword}` : ''}${searchParams.sort !== 'newest' ? `&sort=${searchParams.sort}` : ''}`}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                          page === pagination.current_page
                            ? 'bg-[#A41E34] text-white'
                            : 'border border-[#D0CCC7] text-[#111] hover:bg-white'
                        }`}
                        style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                      >
                        {page}
                      </Link>
                    </React.Fragment>
                  );
                })}

              {/* Next Button */}
              {pagination.next_page_url ? (
                <Link
                  href={pagination.next_page_url}
                  className="px-4 py-2 border border-[#D0CCC7] rounded-xl text-sm font-medium text-[#111] hover:bg-white transition-colors flex items-center gap-1"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <button
                  disabled
                  className="px-4 py-2 border border-[#D0CCC7] rounded-xl text-sm font-medium text-gray-400 cursor-not-allowed flex items-center gap-1"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Buyer Sign-Up Section */}
      <section className="bg-white py-16 md:py-20 border-t border-[#D0CCC7]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-[32px] md:text-[48px] font-medium text-[#111] mb-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Can't Find What You're Looking For?
              </h2>
              <p className="text-[16px] text-[#666] font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                Tell us what you're looking for in a property, and we'll send you all new listings in your preferred area.
              </p>
            </div>

            {/* Success Message */}
            {(formSubmitted || flash?.success) && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-sm text-green-800" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  {flash?.success || "Thank you! We'll be in touch soon with property alerts matching your criteria."}
                </p>
              </div>
            )}

            {/* Buyer Sign-Up Form */}
            <form onSubmit={handleBuyerFormSubmit} className="bg-[#EEEDEA] rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    Name <span className="text-[#A41E34]">*</span>
                  </label>
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 border rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors bg-white ${errors.name ? 'border-red-500' : 'border-[#D0CCC7]'}`}
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    Email <span className="text-[#A41E34]">*</span>
                  </label>
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 border rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors bg-white ${errors.email ? 'border-red-500' : 'border-[#D0CCC7]'}`}
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) => setData('phone', e.target.value)}
                    placeholder="(555) 555-5555"
                    className={`w-full px-4 py-3 border rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors bg-white ${errors.phone ? 'border-red-500' : 'border-[#D0CCC7]'}`}
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Area */}
                <div>
                  <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    Preferred Area <span className="text-[#A41E34]">*</span>
                  </label>
                  <input
                    type="text"
                    value={data.preferred_area}
                    onChange={(e) => setData('preferred_area', e.target.value)}
                    placeholder="City, neighborhood, or ZIP code"
                    className={`w-full px-4 py-3 border rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors bg-white ${errors.preferred_area ? 'border-red-500' : 'border-[#D0CCC7]'}`}
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                  />
                  {errors.preferred_area && <p className="text-red-500 text-xs mt-1">{errors.preferred_area}</p>}
                </div>

                {/* Price Range */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#111] mb-2" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                    Price Range <span className="text-[#A41E34]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        value={data.price_min}
                        onChange={(e) => setData('price_min', e.target.value)}
                        placeholder="Min price"
                        className={`w-full px-4 py-3 border rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors bg-white ${errors.price_min ? 'border-red-500' : 'border-[#D0CCC7]'}`}
                        style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                      />
                      {errors.price_min && <p className="text-red-500 text-xs mt-1">{errors.price_min}</p>}
                    </div>
                    <div>
                      <input
                        type="text"
                        value={data.price_max}
                        onChange={(e) => setData('price_max', e.target.value)}
                        placeholder="Max price"
                        className={`w-full px-4 py-3 border rounded-xl text-sm outline-none focus:border-[#A41E34] transition-colors bg-white ${errors.price_max ? 'border-red-500' : 'border-[#D0CCC7]'}`}
                        style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                      />
                      {errors.price_max && <p className="text-red-500 text-xs mt-1">{errors.price_max}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* MLS Setup Question */}
              <div className={`mb-6 p-4 bg-white rounded-xl border ${errors.mls_setup ? 'border-red-500' : 'border-[#D0CCC7]'}`}>
                <p className="text-sm text-[#111] mb-3" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  <span className="font-medium">Not working with a real estate agent?</span> We can set you up in the MLS so you'll be the first to know about any new or coming soon listings. <span className="text-[#A41E34]">*</span>
                </p>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="mls_setup"
                      value="yes"
                      checked={data.mls_setup === 'yes'}
                      onChange={(e) => setData('mls_setup', e.target.value)}
                      className="w-4 h-4 text-[#A41E34] accent-[#A41E34]"
                    />
                    <span className="text-sm text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Yes, set me up</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="mls_setup"
                      value="no"
                      checked={data.mls_setup === 'no'}
                      onChange={(e) => setData('mls_setup', e.target.value)}
                      className="w-4 h-4 text-[#A41E34] accent-[#A41E34]"
                    />
                    <span className="text-sm text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>No, thank you</span>
                  </label>
                </div>
                {errors.mls_setup && <p className="text-red-500 text-xs mt-2">{errors.mls_setup}</p>}
              </div>

              {/* Preapproval Question */}
              <div className={`mb-8 p-4 bg-white rounded-xl border ${errors.preapproved ? 'border-red-500' : 'border-[#D0CCC7]'}`}>
                <p className="text-sm text-[#111] mb-3" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                  <span className="font-medium">Are you preapproved for a mortgage?</span> <span className="text-[#A41E34]">*</span>
                </p>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preapproved"
                      value="yes"
                      checked={data.preapproved === 'yes'}
                      onChange={(e) => setData('preapproved', e.target.value)}
                      className="w-4 h-4 text-[#A41E34] accent-[#A41E34]"
                    />
                    <span className="text-sm text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preapproved"
                      value="no"
                      checked={data.preapproved === 'no'}
                      onChange={(e) => setData('preapproved', e.target.value)}
                      className="w-4 h-4 text-[#A41E34] accent-[#A41E34]"
                    />
                    <span className="text-sm text-[#111]" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Not yet</span>
                  </label>
                </div>
                {errors.preapproved && <p className="text-red-500 text-xs mt-2">{errors.preapproved}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={processing}
                className={`w-full bg-[#A41E34] text-white rounded-full px-8 py-4 font-medium text-lg transition-all duration-300 hover:bg-[#8B1A2C] hover:shadow-lg ${processing ? 'opacity-70 cursor-not-allowed' : ''}`}
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                {processing ? 'Submitting...' : 'Get Listing Alerts'}
              </button>

              <p className="text-xs text-[#666] text-center mt-4" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
                By submitting, you agree to receive property alerts and updates. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

// Specify MainLayout for this page to include Footer
Properties.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Properties;
