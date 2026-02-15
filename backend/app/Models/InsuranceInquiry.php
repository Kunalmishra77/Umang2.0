<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InsuranceInquiry extends Model
{
    protected $fillable = [
        'company_name',
        'patient_name',
        'phone',
        'policy_number',
        'message',
        'status'
    ];
}
