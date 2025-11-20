<?php

namespace App\Http\Controllers;

use App\Models\Property;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource (for admin).
     */
    public function index()
    {
        $properties = Property::latest()->paginate(20);

        return Inertia::render('Admin/Properties/Index', [
            'properties' => $properties
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('ListProperty');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'propertyTitle' => 'required|string|max:255',
            'propertyType' => 'required|string',
            'price' => 'required|numeric|min:0',
            'address' => 'required|string',
            'city' => 'required|string',
            'zipCode' => 'required|string',
            'subdivision' => 'nullable|string',
            'bedrooms' => 'required|integer|min:0',
            'bathrooms' => 'required|numeric|min:0',
            'sqft' => 'required|integer|min:0',
            'lotSize' => 'nullable|integer|min:0',
            'yearBuilt' => 'nullable|integer|min:1800|max:' . (date('Y') + 1),
            'description' => 'required|string',
            'features' => 'nullable|array',
            'contactName' => 'required|string',
            'contactEmail' => 'required|email',
            'contactPhone' => 'required|string',
        ]);

        // Convert camelCase to snake_case for database
        $property = Property::create([
            'property_title' => $validated['propertyTitle'],
            'property_type' => $validated['propertyType'],
            'price' => $validated['price'],
            'address' => $validated['address'],
            'city' => $validated['city'],
            'state' => 'Oklahoma',
            'zip_code' => $validated['zipCode'],
            'subdivision' => $validated['subdivision'] ?? null,
            'bedrooms' => $validated['bedrooms'],
            'bathrooms' => $validated['bathrooms'],
            'sqft' => $validated['sqft'],
            'lot_size' => $validated['lotSize'] ?? null,
            'year_built' => $validated['yearBuilt'] ?? null,
            'description' => $validated['description'],
            'features' => $validated['features'] ?? [],
            'contact_name' => $validated['contactName'],
            'contact_email' => $validated['contactEmail'],
            'contact_phone' => $validated['contactPhone'],
            'status' => 'for-sale',
            'is_active' => true,
        ]);

        return redirect()->back()->with('success', 'Property listed successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Property $property)
    {
        return Inertia::render('PropertyDetail', [
            'property' => $property
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Property $property)
    {
        return Inertia::render('Admin/Properties/Edit', [
            'property' => $property
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Property $property)
    {
        $validated = $request->validate([
            'property_title' => 'required|string|max:255',
            'property_type' => 'required|string',
            'price' => 'required|numeric|min:0',
            'address' => 'required|string',
            'city' => 'required|string',
            'zip_code' => 'required|string',
            'subdivision' => 'nullable|string',
            'bedrooms' => 'required|integer|min:0',
            'bathrooms' => 'required|numeric|min:0',
            'sqft' => 'required|integer|min:0',
            'lot_size' => 'nullable|integer|min:0',
            'year_built' => 'nullable|integer|min:1800|max:' . (date('Y') + 1),
            'description' => 'required|string',
            'features' => 'nullable|array',
            'contact_name' => 'required|string',
            'contact_email' => 'required|email',
            'contact_phone' => 'required|string',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
        ]);

        $property->update($validated);

        return redirect()->route('admin.properties.index')->with('success', 'Property updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Property $property)
    {
        $property->delete();

        return redirect()->back()->with('success', 'Property deleted successfully!');
    }

    /**
     * Get properties for public listing page.
     */
    public function publicIndex()
    {
        $properties = Property::where('is_active', true)
            ->latest()
            ->get();

        return Inertia::render('Properties', [
            'properties' => $properties
        ]);
    }
}
