import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Brush, ChevronLeft, MapPin, Phone, CheckCircle2, Briefcase, Clock } from 'lucide-react';
import { C } from '../theme';

export default function TaskDetail() {
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: C.bg }}>
      {/* AppBar */}
      <div style={{
        backgroundColor: 'white', height: 56, display: 'flex', alignItems: 'center',
        padding: '0 16px', borderBottom: `1px solid ${C.divider}`, flexShrink: 0,
      }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
          <ChevronLeft size={24} color={C.textDark} />
        </button>
        <h1 style={{ flex: 1, textAlign: 'center', fontSize: 17, fontWeight: 600, color: C.textDark }}>
          Task Details
        </h1>
        <div style={{ width: 32 }} />
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
        {/* Accepted Banner */}
        {accepted && (
          <div style={{
            backgroundColor: C.success, borderRadius: 14, padding: '12px 16px',
            marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <CheckCircle2 size={22} color="white" />
            <span style={{ fontSize: 15, fontWeight: 700, color: 'white' }}>
              Task Accepted ✓
            </span>
          </div>
        )}

        {/* Task info card */}
        <div style={{
          backgroundColor: 'white', borderRadius: 18, padding: '18px',
          marginBottom: 14, boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 14 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 16,
              backgroundColor: '#DCFCE7', display: 'flex',
              alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Brush size={26} color={C.accent} />
            </div>
            <div>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: C.textDark, marginBottom: 4 }}>
                Home Cleaning
              </h2>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                backgroundColor: '#F0FDF4', padding: '3px 10px', borderRadius: 20,
              }}>
                <span style={{ fontSize: 13, color: C.success, fontWeight: 600 }}>₹380 estimated</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, backgroundColor: C.divider, marginBottom: 14 }} />

          {/* Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <MapPin size={16} color={C.textGrey} style={{ flexShrink: 0, marginTop: 1 }} />
              <div>
                <p style={{ fontSize: 12, color: C.textGrey, marginBottom: 1 }}>Location</p>
                {accepted ? (
                  <p style={{ fontSize: 14, fontWeight: 600, color: C.textDark }}>
                    42 Green Avenue, Model Town, Ludhiana
                  </p>
                ) : (
                  <p style={{ fontSize: 14, fontWeight: 600, color: C.textDark }}>
                    Model Town, Ludhiana{' '}
                    <span style={{ fontSize: 11, color: C.accent, fontWeight: 500 }}>
                      (full address after accepting)
                    </span>
                  </p>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <Clock size={16} color={C.textGrey} style={{ flexShrink: 0, marginTop: 1 }} />
              <div>
                <p style={{ fontSize: 12, color: C.textGrey, marginBottom: 1 }}>Scheduled</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: C.textDark }}>Today, ASAP</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <Briefcase size={16} color={C.textGrey} style={{ flexShrink: 0, marginTop: 1 }} />
              <div>
                <p style={{ fontSize: 12, color: C.textGrey, marginBottom: 1 }}>Notes from Customer</p>
                <p style={{ fontSize: 14, color: C.textDark }}>
                  "Please bring cleaning supplies"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer card (only after accept) */}
        {accepted && (
          <div style={{
            backgroundColor: 'white', borderRadius: 18, padding: '16px',
            marginBottom: 14, boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
          }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: C.textGrey, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Customer Info
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 46, height: 46, borderRadius: 14,
                backgroundColor: '#EFF6FF', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                fontSize: 18, fontWeight: 700, color: C.primary,
              }}>
                PS
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 15, fontWeight: 600, color: C.textDark }}>Priya Sharma</p>
                <p style={{ fontSize: 13, color: C.textGrey }}>+91 98765 12345</p>
              </div>
              <button style={{
                height: 36, borderRadius: 10, backgroundColor: 'white',
                border: `1.5px solid ${C.primary}`, color: C.primary,
                fontSize: 13, fontWeight: 600, cursor: 'pointer',
                padding: '0 14px', fontFamily: 'inherit',
                display: 'flex', alignItems: 'center', gap: 5,
              }}>
                <Phone size={13} />
                Call
              </button>
            </div>
          </div>
        )}

        {/* Earnings breakdown card */}
        <div style={{
          backgroundColor: '#F0FDF4', borderRadius: 16, padding: '14px 16px',
          marginBottom: 20, border: `1px solid ${C.success}30`,
        }}>
          <p style={{ fontSize: 13, color: C.textGrey, marginBottom: 2 }}>Your Estimated Earnings</p>
          <p style={{ fontSize: 24, fontWeight: 700, color: C.success }}>₹380</p>
          <p style={{ fontSize: 12, color: C.textGrey, marginTop: 2 }}>
            (after 20% platform fee deduction)
          </p>
        </div>

        {/* Action buttons */}
        {!accepted ? (
          <>
            <button
              onClick={() => setAccepted(true)}
              style={{
                width: '100%', height: 52, borderRadius: 12,
                backgroundColor: C.success, color: 'white',
                border: 'none', fontSize: 15, fontWeight: 700,
                cursor: 'pointer', fontFamily: 'inherit', marginBottom: 10,
              }}
            >
              ✓ Accept Task
            </button>
            <button
              onClick={() => navigate(-1)}
              style={{
                width: '100%', background: 'none', border: 'none',
                color: C.error, fontSize: 15, fontWeight: 500,
                cursor: 'pointer', fontFamily: 'inherit', padding: '8px 0',
              }}
            >
              Decline Task
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate('/navigation')}
            style={{
              width: '100%', height: 52, borderRadius: 12,
              backgroundColor: C.accent, color: 'white',
              border: 'none', fontSize: 15, fontWeight: 700,
              cursor: 'pointer', fontFamily: 'inherit',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}
          >
            🗺️ Open Navigation
          </button>
        )}
      </div>
    </div>
  );
}