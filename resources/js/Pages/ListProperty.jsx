import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Upload, Home, MapPin, DollarSign, Image, FileText, CheckCircle, ChevronRight } from 'lucide-react';
import MainLayout from '@/Layouts/MainLayout';

function ListProperty() {
  const { data, setData, post, processing, errors } = useForm({
    // Basic Info
    propertyTitle: '',
    propertyType: '',
    status: 'for-sale',
    price: '',

    // Location
    address: '',
    city: '',
    state: 'Oklahoma',
    zipCode: '',
    subdivision: '',

    // Property Details
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    lotSize: '',
    yearBuilt: '',

    // Description
    description: '',

    // Features
    features: [],

    // Photos
    photos: [],

    // Contact
    contactName: '',
    contactEmail: '',
    contactPhone: '',
  });

  const propertyTypes = [
    { value: 'single-family-home', label: 'Single Family Home' },
    { value: 'condos-townhomes-co-ops', label: 'Condos/Townhomes/Co-Ops' },
    { value: 'multi-family', label: 'Multi-Family' },
    { value: 'land', label: 'Lot/Land' },
    { value: 'farms-ranches', label: 'Farms/Ranches' },
    { value: 'mfd-mobile-homes', label: 'Manufactured/Mobile Homes' },
    { value: 'factory-built', label: 'Factory Built' },
  ];

  const features = [
    'Central AC', 'Central Heat', 'Fireplace', 'Swimming Pool', 'Hot Tub',
    'Garage', 'Covered Patio', 'Deck', 'Balcony', 'Walk-In Closet',
    'Hardwood Floors', 'Carpet', 'Tile Floors', 'Granite Countertops',
    'Stainless Steel Appliances', 'Updated Kitchen', 'Updated Bathroom',
    'Security System', 'Sprinkler System', 'Fenced Yard', 'Mature Trees',
    'Mountain View', 'Lakefront', 'Waterfront', 'Golf Course', 'Guest Quarters'
  ];

  const handleInputChange = (field, value) => {
    setData(field, value);
  };

  const handleFeatureToggle = (feature) => {
    const currentFeatures = data.features;
    const newFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter(f => f !== feature)
      : [...currentFeatures, feature];
    setData('features', newFeatures);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/properties', {
      onSuccess: () => {
        alert('Property listed successfully!');
      },
      onError: () => {
        alert('There were errors with your submission. Please check the form.');
      }
    });
  };

  return (
    <>
      <Head title="List Your Property - OK BY OWNER" />

      {/* Hero Section */}
      <div className="relative pt-0 md:pt-[77px]">
        <div className="relative min-h-[60vh] flex items-center py-16 md:py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="List Property Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          </div>

          {/* Content */}
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
                <Home className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                  List Your Property
                </span>
              </div>

              <h1 className="text-white text-[40px] sm:text-[50px] md:text-[60px] font-medium leading-[1.1] mb-5 drop-shadow-2xl" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                Sell Your Home{' '}
                <span className="italic" style={{ fontFamily: 'Lora, serif' }}>Fast & Easy</span>
              </h1>

              <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 drop-shadow-lg" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                List your property for free and reach thousands of potential buyers across Oklahoma
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-[#EEEDEA] py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="bg-white rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#E5E1DC] p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-[#3D3D3D]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#111]" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                  Basic Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-[#111] mb-2" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                    Property Title *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Beautiful Family Home in Tulsa"
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-lg focus:ring-2 focus:ring-[#A41E34] focus:border-transparent transition-all"
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    value={data.propertyTitle}
                    onChange={(e) => handleInputChange('propertyTitle', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#111] mb-2" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                    Property Type *
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-lg focus:ring-2 focus:ring-[#A41E34] focus:border-transparent transition-all"
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    value={data.propertyType}
                    onChange={(e) => handleInputChange('propertyType', e.target.value)}
                    required
                  >
                    <option value="">Select Type</option>
                    {propertyTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#111] mb-2" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                    Listing Price *
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
                    <input
                      type="number"
                      placeholder="299000"
                      className="w-full pl-10 pr-4 py-3 border border-[#D0CCC7] rounded-lg focus:ring-2 focus:ring-[#A41E34] focus:border-transparent transition-all"
                      style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                      value={data.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#E5E1DC] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#3D3D3D]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#111]" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                  Location
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-[#111] mb-2" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                    Street Address *
                  </label>
                  <input
                    type="text"
                    placeholder="123 Main Street"
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-lg focus:ring-2 focus:ring-[#A41E34] focus:border-transparent transition-all"
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    value={data.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#111] mb-2" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                    City *
                  </label>
                  <input
                    type="text"
                    placeholder="Tulsa"
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-lg focus:ring-2 focus:ring-[#A41E34] focus:border-transparent transition-all"
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    value={data.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#111] mb-2" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                    State *
                  </label>
                  <input
                    type="text"
                    value="Oklahoma"
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-lg bg-[#EEEDEA]"
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    disabled
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#111] mb-2" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    placeholder="74101"
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-lg focus:ring-2 focus:ring-[#A41E34] focus:border-transparent transition-all"
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    value={data.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#111] mb-2" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                    Subdivision
                  </label>
                  <input
                    type="text"
                    placeholder="Optional"
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-lg focus:ring-2 focus:ring-[#A41E34] focus:border-transparent transition-all"
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    value={data.subdivision}
                    onChange={(e) => handleInputChange('subdivision', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#E5E1DC] p-3 rounded-lg">
                  <Home className="w-6 h-6 text-[#3D3D3D]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#111]" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                  Property Details
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#111] mb-2" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                    Bedrooms *
                  </label>
                  <input
                    type="number"
                    placeholder="3"
                    min="0"
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-lg focus:ring-2 focus:ring-[#A41E34] focus:border-transparent transition-all"
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    value={data.bedrooms}
                    onChange={(e) => handleInputChange('bedrooms', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#111] mb-2" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                    Bathrooms *
                  </label>
                  <input
                    type="number"
                    placeholder="2"
                    min="0"
                    step="0.5"
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-lg focus:ring-2 focus:ring-[#A41E34] focus:border-transparent transition-all"
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    value={data.bathrooms}
                    onChange={(e) => handleInputChange('bathrooms', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#111] mb-2" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                    Square Feet *
                  </label>
                  <input
                    type="number"
                    placeholder="2000"
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-lg focus:ring-2 focus:ring-[#A41E34] focus:border-transparent transition-all"
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    value={data.sqft}
                    onChange={(e) => handleInputChange('sqft', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#111] mb-2" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                    Lot Size (sqft)
                  </label>
                  <input
                    type="number"
                    placeholder="5000"
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-lg focus:ring-2 focus:ring-[#A41E34] focus:border-transparent transition-all"
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    value={data.lotSize}
                    onChange={(e) => handleInputChange('lotSize', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#111] mb-2" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                    Year Built
                  </label>
                  <input
                    type="number"
                    placeholder="2010"
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-lg focus:ring-2 focus:ring-[#A41E34] focus:border-transparent transition-all"
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    value={data.yearBuilt}
                    onChange={(e) => handleInputChange('yearBuilt', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#E5E1DC] p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-[#3D3D3D]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#111]" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                  Description
                </h2>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111] mb-2" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                  Property Description *
                </label>
                <textarea
                  rows="6"
                  placeholder="Describe your property in detail. Include information about the neighborhood, recent updates, special features, etc."
                  className="w-full px-4 py-3 border border-[#D0CCC7] rounded-lg focus:ring-2 focus:ring-[#A41E34] focus:border-transparent resize-none transition-all"
                  style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                  value={data.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  required
                ></textarea>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#E5E1DC] p-3 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-[#3D3D3D]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#111]" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                  Property Features
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {features.map(feature => (
                  <label key={feature} className="flex items-center gap-2 cursor-pointer p-3 rounded-lg hover:bg-[#EEEDEA] transition-colors">
                    <input
                      type="checkbox"
                      checked={data.features.includes(feature)}
                      onChange={() => handleFeatureToggle(feature)}
                      className="w-5 h-5 text-[#A41E34] rounded border-[#D0CCC7] focus:ring-[#A41E34]"
                    />
                    <span className="text-sm text-[#111]" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                      {feature}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Photos */}
            <div className="bg-white rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#E5E1DC] p-3 rounded-lg">
                  <Image className="w-6 h-6 text-[#3D3D3D]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#111]" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                  Photos
                </h2>
              </div>

              <div className="border-2 border-dashed border-[#D0CCC7] rounded-xl p-12 text-center hover:border-[#A41E34] transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-[#666] mx-auto mb-4" />
                <p className="text-lg font-semibold text-[#111] mb-2" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                  Click to upload photos
                </p>
                <p className="text-sm text-[#666]" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                  Upload up to 25 photos (JPG, PNG, max 10MB each)
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#E5E1DC] p-3 rounded-lg">
                  <Home className="w-6 h-6 text-[#3D3D3D]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#111]" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                  Contact Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#111] mb-2" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-lg focus:ring-2 focus:ring-[#A41E34] focus:border-transparent transition-all"
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    value={data.contactName}
                    onChange={(e) => handleInputChange('contactName', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#111] mb-2" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-lg focus:ring-2 focus:ring-[#A41E34] focus:border-transparent transition-all"
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    value={data.contactEmail}
                    onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#111] mb-2" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 border border-[#D0CCC7] rounded-lg focus:ring-2 focus:ring-[#A41E34] focus:border-transparent transition-all"
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                    value={data.contactPhone}
                    onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={processing}
                className="inline-flex items-center gap-3 bg-[#A41E34] hover:bg-[#8B1829] text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: '"Instrument Sans", sans-serif' }}
              >
                <span>{processing ? 'Submitting...' : 'Submit Property Listing'}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// Specify MainLayout for this page to include Header and Footer
ListProperty.layout = (page) => <MainLayout>{page}</MainLayout>;

export default ListProperty;
