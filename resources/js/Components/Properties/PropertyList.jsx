import React from 'react';
import { Heart, Maximize2, Info, Bed, Bath, Home, MapPin, User, Calendar } from 'lucide-react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:border-[#A52A3D]/30 transition-all duration-300 group">
      <div className="flex h-56">
        {/* Property Image - Fixed Width */}
        <div className="relative w-80 flex-shrink-0 overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* FEATURED Badge */}
          {property.featured && (
            <div className="absolute top-3 left-3 bg-[#7FB800] text-white px-3 py-1.5 text-xs font-poppins font-bold rounded-lg shadow-lg">
              FEATURED
            </div>
          )}
          {/* FOR SALE Badge */}
          <div className="absolute top-3 right-3 bg-[#A52A3D] text-white px-3 py-1.5 text-xs font-poppins font-bold rounded-lg shadow-lg">
            FOR SALE
          </div>

          {/* Bottom Action Icons */}
          <div className="absolute bottom-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-10 h-10 bg-white/95 backdrop-blur-sm hover:bg-white rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-lg" title="Expand">
              <Maximize2 className="w-4 h-4 text-gray-700" />
            </button>
            <button className="w-10 h-10 bg-white/95 backdrop-blur-sm hover:bg-white rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-lg" title="Save">
              <Heart className="w-4 h-4 text-[#A52A3D]" />
            </button>
            <button className="w-10 h-10 bg-white/95 backdrop-blur-sm hover:bg-white rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-lg" title="More Info">
              <Info className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Property Details */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            {/* Title & Location */}
            <h3 className="text-xl font-poppins font-bold text-gray-900 mb-2 group-hover:text-[#A52A3D] transition-colors">
              {property.title}
            </h3>
            <p className="text-sm font-poppins text-gray-600 mb-5 flex items-start gap-1.5">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#A52A3D]" />
              <span>{property.location}</span>
            </p>

            {/* Property Stats */}
            <div className="flex items-center gap-8 text-sm font-poppins text-gray-700 mb-5">
              <div className="flex items-center gap-2">
                <div className="bg-[#A52A3D]/10 p-2 rounded-lg">
                  <Bed className="w-5 h-5 text-[#A52A3D]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Beds</div>
                  <div className="font-bold text-gray-900">{property.beds}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#A52A3D]/10 p-2 rounded-lg">
                  <Bath className="w-5 h-5 text-[#A52A3D]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Baths</div>
                  <div className="font-bold text-gray-900">{property.baths}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#A52A3D]/10 p-2 rounded-lg">
                  <Home className="w-5 h-5 text-[#A52A3D]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Sqft</div>
                  <div className="font-bold text-gray-900">{property.sqft?.toLocaleString() || 'N/A'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex items-end justify-between pt-4 border-t border-gray-100">
            {/* Agent & Date */}
            <div className="flex items-center gap-4 text-xs text-gray-500 font-poppins">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                {property.agent || 'Agent Name'}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {property.listedDate || '2 months ago'}
              </span>
            </div>

            {/* Price & Details Button */}
            <div className="flex items-center gap-4">
              <span className="text-2xl font-poppins font-bold text-[#A52A3D]">
                ${property.price.toLocaleString()}
              </span>
              <button className="px-6 py-2.5 bg-[#A52A3D] hover:bg-[#8B2332] text-white font-poppins font-semibold text-sm rounded-lg transition-colors shadow-sm">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertyList = ({ properties }) => {
  return (
    <div className="p-6">
      {/* Results Header */}
      <div className="mb-6 flex items-center justify-between bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-xl font-poppins font-bold text-gray-900">
          <span className="text-[#A52A3D]">{properties.length}</span> Properties Found
        </h2>
        <select className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-poppins focus:ring-2 focus:ring-[#A52A3D] focus:border-transparent bg-white cursor-pointer hover:border-[#A52A3D] transition-colors">
          <option>Sort by: Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Bedrooms</option>
          <option>Square Feet</option>
        </select>
      </div>

      {/* Property Cards */}
      <div className="space-y-5">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
            <div className="text-gray-300 mb-4">
              <Info className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-2">
              No Properties Found
            </h3>
            <p className="text-gray-600 font-poppins text-lg">
              Try adjusting your search filters to see more results
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyList;