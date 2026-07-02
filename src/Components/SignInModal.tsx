import SignInForm from './SignInForm';

export default function SignInModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 mx-4">
        <SignInForm onSuccess={onClose} onClose={onClose} />
      </div>
    </div>
  );
}
