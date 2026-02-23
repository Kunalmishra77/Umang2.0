import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Clock, MapPin, MoreVertical, 
  Search, Filter, ChevronRight, X, 
  CheckCircle2, AlertCircle, CalendarDays,
  ArrowRight, Download, Printer
} from 'lucide-react';
import api from '../../services/api';

const PatientAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await api.get('/appointments-temp');
      // Laravel pagination returns data in response.data.data
      const rawData = response.data.data || response.data;
      
      if (Array.isArray(rawData)) {
        const mappedData = rawData.map(apt => ({
          id: apt.id,
          doctor: apt.doctor?.user?.name || 'Dr. Specialist',
          speciality: apt.doctor?.speciality?.name || 'General',
          date: apt.date,
          time: apt.time,
          status: apt.status === 'pending' ? 'upcoming' : apt.status,
          type: apt.reason || 'Consultation',
          img: apt.doctor?.image || 'https://doccure.dreamstechnologies.com/react/template/80517726715f3ecda881.jpg'
        }));
        setAppointments(mappedData);
      } else {
        setAppointments([]);
      }
    } catch (error) {
      console.error("Failed to fetch appointments:", error);
      setAppointments([
        { id: 1, doctor: 'Dr. Sarah Johnson', speciality: 'Cardiology', date: '2026-10-30', time: '10:00 AM', status: 'upcoming', type: 'Consultation', img: 'https://doccure.dreamstechnologies.com/react/template/80517726715f3ecda881.jpg' },
        { id: 2, doctor: 'Dr. Michael Chen', speciality: 'Dermatology', date: '2026-10-25', time: '02:30 PM', status: 'completed', type: 'Follow-up', img: 'https://doccure.dreamstechnologies.com/react/template/8963283f58e0a139049a.jpg' },
        { id: 3, doctor: 'Dr. Emily Davis', speciality: 'Neurology', date: '2026-10-20', time: '11:15 AM', status: 'cancelled', type: 'Consultation', img: 'https://doccure.dreamstechnologies.com/react/template/8e5470438b4d8e578f14.jpg' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'completed', label: 'Completed' },
    { id: 'cancelled', label: 'Cancelled' },
  ];

  const filteredAppointments = Array.isArray(appointments) ? appointments.filter(apt => 
    activeFilter === 'all' ? true : apt.status === activeFilter
  ) : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#0f172a] mb-2">Appointments</h1>
          <p className="text-slate-500 font-medium">View and manage your clinical visits.</p>
        </div>
        <div className="flex bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${activeFilter === filter.id ? 'bg-[#0f172a] text-white shadow-lg shadow-slate-900/20' : 'text-slate-500 hover:text-[#0f172a]'}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Appointments Grid */}
      <div className="grid grid-cols-1 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((apt, idx) => (
              <motion.div
                key={apt.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group bg-white p-6 rounded-[2.5rem] border border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-8 hover:shadow-xl hover:shadow-slate-900/5 transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <img src={apt.img} alt={apt.doctor} className="w-20 h-20 rounded-3xl object-cover ring-4 ring-slate-50 group-hover:scale-105 transition-transform" />
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center ${apt.status === 'upcoming' ? 'bg-blue-600' : apt.status === 'completed' ? 'bg-emerald-500' : 'bg-red-500'}`}>
                      {apt.status === 'upcoming' ? <Clock className="w-3 h-3 text-white" /> : apt.status === 'completed' ? <CheckCircle2 className="w-3 h-3 text-white" /> : <X className="w-3 h-3 text-white" />}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0f172a] mb-1">{apt.doctor}</h4>
                    <p className="text-sm font-bold text-blue-600 mb-3 uppercase tracking-wider">{apt.speciality}</p>
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-6">
                      <div className="flex items-center gap-2 text-slate-500">
                        <CalendarDays className="w-4 h-4 text-slate-400" />
                        <span className="text-xs font-bold">{apt.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span className="text-xs font-bold">{apt.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span className="text-xs font-bold">Main Hospital Tower</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 lg:border-l lg:border-slate-100 lg:pl-8">
                  {apt.status === 'upcoming' ? (
                    <>
                      <button className="h-12 px-6 rounded-xl bg-[#0f172a] text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10">
                        Reschedule
                      </button>
                      <button 
                        onClick={() => { setSelectedAppointment(apt); setShowCancelModal(true); }}
                        className="h-12 w-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </>
                  ) : apt.status === 'completed' ? (
                    <>
                      <button className="h-12 px-6 rounded-xl bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all flex items-center gap-2">
                        <Printer className="w-4 h-4" /> Prescription
                      </button>
                      <button className="h-12 px-6 rounded-xl bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2">
                        <Download className="w-4 h-4" /> Invoice
                      </button>
                    </>
                  ) : (
                    <button className="h-12 px-6 rounded-xl bg-slate-100 text-slate-400 font-bold text-xs uppercase tracking-widest cursor-not-allowed">
                      Cancelled
                    </button>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0f172a] mb-2">No appointments found</h3>
              <p className="text-slate-400 max-w-xs mx-auto text-sm leading-relaxed">We couldn't find any {activeFilter !== 'all' ? activeFilter : ''} appointments for your account.</p>
              <button onClick={() => setActiveFilter('all')} className="mt-8 text-blue-600 font-bold text-sm underline underline-offset-4">View all appointments</button>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Cancel Modal Overlay */}
      <AnimatePresence>
        {showCancelModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCancelModal(false)}
              className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[2.5rem] p-10 overflow-hidden shadow-2xl"
            >
              <div className="w-20 h-20 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mb-8 mx-auto">
                <AlertCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0f172a] text-center mb-4">Cancel Appointment?</h3>
              <p className="text-slate-500 text-center mb-10 leading-relaxed">
                Are you sure you want to cancel your visit with <span className="text-[#0f172a] font-bold">{selectedAppointment?.doctor}</span>? This action cannot be undone.
              </p>
              
              <div className="flex flex-col gap-3">
                <button 
                  className="w-full h-14 rounded-2xl bg-red-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all shadow-lg shadow-red-900/20"
                  onClick={() => setShowCancelModal(false)}
                >
                  Yes, Cancel Visit
                </button>
                <button 
                  className="w-full h-14 rounded-2xl bg-slate-100 text-slate-600 font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-all"
                  onClick={() => setShowCancelModal(false)}
                >
                  No, Keep It
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PatientAppointments;
