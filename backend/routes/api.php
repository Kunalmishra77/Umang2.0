<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\DoctorController;
use App\Http\Controllers\Api\AppointmentController;

Route::get('/doctors', [DoctorController::class, 'index']);
Route::get('/doctors/{id}', [DoctorController::class, 'show']);

// Public routes for booking
Route::get('/specialities', function () {
    return response()->json([
        ['id' => 1, 'name' => 'Cardiology'],
        ['id' => 2, 'name' => 'Dermatology'],
        ['id' => 3, 'name' => 'Neurology'],
        ['id' => 4, 'name' => 'Orthopedics'],
        ['id' => 5, 'name' => 'Pediatrics'],
    ]);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/appointments', [AppointmentController::class, 'index']);
    Route::post('/appointments', [AppointmentController::class, 'store']);
    Route::delete('/appointments/{id}', [AppointmentController::class, 'destroy']);
    
    Route::get('/patient/profile', function (Request $request) {
        return response()->json([
            'firstName' => 'John',
            'lastName' => 'Doe',
            'email' => $request->user()->email ?? 'john.doe@example.com',
            'phone' => '+1-555-0123',
            'dateOfBirth' => '1990-05-15',
            'gender' => 'male',
            'address' => '123 Main Street',
            'city' => 'New York',
            'state' => 'NY',
            'zipCode' => '10001',
            'bloodGroup' => 'O+',
            'allergies' => 'Penicillin',
            'medicalHistory' => 'No major issues',
        ]);
    });
    
    Route::put('/patient/profile', function (Request $request) {
        // In a real app, you'd update the user profile here
        return response()->json(['message' => 'Profile updated successfully']);
    });
});

// Temporary: Allow patient routes without auth for development
Route::get('/appointments-temp', [AppointmentController::class, 'index']);
Route::get('/patient/profile-temp', function (Request $request) {
    return response()->json([
        'firstName' => 'John',
        'lastName' => 'Doe',
        'email' => 'john.doe@example.com',
        'phone' => '+1-555-0123',
        'dateOfBirth' => '1990-05-15',
        'gender' => 'male',
        'address' => '123 Main Street',
        'city' => 'New York',
        'state' => 'NY',
        'zipCode' => '10001',
        'bloodGroup' => 'O+',
        'allergies' => 'Penicillin',
        'medicalHistory' => 'No major issues',
    ]);
});
Route::put('/patient/profile-temp', function (Request $request) {
    return response()->json(['message' => 'Profile updated successfully']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
