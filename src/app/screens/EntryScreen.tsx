import { useNavigate } from 'react-router';
import { Briefcase, Hammer } from 'lucide-react';
import Logo from '../components/Logo';
import { C } from '../theme';

export default function EntryScreen() {
  const navigate = useNavigate();

  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      backgroundColor: '#FFFFFF', padding: '40px 24px',
    }}>
      {/* Logo */}
      <Logo subtitle="Connecting Work with Trust" />

      {/* Illustration area */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: 220, height: 220, borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(26,115,232,0.08) 0%, rgba(255,107,0,0.08) 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: 8,
        }}>
          <Hammer size={72} color={C.accent} />
          <span style={{ fontSize: 13, color: C.textGrey, fontWeight: 500, textAlign: 'center' }}>
            Skills that power<br/>your city
          </span>
        </div>
      </div>

      {/* CTA */}
      <div style={{ width: '100%' }}>
        <button
          onClick={() => navigate('/login')}
          style={{
            width: '100%', height: 52, borderRadius: 12,
            backgroundColor: C.accent, color: 'white',
            border: 'none', fontSize: 16, fontWeight: 600,
            cursor: 'pointer', fontFamily: 'inherit',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          }}
        >
          <Briefcase size={18} />
          Login
        </button>
        <p style={{ color: C.textGrey, marginTop: 14, fontSize: 11, textAlign: 'center' }}>
          By continuing, you agree to our Terms of Service & Privacy Policy
        </p>
      </div>
    </div>
  );
}
