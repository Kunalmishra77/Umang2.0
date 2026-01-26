<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function index(Request $request)
    {
        $query = Doctor::with(['user', 'speciality']);

        if ($request->has('speciality_id')) {
            $query->where('speciality_id', $request->speciality_id);
        }

        if ($request->has('gender')) {
            // Assuming gender is on user table or doctor table. Let's assume on doctor table for now or user
            // $query->whereHas('user', function($q) use ($request) {
            //     $q->where('gender', $request->gender);
            // });
        }

        return response()->json($query->paginate(10));
    }

    public function show($id)
    {
        $doctor = Doctor::with(['user', 'speciality'])->findOrFail($id);
        return response()->json($doctor);
    }
}