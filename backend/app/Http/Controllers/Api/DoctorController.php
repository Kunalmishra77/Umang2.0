<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use App\Http\Resources\DoctorResource;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function index(Request $request)
    {
        $query = Doctor::with(['user', 'speciality']);

        if ($request->has('speciality_id')) {
            $query->where('speciality_id', $request->speciality_id);
        }
        
        if ($request->has('dept')) {
            $dept = $request->dept;
            $query->whereHas('speciality', function($q) use ($dept) {
                $q->where('slug', $dept)->orWhere('name', 'like', "%$dept%");
            });
        }
        
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->whereHas('user', function($uq) use ($search) {
                    $uq->where('name', 'like', "%$search%");
                })
                ->orWhereHas('speciality', function($sq) use ($search) {
                    $sq->where('name', 'like', "%$search%");
                });
            });
        }

        return DoctorResource::collection($query->paginate(12));
    }

    public function show($id)
    {
        $doctor = Doctor::with(['user', 'speciality'])->findOrFail($id);
        return new DoctorResource($doctor);
    }
}