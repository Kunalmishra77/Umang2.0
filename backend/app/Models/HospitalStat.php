<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HospitalStat extends Model
{
    protected $fillable = ['title', 'value', 'sort_order'];
}
