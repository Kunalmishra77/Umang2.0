import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
          <Route path="doctor/:id" element={<DoctorProfile />} />
          <Route path="booking/:id" element={<BookingPage />} />
          <Route path="patients" element={<PatientDashboard />} />
          <Route path="patients/appointments" element={<PatientAppointments />} />
          <Route path="patients/profile" element={<PatientProfile />} />
          <Route path="patients/book-appointment" element={<BookAppointmentPatient />} />
          <Route path="pharmacy" element={<Pharmacy />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;