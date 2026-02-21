<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Medicine;
use App\Models\MedicineCategory;
use Illuminate\Http\Request;

class MedicineController extends Controller
{
    public function index(Request $request)
    {
        $query = Medicine::with('category');

        if ($request->has('category')) {
            $cat = $request->category;
            $query->whereHas('category', function($q) use ($cat) {
                $q->where('slug', $cat)->orWhere('name', 'like', "%$cat%");
            });
        }

        if ($request->has('search')) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        if ($request->has('featured') && $request->featured == 'true') {
            $query->where('is_featured', true);
        }

        return response()->json($query->paginate(20));
    }

    public function categories()
    {
        return response()->json(MedicineCategory::all());
    }

    public function featured()
    {
        return response()->json(Medicine::where('is_featured', true)->get());
    }
}
