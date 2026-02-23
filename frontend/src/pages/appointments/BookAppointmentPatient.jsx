import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stethoscope, Calendar, Clock, Check, 
  ChevronLeft, ChevronRight, User, Info,
  Search, MapPin, Star, AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { doctors as allDoctors } from '../../utils/doctorsData';
import { toast } from 'react-toastify';

const BookAppointmentPatient = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    speciality: '',
    doctor: '',
    date: '',
    time: '',
    reason: '',
    notes: '',
  });
  const [specialities, setSpecialities] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState(false);

  const totalSteps = 4;
  const progress = Math.round((currentStep / totalSteps) * 100);

  useEffect(() => {
    fetchSpecialities();
  }, []);

  useEffect(() => {
    if (formData.speciality) {
      fetchDoctorsBySpeciality(formData.speciality);
    }
  }, [formData.speciality]);

  useEffect(() => {
    if (formData.doctor && formData.date) {
      fetchAvailableSlots(formData.doctor, formData.date);
    }
  }, [formData.doctor, formData.date]);

  const fetchSpecialities = async () => {
    try {
      const mockSpecialities = [
        { id: 'cardiac', name: 'Cardiology', icon: 'Heart' },
        { id: 'neuro', name: 'Neurology', icon: 'Brain' },
        { id: 'ortho', name: 'Orthopedics', icon: 'Bone' },
        { id: 'surgery', name: 'General Surgery', icon: 'Scissors' },
        { id: 'ent', name: 'E.N.T', icon: 'Ear' },
        { id: 'general-medicine', name: 'General Medicine', icon: 'Stethoscope' },
      ];
      setSpecialities(mockSpecialities);
    } catch (error) {
      console.error('Error fetching specialities:', error);
    }
  };

  const fetchDoctorsBySpeciality = async (specialityId) => {
    setLoading(true);
    try {
      const filteredDoctors = allDoctors.filter(doc => doc.specialtyId === specialityId || doc.dept.toLowerCase().includes(specialityId));
      setDoctors(filteredDoctors);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAvailableSlots = async (doctorId, date) => {
    try {
      const mockSlots = [
        '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
        '11:00 AM', '02:00 PM', '02:30 PM', '03:00 PM'
      ];
      setAvailableSlots(mockSlots);
    } catch (error) {
      console.error('Error fetching slots:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    setBooking(true);
    try {
      await api.post('/appointments', formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Appointment booked successfully!');
      setCurrentStep(1);
      setFormData({ speciality: '', doctor: '', date: '', time: '', reason: '', notes: '' });
    } catch (error) {
      toast.error('Failed to book appointment. Please try again.');
    } finally {
      setBooking(false);
    }
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1: return formData.speciality;
      case 2: return formData.doctor;
      case 3: return formData.date && formData.time;
      case 4: return formData.reason;
      default: return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#0f172a]">Select Speciality</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {specialities.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setFormData(prev => ({ ...prev, speciality: s.id }))}
                  className={`p-6 rounded-[2rem] border-2 text-left transition-all group ${
                    formData.speciality === s.id 
                    ? 'border-blue-600 bg-blue-50/50' 
                    : 'border-slate-100 hover:border-blue-200 bg-white'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${formData.speciality === s.id ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600'}`}>
                    <Stethoscope size={24} />
                  </div>
                  <p className={`font-bold ${formData.speciality === s.id ? 'text-blue-600' : 'text-[#0f172a]'}`}>{s.name}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#0f172a]">Choose Doctor</h3>
            {loading ? (
              <div className="flex justify-center py-12"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" /></div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {doctors.length > 0 ? doctors.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => setFormData(prev => ({ ...prev, doctor: doc.id.toString() }))}
                    className={`p-5 rounded-[2rem] border-2 text-left transition-all flex items-center gap-5 ${
                      formData.doctor === doc.id.toString() 
                      ? 'border-blue-600 bg-blue-50/50' 
                      : 'border-slate-100 hover:border-blue-200 bg-white'
                    }`}
                  >
                    <img src={doc.image} alt={doc.name} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-slate-50" />
                    <div className="flex-1">
                      <p className="font-bold text-[#0f172a]">{doc.name}</p>
                      <p className="text-xs font-medium text-blue-600 uppercase tracking-widest">{doc.exp} Experience</p>
                      <div className="flex items-center gap-1 mt-1 text-yellow-500 font-bold text-xs">
                        <Star size={12} fill="currentColor" /> {doc.rating}
                      </div>
                    </div>
                  </button>
                )) : (
                  <div className="col-span-full py-12 text-center text-slate-400 font-medium bg-slate-50 rounded-[2rem]">
                    No doctors available for this speciality.
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-[#0f172a]">Select Date & Time</h3>
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Calendar size={14} /> Preferred Date
                </label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full h-14 px-6 bg-slate-50 border-none rounded-2xl text-sm font-bold text-[#0f172a] focus:ring-2 focus:ring-blue-600/10 focus:bg-white outline-none transition-all"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Clock size={14} /> Available Slots
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {availableSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setFormData(prev => ({ ...prev, time: slot }))}
                      className={`h-12 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                        formData.time === slot 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                        : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        const selectedDoctor = doctors.find(d => d.id.toString() === formData.doctor);
        return (
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-[#0f172a]">Appointment Details</h3>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 grid md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm"><User size={20} /></div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Doctor</p>
                  <p className="font-bold text-[#0f172a]">{selectedDoctor?.name || 'Not Selected'}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm"><Calendar size={20} /></div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Schedule</p>
                  <p className="font-bold text-[#0f172a]">{formData.date} at {formData.time}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Reason for Visit *</label>
                <textarea 
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Please describe your symptoms briefly..."
                  className="w-full p-6 bg-slate-50 border-none rounded-2xl text-sm font-bold text-[#0f172a] focus:ring-2 focus:ring-blue-600/10 focus:bg-white outline-none transition-all"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Additional Notes (Optional)</label>
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="Any other information for the doctor..."
                  className="w-full p-6 bg-slate-50 border-none rounded-2xl text-sm font-bold text-[#0f172a] focus:ring-2 focus:ring-blue-600/10 focus:bg-white outline-none transition-all"
                />
              </div>
            </div>
          </div>
        );

      default: return null;
    }
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <h1 className="text-3xl font-serif font-bold text-[#0f172a] mb-2">Book Appointment</h1>
        <p className="text-slate-500 font-medium">Schedule an appointment with your preferred doctor in 4 simple steps.</p>
      </div>

      {/* Modern Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Step {currentStep} of {totalSteps}</span>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{progress}% Complete</span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>

        {/* Footer Navigation */}
        <div className="mt-12 pt-10 border-t border-slate-50 flex items-center justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 font-bold text-sm transition-all ${currentStep === 1 ? 'text-slate-200 cursor-not-allowed' : 'text-slate-400 hover:text-blue-600'}`}
          >
            <ChevronLeft size={18} /> Previous Step
          </button>

          {currentStep < totalSteps ? (
            <button
              onClick={nextStep}
              disabled={!canProceedToNext()}
              className={`h-14 px-10 rounded-2xl font-bold text-sm flex items-center gap-3 transition-all ${
                canProceedToNext() 
                ? 'bg-[#0f172a] text-white hover:bg-blue-600 shadow-lg shadow-slate-900/10' 
                : 'bg-slate-100 text-slate-300 cursor-not-allowed'
              }`}
            >
              Continue to Step {currentStep + 1} <ChevronRight size={18} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canProceedToNext() || booking}
              className={`h-14 px-10 rounded-2xl bg-emerald-500 text-white font-bold text-sm flex items-center gap-3 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-900/10 ${booking ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {booking ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Booking...</> : <><Check size={18} /> Confirm Appointment</>}
            </button>
          )}
        </div>
      </div>

      {/* Help Banner */}
      <div className="mt-10 bg-[#0f172a] p-8 rounded-[2.5rem] text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-[60px] opacity-20 -mr-16 -mt-16" />
        <div className="relative z-10 flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400 shrink-0"><AlertCircle size={28} /></div>
          <div>
            <h4 className="text-lg font-serif font-bold mb-1">Facing technical issues?</h4>
            <p className="text-sm text-slate-400 font-medium">If you are unable to book through the portal, please call our 24/7 helpline at <span className="text-white">+91 85880 72727</span>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentPatient;
