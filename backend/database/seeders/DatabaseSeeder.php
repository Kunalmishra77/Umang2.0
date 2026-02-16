<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Doctor;
use App\Models\Speciality;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create User (Admin/Doctor)
        $user = User::create([
            'name' => 'Dr. Rajesh Kumar',
            'email' => 'rajesh@umang.com',
            'password' => Hash::make('password'),
        ]);

        $user2 = User::create([
             'name' => 'Dr. Priya Sharma',
             'email' => 'priya@umang.com',
             'password' => Hash::make('password'),
        ]);

        // Create Specialities
        $cardiac = Speciality::create(['name' => 'Cardiac Care', 'icon' => 'FaHeartbeat']);
        $gastro = Speciality::create(['name' => 'Gastroenterology', 'icon' => 'FaSyringe']);
        $neuro = Speciality::create(['name' => 'Neuro Sciences', 'icon' => 'FaBrain']);
        $ortho = Speciality::create(['name' => 'Orthopaedics', 'icon' => 'FaBone']);
        $pulmo = Speciality::create(['name' => 'Pulmonology', 'icon' => 'FaLungs']);
        $surgery = Speciality::create(['name' => 'General Surgery', 'icon' => 'FaUserMd']);
        $nephro = Speciality::create(['name' => 'Nephrology', 'icon' => 'FaMicroscope']);
        $urology = Speciality::create(['name' => 'Urology', 'icon' => 'FaStethoscope']);

        // Create Doctors
        Doctor::create([
            'user_id' => $user->id,
            'speciality_id' => $cardiac->id,
            'bio' => 'Dr. Rajesh Kumar is a renowned cardiac surgeon at Umang Hospital with over 15 years of experience in cardiac care and surgeries.',
            'fee' => 800,
            'location' => 'Gurugram, Haryana',
            'image' => 'https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg',
            'experience' => '15 Years',
            'rating' => 4.8,
            'reviews_count' => 127,
        ]);

        Doctor::create([
            'user_id' => $user2->id,
            'speciality_id' => $neuro->id,
            'bio' => 'Dr. Priya Sharma specializes in neuro sciences with extensive experience in neurological disorders and treatments.',
            'fee' => 750,
            'location' => 'Gurugram, Haryana',
            'image' => 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg',
            'experience' => '12 Years',
            'rating' => 4.9,
            'reviews_count' => 89,
        ]);
        
        // Add more mock doctors
        $names = ['Dr. Amit Singh', 'Dr. Meera Patel', 'Dr. Vikram Rao', 'Dr. Sunita Jain'];
        $specs = [$ortho, $gastro, $pulmo, $surgery];
        $imgs = [
            'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg',
            'https://img.freepik.com/free-photo/attractive-young-female-doctor-smiling-camera_171337-18451.jpg',
            'https://img.freepik.com/free-photo/doctor-offering-medical-advice_23-2147796536.jpg',
            'https://img.freepik.com/free-photo/confident-female-doctor-hospital-uniform_23-2147796538.jpg'
        ];

        foreach($names as $index => $name) {
             $u = User::create([
                'name' => $name,
                'email' => strtolower(str_replace(' ', '.', $name)) . '@umang.com',
                'password' => Hash::make('password'),
             ]);

             Doctor::create([
                'user_id' => $u->id,
                'speciality_id' => $specs[$index]->id,
                'bio' => "$name is a specialist in " . $specs[$index]->name . " at Umang Hospital, Gurugram.",
                'fee' => rand(600, 900),
                'location' => 'Gurugram, Haryana',
                'image' => $imgs[$index],
                'experience' => rand(8, 20) . ' Years',
                'rating' => rand(42, 49) / 10,
                'reviews_count' => rand(50, 150),
            ]);
        }

        $this->call(ContentSeeder::class);
    }
}