import React, { Suspense, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazyWithRetry as lazy } from './utils/lazyWithRetry';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/utils/ScrollToTop';
import WhatsAppFloating from './components/common/WhatsAppFloating';
import Preloader from './components/common/Preloader';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Eagerly load the home page for fast initial render
import Home from './pages/home/Home';

// Admin panel (Supabase auth)
import { AuthProvider } from './lib/auth';
import { SiteContentProvider } from './lib/siteContent';
import ProtectedRoute from './admin/ProtectedRoute';

// Lazy load all other pages
const About = lazy(() => import('./pages/about/About'));
const Infrastructure = lazy(() => import('./pages/infrastructure/Infrastructure'));
const Careers = lazy(() => import('./pages/careers/Careers'));
const Specialities = lazy(() => import('./pages/specialties/Specialities'));
const SpecialityDetail = lazy(() => import('./pages/specialties/SpecialityDetail'));
const DoctorSearch = lazy(() => import('./pages/doctors/DoctorSearch'));
const DoctorProfile = lazy(() => import('./pages/doctors/DoctorProfile'));
const BookingPage = lazy(() => import('./pages/appointments/BookingPage'));
const Pharmacy = lazy(() => import('./pages/services/Pharmacy'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const Terms = lazy(() => import('./pages/legal/Terms'));
const Privacy = lazy(() => import('./pages/legal/Privacy'));
const Services = lazy(() => import('./pages/services/Services'));
const HealthLibrary = lazy(() => import('./pages/health-library/HealthLibrary'));
const PatientCorner = lazy(() => import('./pages/patient-corner/PatientCorner'));
const MediaCenter = lazy(() => import('./pages/media-center/MediaCenter'));
const Team = lazy(() => import('./pages/our-team/Team'));
const Leadership = lazy(() => import('./pages/our-team/Leadership'));
const NursingStaff = lazy(() => import('./pages/our-team/NursingStaff'));
const SupportStaff = lazy(() => import('./pages/our-team/SupportStaff'));
const DynamicSubPage = lazy(() => import('./pages/services/DynamicSubPage'));
const SecondOpinion = lazy(() => import('./pages/services/SecondOpinion'));
const LabDiagnostics = lazy(() => import('./pages/services/LabDiagnostics'));
const HomeCare = lazy(() => import('./pages/services/HomeCare'));
const Telemedicine = lazy(() => import('./pages/services/Telemedicine'));
const Emergency = lazy(() => import('./pages/services/Emergency'));
const HealthCheckup = lazy(() => import('./pages/services/HealthCheckup'));
const ElderCare = lazy(() => import('./pages/services/ElderCare'));
const PharmacyCategory = lazy(() => import('./pages/services/PharmacyCategory'));
const TelemedicineConsult = lazy(() => import('./pages/services/TelemedicineConsult'));
const ServiceBooking = lazy(() => import('./pages/services/ServiceBooking'));
const HealthCheckBooking = lazy(() => import('./pages/services/HealthCheckBooking'));
const PrescriptionUpload = lazy(() => import('./pages/services/PrescriptionUpload'));
const Treatments = lazy(() => import('./pages/health-library/Treatments'));
const Technologies = lazy(() => import('./pages/health-library/Technologies'));
const Ailments = lazy(() => import('./pages/health-library/Ailments'));
const KnowledgeCenter = lazy(() => import('./pages/health-library/KnowledgeCenter'));
const Events = lazy(() => import('./pages/health-library/Events'));
const Downloads = lazy(() => import('./pages/health-library/Downloads'));
const ResourceDetail = lazy(() => import('./pages/health-library/ResourceDetail'));
const EventRegistration = lazy(() => import('./pages/health-library/EventRegistration'));
const VirtualTour = lazy(() => import('./pages/health-library/VirtualTour'));
const Podcasts = lazy(() => import('./pages/patient-corner/Podcasts'));
const PatientInformation = lazy(() => import('./pages/patient-corner/PatientInformation'));
const BreakthroughCases = lazy(() => import('./pages/patient-corner/BreakthroughCases'));
const PatientStories = lazy(() => import('./pages/patient-corner/PatientStories'));
const Blogs = lazy(() => import('./pages/patient-corner/Blogs'));
const BlogDetail = lazy(() => import('./pages/patient-corner/BlogDetail'));
const CaseDetail = lazy(() => import('./pages/patient-corner/CaseDetail'));
const StoryDetail = lazy(() => import('./pages/patient-corner/StoryDetail'));
const PressRelease = lazy(() => import('./pages/media-center/PressRelease'));
const MediaCoverage = lazy(() => import('./pages/media-center/MediaCoverage'));
const Newsletters = lazy(() => import('./pages/media-center/Newsletters'));
const MediaConnect = lazy(() => import('./pages/media-center/MediaConnect'));
const PressReleaseDetail = lazy(() => import('./pages/media-center/PressReleaseDetail'));
const GeneralAppointment = lazy(() => import('./pages/appointments/GeneralAppointment'));
const InquiryHub = lazy(() => import('./pages/contact/InquiryHub'));
const Logout = lazy(() => import('./pages/auth/Logout'));
const CashlessInsurance = lazy(() => import('./pages/legal/CashlessInsurance'));
const GenericCmsPage = lazy(() => import('./pages/legal/GenericCmsPage'));
const Sitemap = lazy(() => import('./pages/legal/Sitemap'));
const IcuPage = lazy(() => import('./pages/infrastructure/IcuPage'));
const IcuUnitDetail = lazy(() => import('./pages/infrastructure/IcuUnitDetail'));
const NotFound = lazy(() => import('./pages/utils/NotFound'));

// Admin panel pages
const AdminLayout = lazy(() => import('./admin/AdminLayout'));
const AdminLogin = lazy(() => import('./admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./admin/AdminDashboard'));
const AdminLeads = lazy(() => import('./admin/AdminLeads'));
const AdminOffers = lazy(() => import('./admin/AdminOffers'));
const AdminContent = lazy(() => import('./admin/AdminContent'));
const AdminMedia = lazy(() => import('./admin/AdminMedia'));
const AdminTestimonials = lazy(() => import('./admin/AdminTestimonials'));
const AdminFaqs = lazy(() => import('./admin/AdminFaqs'));
const AdminDoctors = lazy(() => import('./admin/AdminDoctors'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <SiteContentProvider>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
      <ScrollToTop />
      <WhatsAppFloating />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="infrastructure" element={<Infrastructure />} />
            <Route path="infrastructure/icu" element={<IcuPage />} />
            <Route path="infrastructure/icu/:slug" element={<IcuUnitDetail />} />

            <Route path="infrastructure/ot" element={<DynamicSubPage />} />
            <Route path="infrastructure/rooms" element={<DynamicSubPage />} />
            <Route path="infrastructure/radiology" element={<DynamicSubPage />} />
            <Route path="infrastructure/cafeteria" element={<DynamicSubPage />} />
            <Route path="infrastructure/ambulance" element={<DynamicSubPage />} />
            <Route path="infrastructure/help-desk" element={<DynamicSubPage />} />
            <Route path="infrastructure/parking" element={<DynamicSubPage />} />

            <Route path="careers" element={<Careers />} />
            <Route path="specialities" element={<Specialities />} />
            <Route path="specialities/:id" element={<SpecialityDetail />} />
            <Route path="doctors" element={<DoctorSearch />} />
            <Route path="team" element={<Team />} />
            <Route path="team/leadership" element={<Leadership />} />
            <Route path="team/nursing" element={<NursingStaff />} />
            <Route path="team/support-staff" element={<SupportStaff />} />

            <Route path="services" element={<Services />} />
            <Route path="services/lab-test-diagnostic" element={<LabDiagnostics />} />

            <Route path="services/buy-medicines" element={<Pharmacy />} />
            <Route path="services/buy-medicines/category/:slug" element={<PharmacyCategory />} />
            <Route path="services/buy-medicines/all-products" element={<PharmacyCategory />} />
            <Route path="services/buy-medicines/prescription-upload" element={<PrescriptionUpload />} />

            <Route path="services/emergency" element={<Emergency />} />
            <Route path="services/health-checkup" element={<HealthCheckup />} />
            <Route path="services/health-checkup/book" element={<HealthCheckBooking />} />
            <Route path="services/elder-care" element={<ElderCare />} />

            <Route path="services/booking/:serviceType" element={<ServiceBooking />} />

            <Route path="services/ipd-opd" element={<HomeCare />} />
            <Route path="services/home-care" element={<HomeCare />} />
            <Route path="services/second-opinion" element={<SecondOpinion />} />
            <Route path="services/telemedicine" element={<Telemedicine />} />
            <Route path="services/telemedicine/consult" element={<TelemedicineConsult />} />
            <Route path="services/:slug" element={<DynamicSubPage />} />

            <Route path="cms/:slug" element={<GenericCmsPage />} />
            <Route path="cashless-insurance" element={<CashlessInsurance />} />

            <Route path="health-library" element={<HealthLibrary />} />
            <Route path="health-library/treatments" element={<Treatments />} />
            <Route path="health-library/technologies" element={<Technologies />} />
            <Route path="health-library/technologies/virtual-tour" element={<VirtualTour />} />
            <Route path="health-library/ailments" element={<Ailments />} />
            <Route path="health-library/knowledge-center" element={<KnowledgeCenter />} />
            <Route path="health-library/knowledge-center/resource/:id" element={<ResourceDetail />} />
            <Route path="health-library/events" element={<Events />} />
            <Route path="health-library/events/register/:id" element={<EventRegistration />} />
            <Route path="health-library/downloads" element={<Downloads />} />
            <Route path="health-library/:slug" element={<DynamicSubPage />} />

            <Route path="patient-corner" element={<PatientCorner />} />
            <Route path="patient-corner/podcasts" element={<Podcasts />} />
            <Route path="patient-corner/patient-information-literature" element={<PatientInformation />} />
            <Route path="patient-corner/breakthrough-cases" element={<BreakthroughCases />} />
            <Route path="patient-corner/breakthrough-cases/:id" element={<CaseDetail />} />
            <Route path="patient-corner/patient-stories" element={<PatientStories />} />
            <Route path="patient-corner/patient-stories/:id" element={<StoryDetail />} />
            <Route path="patient-corner/blogs" element={<Blogs />} />
            <Route path="patient-corner/blogs/:id" element={<BlogDetail />} />
            <Route path="patient-corner/:slug" element={<DynamicSubPage />} />

            <Route path="media-center" element={<MediaCenter />} />
            <Route path="media-center/press-release" element={<PressRelease />} />
            <Route path="media-center/press-release/:id" element={<PressReleaseDetail />} />
            <Route path="media-center/media-coverage" element={<MediaCoverage />} />
            <Route path="media-center/newsletters" element={<Newsletters />} />
            <Route path="media-center/media-connect" element={<MediaConnect />} />
            <Route path="media-center/:slug" element={<DynamicSubPage />} />

            <Route path="doctor/:id" element={<DoctorProfile />} />
            <Route path="booking" element={<Navigate to="/doctors" replace />} />
            <Route path="booking/:id" element={<BookingPage />} />
            <Route path="appointments/request" element={<GeneralAppointment />} />

            <Route path="pharmacy" element={<Pharmacy />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contact/emergency" element={<Emergency />} />
            <Route path="contact/inquiry-hub" element={<InquiryHub />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy-policy" element={<Privacy />} />
            <Route path="cms/legal-and-compliance" element={<DynamicSubPage />} />
            <Route path="patient-experience" element={<DynamicSubPage />} />
            <Route path="sitemap" element={<Sitemap />} />
            <Route path="logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Admin panel (Supabase auth) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route index element={<AdminDashboard />} />
            <Route path="leads" element={<AdminLeads />} />
            <Route path="offers" element={<AdminOffers />} />
            <Route path="content" element={<AdminContent />} />
            <Route path="media" element={<AdminMedia />} />
            <Route path="testimonials" element={<AdminTestimonials />} />
            <Route path="faqs" element={<AdminFaqs />} />
            <Route path="doctors" element={<AdminDoctors />} />
          </Route>
        </Routes>
      </Suspense>
      </SiteContentProvider>
    </AuthProvider>
  );
}

export default App;
