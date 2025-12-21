<?php

namespace App\Http\Controllers;

use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class QrCodeController extends Controller
{
    /**
     * Generate and return a high-resolution QR code for a property listing
     * Returns SVG format (scalable for any print size)
     */
    public function generate(Property $property)
    {
        // Build the URL with QR tracking parameter
        $url = route('properties.show', $property) . '?src=qr';

        // Generate QR code as SVG (scalable vector graphics - perfect for printing at any size)
        $qrCode = QrCode::format('svg')
            ->size(1200)
            ->errorCorrection('H') // High error correction for reliable scanning
            ->margin(2)
            ->generate($url);

        // Create filename based on property address
        $filename = 'qr-' . $property->slug . '.svg';

        return response($qrCode)
            ->header('Content-Type', 'image/svg+xml')
            ->header('Content-Disposition', 'attachment; filename="' . $filename . '"')
            ->header('Cache-Control', 'no-cache, no-store, must-revalidate');
    }

    /**
     * Generate a preview QR code (smaller, for display)
     */
    public function preview(Property $property)
    {
        // Build the URL with QR tracking parameter
        $url = route('properties.show', $property) . '?src=qr';

        // Generate QR code as SVG for preview
        $qrCode = QrCode::format('svg')
            ->size(300)
            ->errorCorrection('H')
            ->margin(1)
            ->generate($url);

        return response($qrCode)
            ->header('Content-Type', 'image/svg+xml')
            ->header('Cache-Control', 'public, max-age=3600');
    }
}
