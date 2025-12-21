import { Head, Link, router, usePage } from '@inertiajs/react';
import UserDashboardLayout from '@/Layouts/UserDashboardLayout';
import {
    Plus,
    Search,
    Eye,
    MessageSquare,
    Edit,
    Trash2,
    ExternalLink,
    MoreVertical,
    MapPin,
    Calendar,
    Home,
    ChevronLeft,
    ChevronRight,
    Bed,
    Bath,
    Square,
    AlertCircle,
    TrendingUp,
    Camera,
    Star,
    QrCode,
    Download,
    X
} from 'lucide-react';
import { useState } from 'react';

export default function Listings({ listings, filters = {}, counts = {} }) {
    const [search, setSearch] = useState(filters.search || '');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [listingToDelete, setListingToDelete] = useState(null);
    const [deleting, setDeleting] = useState(false);
    const [showQrModal, setShowQrModal] = useState(false);
    const [qrListing, setQrListing] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('dashboard.listings'), { ...filters, search }, { preserveState: true });
    };

    const handleFilter = (status) => {
        router.get(route('dashboard.listings'), { ...filters, status }, { preserveState: true });
    };

    const handleDelete = () => {
        if (listingToDelete) {
            setDeleting(true);
            router.delete(route('dashboard.listings.destroy', listingToDelete.id), {
                onSuccess: () => {
                    setShowDeleteModal(false);
                    setListingToDelete(null);
                    setDeleting(false);
                },
                onError: () => {
                    setDeleting(false);
                }
            });
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'approved': return 'bg-green-100 text-green-700';
            case 'pending': return 'bg-yellow-100 text-yellow-700';
            case 'rejected': return 'bg-red-100 text-red-700';
            case 'sold': return 'bg-blue-100 text-blue-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const listingData = listings?.data || listings || [];

    return (
        <UserDashboardLayout title="My Listings">
            <Head title="My Listings" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                        My Listings
                    </h1>
                    <p className="text-gray-500">Manage your property listings</p>
                </div>
                <Link
                    href="/list-property"
                    className="inline-flex items-center gap-2 bg-[#A41E34] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#8B1A2C] transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    Add New Listing
                </Link>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                {[
                    { key: 'all', label: 'All', count: counts.all || 0 },
                    { key: 'active', label: 'Active', count: counts.active || 0 },
                    { key: 'pending', label: 'Pending', count: counts.pending || 0 },
                    { key: 'sold', label: 'Sold', count: counts.sold || 0 },
                ].map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => handleFilter(tab.key)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                            (filters.status || 'all') === tab.key
                                ? 'bg-[#A41E34] text-white'
                                : 'bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                        {tab.label} ({tab.count})
                    </button>
                ))}
            </div>

            {/* Search */}
            <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
                <form onSubmit={handleSearch} className="flex gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search listings..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A41E34]/20 focus:border-[#A41E34]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
                    >
                        Search
                    </button>
                </form>
            </div>

            {/* Listings */}
            {listingData.length === 0 ? (
                <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                    <Home className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No listings found</h3>
                    <p className="text-gray-500 mb-6">
                        {search || (filters.status && filters.status !== 'all')
                            ? 'Try adjusting your search or filters'
                            : 'Start by adding your first property listing'}
                    </p>
                    <Link
                        href="/list-property"
                        className="inline-flex items-center gap-2 bg-[#A41E34] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#8B1A2C] transition-colors"
                    >
                        <Plus className="w-5 h-5" />
                        Add Your First Listing
                    </Link>
                </div>
            ) : (
                <div className="space-y-4">
                    {listingData.map((listing) => (
                        <div key={listing.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                            <div className="flex flex-col sm:flex-row">
                                {/* Image */}
                                <div className="sm:w-48 md:w-64 h-48 sm:h-auto bg-gray-200 flex-shrink-0">
                                    <img
                                        src={listing.photos?.[0] || '/images/property-placeholder.jpg'}
                                        alt={listing.property_title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => e.target.src = '/images/property-placeholder.jpg'}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-4 sm:p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                <span className={`px-2 py-0.5 text-xs font-medium rounded-full capitalize ${getStatusColor(listing.approval_status)}`}>
                                                    {listing.approval_status}
                                                </span>
                                                {listing.listing_tier === 'mls' && (
                                                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-700 flex items-center gap-1">
                                                        <Home className="w-3 h-3" />
                                                        MLS
                                                    </span>
                                                )}
                                                {(listing.listing_tier === 'photos' || listing.has_professional_photos) && (
                                                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-700 flex items-center gap-1">
                                                        <Camera className="w-3 h-3" />
                                                        Pro Photos
                                                    </span>
                                                )}
                                                {listing.is_featured && (
                                                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-purple-100 text-purple-700 flex items-center gap-1">
                                                        <Star className="w-3 h-3" />
                                                        Featured
                                                    </span>
                                                )}
                                                {!listing.is_active && (
                                                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
                                                        Inactive
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                                                {listing.property_title}
                                            </h3>
                                            <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                                <MapPin className="w-4 h-4" />
                                                {listing.address}, {listing.city}, {listing.state}
                                            </p>
                                        </div>

                                        {/* Actions Dropdown */}
                                        <div className="relative group">
                                            <button className="p-2 hover:bg-gray-100 rounded-lg">
                                                <MoreVertical className="w-5 h-5 text-gray-400" />
                                            </button>
                                            <div className="absolute right-0 mt-1 w-44 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                                                <Link
                                                    href={route('dashboard.listings.edit', listing.id)}
                                                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-t-xl"
                                                >
                                                    <Edit className="w-4 h-4" />
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={route('dashboard.listings.upgrade', listing.id)}
                                                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#A41E34] hover:bg-red-50"
                                                >
                                                    <TrendingUp className="w-4 h-4" />
                                                    Upgrade
                                                </Link>
                                                <button
                                                    onClick={() => {
                                                        setQrListing(listing);
                                                        setShowQrModal(true);
                                                    }}
                                                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                                                >
                                                    <QrCode className="w-4 h-4" />
                                                    QR Code
                                                </button>
                                                <Link
                                                    href={`/properties/${listing.id}`}
                                                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    View
                                                </Link>
                                                <button
                                                    onClick={() => {
                                                        setListingToDelete(listing);
                                                        setShowDeleteModal(true);
                                                    }}
                                                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-b-xl"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Rejection reason */}
                                    {listing.approval_status === 'rejected' && listing.rejection_reason && (
                                        <div className="mt-3 p-3 bg-red-50 rounded-lg flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="text-xs font-medium text-red-800">Rejection Reason:</p>
                                                <p className="text-xs text-red-700">{listing.rejection_reason}</p>
                                            </div>
                                        </div>
                                    )}

                                    <div className="mt-4 flex flex-wrap items-center gap-4">
                                        <span className="text-2xl font-bold text-[#A41E34]" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                                            ${Number(listing.price).toLocaleString()}
                                        </span>
                                        <div className="flex items-center gap-3 text-sm text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <Bed className="w-4 h-4" />
                                                {listing.bedrooms} bed
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Bath className="w-4 h-4" />
                                                {listing.bathrooms} bath
                                            </span>
                                            {listing.sqft && (
                                                <span className="flex items-center gap-1">
                                                    <Square className="w-4 h-4" />
                                                    {Number(listing.sqft).toLocaleString()} sqft
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-6 text-sm">
                                        <span className="flex items-center gap-1.5 text-gray-500">
                                            <Eye className="w-4 h-4" />
                                            {listing.views || 0} views
                                        </span>
                                        <span className="flex items-center gap-1.5 text-gray-500">
                                            <MessageSquare className="w-4 h-4" />
                                            {listing.inquiries_count || 0} inquiries
                                        </span>
                                        <span className="flex items-center gap-1.5 text-gray-500">
                                            <QrCode className="w-4 h-4" />
                                            {listing.qr_scans_count || 0} QR scans
                                        </span>
                                        <span className="flex items-center gap-1.5 text-gray-500">
                                            <Calendar className="w-4 h-4" />
                                            Listed {formatDate(listing.created_at)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination */}
            {listings?.last_page > 1 && (
                <div className="flex items-center justify-between mt-6 bg-white rounded-2xl shadow-sm p-4">
                    <p className="text-sm text-gray-500">
                        Showing {listings.from} to {listings.to} of {listings.total}
                    </p>
                    <div className="flex items-center gap-2">
                        {listings.prev_page_url && (
                            <Link
                                href={listings.prev_page_url}
                                className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </Link>
                        )}
                        <span className="text-sm text-gray-600">
                            Page {listings.current_page} of {listings.last_page}
                        </span>
                        {listings.next_page_url && (
                            <Link
                                href={listings.next_page_url}
                                className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                        )}
                    </div>
                </div>
            )}

            {/* Delete Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete Listing</h3>
                        <p className="text-gray-500 mb-6">
                            Are you sure you want to delete <strong>{listingToDelete?.property_title}</strong>? This will also delete all inquiries related to this property. This action cannot be undone.
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => { setShowDeleteModal(false); setListingToDelete(null); }}
                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                                disabled={deleting}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                disabled={deleting}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
                            >
                                {deleting ? 'Deleting...' : 'Delete'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* QR Code Modal */}
            {showQrModal && qrListing && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                                QR Code for Your Listing
                            </h3>
                            <button
                                onClick={() => { setShowQrModal(false); setQrListing(null); }}
                                className="p-2 hover:bg-gray-100 rounded-lg"
                            >
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        <div className="text-center">
                            {/* QR Code Preview */}
                            <div className="bg-gray-50 rounded-xl p-6 mb-4">
                                <img
                                    src={route('dashboard.listings.qrcode.preview', qrListing.id)}
                                    alt={`QR Code for ${qrListing.property_title}`}
                                    className="w-48 h-48 mx-auto"
                                />
                            </div>

                            <h4 className="font-medium text-gray-900 mb-1">{qrListing.property_title}</h4>
                            <p className="text-sm text-gray-500 mb-4">
                                {qrListing.address}, {qrListing.city}
                            </p>

                            <div className="bg-blue-50 rounded-xl p-4 mb-6 text-left">
                                <h5 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
                                    <QrCode className="w-4 h-4" />
                                    How to Use Your QR Code
                                </h5>
                                <ul className="text-sm text-blue-800 space-y-1">
                                    <li>• Print on yard signs for drive-by traffic</li>
                                    <li>• Include in flyers and brochures</li>
                                    <li>• SVG format - scales perfectly to any size</li>
                                    <li>• Scans are tracked in your analytics</li>
                                </ul>
                            </div>

                            <a
                                href={route('dashboard.listings.qrcode', qrListing.id)}
                                download={`qr-${qrListing.id}.svg`}
                                className="inline-flex items-center gap-2 bg-[#A41E34] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#8B1A2C] transition-colors"
                            >
                                <Download className="w-5 h-5" />
                                Download QR Code (SVG)
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </UserDashboardLayout>
    );
}

Listings.layout = (page) => page;
