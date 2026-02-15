<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class IcuUnit extends Model
{
    protected $fillable = ['name', 'slug', 'beds', 'description', 'image', 'details', 'sort_order'];

    protected $casts = [
        'details' => 'array'
    ];
}
