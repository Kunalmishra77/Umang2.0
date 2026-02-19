<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AppointmentRequest extends Model
{
    protected $fillable = [
        'name',
        'phone',
        'department',
        'preferred_date',
        'preferred_time',
        'message',
        'source_page',
        'status'
    ];
}
