import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useState, useRef } from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import {
    User,
    Mail,
    Lock,
    Trash2,
    Eye,
    EyeOff,
    CheckCircle,
    AlertTriangle,
    Shield,
    Camera,
    ArrowLeft
} from 'lucide-react';

export default function Edit({ mustVerifyEmail, status }) {
    const { auth } = usePage().props;
    const user = auth.user;
    const [activeTab, setActiveTab] = useState('profile');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showDeletePassword, setShowDeletePassword] = useState(false);
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    // Profile form
    const {
        data: profileData,
        setData: setProfileData,
        patch: updateProfile,
        errors: profileErrors,
        processing: profileProcessing,
        recentlySuccessful: profileSuccess
    } = useForm({
        name: user.name,
        email: user.email,
    });

    // Password form
    const {
        data: passwordData,
        setData: setPasswordData,
        put: updatePassword,
        errors: passwordErrors,
        processing: passwordProcessing,
        recentlySuccessful: passwordSuccess,
        reset: resetPassword
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    // Delete form
    const {
        data: deleteData,
        setData: setDeleteData,
        delete: deleteAccount,
        processing: deleteProcessing,
        errors: deleteErrors,
        reset: resetDelete,
        clearErrors: clearDeleteErrors
    } = useForm({
        password: '',
    });

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        updateProfile(route('profile.update'));
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        updatePassword(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => resetPassword(),
            onError: (errors) => {
                if (errors.password) {
                    resetPassword('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }
                if (errors.current_password) {
                    resetPassword('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    const handleDeleteSubmit = (e) => {
        e.preventDefault();
        deleteAccount(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => setShowDeleteModal(false),
            onFinish: () => resetDelete(),
        });
    };

    const closeDeleteModal = () => {
        setShowDeleteModal(false);
        clearDeleteErrors();
        resetDelete();
    };

    const tabs = [
        { key: 'profile', label: 'Profile Information', icon: User },
        { key: 'password', label: 'Change Password', icon: Lock },
        { key: 'delete', label: 'Delete Account', icon: Trash2 },
    ];

    return (
        <>
            <Head title="Profile Settings" />
            <Header />

            <main className="min-h-screen bg-gray-50 pt-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Back Link */}
                    <Link
                        href={route('dashboard')}
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-[#A41E34] mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Dashboard
                    </Link>

                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                            Profile Settings
                        </h1>
                        <p className="text-gray-500 mt-2">Manage your account settings and preferences</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar */}
                        <div className="lg:w-64 flex-shrink-0">
                            {/* Profile Card */}
                            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                                <div className="flex flex-col items-center">
                                    <div className="relative">
                                        <div className="w-24 h-24 bg-[#A41E34] rounded-full flex items-center justify-center text-white text-3xl font-bold">
                                            {user.name.charAt(0).toUpperCase()}
                                        </div>
                                        <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-[#A41E34] transition-colors">
                                            <Camera className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <h2 className="mt-4 text-lg font-semibold text-gray-900">{user.name}</h2>
                                    <p className="text-sm text-gray-500">{user.email}</p>
                                    {user.role === 'admin' && (
                                        <span className="mt-2 inline-flex items-center gap-1 px-2 py-1 bg-[#A41E34]/10 text-[#A41E34] text-xs font-medium rounded-full">
                                            <Shield className="w-3 h-3" />
                                            Administrator
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Navigation */}
                            <nav className="bg-white rounded-xl shadow-sm overflow-hidden">
                                {tabs.map((tab) => {
                                    const TabIcon = tab.icon;
                                    return (
                                        <button
                                            key={tab.key}
                                            onClick={() => setActiveTab(tab.key)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-colors ${
                                                activeTab === tab.key
                                                    ? 'bg-[#A41E34] text-white'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                            } ${tab.key === 'delete' ? 'text-red-600 hover:bg-red-50' : ''} ${
                                                activeTab === tab.key && tab.key === 'delete' ? 'bg-red-600 text-white' : ''
                                            }`}
                                        >
                                            <TabIcon className="w-5 h-5" />
                                            {tab.label}
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            {/* Profile Information */}
                            {activeTab === 'profile' && (
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 bg-[#A41E34]/10 rounded-lg flex items-center justify-center">
                                            <User className="w-5 h-5 text-[#A41E34]" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-900">Profile Information</h2>
                                            <p className="text-sm text-gray-500">Update your account's profile information and email address</p>
                                        </div>
                                    </div>

                                    {profileSuccess && (
                                        <div className="mb-6 flex items-center gap-2 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                                            <CheckCircle className="w-5 h-5" />
                                            Profile updated successfully!
                                        </div>
                                    )}

                                    <form onSubmit={handleProfileSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    value={profileData.name}
                                                    onChange={(e) => setProfileData('name', e.target.value)}
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A41E34]/20 focus:border-[#A41E34]"
                                                    required
                                                />
                                            </div>
                                            {profileErrors.name && (
                                                <p className="mt-2 text-sm text-red-600">{profileErrors.name}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="email"
                                                    value={profileData.email}
                                                    onChange={(e) => setProfileData('email', e.target.value)}
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A41E34]/20 focus:border-[#A41E34]"
                                                    required
                                                />
                                            </div>
                                            {profileErrors.email && (
                                                <p className="mt-2 text-sm text-red-600">{profileErrors.email}</p>
                                            )}
                                        </div>

                                        {mustVerifyEmail && user.email_verified_at === null && (
                                            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                                <div className="flex items-start gap-3">
                                                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                                                    <div>
                                                        <p className="text-sm text-yellow-800">
                                                            Your email address is unverified.
                                                        </p>
                                                        <Link
                                                            href={route('verification.send')}
                                                            method="post"
                                                            as="button"
                                                            className="text-sm text-[#A41E34] hover:underline mt-1"
                                                        >
                                                            Click here to re-send the verification email.
                                                        </Link>
                                                        {status === 'verification-link-sent' && (
                                                            <p className="mt-2 text-sm text-green-600">
                                                                A new verification link has been sent to your email address.
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                disabled={profileProcessing}
                                                className="px-6 py-3 bg-[#A41E34] text-white rounded-lg hover:bg-[#8B1A2C] transition-colors disabled:opacity-50"
                                            >
                                                {profileProcessing ? 'Saving...' : 'Save Changes'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            {/* Change Password */}
                            {activeTab === 'password' && (
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 bg-[#A41E34]/10 rounded-lg flex items-center justify-center">
                                            <Lock className="w-5 h-5 text-[#A41E34]" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-900">Change Password</h2>
                                            <p className="text-sm text-gray-500">Ensure your account is using a long, random password to stay secure</p>
                                        </div>
                                    </div>

                                    {passwordSuccess && (
                                        <div className="mb-6 flex items-center gap-2 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                                            <CheckCircle className="w-5 h-5" />
                                            Password updated successfully!
                                        </div>
                                    )}

                                    <form onSubmit={handlePasswordSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Current Password
                                            </label>
                                            <div className="relative">
                                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type={showCurrentPassword ? 'text' : 'password'}
                                                    ref={currentPasswordInput}
                                                    value={passwordData.current_password}
                                                    onChange={(e) => setPasswordData('current_password', e.target.value)}
                                                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A41E34]/20 focus:border-[#A41E34]"
                                                    autoComplete="current-password"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                                </button>
                                            </div>
                                            {passwordErrors.current_password && (
                                                <p className="mt-2 text-sm text-red-600">{passwordErrors.current_password}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                New Password
                                            </label>
                                            <div className="relative">
                                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type={showNewPassword ? 'text' : 'password'}
                                                    ref={passwordInput}
                                                    value={passwordData.password}
                                                    onChange={(e) => setPasswordData('password', e.target.value)}
                                                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A41E34]/20 focus:border-[#A41E34]"
                                                    autoComplete="new-password"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                                </button>
                                            </div>
                                            {passwordErrors.password && (
                                                <p className="mt-2 text-sm text-red-600">{passwordErrors.password}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Confirm New Password
                                            </label>
                                            <div className="relative">
                                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type={showConfirmPassword ? 'text' : 'password'}
                                                    value={passwordData.password_confirmation}
                                                    onChange={(e) => setPasswordData('password_confirmation', e.target.value)}
                                                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A41E34]/20 focus:border-[#A41E34]"
                                                    autoComplete="new-password"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                                </button>
                                            </div>
                                            {passwordErrors.password_confirmation && (
                                                <p className="mt-2 text-sm text-red-600">{passwordErrors.password_confirmation}</p>
                                            )}
                                        </div>

                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                disabled={passwordProcessing}
                                                className="px-6 py-3 bg-[#A41E34] text-white rounded-lg hover:bg-[#8B1A2C] transition-colors disabled:opacity-50"
                                            >
                                                {passwordProcessing ? 'Updating...' : 'Update Password'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            {/* Delete Account */}
                            {activeTab === 'delete' && (
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                            <Trash2 className="w-5 h-5 text-red-600" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-900">Delete Account</h2>
                                            <p className="text-sm text-gray-500">Permanently delete your account and all associated data</p>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
                                        <div className="flex items-start gap-3">
                                            <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                                            <div>
                                                <p className="text-sm text-red-800 font-medium">Warning: This action cannot be undone</p>
                                                <p className="text-sm text-red-700 mt-1">
                                                    Once your account is deleted, all of its resources and data will be permanently deleted.
                                                    This includes your profile, listings, messages, and any other information associated with your account.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-6">
                                        Before deleting your account, please download any data or information that you wish to retain.
                                        If you have any active listings, they will also be removed.
                                    </p>

                                    <button
                                        onClick={() => setShowDeleteModal(true)}
                                        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                                    >
                                        Delete Account
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            {/* Delete Account Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Delete Account</h3>
                        </div>

                        <p className="text-gray-600 mb-6">
                            Are you sure you want to delete your account? This action is permanent and cannot be undone.
                            Please enter your password to confirm.
                        </p>

                        <form onSubmit={handleDeleteSubmit}>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type={showDeletePassword ? 'text' : 'password'}
                                        value={deleteData.password}
                                        onChange={(e) => setDeleteData('password', e.target.value)}
                                        className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowDeletePassword(!showDeletePassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showDeletePassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                                {deleteErrors.password && (
                                    <p className="mt-2 text-sm text-red-600">{deleteErrors.password}</p>
                                )}
                            </div>

                            <div className="flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={closeDeleteModal}
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={deleteProcessing}
                                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
                                >
                                    {deleteProcessing ? 'Deleting...' : 'Delete Account'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}

Edit.layout = (page) => page;
