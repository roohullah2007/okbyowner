<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\UserDashboardController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\Admin\AdminPropertyController;
use App\Http\Controllers\Admin\AdminInquiryController;
use App\Http\Controllers\Admin\AdminContactController;
use App\Http\Controllers\Admin\AdminSettingsController;
use App\Http\Controllers\Admin\AdminActivityController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public routes
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/properties', function () {
    return Inertia::render('Properties');
})->name('properties');

Route::get('/buyers', function () {
    return Inertia::render('Buyers');
})->name('buyers');

Route::get('/sellers', function () {
    return Inertia::render('Sellers');
})->name('sellers');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/faqs', function () {
    return Inertia::render('FAQs');
})->name('faqs');

Route::get('/list-property', function () {
    return Inertia::render('ListProperty');
})->name('list-property');

// Property submission route (public)
Route::post('/properties', [PropertyController::class, 'store'])->name('properties.store');

// User Dashboard
Route::middleware(['auth', 'verified'])->prefix('dashboard')->name('dashboard')->group(function () {
    // Dashboard Overview
    Route::get('/', [UserDashboardController::class, 'index']);

    // Listings Management
    Route::get('/listings', [UserDashboardController::class, 'listings'])->name('.listings');
    Route::get('/listings/{property}/edit', [UserDashboardController::class, 'editListing'])->name('.listings.edit');
    Route::put('/listings/{property}', [UserDashboardController::class, 'updateListing'])->name('.listings.update');
    Route::delete('/listings/{property}', [UserDashboardController::class, 'destroyListing'])->name('.listings.destroy');

    // Messages (Inquiries)
    Route::get('/messages', [UserDashboardController::class, 'messages'])->name('.messages');
    Route::post('/messages/{inquiry}/read', [UserDashboardController::class, 'markMessageRead'])->name('.messages.read');
    Route::post('/messages/{inquiry}/responded', [UserDashboardController::class, 'markMessageResponded'])->name('.messages.responded');
    Route::delete('/messages/{inquiry}', [UserDashboardController::class, 'destroyMessage'])->name('.messages.destroy');

    // Favorites
    Route::get('/favorites', [UserDashboardController::class, 'favorites'])->name('.favorites');
    Route::post('/favorites/{property}', [UserDashboardController::class, 'addFavorite'])->name('.favorites.add');
    Route::delete('/favorites/{property}', [UserDashboardController::class, 'removeFavorite'])->name('.favorites.remove');
});

// User Profile routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Admin routes - Protected by admin middleware
Route::prefix('admin')->name('admin.')->middleware(['auth', 'admin'])->group(function () {
    // Dashboard
    Route::get('/', [AdminDashboardController::class, 'index'])->name('dashboard');

    // Users Management
    Route::get('/users', [AdminUserController::class, 'index'])->name('users.index');
    Route::get('/users/create', [AdminUserController::class, 'create'])->name('users.create');
    Route::post('/users', [AdminUserController::class, 'store'])->name('users.store');
    Route::get('/users/{user}', [AdminUserController::class, 'show'])->name('users.show');
    Route::get('/users/{user}/edit', [AdminUserController::class, 'edit'])->name('users.edit');
    Route::put('/users/{user}', [AdminUserController::class, 'update'])->name('users.update');
    Route::delete('/users/{user}', [AdminUserController::class, 'destroy'])->name('users.destroy');
    Route::post('/users/{user}/toggle-status', [AdminUserController::class, 'toggleStatus'])->name('users.toggle-status');

    // Properties Management
    Route::get('/properties', [AdminPropertyController::class, 'index'])->name('properties.index');
    Route::get('/properties/{property}', [AdminPropertyController::class, 'show'])->name('properties.show');
    Route::get('/properties/{property}/edit', [AdminPropertyController::class, 'edit'])->name('properties.edit');
    Route::put('/properties/{property}', [AdminPropertyController::class, 'update'])->name('properties.update');
    Route::delete('/properties/{property}', [AdminPropertyController::class, 'destroy'])->name('properties.destroy');
    Route::post('/properties/{property}/approve', [AdminPropertyController::class, 'approve'])->name('properties.approve');
    Route::post('/properties/{property}/reject', [AdminPropertyController::class, 'reject'])->name('properties.reject');
    Route::post('/properties/{property}/toggle-featured', [AdminPropertyController::class, 'toggleFeatured'])->name('properties.toggle-featured');
    Route::post('/properties/{property}/toggle-active', [AdminPropertyController::class, 'toggleActive'])->name('properties.toggle-active');
    Route::post('/properties/bulk-action', [AdminPropertyController::class, 'bulkAction'])->name('properties.bulk-action');

    // Inquiries Management
    Route::get('/inquiries', [AdminInquiryController::class, 'index'])->name('inquiries.index');
    Route::get('/inquiries/{inquiry}', [AdminInquiryController::class, 'show'])->name('inquiries.show');
    Route::put('/inquiries/{inquiry}', [AdminInquiryController::class, 'update'])->name('inquiries.update');
    Route::delete('/inquiries/{inquiry}', [AdminInquiryController::class, 'destroy'])->name('inquiries.destroy');
    Route::post('/inquiries/{inquiry}/mark-read', [AdminInquiryController::class, 'markAsRead'])->name('inquiries.mark-read');
    Route::post('/inquiries/{inquiry}/mark-responded', [AdminInquiryController::class, 'markAsResponded'])->name('inquiries.mark-responded');
    Route::post('/inquiries/{inquiry}/archive', [AdminInquiryController::class, 'archive'])->name('inquiries.archive');
    Route::post('/inquiries/bulk-action', [AdminInquiryController::class, 'bulkAction'])->name('inquiries.bulk-action');

    // Contact Messages Management
    Route::get('/messages', [AdminContactController::class, 'index'])->name('messages.index');
    Route::get('/messages/{message}', [AdminContactController::class, 'show'])->name('messages.show');
    Route::put('/messages/{message}', [AdminContactController::class, 'update'])->name('messages.update');
    Route::delete('/messages/{message}', [AdminContactController::class, 'destroy'])->name('messages.destroy');
    Route::post('/messages/{message}/mark-read', [AdminContactController::class, 'markAsRead'])->name('messages.mark-read');
    Route::post('/messages/{message}/mark-responded', [AdminContactController::class, 'markAsResponded'])->name('messages.mark-responded');
    Route::post('/messages/{message}/archive', [AdminContactController::class, 'archive'])->name('messages.archive');
    Route::post('/messages/bulk-action', [AdminContactController::class, 'bulkAction'])->name('messages.bulk-action');

    // Activity Logs
    Route::get('/activity', [AdminActivityController::class, 'index'])->name('activity.index');
    Route::get('/activity/{activity}', [AdminActivityController::class, 'show'])->name('activity.show');
    Route::post('/activity/clear', [AdminActivityController::class, 'clear'])->name('activity.clear');

    // Settings
    Route::get('/settings', [AdminSettingsController::class, 'index'])->name('settings.index');
    Route::post('/settings', [AdminSettingsController::class, 'update'])->name('settings.update');
    Route::post('/settings/store', [AdminSettingsController::class, 'store'])->name('settings.store');
    Route::delete('/settings/{setting}', [AdminSettingsController::class, 'destroy'])->name('settings.destroy');
    Route::post('/settings/initialize', [AdminSettingsController::class, 'initializeDefaults'])->name('settings.initialize');
});

require __DIR__.'/auth.php';
