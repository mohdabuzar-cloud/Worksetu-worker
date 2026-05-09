import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Logo from '../components/Logo';

export default function WorkerSplash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/login', { replace: true }), 2200);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(160deg, #22C55E 0%, #10B981 50%, #047857 100%)',
      padding: '40px 24px',
    }}>
      <Logo size={96} light subtitle="Worker App" />

      <p style={{ color: 'rgba(255,255,255,0.9)', marginTop: 32, fontSize: 18, fontWeight: 500, letterSpacing: 0.2, textAlign: 'center', maxWidth: 280 }}>
        Earn on your schedule with a cleaner, simpler worker login experience.
      </p>

      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: 60, right: 40, width: 80, height: 80, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)' }} />
      <div style={{ position: 'absolute', bottom: 120, left: 30, width: 120, height: 120, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.06)' }} />
      <div style={{ position: 'absolute', top: 160, left: 20, width: 40, height: 40, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)' }} />

      {/* Loader */}
      <div style={{ marginTop: 60, position: 'relative' }}>
        <div
          className="animate-spin"
          style={{
            width: 36, height: 36,
            border: '3px solid rgba(255,255,255,0.3)',
            borderTopColor: 'white',
            borderRadius: '50%',
          }}
        />
      </div>

      {/* Bottom tagline */}
      <div style={{ position: 'absolute', bottom: 40, textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 12 }}>
          Powered by WorkSetu Platform
        </p>
      </div>
    </div>
  );
}
