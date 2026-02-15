<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\HospitalStat;
use App\Models\IcuUnit;
use App\Models\InsuranceCompany;
use App\Models\Tpa;
use App\Models\SiteNotice;
use Illuminate\Http\Request;

use App\Models\InsuranceInquiry;
use Illuminate\Support\Facades\Validator;

class CmsController extends Controller
{
    public function storeInquiry(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'company_name' => 'required|string',
            'patient_name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'policy_number' => 'nullable|string|max:100',
            'message' => 'nullable|string|max:1000',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $inquiry = InsuranceInquiry::create($request->all());

        return response()->json([
            'message' => 'Your inquiry has been submitted successfully. Our insurance desk will contact you shortly.',
            'inquiry' => $inquiry
        ], 201);
    }

    public function getPage($slug)
    {
        $page = Page::where('slug', $slug)->firstOrFail();
        return response()->json($page);
    }

    public function getStats()
    {
        $stats = HospitalStat::orderBy('sort_order')->get();
        return response()->json($stats);
    }

    public function getIcuUnits()
    {
        $units = IcuUnit::orderBy('sort_order')->get();
        return response()->json($units);
    }

    public function getIcuUnitBySlug($slug)
    {
        $unit = IcuUnit::where('slug', $slug)->firstOrFail();
        return response()->json($unit);
    }

    public function getInsuranceCompanies()
    {
        $companies = InsuranceCompany::with('tpas')->orderBy('name')->get();
        return response()->json($companies);
    }

    public function getTpas()
    {
        $tpas = Tpa::with('insuranceCompanies')->orderBy('name')->get();
        return response()->json($tpas);
    }

    public function getSiteNotice($key)
    {
        $notice = SiteNotice::where('key', $key)->first();
        return response()->json($notice);
    }
    
    public function getAllSiteNotices()
    {
        $notices = SiteNotice::all()->pluck('value', 'key');
        return response()->json($notices);
    }

    // Admin Methods (Simplified for now, should ideally be in a separate AdminCmsController)
    public function updatePage(Request $request, $id)
    {
        $page = Page::findOrFail($id);
        $page->update($request->all());
        return response()->json(['message' => 'Page updated successfully', 'page' => $page]);
    }

    public function updateStats(Request $request)
    {
        foreach ($request->all() as $statData) {
            HospitalStat::updateOrCreate(['id' => $statData['id'] ?? null], $statData);
        }
        return response()->json(['message' => 'Stats updated successfully']);
    }

    public function updateIcu(Request $request)
    {
        foreach ($request->all() as $unitData) {
            IcuUnit::updateOrCreate(['id' => $unitData['id'] ?? null], $unitData);
        }
        return response()->json(['message' => 'ICU units updated successfully']);
    }
}
