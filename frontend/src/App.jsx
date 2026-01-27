import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/utils/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Infrastructure from './pages/Infrastructure';
import Careers from './pages/Careers';
import Specialities from './pages/Specialities';
import SpecialityDetail from './pages/SpecialityDetail';
import DoctorSearch from './pages/DoctorSearch';
import DoctorProfile from './pages/DoctorProfile';
import BookingPage from './pages/BookingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Pharmacy from './pages/Pharmacy';
import Contact from './pages/Contact';
import PatientDashboard from './pages/PatientDashboard';
import PatientAppointments from './pages/PatientAppointments';
import PatientProfile from './pages/PatientProfile';
import BookAppointmentPatient from './pages/BookAppointmentPatient';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Services from './pages/Services';
import HealthLibrary from './pages/HealthLibrary';
import PatientCorner from './pages/PatientCorner';
import MediaCenter from './pages/MediaCenter';
import Team from './pages/Team';
import DynamicSubPage from './pages/DynamicSubPage';

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