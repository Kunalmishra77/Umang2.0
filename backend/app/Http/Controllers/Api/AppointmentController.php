<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function index(Request $request)
    {
        // Mock data for now - replace with actual database queries
        $appointments = [
            [
                'id' => 1,
                'doctor' => 'Dr. Sarah Johnson',
                'speciality' => 'Cardiology',
                'hospital' => 'City General Hospital',
                'date' => '2026-01-30',
                'time' => '10:00 AM',
                'status' => 'upcoming',
                'type' => 'Consultation',
                'notes' => 'Regular checkup',
            ],
            [
                'id' => 2,
                'doctor' => 'Dr. Michael Chen',
                'speciality' => 'Dermatology',
                'hospital' => 'Skin Care Clinic',
                'date' => '2026-01-25',
                'time' => '2:30 PM',
                'status' => 'completed',
                'type' => 'Follow-up',
                'notes' => 'Skin condition review',
            ],
            [
                'id' => 3,
                'doctor' => 'Dr. Emily Davis',
                'speciality' => 'Neurology',
                'hospital' => 'Brain Health Center',
                'date' => '2026-01-20',
                'time' => '11:15 AM',
                'status' => 'cancelled',
                'type' => 'Consultation',
                'notes' => 'Headache evaluation',
            ],
        ];

        return response()->json($appointments);
    }

    public function store(Request $request)
    {
        // Validate the request
        $request->validate([
            'doctor_id' => 'required|exists:doctors,id',
            'date' => 'required|date|after:today',
            'time' => 'required',
            'reason' => 'required|string|max:500',
        ]);

        // Mock appointment creation - replace with actual database insertion
        $appointment = [
            'id' => rand(1000, 9999),
            'doctor_id' => $request->doctor_id,
            'date' => $request->date,
            'time' => $request->time,
            'reason' => $request->reason,
            'notes' => $request->notes ?? '',
            'status' => 'pending',
            'user_id' => $request->user()->id ?? 1,
            'created_at' => now(),
        ];

        return response()->json([
            'message' => 'Appointment booked successfully',
            'appointment' => $appointment
        ], 201);
    }

    public function destroy($id)
    {
        // Mock appointment cancellation - replace with actual database update
        return response()->json([
            'message' => 'Appointment cancelled successfully'
        ]);
    }
}
