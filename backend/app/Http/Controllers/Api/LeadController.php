<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CallbackRequest;
use App\Models\AppointmentRequest;
use App\Models\ContactInquiry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LeadController extends Controller
{
    public function callback(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'message' => 'nullable|string',
            'speciality' => 'nullable|string',
            'source_page' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $callback = CallbackRequest::create($request->all());

        return response()->json([
            'message' => 'Callback request received. We will call you soon.',
            'id' => $callback->id
        ], 201);
    }

    public function appointment(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'department' => 'nullable|string',
            'preferred_date' => 'nullable|date',
            'preferred_time' => 'nullable|string',
            'message' => 'nullable|string',
            'source_page' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $appointment = AppointmentRequest::create($request->all());

        return response()->json([
            'message' => 'Appointment request submitted. Our team will contact you to confirm.',
            'id' => $appointment->id
        ], 201);
    }

    public function contact(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'nullable|email|max:255',
            'inquiry_type' => 'nullable|string',
            'message' => 'required|string',
            'source_page' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $inquiry = ContactInquiry::create($request->all());

        return response()->json([
            'message' => 'Your inquiry has been submitted. Thank you for contacting us.',
            'id' => $inquiry->id
        ], 201);
    }
}
