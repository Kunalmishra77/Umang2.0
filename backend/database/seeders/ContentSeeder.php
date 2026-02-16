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

        // Seed Site Notices (Disclaimers)
        SiteNotice::updateOrCreate(['key' => 'insurance_note'], ['value' => $data['insurance_note']]);
        SiteNotice::updateOrCreate(['key' => 'tpa_note'], ['value' => $data['tpa_note']]);
        
        if (isset($data['hospital_header'])) {
             SiteNotice::updateOrCreate(['key' => 'hospital_name'], ['value' => $data['hospital_header']['name']]);
             SiteNotice::updateOrCreate(['key' => 'hospital_address'], ['value' => $data['hospital_header']['address']]);
             SiteNotice::updateOrCreate(['key' => 'hospital_email'], ['value' => $data['hospital_header']['email']]);
             SiteNotice::updateOrCreate(['key' => 'hospital_mobile'], ['value' => $data['hospital_header']['mobile']]);
        }

        // Seed Insurance Companies
        foreach ($data['insurance_companies'] as $ins) {
            if ($ins['name'] === 'GIPSA PPN') continue; // Handled separately or as members
            
            InsuranceCompany::updateOrCreate(
                ['name' => $ins['name']],
                [
                    'is_gipsa_group' => $ins['is_group'] ?? false,
                    'note' => 'Authorized panel for cashless hospitalization. Please present your valid insurance ID card at admission.'
                ]
            );
        }

        foreach ($data['gipsa_ppn_members'] as $member) {
            InsuranceCompany::updateOrCreate(
                ['name' => $member],
                [
                    'is_gipsa_group' => true,
                    'note' => 'GIPSA PPN member. Cashless facility available as per standard GIPSA guidelines.'
                ]
            );
        }

        // Seed TPAs and relationships
        foreach ($data['tpas'] as $tpaData) {
            $tpa = Tpa::updateOrCreate(
                ['name' => $tpaData['name']],
                ['note' => null]
            );

            // Match associations to Insurance Companies
            if (isset($tpaData['associations'])) {
                $insIds = [];
                foreach ($tpaData['associations'] as $assoc) {
                    if (str_contains($assoc, 'GIPSA PPN')) {
                        $gipsaIds = InsuranceCompany::where('is_gipsa_group', true)->pluck('id')->toArray();
                        $insIds = array_merge($insIds, $gipsaIds);
                    } else {
                        $cleanedName = trim(str_replace(['--- Page 2 ---', '--- Page 3 ---', 'UMANG SUPERSPECIALITY HOSPITAL', 'Opp. Radha Swami Satsang, Main Pataudi Road, Gurugram', 'Email:', 'Mob:'], '', $assoc));
                        if (empty($cleanedName)) continue;
                        
                        $ins = InsuranceCompany::where('name', 'like', '%' . $cleanedName . '%')->first();
                        if ($ins) {
                            $insIds[] = $ins->id;
                        }
                    }
                }
                $tpa->insuranceCompanies()->sync(array_unique($insIds));
            }
        }
    }

    private function seedHospitalStatsAndIcu()
    {
        // From audit_report.json
        $stats = [
            ['title' => 'Beds', 'value' => '100+', 'sort_order' => 1],
            ['title' => 'Super Specialists', 'value' => '15+', 'sort_order' => 2],
            ['title' => 'Emergency Care', 'value' => '24/7', 'sort_order' => 3],
            ['title' => 'Experience', 'value' => '15+ Years', 'sort_order' => 4],
        ];

        foreach ($stats as $stat) {
            HospitalStat::updateOrCreate(['title' => $stat['title']], $stat);
        }

        $icuUnits = [
            [
                'name' => 'Advance ICU', 
                'slug' => 'advance-icu',
                'beds' => 12, 
                'description' => 'Our flagship multi-disciplinary unit for critically ill patients requiring continuous hemodynamic and respiratory support.',
                'image' => '/assets/images/infrastructure-icu.jpg',
                'details' => [
                    'technology' => [
                        ['title' => 'Advanced Ventilators', 'desc' => 'High-end invasive & non-invasive mechanical ventilation systems.'],
                        ['title' => 'Central Monitoring', 'desc' => '24/7 centralized patient monitoring station with real-time alerts.'],
                        ['title' => 'Dialysis Unit', 'desc' => 'Bedside SLED and CRRT support for critical kidney care.']
                    ],
                    'features' => [
                        'Zero-infection isolation rooms',
                        'Dedicated Intensivist 24/7',
                        'Advanced Hemodynamic Monitoring',
                        '1:1 Nursing for critical cases'
                    ],
                    'protocols' => 'Strict Hand Hygiene, VAP Bundle compliance, and Daily medical audits.'
                ],
                'sort_order' => 1
            ],
            [
                'name' => 'SICU (Surgical ICU)', 
                'slug' => 'sicu',
                'beds' => 4, 
                'description' => 'Specialized post-operative care unit focused on recovery from major neuro, ortho, and abdominal surgeries.',
                'image' => '/assets/images/infrastructure-ot.jpg',
                'details' => [
                    'technology' => [
                        ['title' => 'Pain Management', 'desc' => 'Patient-controlled analgesia and nerve block monitoring.'],
                        ['title' => 'Rapid Recovery', 'desc' => 'Enhanced recovery after surgery (ERAS) protocols.'],
                        ['title' => 'Wound Care', 'desc' => 'Advanced negative pressure wound therapy systems.']
                    ],
                    'features' => [
                        'Post-op stabilization specialized team',
                        'Direct link to Modular Operation Theatres',
                        'Early mobilization protocols',
                        'Neurological monitoring suites'
                    ],
                    'protocols' => 'Post-surgical pain management and specialized nursing care.'
                ],
                'sort_order' => 2
            ],
            [
                'name' => 'CCU (Critical Care Unit)', 
                'slug' => 'ccu',
                'beds' => 4, 
                'description' => 'A dedicated Cardiac Care Unit for acute cardiac emergencies, including heart attacks, arrhythmias, and post-cardiac interventions.',
                'image' => '/assets/images/department-nephrology.jpg',
                'details' => [
                    'technology' => [
                        ['title' => 'Cath Lab Sync', 'desc' => 'Seamless integration with the Cardiac Cath Lab for immediate transfers.'],
                        ['title' => 'IABP & ECMO', 'desc' => 'Intra-aortic balloon pump and ECMO support systems.'],
                        ['title' => '3D Echo', 'desc' => 'Advanced cardiac imaging at the bedside.']
                    ],
                    'features' => [
                        'ACLS certified cardiac nursing staff',
                        'Immediate access to world-class cardiologists',
                        'Emergency triage for chest pain',
                        '24/7 Cardiac intervention readiness'
                    ],
                    'protocols' => 'Door-to-balloon time optimization and acute stroke management bundles.'
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
        $path = base_path('../client_content/umang_extracted/audit_report.json');
        if (!File::exists($path)) return;

        $data = json_decode(File::get($path), true);
        
        foreach ($data['pages'] as $id => $pageData) {
            $slug = strtolower(str_replace([' ', '&', '/'], ['-', 'and', '-'], $pageData['title']));
            
            $content = "<h2>" . $pageData['title'] . "</h2><ul>";
            foreach ($pageData['items'] as $item) {
                $content .= "<li>" . $item . "</li>";
            }
            $content .= "</ul>";

            Page::updateOrCreate(
                ['slug' => $slug],
                [
                    'title' => $pageData['title'],
                    'content_html' => $content,
                    'status' => 'published',
                    'seo_title' => $pageData['title'] . " | Umang Hospital",
                    'seo_description' => "Information about " . $pageData['title'] . " at Umang Superspeciality Hospital, Gurugram.",
                ]
            );
        }
        
        // ENRICH SPECIFIC LEGAL PAGES WITH PROFESSIONAL CONTENT
        $legalPages = [
            'privacy-policy' => [
                'title' => 'Privacy Policy',
                'html' => '
                    <p>Umang Superspeciality Hospital ("we", "us", "our") is dedicated to maintaining the confidentiality and security of your personal health information. This Privacy Policy explains our practices regarding the collection and use of your data.</p>
                    
                    <h2>1. Information We Collect</h2>
                    <p>We collect information that identifies you as an individual or relates to an identifiable individual ("Personal Information") to provide better healthcare services. This includes:</p>
                    <ul>
                        <li><strong>Identity Data:</strong> Legal name, date of birth, gender, and photograph for identification.</li>
                        <li><strong>Contact Data:</strong> Residential address, personal email, and primary/secondary telephone numbers.</li>
                        <li><strong>Health Data:</strong> Comprehensive medical history, current symptoms, clinical diagnoses, treatment records, and laboratory results.</li>
                        <li><strong>Financial Data:</strong> Billing details, insurance policy information, and payment history.</li>
                    </ul>

                    <h2>2. How We Use Your Information</h2>
                    <p>Your Personal Information is used for clinical and administrative purposes, including:</p>
                    <ul>
                        <li>Scheduling clinical appointments and providing specialized medical consultations.</li>
                        <li>Coordinating multi-disciplinary care with other healthcare providers and specialists.</li>
                        <li>Processing insurance claims, hospital billing, and financial settlements.</li>
                        <li>Sending health-related reminders, follow-up notifications, and educational materials.</li>
                        <li>Complying with statutory reporting requirements and healthcare audits.</li>
                    </ul>

                    <h2>3. Disclosure of Information</h2>
                    <p>We do not sell your personal data. We may share information with third parties only when necessary for your treatment, as required by law, or with your explicit consent (e.g., to your insurance provider for cashless claims).</p>

                    <h2>4. Data Retention & Security</h2>
                    <p>We implement robust technical and organizational measures, including firewalls and data encryption, to protect your information from unauthorized access or disclosure. Clinical records are retained for the duration required by the Clinical Establishments Act.</p>

                    <h2>5. Your Rights</h2>
                    <p>You have the right to access your medical records, request corrections to personal data, and receive a summary of your treatment upon discharge.</p>
                '
            ],
            'legal-and-compliance' => [
                'title' => 'Legal & Compliance',
                'html' => '
                    <p>Umang Superspeciality Hospital operates in strict adherence to the healthcare laws of India and international medical ethics standards. Our compliance framework ensures safety and transparency.</p>
                    
                    <h2>1. Regulatory Approvals & Licensing</h2>
                    <p>Our facility is fully licensed and compliant with the following regulatory bodies:</p>
                    <ul>
                        <li><strong>Clinical Establishments Act:</strong> Registered under the Clinical Establishments (Registration and Regulation) Act.</li>
                        <li><strong>AERB Compliance:</strong> All radiology equipment (CT, MRI, X-Ray) is certified by the Atomic Energy Regulatory Board.</li>
                        <li><strong>Pollution Control:</strong> Bio-Medical Waste Management certified by the State Pollution Control Board.</li>
                        <li><strong>Fire Safety:</strong> Regular fire safety audits and valid No Objection Certificate (NOC).</li>
                    </ul>

                    <h2>2. Patient Rights & Responsibilities</h2>
                    <p>Every patient at Umang has the right to receive respectful care, privacy, and full information about their diagnosis and treatment options. Responsibilities include providing accurate health history and following prescribed treatment plans.</p>

                    <h2>3. Ethical Standards in Research</h2>
                    <p>We maintain a zero-tolerance policy towards unethical medical practices. Our clinical trials and research programs are overseen by an independent Institutional Ethics Committee (IEC) registered with the DCGI.</p>

                    <h2>4. Transparent Billing Policy</h2>
                    <p>We are committed to fair and transparent billing. Detailed cost estimates are provided for planned procedures, and daily billing updates are available upon request during hospitalization.</p>
                '
            ],
            'terms-of-service' => [
                'title' => 'Terms of Service',
                'html' => '
                    <p>By accessing Umang Hospital services, whether through our website or physical facility, you agree to comply with the following terms and conditions.</p>
                    
                    <h2>1. Admission & Clinical Treatment</h2>
                    <p>Admission is subject to the availability of beds and clinical requirements as determined by our emergency triage or consultant teams. Patients are required to provide accurate medical history and valid government-issued identification at the time of registration.</p>

                    <h2>2. Billing, Payments & Refunds</h2>
                    <p>Estimated costs provided at the time of admission are for indicative purposes and are subject to change based on the patient\'s clinical condition, length of stay, and required interventions. Full settlement of bills is required prior to discharge. Refund policies for advanced deposits follow standard hospital audit procedures.</p>

                    <h2>3. Code of Conduct & Hospital Environment</h2>
                    <p>We strive to maintain a quiet, healing environment. Any form of physical or verbal abuse towards hospital staff, fellow patients, or visitors is strictly prohibited and may lead to immediate discharge and legal action.</p>

                    <h2>4. Website Usage Disclaimer</h2>
                    <p>The information on this website is for educational purposes only and does not constitute medical advice. For emergencies, please contact our 24/7 helpline or visit the nearest emergency department.</p>
                '
            ],
            'patient-experience' => [
                'title' => 'Patient Experience',
                'html' => '
                    <p>At Umang Superspeciality Hospital, we believe that healing begins with a positive environment. Our patient experience program is designed to provide comfort, clarity, and compassion at every step of your journey.</p>
                    
                    <h2>1. Seamless Admission</h2>
                    <p>From the moment you walk through our doors, our guest relations team is here to assist you with registration, room selection, and insurance formalities.</p>

                    <h2>2. World-Class Amenities</h2>
                    <p>Our rooms are designed for maximum comfort, featuring ergonomic furniture, climate control, and dedicated spaces for caregivers.</p>

                    <h2>3. Transparent Communication</h2>
                    <p>We ensure that patients and their families are kept informed about treatment plans, progress, and costs through daily briefings with our clinical team.</p>

                    <h2>4. Feedback & Continuous Improvement</h2>
                    <p>Your voice matters. We actively seek patient feedback to refine our services and maintain our status as a leader in healthcare excellence.</p>
                '
            ]
        ];

        foreach ($legalPages as $slug => $data) {
            Page::updateOrCreate(
                ['slug' => $slug],
                [
                    'title' => $data['title'],
                    'content_html' => $data['html'],
                    'status' => 'published',
                    'updated_at' => now()
                ]
            );
        }
        
        // Ensure missing pages mentioned in audit exist
        $extraPages = [
            'careers' => 'Careers',
            'emergency' => 'Emergency and ICU',
        ];

        foreach ($extraPages as $slug => $title) {
            if (!Page::where('slug', $slug)->exists()) {
                Page::create([
                    'slug' => $slug,
                    'title' => $title,
                    'content_html' => "<h1>$title</h1><p>Content for $title is currently being developed based on clinical excellence standards.</p>",
                    'status' => 'published'
                ]);
            }
        }
    }
}
