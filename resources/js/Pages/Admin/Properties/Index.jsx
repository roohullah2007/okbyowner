import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Eye, Edit, Trash2, Plus, Search, Filter } from 'lucide-react';

export default function Index({ properties }) {
  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this property?')) {
      router.delete(`/admin/properties/${id}`);
    }
  };

  const toggleFeatured = (property) => {
    router.put(`/admin/properties/${property.id}`, {
      ...property,
      is_featured: !property.is_featured
    });
  };

  const toggleActive = (property) => {
    router.put(`/admin/properties/${property.id}`, {
      ...property,
      is_active: !property.is_active
    });
  };

  return (
    <>
      <Head title="Manage Properties - Admin" />

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-poppins font-bold text-gray-900">Property Management</h1>
                <p className="text-gray-600 font-poppins mt-2">Manage all property listings</p>
              </div>
              <Link
                href="/list-property"
                className="bg-[#A52A3D] hover:bg-[#8B2332] text-white px-6 py-3 rounded-lg font-poppins font-semibold flex items-center gap-2 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add New Property
              </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-sm font-poppins text-gray-600 mb-1">Total Properties</div>
                <div className="text-3xl font-poppins font-bold text-gray-900">{properties.data.length}</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-sm font-poppins text-gray-600 mb-1">Active</div>
                <div className="text-3xl font-poppins font-bold text-green-600">
                  {properties.data.filter(p => p.is_active).length}
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-sm font-poppins text-gray-600 mb-1">Featured</div>
                <div className="text-3xl font-poppins font-bold text-[#A52A3D]">
                  {properties.data.filter(p => p.is_featured).length}
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-sm font-poppins text-gray-600 mb-1">Total Views</div>
                <div className="text-3xl font-poppins font-bold text-blue-600">
                  {properties.data.reduce((sum, p) => sum + p.views, 0)}
                </div>
              </div>
            </div>
          </div>

          {/* Properties Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-poppins font-semibold text-gray-700">Property</th>
                    <th className="px-6 py-4 text-left text-sm font-poppins font-semibold text-gray-700">Location</th>
                    <th className="px-6 py-4 text-left text-sm font-poppins font-semibold text-gray-700">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-poppins font-semibold text-gray-700">Details</th>
                    <th className="px-6 py-4 text-left text-sm font-poppins font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-poppins font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {properties.data.map((property) => (
                    <tr key={property.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-poppins font-semibold text-gray-900">{property.property_title}</div>
                          <div className="text-sm text-gray-600 font-poppins">{property.property_type}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-poppins text-gray-900">{property.city}, {property.state}</div>
                        <div className="text-sm text-gray-600 font-poppins">{property.zip_code}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-poppins font-bold text-[#A52A3D]">
                          ${Number(property.price).toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-poppins text-gray-700">
                          {property.bedrooms} beds • {property.bathrooms} baths • {property.sqft} sqft
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => toggleActive(property)}
                            className={`px-3 py-1 rounded-full text-xs font-poppins font-semibold ${
                              property.is_active
                                ? 'bg-green-100 text-green-700'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {property.is_active ? 'Active' : 'Inactive'}
                          </button>
                          <button
                            onClick={() => toggleFeatured(property)}
                            className={`px-3 py-1 rounded-full text-xs font-poppins font-semibold ${
                              property.is_featured
                                ? 'bg-[#A52A3D]/10 text-[#A52A3D]'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {property.is_featured ? 'Featured' : 'Not Featured'}
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/admin/properties/${property.id}`}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="View"
                          >
                            <Eye className="w-5 h-5 text-gray-600" />
                          </Link>
                          <Link
                            href={`/admin/properties/${property.id}/edit`}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit className="w-5 h-5 text-blue-600" />
                          </Link>
                          <button
                            onClick={() => handleDelete(property.id)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-5 h-5 text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {properties.data.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-gray-700 mb-2">
                  No Properties Found
                </h3>
                <p className="text-gray-600 font-poppins mb-6">
                  Get started by adding your first property listing
                </p>
                <Link
                  href="/list-property"
                  className="inline-flex items-center gap-2 bg-[#A52A3D] hover:bg-[#8B2332] text-white px-6 py-3 rounded-lg font-poppins font-semibold transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Add New Property
                </Link>
              </div>
            )}
          </div>

          {/* Pagination */}
          {properties.links && properties.links.length > 3 && (
            <div className="mt-6 flex justify-center">
              <div className="flex items-center gap-2">
                {properties.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url || '#'}
                    className={`px-4 py-2 rounded-lg font-poppins font-medium transition-colors ${
                      link.active
                        ? 'bg-[#A52A3D] text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
