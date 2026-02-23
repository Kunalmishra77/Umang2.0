import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, FileText, ChevronRight, 
  ArrowUpRight, Heart, Activity, Thermometer, 
  Droplets, MoreVertical, Plus, Download,
  ExternalLink, Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PatientDashboard = () => {
  const stats = [
    { label: 'Heart Rate', value: '72', unit: 'bpm', icon: Heart, color: 'text-red-600', bg: 'bg-red-50', trend: '+2%' },
    { label: 'Blood Sugar', value: '110', unit: 'mg/dL', icon: Droplets, color: 'text-blue-600', bg: 'bg-blue-50', trend: '-5%' },
    { label: 'Body Temp', value: '98.6', unit: '°F', icon: Thermometer, color: 'text-orange-600', bg: 'bg-orange-50', trend: 'Normal' },
    { label: 'BMI Index', value: '22.4', unit: 'kg/m²', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50', trend: 'Stable' },
  ];

  const upcomingAppointments = [
    { id: 1, doctor: 'Dr. Ruby Perrin', specialty: 'Cardiology', date: 'Oct 24, 2026', time: '10:00 AM', status: 'Confirmed', img: 'https://doccure.dreamstechnologies.com/react/template/80517726715f3ecda881.jpg' },
    { id: 2, doctor: 'Dr. Darren Elder', specialty: 'Neurology', date: 'Oct 28, 2026', time: '02:30 PM', status: 'Pending', img: 'https://doccure.dreamstechnologies.com/react/template/8963283f58e0a139049a.jpg' },
  ];

  const recentReports = [
    { id: 1, title: 'Complete Blood Count (CBC)', date: 'Oct 15, 2026', type: 'Pathology', status: 'Final' },
    { id: 2, title: 'Lipid Profile - Regular', date: 'Oct 12, 2026', type: 'Biochemistry', status: 'Final' },
    { id: 3, title: 'Chest X-Ray (Digital)', date: 'Oct 08, 2026', type: 'Radiology', status: 'Final' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* 1. Welcome & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#0f172a] mb-2">Good morning, Richard!</h1>
          <p className="text-slate-500 font-medium">You have 2 appointments scheduled for this week.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/patients/book-appointment" className="h-12 px-6 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            <Plus className="w-4 h-4" /> Book Appointment
          </Link>
          <Link to="/patients/profile" className="h-12 w-12 rounded-xl bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-50 transition-all">
            <Settings className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* 2. Vital Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${stat.trend === 'Normal' || stat.trend === 'Stable' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
                {stat.trend}
              </span>
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
            <div className="flex items-baseline gap-1">
              <h3 className="text-2xl font-serif font-bold text-[#0f172a]">{stat.value}</h3>
              <span className="text-sm font-medium text-slate-500">{stat.unit}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* 3. Upcoming Appointments */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif font-bold text-[#0f172a]">Upcoming Appointments</h2>
            <Link to="/patients/appointments" className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              See All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {upcomingAppointments.map((appt) => (
              <div key={appt.id} className="bg-white p-5 rounded-[2rem] border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-5">
                  <img src={appt.img} alt={appt.doctor} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-slate-50" />
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">{appt.doctor}</h4>
                    <p className="text-xs font-medium text-blue-600 mb-2 uppercase tracking-wider">{appt.specialty}</p>
                    <div className="flex items-center gap-4 text-slate-500">
                      <div className="flex items-center gap-1.5 text-xs font-medium">
                        <Calendar className="w-3.5 h-3.5" /> {appt.date}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-medium">
                        <Clock className="w-3.5 h-3.5" /> {appt.time}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest ${appt.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
                    {appt.status}
                  </span>
                  <button className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Health Insights Banner */}
          <div className="bg-[#0f172a] rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32" />
            <div className="relative z-10 max-w-md">
              <h3 className="text-2xl font-serif font-bold mb-4 leading-tight">Your health data is <br />looking great this month!</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">Based on your recent lab reports and daily vitals, we have some new health insights for you.</p>
              <button className="px-6 py-3 bg-white text-[#0f172a] rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-50 transition-colors">
                View Insights
              </button>
            </div>
            <Activity className="absolute bottom-[-20%] right-[-5%] w-48 h-48 text-white/5 rotate-12" />
          </div>
        </div>

        {/* 4. Recent Lab Reports */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif font-bold text-[#0f172a]">Recent Reports</h2>
            <Link to="/patients/lab-reports" className="text-blue-600 font-bold text-sm">View All</Link>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-slate-100 divide-y divide-slate-100">
            {recentReports.map((report) => (
              <div key={report.id} className="p-6 hover:bg-slate-50 transition-colors first:rounded-t-[2.5rem] last:rounded-b-[2.5rem] group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <FileText className="w-5 h-5" />
                  </div>
                  <button className="w-8 h-8 flex items-center justify-center text-slate-300 hover:text-blue-600 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
                <h5 className="font-bold text-[#0f172a] text-sm mb-1 group-hover:text-blue-600 transition-colors">{report.title}</h5>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{report.date}</span>
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">{report.status}</span>
                </div>
              </div>
            ))}
            <div className="p-6 bg-slate-50/50 rounded-b-[2.5rem]">
              <button className="w-full py-4 bg-white border border-dashed border-slate-300 rounded-2xl text-slate-400 text-xs font-bold uppercase tracking-widest hover:border-blue-400 hover:text-blue-600 transition-all flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" /> Upload Old Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PatientDashboard;
