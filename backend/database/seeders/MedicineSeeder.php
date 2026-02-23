<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Medicine;
use App\Models\MedicineCategory;

class MedicineSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Cardiac Care', 'slug' => 'cardiac-care', 'image' => '/assets/services/pharmacy-247/cardiac Care.png'],
            ['name' => 'Diabetes', 'slug' => 'diabetes-care', 'image' => '/assets/services/pharmacy-247/Diabetes Care.png'],
            ['name' => 'Personal Care', 'slug' => 'personal-care', 'image' => '/assets/services/pharmacy-247/personal care.png'],
            ['name' => 'Medical Devices', 'slug' => 'medical-devices', 'image' => '/assets/services/pharmacy-247/devices.png'],
            ['name' => 'Mother & Baby', 'slug' => 'mother-baby', 'image' => '/assets/services/pharmacy-247/mother & baby.png']
        ];

        foreach ($categories as $cat) {
            MedicineCategory::updateOrCreate(['slug' => $cat['slug']], $cat);
        }

        // Featured Products
        $featured = [
            [
                'name' => 'Accu-Chek Active Strips',
                'slug' => 'accu-chek-active-strips',
                'category_slug' => 'diabetes-care',
                'pack_size' => '50 Strips',
                'image' => '/assets/services/pharmacy-247/Accu-Chek Active Strips.png',
                'is_featured' => true
            ],
            [
                'name' => 'Omron BP Monitor',
                'slug' => 'omron-bp-monitor',
                'category_slug' => 'medical-devices',
                'pack_size' => '1 Unit',
                'image' => '/assets/services/pharmacy-247/devices.png',
                'is_featured' => true
            ],
            [
                'name' => 'Multivitamin Complex',
                'slug' => 'multivitamin-complex',
                'category_slug' => 'personal-care',
                'pack_size' => '60 Tabs',
                'image' => '/assets/services/pharmacy-247/Multivitamin Complex.png',
                'is_featured' => true
            ],
            [
                'name' => 'N95 Face Masks',
                'slug' => 'n95-face-masks',
                'category_slug' => 'personal-care',
                'pack_size' => 'Pack of 5',
                'image' => '/assets/services/pharmacy-247/N95 Face Masks.png',
                'is_featured' => true
            ]
        ];

        foreach ($featured as $feat) {
            $cat = MedicineCategory::where('slug', $feat['category_slug'])->first();
            Medicine::updateOrCreate(['slug' => $feat['slug']], [
                'name' => $feat['name'],
                'medicine_category_id' => $cat->id,
                'pack_size' => $feat['pack_size'],
                'image' => $feat['image'],
                'is_featured' => true,
                'price' => rand(100, 2000)
            ]);
        }

        // Generate 100+ random medicines
        $faker = \Faker\Factory::create();
        $cats = MedicineCategory::all();

        foreach($cats as $cat) {
            for($i=0; $i<35; $i++) {
                $name = $faker->words(3, true);
                $slug = \Illuminate\Support\Str::slug($name) . '-' . uniqid();
                
                Medicine::create([
                    'medicine_category_id' => $cat->id,
                    'name' => ucfirst($name),
                    'slug' => $slug,
                    'pack_size' => rand(10, 100) . ' ' . $faker->randomElement(['Tabs', 'Caps', 'ml', 'g']),
                    'price' => $faker->randomFloat(2, 50, 5000),
                    'image' => $cat->image, // Reuse category image as placeholder
                    'description' => $faker->sentence(),
                    'is_featured' => false
                ]);
            }
        }
    }
}
