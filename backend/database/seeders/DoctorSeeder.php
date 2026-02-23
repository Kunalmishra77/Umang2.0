<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Doctor;
use App\Models\Speciality;
use Illuminate\Support\Facades\Hash;

class DoctorSeeder extends Seeder
{
    public function run(): void
    {
        $doctors = [
            // Doctors from JSON
            [
                'name' => 'Dr. Manmohan',
                'slug' => 'surgery',
                'gender' => 'Male',
                'role' => 'Senior Consultant',
                'exp' => '18+ Years',
                'rating' => 4.9,
                'cases' => 4500,
                'bio' => 'Dr. Manmohan is a highly experienced General Surgeon specializing in minimally invasive and laparoscopic procedures with over 18 years of clinical mastery.',
                'tags' => ["Senior Surgeon", "Laparoscopy Expert"],
                'image' => '/doctors-images/dr-manmohan.svg'
            ],
            [
                'name' => 'Dr. Rohit Arora',
                'slug' => 'ortho',
                'gender' => 'Male',
                'role' => 'Senior Consultant',
                'exp' => '16+ Years',
                'rating' => 4.7,
                'cases' => 3000,
                'bio' => 'Dr. Rohit Arora specializes in joint replacement and trauma surgeries with a focus on rapid recovery protocols and 16+ years of expertise.',
                'tags' => ["Joint Replacement", "Trauma Specialist"],
                'image' => '/doctors-images/dr-rohit.svg'
            ],
            [
                'name' => 'Dr. Rukmaji Jagtap',
                'slug' => 'neuro',
                'gender' => 'Male',
                'role' => 'Senior Consultant',
                'exp' => '20+ Years',
                'rating' => 4.8,
                'cases' => 2500,
                'bio' => 'Dr. Rukmaji Jagtap is a distinguished neurologist with 20+ years expertise in stroke management and chronic neurological disorders.',
                'tags' => ["Stroke Expert", "Neurology"],
                'image' => '/doctors-images/dr-rukmaji.svg'
            ],
            [
                'name' => 'Dr. Sahil Kapoor',
                'slug' => 'ent',
                'gender' => 'Male',
                'role' => 'Senior Consultant',
                'exp' => '15+ Years',
                'rating' => 4.6,
                'cases' => 2000,
                'bio' => 'Dr. Sahil Kapoor provides comprehensive care for Ear, Nose, and Throat conditions, including endoscopic sinus surgeries.',
                'tags' => ["ENT Specialist", "Endoscopic Surgery"],
                'image' => '/doctors-images/dr-sahil.svg'
            ],
            [
                'name' => 'Dr. Mayank Singh',
                'slug' => 'ortho',
                'gender' => 'Male',
                'role' => 'Senior Consultant',
                'exp' => '15+ Years',
                'rating' => 4.7,
                'cases' => 1800,
                'bio' => 'Dr. Mayank Singh is dedicated to sports medicine and arthroscopic procedures for joint preservation with 15 years of experience.',
                'tags' => ["Sports Medicine", "Arthroscopy"],
                'image' => '/doctors-images/dr-mayank.svg'
            ],
            [
                'name' => 'Dr. Anuj',
                'slug' => 'internal',
                'gender' => 'Male',
                'role' => 'Senior Consultant',
                'exp' => '15+ Years',
                'rating' => 4.5,
                'cases' => 5000,
                'bio' => 'Dr. Anuj focuses on preventive healthcare and management of chronic lifestyle diseases like diabetes and hypertension.',
                'tags' => ["Physician", "Diabetes Care"],
                'image' => '/doctors-images/dr-anuj.svg'
            ],
            [
                'name' => 'Dr. Nitin',
                'slug' => 'cardiac',
                'gender' => 'Male',
                'role' => 'Senior Consultant',
                'exp' => '17+ Years',
                'rating' => 4.9,
                'cases' => 4000,
                'bio' => 'Dr. Nitin is an interventional cardiologist expert in angiography, angioplasty, and cardiac critical care with 17+ years of experience.',
                'tags' => ["Cardiologist", "Interventional"],
                'image' => '/doctors-images/dr-nitin.svg'
            ],
            [
                'name' => 'Dr. Sarah Johnson',
                'slug' => 'oncology',
                'gender' => 'Female',
                'role' => 'Senior Consultant',
                'exp' => '16+ Years',
                'rating' => 4.9,
                'cases' => 3500,
                'bio' => 'Dr. Sarah Johnson is a leading medical oncologist specializing in breast and gynecological cancers.',
                'tags' => ["Cancer Expert", "Chemotherapy"],
                'image' => '/doctors-images/dr-rukmaji.svg' // Placeholder
            ],
            [
                'name' => 'Dr. Rakesh Gupta',
                'slug' => 'gastro',
                'gender' => 'Male',
                'role' => 'Medical Director & Head',
                'exp' => '35+ Years',
                'rating' => 5.0,
                'cases' => 8000,
                'bio' => 'Dr. Rakesh Gupta is a veteran gastroenterologist with extensive experience in therapeutic endoscopy and liver transplant.',
                'tags' => ["Liver Expert", "Endoscopy Specialist"],
                'image' => '/assets/About/Dr. Rakesh Gupta.png'
            ],
            [
                'name' => 'Dr. Anita Sharma',
                'slug' => 'gynecology',
                'gender' => 'Female',
                'role' => 'Senior Consultant',
                'exp' => '18+ Years',
                'rating' => 4.8,
                'cases' => 4200,
                'bio' => 'Dr. Anita Sharma specializes in high-risk pregnancies and laparoscopic gynecological surgeries with 18+ years of expertise.',
                'tags' => ["Maternity Expert", "Gynae Surgeon"],
                'image' => '/doctors-images/dr-rukmaji.svg' // Placeholder
            ],
            [
                'name' => 'Dr. Vikram Sethi',
                'slug' => 'cardiac',
                'gender' => 'Male',
                'role' => 'Director',
                'exp' => '35+ Years',
                'rating' => 5.0,
                'cases' => 12000,
                'bio' => 'Dr. Vikram Sethi is a founder and visionary behind Umang Hospital, with global recognition in cardiothoracic surgery.',
                'tags' => ["Legendary Surgeon", "Heart Expert"],
                'image' => '/doctors-images/dr-manmohan.svg' // Placeholder
            ],
            [
                'name' => 'Dr. Priya Varma',
                'slug' => 'pulmonology',
                'gender' => 'Female',
                'role' => 'Senior Consultant',
                'exp' => '15+ Years',
                'rating' => 4.7,
                'cases' => 2800,
                'bio' => 'Dr. Priya Varma is an expert in managing chronic respiratory conditions and sleep disorders with 15+ years of experience.',
                'tags' => ["Asthma Expert", "Sleep Medicine"],
                'image' => '/doctors-images/dr-rukmaji.svg' // Placeholder
            ],
            [
                'name' => 'Dr. Sameer Khan',
                'slug' => 'nephrology',
                'gender' => 'Male',
                'role' => 'Consultant',
                'exp' => '12+ Years',
                'rating' => 4.6,
                'cases' => 1500,
                'bio' => 'Dr. Sameer Khan specializes in renal replacement therapy and management of acute kidney injuries.',
                'tags' => ["Dialysis Expert", "Kidney Care"],
                'image' => '/doctors-images/dr-rohit.svg' // Placeholder
            ],
            [
                'name' => 'Dr. Kavita Reddy',
                'slug' => 'pediatrics',
                'gender' => 'Female',
                'role' => 'Senior Consultant',
                'exp' => '14+ Years',
                'rating' => 4.8,
                'cases' => 3200,
                'bio' => 'Dr. Kavita Reddy is a dedicated pediatrician with expertise in neonatal care and childhood infectious diseases.',
                'tags' => ["Child Specialist", "Vaccination Expert"],
                'image' => '/doctors-images/dr-rukmaji.svg' // Placeholder
            ],
            [
                'name' => 'Dr. Amit Bhalla',
                'slug' => 'urology',
                'gender' => 'Male',
                'role' => 'Senior Consultant',
                'exp' => '19+ Years',
                'rating' => 4.7,
                'cases' => 2600,
                'bio' => 'Dr. Amit Bhalla is a leading urologist specializing in laser stone surgeries and prostate management.',
                'tags' => ["Laser Surgeon", "Urology"],
                'image' => '/doctors-images/dr-sahil.svg' // Placeholder
            ],
            // Additional generated doctors to reach 30+
            [
                'name' => 'Dr. Neha Gupta',
                'slug' => 'dermatology',
                'gender' => 'Female',
                'role' => 'Consultant',
                'exp' => '8+ Years',
                'rating' => 4.5,
                'cases' => 1200,
                'bio' => 'Dr. Neha Gupta is a dermatologist with a focus on cosmetic dermatology and laser treatments.',
                'tags' => ["Skin Specialist", "Laser"],
                'image' => '/doctors-images/dr-rukmaji.svg'
            ],
            [
                'name' => 'Dr. Arjun Mehta',
                'slug' => 'ortho',
                'gender' => 'Male',
                'role' => 'Consultant',
                'exp' => '10+ Years',
                'rating' => 4.6,
                'cases' => 1500,
                'bio' => 'Dr. Arjun Mehta specializes in sports injuries and rehabilitation.',
                'tags' => ["Sports Injury", "Rehab"],
                'image' => '/doctors-images/dr-mayank.svg'
            ],
            [
                'name' => 'Dr. Simran Kaur',
                'slug' => 'gynecology',
                'gender' => 'Female',
                'role' => 'Consultant',
                'exp' => '9+ Years',
                'rating' => 4.7,
                'cases' => 1800,
                'bio' => 'Dr. Simran Kaur is passionate about women\'s wellness and adolescent health.',
                'tags' => ["Women Wellness", "PCOS"],
                'image' => '/doctors-images/dr-rukmaji.svg'
            ],
            [
                'name' => 'Dr. Rajesh Verma',
                'slug' => 'internal',
                'gender' => 'Male',
                'role' => 'Senior Consultant',
                'exp' => '22+ Years',
                'rating' => 4.8,
                'cases' => 6000,
                'bio' => 'Dr. Rajesh Verma is a senior physician with vast experience in infectious diseases.',
                'tags' => ["Infectious Diseases", "Physician"],
                'image' => '/doctors-images/dr-anuj.svg'
            ],
            [
                'name' => 'Dr. Sneha Patil',
                'slug' => 'pediatrics',
                'gender' => 'Female',
                'role' => 'Consultant',
                'exp' => '7+ Years',
                'rating' => 4.6,
                'cases' => 1000,
                'bio' => 'Dr. Sneha Patil loves working with children and focuses on developmental pediatrics.',
                'tags' => ["Child Development", "Pediatrics"],
                'image' => '/doctors-images/dr-rukmaji.svg'
            ],
             [
                'name' => 'Dr. Alok Mishra',
                'slug' => 'cardiac',
                'gender' => 'Male',
                'role' => 'Consultant',
                'exp' => '11+ Years',
                'rating' => 4.7,
                'cases' => 2200,
                'bio' => 'Dr. Alok Mishra is a cardiologist with expertise in non-invasive cardiology.',
                'tags' => ["Non-invasive", "Cardiology"],
                'image' => '/doctors-images/dr-nitin.svg'
            ],
            [
                'name' => 'Dr. Vandana Singh',
                'slug' => 'neuro',
                'gender' => 'Female',
                'role' => 'Senior Consultant',
                'exp' => '18+ Years',
                'rating' => 4.8,
                'cases' => 3000,
                'bio' => 'Dr. Vandana Singh is a neurophysician specializing in headache and migraine management.',
                'tags' => ["Migraine", "Headache"],
                'image' => '/doctors-images/dr-rukmaji.svg'
            ],
            [
                'name' => 'Dr. Rahul Sharma',
                'slug' => 'surgery',
                'gender' => 'Male',
                'role' => 'Consultant',
                'exp' => '9+ Years',
                'rating' => 4.5,
                'cases' => 1400,
                'bio' => 'Dr. Rahul Sharma is a general surgeon with a special interest in hernia repairs.',
                'tags' => ["Hernia", "General Surgery"],
                'image' => '/doctors-images/dr-manmohan.svg'
            ],
            [
                'name' => 'Dr. Pooja Malhotra',
                'slug' => 'dermatology',
                'gender' => 'Female',
                'role' => 'Senior Consultant',
                'exp' => '14+ Years',
                'rating' => 4.7,
                'cases' => 2500,
                'bio' => 'Dr. Pooja Malhotra is a renowned aesthetic dermatologist.',
                'tags' => ["Aesthetics", "Anti-aging"],
                'image' => '/doctors-images/dr-rukmaji.svg'
            ],
            [
                'name' => 'Dr. Kunal Kapoor',
                'slug' => 'ent',
                'gender' => 'Male',
                'role' => 'Consultant',
                'exp' => '8+ Years',
                'rating' => 4.6,
                'cases' => 1100,
                'bio' => 'Dr. Kunal Kapoor specializes in voice disorders and laryngology.',
                'tags' => ["Voice", "ENT"],
                'image' => '/doctors-images/dr-sahil.svg'
            ],
             [
                'name' => 'Dr. Meenal Joshi',
                'slug' => 'gastro',
                'gender' => 'Female',
                'role' => 'Consultant',
                'exp' => '10+ Years',
                'rating' => 4.7,
                'cases' => 1600,
                'bio' => 'Dr. Meenal Joshi is a gastroenterologist focusing on IBD management.',
                'tags' => ["IBD", "Gut Health"],
                'image' => '/doctors-images/dr-rukmaji.svg'
            ],
            [
                'name' => 'Dr. Sanjay Gupta',
                'slug' => 'oncology',
                'gender' => 'Male',
                'role' => 'Senior Consultant',
                'exp' => '20+ Years',
                'rating' => 4.9,
                'cases' => 4000,
                'bio' => 'Dr. Sanjay Gupta is a surgical oncologist with vast experience in head and neck cancers.',
                'tags' => ["Surgical Oncology", "Head & Neck"],
                'image' => '/doctors-images/dr-manmohan.svg'
            ],
            [
                'name' => 'Dr. Ritu Benoit',
                'slug' => 'psychiatry',
                'gender' => 'Female',
                'role' => 'Consultant',
                'exp' => '12+ Years',
                'rating' => 4.8,
                'cases' => 2000,
                'bio' => 'Dr. Ritu Benoit is a psychiatrist dedicated to mental health and well-being.',
                'tags' => ["Mental Health", "Psychiatry"],
                'image' => '/doctors-images/dr-rukmaji.svg'
            ],
            [
                'name' => 'Dr. Harish Kumar',
                'slug' => 'urology',
                'gender' => 'Male',
                'role' => 'Consultant',
                'exp' => '11+ Years',
                'rating' => 4.6,
                'cases' => 1800,
                'bio' => 'Dr. Harish Kumar is a urologist with expertise in andrology.',
                'tags' => ["Andrology", "Mens Health"],
                'image' => '/doctors-images/dr-sahil.svg'
            ],
             [
                'name' => 'Dr. Swati Deshpande',
                'slug' => 'gynecology',
                'gender' => 'Female',
                'role' => 'Consultant',
                'exp' => '8+ Years',
                'rating' => 4.7,
                'cases' => 1300,
                'bio' => 'Dr. Swati Deshpande specializes in infertility and IVF treatments.',
                'tags' => ["IVF", "Fertility"],
                'image' => '/doctors-images/dr-rukmaji.svg'
            ],
            [
                'name' => 'Dr. Manoj Tiwari',
                'slug' => 'ortho',
                'gender' => 'Male',
                'role' => 'Senior Consultant',
                'exp' => '21+ Years',
                'rating' => 4.9,
                'cases' => 5000,
                'bio' => 'Dr. Manoj Tiwari is a senior orthopedic surgeon specializing in knee and hip replacements.',
                'tags' => ["Knee Replacement", "Hip Specialist"],
                'image' => '/doctors-images/dr-rohit.svg'
            ],
            [
                'name' => 'Dr. Richa Gupta',
                'slug' => 'internal',
                'gender' => 'Female',
                'role' => 'Consultant',
                'exp' => '10+ Years',
                'rating' => 4.6,
                'cases' => 2000,
                'bio' => 'Dr. Richa Gupta is a general physician with a focus on metabolic disorders and preventive care.',
                'tags' => ["Metabolic Care", "Prevention"],
                'image' => '/doctors-images/dr-rukmaji.svg'
            ],
            [
                'name' => 'Dr. Aryan Khan',
                'slug' => 'cardiac',
                'gender' => 'Male',
                'role' => 'Senior Consultant',
                'exp' => '15+ Years',
                'rating' => 4.8,
                'cases' => 3200,
                'bio' => 'Dr. Aryan Khan is an expert in clinical cardiology and advanced echocardiography.',
                'tags' => ["Echo Expert", "Cardiology"],
                'image' => '/doctors-images/dr-nitin.svg'
            ],
            [
                'name' => 'Dr. Deepali Singh',
                'slug' => 'pediatrics',
                'gender' => 'Female',
                'role' => 'Consultant',
                'exp' => '9+ Years',
                'rating' => 4.7,
                'cases' => 1800,
                'bio' => 'Dr. Deepali Singh specializes in adolescent health and childhood nutrition.',
                'tags' => ["Nutrition", "Adolescent Care"],
                'image' => '/doctors-images/dr-rukmaji.svg'
            ],
            [
                'name' => 'Dr. Vinod Kumar',
                'slug' => 'surgery',
                'gender' => 'Male',
                'role' => 'Senior Consultant',
                'exp' => '25+ Years',
                'rating' => 4.9,
                'cases' => 7000,
                'bio' => 'Dr. Vinod Kumar is a veteran in laparoscopic surgery and trauma management.',
                'tags' => ["Trauma Expert", "Laparoscopy"],
                'image' => '/doctors-images/dr-manmohan.svg'
            ]
        ];

        foreach ($doctors as $doc) {
            $user = User::create([
                'name' => $doc['name'],
                'email' => strtolower(str_replace(' ', '.', str_replace('Dr. ', '', $doc['name']))) . '@umang.com',
                'password' => Hash::make('password'),
            ]);

            $speciality = Speciality::where('slug', $doc['slug'])->first();
            
            // Fallback if speciality not found (e.g. psychiatry wasn't in seeder, map to neuro or internal)
            if (!$speciality) {
                 $speciality = Speciality::where('slug', 'internal')->first();
            }

            Doctor::create([
                'user_id' => $user->id,
                'speciality_id' => $speciality ? $speciality->id : 1,
                'bio' => $doc['bio'],
                'fee' => rand(800, 1500),
                'location' => 'Umang Hospital, Gurugram',
                'image' => $doc['image'],
                'experience' => $doc['exp'],
                'rating' => $doc['rating'],
                'reviews_count' => rand(50, 200),
                'role' => $doc['role'],
                'cases_handled' => $doc['cases'],
                'next_available_slot' => 'Today',
                'gender' => $doc['gender'],
                'tags' => $doc['tags']
            ]);
        }
    }
}
