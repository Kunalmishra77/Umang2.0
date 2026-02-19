import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, FileText, ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { useLeadForm } from '../../hooks/useLeadForm';
import SeoHead from '../../components/common/SeoHead';
import { siteConfig } from '../../config/siteConfig';

const GeneralAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferred_date: '',
    message: ''
  });

  const { submitForm, loading, success, error, reset } = useLeadForm('appointment');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm({
      ...formData,
      source_page: 'General Appointment Request'
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <SeoHead 
        title="Request an Appointment" 
        description="Book your consultation at Umang Hospital. Fill out the form and our team will contact you within 24 hours."
        canonical="/appointments/request"
      />

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Request an Appointment</h1>
            <p className="text-gray-600 text-lg">Fill out the form below and we will get back to you within 24 hours.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            {success ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-brand-dark mb-4">Request Received</h3>
                <p className="text-gray-600 text-lg mb-8">Our care coordinator will call you shortly to confirm your slot.</p>
                <button 
                  onClick={() => { reset(); setFormData({ name: '', phone: '', email: '', preferred_date: '', message: '' }); }}
                  className="px-8 py-4 bg-brand-dark text-white rounded-xl font-bold"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <User className="w-4 h-4 text-primary-500" /> Full Name
                    </label>
                    <input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      type="text" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-500" /> Phone Number
                    </label>
                    <input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      type="tel" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" 
                      placeholder={siteConfig.contacts.main} 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary-500" /> Email Address
                    </label>
                    <input 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" 
                      placeholder={siteConfig.contacts.email} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary-500" /> Preferred Date
                    </label>
                    <input 
                      name="preferred_date"
                      value={formData.preferred_date}
                      onChange={handleInputChange}
                      type="date" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary-500" /> Reason for Visit
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" 
                    placeholder="Describe your symptoms or the type of specialist you need..."
                  ></textarea>
                </div>

                {error && (
                  <div className="text-red-500 text-sm font-bold">
                    {error}
                  </div>
                )}

                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full py-4 bg-brand-dark text-white rounded-xl font-bold text-lg hover:bg-primary-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20 disabled:opacity-50"
                >
                  {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Submit Request'} 
                  {!loading && <ArrowRight className="w-5 h-5" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GeneralAppointment;
