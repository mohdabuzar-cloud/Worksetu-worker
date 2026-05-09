import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Navigation2, MapPin, Clock, ArrowRight } from 'lucide-react';
import { C } from '../theme';

const steps = [
  { label: 'I Have Arrived', color: C.accent, icon: '📍', next: 'Start Work' },
  { label: 'Start Work', color: C.primary, icon: '🔨', next: 'Mark Complete' },
  { label: 'Mark as Complete', color: C.success, icon: '✅', next: null },
];

function MapPlaceholder() {
  return (
    <div style={{
      flex: 1, position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(180deg, #C8DCF0 0%, #B8CDE4 50%, #D4E8C2 100%)',
    }}>
      {/* Grid lines (roads) */}
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
        {/* Horizontal roads */}
        {[15, 30, 45, 60, 75, 88].map((y, i) => (
          <line key={`h${i}`} x1="0" y1={`${y}%`} x2="100%" y2={`${y}%`}
            stroke="white" strokeWidth={i % 2 === 0 ? 3 : 1.5} opacity={i % 2 === 0 ? 0.6 : 0.3} />
        ))}
        {/* Vertical roads */}
        {[12, 28, 45, 62, 80].map((x, i) => (
          <line key={`v${i}`} x1={`${x}%`} y1="0" x2={`${x}%`} y2="100%"
            stroke="white" strokeWidth={i % 2 === 0 ? 3 : 1.5} opacity={i % 2 === 0 ? 0.6 : 0.3} />
        ))}
        {/* Route dotted line */}
        <line x1="22%" y1="78%" x2="65%" y2="25%"
          stroke={C.accent} strokeWidth="4" strokeDasharray="10,6"
          strokeLinecap="round" opacity="0.9" />
        {/* Glow on route */}
        <line x1="22%" y1="78%" x2="65%" y2="25%"
          stroke={C.accent} strokeWidth="8" opacity="0.2" />
      </svg>

      {/* Current location dot */}
      <div style={{
        position: 'absolute', left: '18%', bottom: '24%',
        transform: 'translate(-50%, 50%)',
      }}>
        <div style={{
          width: 22, height: 22, borderRadius: '50%',
          backgroundColor: C.accent, border: '3px solid white',
          boxShadow: '0 0 0 6px rgba(255,107,0,0.2)',
        }} />
        <div style={{
          position: 'absolute', top: 26, left: '50%', transform: 'translateX(-50%)',
          backgroundColor: C.accent, color: 'white', fontSize: 10,
          fontWeight: 600, padding: '2px 8px', borderRadius: 6, whiteSpace: 'nowrap',
        }}>
          You
        </div>
      </div>

      {/* Destination pin */}
      <div style={{
        position: 'absolute', left: '63%', top: '20%',
        transform: 'translate(-50%, -100%)',
      }}>
        <div style={{
          backgroundColor: C.primary, width: 36, height: 36, borderRadius: '50% 50% 50% 0',
          transform: 'rotate(-45deg)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', boxShadow: '0 3px 10px rgba(26,115,232,0.4)',
        }}>
          <MapPin size={16} color="white" style={{ transform: 'rotate(45deg)' }} />
        </div>
        <div style={{
          position: 'absolute', top: 40, left: '50%', transform: 'translateX(-50%)',
          backgroundColor: C.primary, color: 'white', fontSize: 10,
          fontWeight: 600, padding: '2px 8px', borderRadius: 6, whiteSpace: 'nowrap',
        }}>
          Customer
        </div>
      </div>

      {/* Map attribution */}
      <div style={{
        position: 'absolute', top: 12, left: 12,
        backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 10,
        padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 6,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}>
        <Navigation2 size={14} color={C.primary} />
        <span style={{ fontSize: 12, fontWeight: 600, color: C.textDark }}>Live Navigation</span>
      </div>

      {/* ETA chip */}
      <div style={{
        position: 'absolute', top: 12, right: 12,
        backgroundColor: C.success, borderRadius: 10,
        padding: '6px 10px', boxShadow: '0 2px 8px rgba(52,168,83,0.3)',
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: 'white' }}>~12 min</span>
      </div>
    </div>
  );
}

export default function NavigationActive() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const handleAction = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      navigate('/completion');
    }
  };

  const currentStep = steps[step];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: C.bg }}>
      {/* AppBar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        zIndex: 10, display: 'flex', alignItems: 'center',
        padding: '10px 12px',
      }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            width: 36, height: 36, borderRadius: 10, backgroundColor: 'white',
            border: 'none', cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          <ChevronLeft size={22} color={C.textDark} />
        </button>
      </div>

      {/* Map (55% of screen) */}
      <MapPlaceholder />

      {/* Bottom Sheet (45% of screen) */}
      <div style={{
        backgroundColor: 'white', borderTopLeftRadius: 24, borderTopRightRadius: 24,
        padding: '16px 16px 20px',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
        flexShrink: 0,
      }}>
        {/* Handle */}
        <div style={{
          width: 36, height: 4, backgroundColor: '#E5E7EB',
          borderRadius: 2, margin: '0 auto 14px',
        }} />

        {/* Customer info */}
        <div style={{ marginBottom: 14, paddingBottom: 12, borderBottom: `1px solid ${C.divider}` }}>
          <p style={{ fontSize: 15, fontWeight: 700, color: C.textDark, marginBottom: 4 }}>
            Priya Sharma
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}>
            <MapPin size={13} color={C.textGrey} style={{ flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 13, color: C.textGrey, lineHeight: 1.4 }}>
              42 Green Avenue, Model Town, Ludhiana
            </p>
          </div>
        </div>

        {/* Distance & ETA */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
          <div style={{
            flex: 1, backgroundColor: '#F3F4F6', borderRadius: 12, padding: '10px 14px',
            display: 'flex', gap: 8, alignItems: 'center',
          }}>
            <Navigation2 size={16} color={C.primary} />
            <div>
              <p style={{ fontSize: 16, fontWeight: 700, color: C.textDark }}>2.3 km</p>
              <p style={{ fontSize: 11, color: C.textGrey }}>Distance</p>
            </div>
          </div>
          <div style={{
            flex: 1, backgroundColor: '#F3F4F6', borderRadius: 12, padding: '10px 14px',
            display: 'flex', gap: 8, alignItems: 'center',
          }}>
            <Clock size={16} color={C.accent} />
            <div>
              <p style={{ fontSize: 16, fontWeight: 700, color: C.textDark }}>~12 min</p>
              <p style={{ fontSize: 11, color: C.textGrey }}>ETA</p>
            </div>
          </div>
        </div>

        {/* Progress steps indicator */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              flex: 1, height: 4, borderRadius: 2,
              backgroundColor: i <= step ? currentStep.color : '#E5E7EB',
              transition: 'background-color 0.3s',
            }} />
          ))}
        </div>

        {/* Current step label */}
        <p style={{ fontSize: 12, color: C.textGrey, marginBottom: 8, textAlign: 'center' }}>
          Step {step + 1} of 3
        </p>

        {/* Action button */}
        <button
          onClick={handleAction}
          style={{
            width: '100%', height: 52, borderRadius: 12,
            backgroundColor: currentStep.color, color: 'white',
            border: 'none', fontSize: 15, fontWeight: 700,
            cursor: 'pointer', fontFamily: 'inherit',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}
        >
          <span>{currentStep.icon}</span>
          {currentStep.label}
          {step < 2 && <ArrowRight size={18} />}
        </button>
      </div>
    </div>
  );
}
