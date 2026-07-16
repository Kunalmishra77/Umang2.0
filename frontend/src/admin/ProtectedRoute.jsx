import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../lib/auth';

export default function ProtectedRoute({ children }) {
  const { loading, session, isStaff, configured } = useAuth();

  if (!configured) {
    return (
      <div className="min-h-screen grid place-items-center bg-gray-50 p-6 text-center">
        <div className="max-w-md">
          <h1 className="text-2xl font-serif font-bold text-brand-dark mb-2">Admin not configured</h1>
          <p className="text-gray-500">Set <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code>, then reload.</p>
        </div>
      </div>
    );
  }
  if (loading) {
    return <div className="min-h-screen grid place-items-center bg-gray-50 text-gray-400">Loading…</div>;
  }
  if (!session) return <Navigate to="/admin/login" replace />;
  if (!isStaff) {
    return (
      <div className="min-h-screen grid place-items-center bg-gray-50 p-6 text-center">
        <div className="max-w-md">
          <h1 className="text-2xl font-serif font-bold text-brand-dark mb-2">No access</h1>
          <p className="text-gray-500">Your account isn’t authorised for the admin panel. Ask an admin to grant you a role.</p>
        </div>
      </div>
    );
  }
  return children;
}
