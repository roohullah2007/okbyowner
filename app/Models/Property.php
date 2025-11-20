<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    protected $fillable = [
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
    ];
}
