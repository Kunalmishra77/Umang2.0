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
import PrescriptionUpload from './pages/services/PrescriptionUpload';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="infrastructure" element={<Infrastructure />} />
          <Route path="careers" element={<Careers />} />
          <Route path="specialities" element={<Specialities />} />
          <Route path="specialities/:id" element={<SpecialityDetail />} />
          <Route path="doctors" element={<DoctorSearch />} />
          <Route path="team" element={<Team />} />
          
          <Route path="services" element={<Services />} />
          <Route path="services/second-opinion" element={<SecondOpinion />} />
          <Route path="services/lab-test-diagnostic" element={<LabDiagnostics />} />
          <Route path="services/home-care" element={<HomeCare />} />
          
          <Route path="services/buy-medicines" element={<Pharmacy />} />
          <Route path="services/buy-medicines/category/:slug" element={<PharmacyCategory />} />
          <Route path="services/buy-medicines/all-products" element={<PharmacyCategory />} />
          <Route path="services/buy-medicines/prescription-upload" element={<PrescriptionUpload />} />
          
          <Route path="services/telemedicine" element={<Telemedicine />} />
          <Route path="services/telemedicine/consult" element={<TelemedicineConsult />} />
          <Route path="services/emergency" element={<Emergency />} />
          <Route path="services/health-checkup" element={<HealthCheckup />} />
          <Route path="services/elder-care" element={<ElderCare />} />
          
          <Route path="services/booking/:serviceType" element={<ServiceBooking />} />
          
          <Route path="services/:slug" element={<DynamicSubPage />} />
          
          <Route path="health-library" element={<HealthLibrary />} />
          <Route path="health-library/:slug" element={<DynamicSubPage />} />
          
          <Route path="patient-corner" element={<PatientCorner />} />
          <Route path="patient-corner/:slug" element={<DynamicSubPage />} />
          
          <Route path="media-center" element={<MediaCenter />} />
          <Route path="media-center/:slug" element={<DynamicSubPage />} />
          
          <Route path="doctor/:id" element={<DoctorProfile />} />
          <Route path="booking" element={<Navigate to="/doctors" replace />} />
          <Route path="booking/:id" element={<BookingPage />} />
          <Route path="patients" element={<PatientDashboard />} />
          <Route path="patients/appointments" element={<PatientAppointments />} />
          <Route path="patients/profile" element={<PatientProfile />} />
          <Route path="patients/book-appointment" element={<BookAppointmentPatient />} />
          <Route path="pharmacy" element={<Pharmacy />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;