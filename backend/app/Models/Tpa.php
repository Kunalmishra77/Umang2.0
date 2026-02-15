<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tpa extends Model
{
    protected $fillable = ['name', 'note'];

    public function insuranceCompanies()
    {
        return $this->belongsToMany(InsuranceCompany::class, 'insurance_company_tpa');
    }
}
