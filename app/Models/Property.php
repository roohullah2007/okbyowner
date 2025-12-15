<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Property extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'property_title',
        'property_type',
        'status',
        'price',
        'address',
        'city',
        'state',
        'zip_code',
        'subdivision',
        'bedrooms',
        'bathrooms',
        'sqft',
        'lot_size',
        'year_built',
        'description',
        'features',
        'photos',
        'contact_name',
        'contact_email',
        'contact_phone',
        'is_featured',
        'is_active',
        'approval_status',
        'rejection_reason',
        'approved_at',
        'approved_by',
        'latitude',
        'longitude',
        'views',
    ];

    protected $casts = [
        'features' => 'array',
        'photos' => 'array',
        'price' => 'decimal:2',
        'bathrooms' => 'decimal:1',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
        'latitude' => 'decimal:7',
        'longitude' => 'decimal:7',
        'approved_at' => 'datetime',
    ];

    /**
     * Get the owner of this property
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Alias for user relationship
     */
    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Get the admin who approved this property
     */
    public function approver(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    /**
     * Get property images
     */
    public function images(): HasMany
    {
        return $this->hasMany(PropertyImage::class)->orderBy('sort_order');
    }

    /**
     * Get primary image
     */
    public function primaryImage(): HasMany
    {
        return $this->hasMany(PropertyImage::class)->where('is_primary', true);
    }

    /**
     * Get inquiries for this property
     */
    public function inquiries(): HasMany
    {
        return $this->hasMany(Inquiry::class);
    }

    /**
     * Get users who favorited this property
     */
    public function favoritedBy(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'favorites')->withTimestamps();
    }

    /**
     * Scope for active properties
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope for approved properties
     */
    public function scopeApproved($query)
    {
        return $query->where('approval_status', 'approved');
    }

    /**
     * Scope for pending properties
     */
    public function scopePending($query)
    {
        return $query->where('approval_status', 'pending');
    }

    /**
     * Scope for featured properties
     */
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    /**
     * Scope for publicly visible properties
     */
    public function scopePublic($query)
    {
        return $query->active()->approved();
    }

    /**
     * Get formatted price
     */
    public function getFormattedPriceAttribute(): string
    {
        return '$' . number_format($this->price, 0);
    }

    /**
     * Get full address
     */
    public function getFullAddressAttribute(): string
    {
        $parts = array_filter([
            $this->address,
            $this->city,
            $this->state,
            $this->zip_code
        ]);
        return implode(', ', $parts);
    }

    /**
     * Increment view count
     */
    public function incrementViews(): void
    {
        $this->increment('views');
    }

    /**
     * Check if property is pending approval
     */
    public function isPending(): bool
    {
        return $this->approval_status === 'pending';
    }

    /**
     * Check if property is approved
     */
    public function isApproved(): bool
    {
        return $this->approval_status === 'approved';
    }

    /**
     * Check if property is rejected
     */
    public function isRejected(): bool
    {
        return $this->approval_status === 'rejected';
    }
}
