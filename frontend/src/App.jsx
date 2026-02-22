import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/utils/ScrollToTop';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Infrastructure from './pages/infrastructure/Infrastructure';
import Careers from './pages/careers/Careers';
import Specialities from './pages/specialties/Specialities';
import SpecialityDetail from './pages/specialties/SpecialityDetail';
import DoctorSearch from './pages/doctors/DoctorSearch';
import DoctorProfile from './pages/doctors/DoctorProfile';
import BookingPage from './pages/appointments/BookingPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Pharmacy from './pages/services/Pharmacy';
import Contact from './pages/contact/Contact';
import PatientDashboard from './pages/patients/PatientDashboard';
import PatientAppointments from './pages/patients/PatientAppointments';
import PatientProfile from './pages/patients/PatientProfile';
import BookAppointmentPatient from './pages/appointments/BookAppointmentPatient';
import Terms from './pages/legal/Terms';
import Privacy from './pages/legal/Privacy';
import Services from './pages/services/Services';
import HealthLibrary from './pages/health-library/HealthLibrary';
import PatientCorner from './pages/patient-corner/PatientCorner';
import MediaCenter from './pages/media-center/MediaCenter';
import Team from './pages/our-team/Team';
import Leadership from './pages/our-team/Leadership';
import NursingStaff from './pages/our-team/NursingStaff';
import DynamicSubPage from './pages/services/DynamicSubPage';
import SecondOpinion from './pages/services/SecondOpinion';
import LabDiagnostics from './pages/services/LabDiagnostics';
import HomeCare from './pages/services/HomeCare';
import Telemedicine from './pages/services/Telemedicine';
import Emergency from './pages/services/Emergency';
import HealthCheckup from './pages/services/HealthCheckup';
import ElderCare from './pages/services/ElderCare';
import PharmacyCategory from './pages/services/PharmacyCategory';
import TelemedicineConsult from './pages/services/TelemedicineConsult';
import ServiceBooking from './pages/services/ServiceBooking';
import HealthCheckBooking from './pages/services/HealthCheckBooking';
import PrescriptionUpload from './pages/services/PrescriptionUpload';
import Treatments from './pages/health-library/Treatments';
import Technologies from './pages/health-library/Technologies';
import Ailments from './pages/health-library/Ailments';
import KnowledgeCenter from './pages/health-library/KnowledgeCenter';
import Events from './pages/health-library/Events';
import Downloads from './pages/health-library/Downloads';
import ResourceDetail from './pages/health-library/ResourceDetail';
import EventRegistration from './pages/health-library/EventRegistration';
import VirtualTour from './pages/health-library/VirtualTour';
import Podcasts from './pages/patient-corner/Podcasts';
import PatientInformation from './pages/patient-corner/PatientInformation';
import BreakthroughCases from './pages/patient-corner/BreakthroughCases';
import PatientStories from './pages/patient-corner/PatientStories';
import Blogs from './pages/patient-corner/Blogs';
import BlogDetail from './pages/patient-corner/BlogDetail';
import CaseDetail from './pages/patient-corner/CaseDetail';
import StoryDetail from './pages/patient-corner/StoryDetail';
import PressRelease from './pages/media-center/PressRelease';
import MediaCoverage from './pages/media-center/MediaCoverage';
import Newsletters from './pages/media-center/Newsletters';
import MediaConnect from './pages/media-center/MediaConnect';
import PressReleaseDetail from './pages/media-center/PressReleaseDetail';
import GeneralAppointment from './pages/appointments/GeneralAppointment';
import LabReports from './pages/patients/LabReports';
import InquiryHub from './pages/contact/InquiryHub';
import WhatsAppFloating from './components/common/WhatsAppFloating';

import CashlessInsurance from './pages/legal/CashlessInsurance';
import GenericCmsPage from './pages/legal/GenericCmsPage';
import Sitemap from './pages/legal/Sitemap';

import IcuPage from './pages/infrastructure/IcuPage';
import IcuUnitDetail from './pages/infrastructure/IcuUnitDetail';
import PatientLayout from './layouts/PatientLayout';
import NotFound from './pages/utils/NotFound';

import GenericPage from './pages/utils/GenericPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <WhatsAppFloating />
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
          
          {/* Patient Portal Routes with Sidebar */}
          <Route path="patients" element={<PatientLayout />}>
            <Route index element={<PatientDashboard />} />
            <Route path="lab-reports" element={<LabReports />} />
            <Route path="appointments" element={<PatientAppointments />} />
            <Route path="profile" element={<PatientProfile />} />
            <Route path="book-appointment" element={<BookAppointmentPatient />} />
          </Route>

          <Route path="pharmacy" element={<Pharmacy />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact/emergency" element={<Emergency />} />
          <Route path="contact/inquiry-hub" element={<InquiryHub />} />
          <Route path="terms" element={<GenericCmsPage slug="terms-of-service" />} />
          <Route path="privacy-policy" element={<GenericCmsPage slug="privacy-policy" />} />
          <Route path="cms/legal-and-compliance" element={<GenericCmsPage slug="legal-and-compliance" />} />
          <Route path="patient-experience" element={<GenericCmsPage slug="patient-experience" />} />
          <Route path="sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
