import React from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, Download, Printer, 
  FileText, ArrowUpRight, Clock,
  CheckCircle2, AlertCircle, ChevronRight
} from 'lucide-react';
import { toast } from 'react-toastify';

const Billing = () => {
  const invoices = [
    { id: 'INV-2026-001', service: 'Consultation - Cardiology', date: 'Oct 24, 2026', amount: '₹1,500', status: 'Paid', method: 'UPI' },
    { id: 'INV-2026-002', service: 'Lab Test - Blood Profile', date: 'Oct 15, 2026', amount: '₹2,200', status: 'Paid', method: 'Credit Card' },
    { id: 'INV-2026-003', service: 'Pharmacy - Medicines', date: 'Oct 12, 2026', amount: '₹850', status: 'Paid', method: 'Debit Card' },
    { id: 'INV-2026-004', service: 'X-Ray Chest', date: 'Oct 08, 2026', amount: '₹1,200', status: 'Pending', method: '-' },
  ];

  const handleAddPayment = () => {
    toast.success('Secure payment gateway opening...');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#0f172a] mb-2">Billing & Invoices</h1>
          <p className="text-slate-500 font-medium">Manage your payments and download medical invoices.</p>
        </div>
        <button 
          onClick={handleAddPayment}
          className="h-12 px-6 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
        >
          <CreditCard className="w-4 h-4" /> Add Payment Method
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Total Paid</p>
          <h3 className="text-2xl font-serif font-bold text-[#0f172a]">₹12,450</h3>
        </div>
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
            <Clock className="w-6 h-6" />
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Pending Amount</p>
          <h3 className="text-2xl font-serif font-bold text-[#0f172a]">₹1,200</h3>
        </div>
        <div className="bg-[#0f172a] p-6 rounded-[2rem] text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600 rounded-full blur-[40px] opacity-20 -mr-8 -mt-8" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Tax Savings</p>
            <h3 className="text-2xl font-serif font-bold">₹2,100</h3>
          </div>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex items-center justify-between">
          <h3 className="text-xl font-serif font-bold text-[#0f172a]">Recent Invoices</h3>
          <button className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Invoice ID</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Service Details</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <span className="text-sm font-bold text-[#0f172a]">{inv.id}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#0f172a]">{inv.service}</span>
                      <span className="text-[10px] font-medium text-slate-400">{inv.method}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-sm font-medium text-slate-500">{inv.date}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-sm font-black text-[#0f172a]">{inv.amount}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${inv.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-center gap-2">
                      <button className="w-9 h-9 rounded-lg bg-slate-100 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="w-9 h-9 rounded-lg bg-slate-100 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                        <Printer className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Information Banner */}
      <div className="bg-blue-50 rounded-[2.5rem] p-8 border border-blue-100 flex flex-col md:flex-row items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
          <AlertCircle className="w-8 h-8" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-lg font-bold text-[#0f172a] mb-1">Need help with your insurance claim?</h4>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">Our TPA helpdesk is available 24/7 at the ground floor to assist you with cashless hospitalisation and reimbursement claims.</p>
        </div>
        <button className="h-12 px-6 rounded-xl border-2 border-blue-600 text-blue-600 font-bold text-sm hover:bg-blue-600 hover:text-white transition-all">
          Contact Billing Support
        </button>
      </div>
    </motion.div>
  );
};

export default Billing;
