import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import { CheckCircle2 } from 'lucide-react';
import { C } from '../theme';
import Logo from '../components/Logo';

export default function WorkerLogin() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!identifier.trim() || !password) {
      toast.error('Please enter your username/email and password');
      return;
    }

    toast.success('Login successful! Redirecting...');
    setTimeout(() => navigate('/kyc'), 700);
  };

  return (
    <div style={{ height: '100%', overflowY: 'auto', backgroundColor: C.bg }}>
      {/* Header area */}
      <div style={{
        background: 'linear-gradient(160deg, #22C55E 0%, #10B981 100%)',
        padding: '48px 24px 40px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        borderBottomLeftRadius: 32, borderBottomRightRadius: 32,
      }}>
        <Logo size={72} light subtitle="Worker login" />
      </div>

      {/* Form card */}
      <div style={{ padding: '24px 16px' }}>
        <div style={{
          backgroundColor: '#FFFFFF', borderRadius: 20,
          padding: '28px 20px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, color: C.textDark, marginBottom: 4 }}>
            Login
          </h2>
          <p style={{ fontSize: 14, color: C.textGrey, marginBottom: 24 }}>
            Use your username or email and password to continue.
          </p>

          <label style={{ fontSize: 13, fontWeight: 500, color: C.textDark, display: 'block', marginBottom: 8 }}>
            Username or Email
          </label>
          <input
            type="text"
            placeholder="Enter your username or email"
            value={identifier}
            onChange={e => setIdentifier(e.target.value)}
            style={{
              width: '100%', height: 52, borderRadius: 12,
              backgroundColor: '#F3F4F6', border: 'none',
              padding: '0 16px', fontSize: 15, color: C.textDark,
              outline: 'none', fontFamily: 'inherit', marginBottom: 16,
            }}
          />

          <label style={{ fontSize: 13, fontWeight: 500, color: C.textDark, display: 'block', marginBottom: 8 }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: '100%', height: 52, borderRadius: 12,
              backgroundColor: '#F3F4F6', border: 'none',
              padding: '0 16px', fontSize: 15, color: C.textDark,
              outline: 'none', fontFamily: 'inherit', marginBottom: 24,
            }}
          />

          <button
            onClick={handleLogin}
            style={{
              width: '100%', height: 52, borderRadius: 12,
              backgroundColor: C.accent, color: 'white',
              border: 'none', fontSize: 15, fontWeight: 600,
              cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            Login
          </button>

          <button
            onClick={() => navigate('/splash')}
            style={{
              width: '100%', marginTop: 12, background: 'none', border: 'none',
              color: C.primary, fontSize: 14, fontWeight: 500, cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Back to welcome
          </button>

          <div
            style={{
              marginTop: 16,
              padding: '12px 14px',
              borderRadius: 12,
              backgroundColor: '#F3F4F6',
              color: C.textDark,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 6, color: C.textGrey }}>
              Credentials
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.5 }}>
              <div>
                <span style={{ fontWeight: 600 }}>Username:</span> admin
              </div>
              <div>
                <span style={{ fontWeight: 600 }}>Password:</span> Password123
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
