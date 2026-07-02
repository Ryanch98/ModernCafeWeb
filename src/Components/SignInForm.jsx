import { useAppSelector } from '../redux/hooks';
import { translations } from '../redux/translations';
import { signIn as firebaseSignIn, signInWithGoogle, signInWithFacebook } from '../firebase';
import { useState } from 'react';

export default function SignInForm({ onSuccess, onClose }) {
  const language = useAppSelector((s) => s.language.lang);
  const t = translations[language];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    firebaseSignIn(email, password)
      .then(() => {
        setLoading(false);
        if (onSuccess) onSuccess();
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message || 'Authentication failed');
      });
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-slate-900/80 p-8 shadow-2xl">
      <h1 className="mb-6 text-2xl font-bold text-amber-400">{t.signIn}</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm text-slate-300">Email</label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="mt-2 w-full rounded-xl bg-slate-800 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="text-sm text-slate-300">Password</label>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="mt-2 w-full rounded-xl bg-slate-800 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="••••••••"
          />
        </div>

        {error && <div className="text-sm text-red-400">{error}</div>}

        <button
          type="submit"
          className="w-full rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          disabled={loading}
        >
          {t.signIn}
        </button>
      </form>

      <div className="mt-6 flex flex-col gap-3">
        <button
          type="button"
          onClick={() => {
            setError(null);
            setLoading(true);
            signInWithGoogle()
              .then(() => {
                setLoading(false);
                if (onSuccess) onSuccess();
              })
              .catch((err) => {
                setLoading(false);
                setError(err.message || 'Google sign-in failed');
              });
          }}
          className="flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
        >
          <img src="/pic/google.svg" alt="Google" className="h-5 w-5" />
          Continue with Google
        </button>

        <button
          type="button"
          onClick={() => {
            setError(null);
            setLoading(true);
            signInWithFacebook()
              .then(() => {
                setLoading(false);
                if (onSuccess) onSuccess();
              })
              .catch((err) => {
                setLoading(false);
                setError(err.message || 'Facebook sign-in failed');
              });
          }}
          className="flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
        >
          <img src="/pic/facebook.svg" alt="Facebook" className="h-5 w-5" />
          Continue with Facebook
        </button>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
        <button type="button" onClick={onClose} className="hover:underline">
          Close
        </button>
      </div>
    </div>
  );
}
