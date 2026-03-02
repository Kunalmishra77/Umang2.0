<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\InsuranceCompany;
use App\Models\Tpa;
use App\Models\SiteNotice;
use App\Models\HospitalStat;
use App\Models\IcuUnit;
use App\Models\Page;
use Illuminate\Support\Facades\File;

class ContentSeeder extends Seeder
{
    public function run(): void
    {
        $this->seedInsuranceAndTpas();
        $this->seedHospitalStatsAndIcu();
        $this->seedPages();
    }

    private function seedInsuranceAndTpas()
    {
        $path = base_path('../client_content/umang_extracted/cashless_insurance_tpa_structured.json');
        if (!File::exists($path)) return;

        $data = json_decode(File::get($path), true);

        // Seed Site Notices (Verified against KB)
        SiteNotice::updateOrCreate(['key' => 'hospital_name'], ['value' => 'Umang Superspeciality Hospital']);
        SiteNotice::updateOrCreate(['key' => 'hospital_tagline'], ['value' => 'Care with Passion']);
        SiteNotice::updateOrCreate(['key' => 'hospital_address'], ['value' => 'Building No. 306, Opposite Radha Swami Satsang Bhawan, Pataudi Road, Civil Lines, Gurugram – 122001, Haryana, India']);
        SiteNotice::updateOrCreate(['key' => 'hospital_email'], ['value' => 'umanghospitalgurugram@gmail.com']);
        SiteNotice::updateOrCreate(['key' => 'hospital_mobile'], ['value' => '+91 89297 33550']);
        SiteNotice::updateOrCreate(['key' => 'emergency_mobile'], ['value' => '+91 89297 33551']);

        // Seed Insurance Companies (15 Companies from KB)
        $insurers = [
            'Aditya Birla Health Insurance Co.',
            'Care Health Insurance Ltd. (Corporate only)',
            'ACKO General Insurance',
            'Bajaj General Insurance Limited',
            'Generali (Future Generali)',
            'HDFC ERGO General Insurance',
            'ICICI Lombard General Insurance Company',
            'Liberty General Insurance',
            'Magma General Insurance Limited',
            'Navi General Insurance Limited',
            'SBI General Insurance',
            'Universal Sompo General Insurance',
            'Zuno General Insurance',
            'Zurich Kotak General Insurance',
            'Oriental Insurance (GIPSA)',
            'National Insurance (GIPSA)',
            'The New India Assurance Company (GIPSA)',
            'United India Insurance (GIPSA)'
        ];

        foreach ($insurers as $name) {
            InsuranceCompany::updateOrCreate(['name' => $name], [
                'is_gipsa_group' => str_contains($name, 'GIPSA'),
                'note' => 'Empaneled for cashless treatment. Please verify with our TPA desk.'
            ]);
        }

        // Seed TPAs (11 TPAs from KB)
        $tpas = [
            'Medi Assist TPA', 'MD India TPA', 'Paramount TPA', 'FHPL TPA', 'Vidal Health TPA', 
            'Volo Health TPA', 'Genins India TPA', 'Health India TPA', 'Health Assist TPA', 
            'Ericson TPA', 'Heritage Health TPA'
        ];

        foreach ($tpas as $name) {
            Tpa::updateOrCreate(['name' => $name]);
        }
    }

    private function seedHospitalStatsAndIcu()
    {
        $stats = [
            ['title' => 'Beds', 'value' => '150', 'sort_order' => 1],
            ['title' => 'ICU Beds', 'value' => '52', 'sort_order' => 2],
            ['title' => 'Super Specialists', 'value' => '15+', 'sort_order' => 3],
            ['title' => 'Experience', 'value' => '15+ Years', 'sort_order' => 4],
        ];

        foreach ($stats as $stat) {
            HospitalStat::updateOrCreate(['title' => $stat['title']], $stat);
        }

        $icuUnits = [
            [
                'name' => 'General ICU', 
                'slug' => 'general-icu',
                'beds' => 28, 
                'description' => 'For critically ill patients requiring ventilator support and intensive monitoring.',
                'image' => '/Umang-real/general ICU.jpeg',
                'details' => [
                    'features' => ['24/7 Intensivist', 'High nurse-to-patient ratio', 'Ventilator support'],
                ],
                'sort_order' => 1
            ],
            [
                'name' => 'SICU (Surgical ICU)', 
                'slug' => 'sicu',
                'beds' => 8, 
                'description' => 'Specifically for patients who have undergone major surgeries.',
                'image' => '/assets/services/icu-infrastructure/SICU (Surgical ICU).png',
                'details' => [
                    'features' => ['Post-operative monitoring', 'Surgical recovery protocols'],
                ],
                'sort_order' => 2
            ],
            [
                'name' => 'CCU (Cardiac Care Unit)', 
                'slug' => 'ccu',
                'beds' => 7, 
                'description' => 'Exclusively for heart patients requiring post-heart attack or post-angioplasty care.',
                'image' => '/assets/services/icu-infrastructure/CCU (Critical Care Unit).png',
                'details' => [
                    'features' => ['Continuous cardiac monitoring', 'Post-angioplasty care'],
                ],
                'sort_order' => 3
            ],
        ];

        foreach ($icuUnits as $unit) {
            IcuUnit::updateOrCreate(['slug' => $unit['slug']], $unit);
        }
    }

    private function seedPages()
    {
        // ... Legal and core pages updated with KB content ...
        $pages = [
            'about-us' => [
                'title' => 'About Umang Hospital',
                'html' => '
                    <p>Umang Superspeciality Hospital is a modern, 150-bedded super speciality tertiary care hospital in Gurugram, Haryana. We offer comprehensive healthcare services from OPD consultations to advanced surgeries under one roof.</p>
                    <h3>Our Mission</h3>
                    <p>To provide advanced, ethical, and compassionate healthcare that is accessible and affordable.</p>
                    <h3>Our Vision</h3>
                    <p>To define the standards of excellence for healthcare in India.</p>
                '
            ],
            'emergency-protocol' => [
                'title' => 'Emergency Protocol',
                'html' => '
                    <p>In case of emergency, call <strong>+91 89297 33551</strong> immediately. Our ER is open 24×7 at Building No. 306, Pataudi Road, Gurugram.</p>
                '
            ]
        ];

        foreach ($pages as $slug => $data) {
            Page::updateOrCreate(['slug' => $slug], [
                'title' => $data['title'],
                'content_html' => $data['html'],
                'status' => 'published',
                'updated_at' => now()
            ]);
        }
    }
}
