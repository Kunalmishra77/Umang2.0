<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InsuranceCompany extends Model
{
    protected $fillable = ['name', 'is_gipsa_group', 'note'];

    protected $casts = [
        'is_gipsa_group' => 'boolean',
    ];

    public function tpas()
    {
        return $this->belongsToMany(Tpa::class, 'insurance_company_tpa');
    }
}
