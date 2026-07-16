import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, Lock } from 'lucide-react';
import { useAuth } from '../lib/auth';

export default function AdminLogin() {
  const { signIn, session, isStaff, configured } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Already signed in as staff → go to dashboard
  if (session && isStaff) { navigate('/admin', { replace: true }); }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); setLoading(true);
    try {
      await signIn(email.trim(), password);
      navigate('/admin', { replace: true });
    } catch (err) {
      setError(err.message || 'Sign in failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50 p-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-primary-600 text-white grid place-items-center mx-auto mb-4">
            <Lock className="w-5 h-5" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-brand-dark">Umang Admin</h1>
          <p className="text-sm text-gray-500 mt-1">Sign in to manage the website</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
          {!configured && (
            <p className="text-sm text-amber-600 bg-amber-50 rounded-lg p-3">Supabase keys not set — sign-in is disabled.</p>
          )}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-primary-500 text-sm" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-primary-500 text-sm" />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button disabled={loading || !configured}
            className="w-full h-12 bg-primary-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-primary-700 transition-all disabled:opacity-60 flex items-center justify-center gap-2">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}
