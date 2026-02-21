<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Speciality;

class SpecialitySeeder extends Seeder
{
    public function run(): void
    {
        $specialities = [
            ['name' => 'Cardiac Sciences', 'slug' => 'cardiac', 'icon' => 'FaHeartbeat', 'description' => 'Advanced cardiac care unit.'],
            ['name' => 'Neurology', 'slug' => 'neuro', 'icon' => 'FaBrain', 'description' => 'Comprehensive neurological care.'],
            ['name' => 'Orthopedics', 'slug' => 'ortho', 'icon' => 'FaBone', 'description' => 'Joint replacement and trauma care.'],
            ['name' => 'Gastroenterology', 'slug' => 'gastro', 'icon' => 'FaSyringe', 'description' => 'Digestive health and liver care.'],
            ['name' => 'Pediatrics', 'slug' => 'pediatrics', 'icon' => 'FaBaby', 'description' => 'Child health and neonatology.'],
            ['name' => 'Dermatology', 'slug' => 'dermatology', 'icon' => 'FaAllergies', 'description' => 'Skin, hair, and nail care.'],
            ['name' => 'ENT', 'slug' => 'ent', 'icon' => 'FaDeaf', 'description' => 'Ear, Nose, and Throat specialists.'],
            ['name' => 'General Surgery', 'slug' => 'surgery', 'icon' => 'FaUserMd', 'description' => 'Laparoscopic and general surgeries.'],
            ['name' => 'Oncology', 'slug' => 'oncology', 'icon' => 'FaRibbon', 'description' => 'Cancer care and chemotherapy.'],
            ['name' => 'Pulmonology', 'slug' => 'pulmonology', 'icon' => 'FaLungs', 'description' => 'Respiratory and sleep medicine.'],
            ['name' => 'Urology', 'slug' => 'urology', 'icon' => 'FaStethoscope', 'description' => 'Urinary tract and kidney surgery.'],
            ['name' => 'Nephrology', 'slug' => 'nephrology', 'icon' => 'FaMicroscope', 'description' => 'Kidney care and dialysis.'],
            ['name' => 'Gynecology', 'slug' => 'gynecology', 'icon' => 'FaFemale', 'description' => 'Women\'s health and maternity.'],
            ['name' => 'Internal Medicine', 'slug' => 'internal', 'icon' => 'FaPills', 'description' => 'General physician and preventive care.'],
        ];

        foreach ($specialities as $spec) {
            Speciality::updateOrCreate(['slug' => $spec['slug']], $spec);
        }
    }
}
