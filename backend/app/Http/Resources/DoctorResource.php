<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DoctorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->user->name,
            'dept' => $this->speciality->name,
            'deptSlug' => $this->speciality->slug,
            'gender' => $this->gender ?? 'Male', // Fallback
            'image' => $this->image,
            'role' => $this->role ?? 'Consultant',
            'exp' => $this->experience,
            'rating' => $this->rating,
            'cases' => $this->cases_handled,
            'loc' => $this->location,
            'about' => $this->bio,
            'tags' => $this->tags ?? [$this->speciality->name],
            'nextSlot' => $this->next_available_slot ?? 'Available'
        ];
    }
}
