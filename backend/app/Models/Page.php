<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $fillable = [
        'slug',
        'title',
        'content_json',
        'content_html',
        'seo_title',
        'seo_description',
        'status',
        'updated_by',
    ];

    protected $casts = [
        'content_json' => 'array',
    ];

    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
}
