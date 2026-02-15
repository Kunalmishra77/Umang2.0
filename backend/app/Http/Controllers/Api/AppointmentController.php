<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function index(Request $request)
    {
        $userId = $request->user()->id ?? 1; // Fallback for dev if needed
        
        $appointments = Appointment::with(['doctor.user', 'doctor.speciality'])
            ->where('user_id', $userId)
            ->orderBy('date', 'desc')
            ->orderBy('time', 'desc')
            ->paginate(10);

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

        $appointment = Appointment::create([
            'doctor_id' => $request->doctor_id,
            'user_id' => $request->user()->id ?? 1,
            'date' => $request->date,
            'time' => $request->time,
            'reason' => $request->reason,
            'status' => 'pending',
        ]);

        return response()->json([
            'message' => 'Appointment booked successfully',
            'appointment' => $appointment->load(['doctor.user', 'doctor.speciality'])
        ], 201);
    }

    public function destroy($id)
    {
        $userId = auth()->id() ?? 1;
        $appointment = Appointment::where('user_id', $userId)->findOrFail($id);
        
        $appointment->update(['status' => 'cancelled']);
        
        return response()->json([
            'message' => 'Appointment cancelled successfully'
        ]);
    }
}
