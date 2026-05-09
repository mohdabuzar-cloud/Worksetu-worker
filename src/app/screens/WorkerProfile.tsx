import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  User, Building2, FileText, Bell, HelpCircle,
  ClipboardList, LogOut, ChevronRight, Star, CheckCircle2
} from 'lucide-react';
import { C } from '../theme';

const menuItems = [
  { icon: User, label: 'Edit Profile', color: C.primary, bg: '#EFF6FF' },
  { icon: Building2, label: 'Bank Account Details', color: C.success, bg: '#F0FDF4' },
  { icon: FileText, label: 'KYC Documents', color: C.accent, bg: '#DCFCE7', route: '/kyc' },
  { icon: Bell, label: 'Notification Settings', color: C.warning, bg: '#FEFCE8' },
  { icon: HelpCircle, label: 'Help & Support', color: C.primary, bg: '#EFF6FF' },
  { icon: ClipboardList, label: 'Terms & Privacy', color: C.textGrey, bg: '#F9FAFB' },
];

export default function WorkerProfile() {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  const handleMenuTap = (item: typeof menuItems[0]) => {
    if (item.route) navigate(item.route);
  };

  return (
    <div style={{ paddingBottom: 16 }}>
      {/* Profile Header */}
      <div style={{
        background: 'linear-gradient(160deg, #1A73E8 0%, #0F57C0 100%)',
        padding: '28px 16px 20px',
        position: 'relative',
      }}>
        {/* Avatar */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <div style={{
            width: 72, height: 72, borderRadius: 22,
            backgroundColor: 'rgba(255,255,255,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 26, fontWeight: 700, color: 'white',
            border: '3px solid rgba(255,255,255,0.4)',
            flexShrink: 0,
          }}>
            SK
          </div>
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 4 }}>
              Suresh Kumar
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
              <Star size={14} fill="#FBBC04" color="#FBBC04" />
              <span style={{ fontSize: 14, fontWeight: 600, color: 'white' }}>4.9</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>• 38 reviews</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>+91 87654 32109</p>
          </div>
        </div>

        {/* KYC chip */}
        <div style={{
          marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 5,
          backgroundColor: 'rgba(52,168,83,0.25)', padding: '5px 12px',
          borderRadius: 20, border: '1px solid rgba(52,168,83,0.4)',
        }}>
          <CheckCircle2 size={13} color="#34A853" />
          <span style={{ fontSize: 12, color: 'white', fontWeight: 600 }}>KYC Verified ✓</span>
        </div>
      </div>

      {/* Stats Row */}
      <div style={{
        backgroundColor: 'white', padding: '16px',
        borderBottom: `1px solid ${C.divider}`,
        display: 'flex', justifyContent: 'space-around',
      }}>
        {[
          { value: '42', label: 'Tasks\nCompleted' },
          { value: '₹12,400', label: 'Total\nEarned' },
          { value: 'Jan\n2025', label: 'Member\nSince' },
        ].map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 17, fontWeight: 700, color: C.textDark }}>{stat.value}</p>
            <p style={{ fontSize: 10, color: C.textGrey, whiteSpace: 'pre-line', lineHeight: 1.3 }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div style={{ padding: '14px 16px', backgroundColor: 'white', marginTop: 8 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: C.textGrey, marginBottom: 10 }}>SKILLS & SERVICES</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {['🧹 Cleaning', '🚗 Car Wash', '❄️ AC Repair', '🔧 Plumbing', '🛋️ Sofa Clean'].map((skill, i) => (
            <div key={i} style={{
              backgroundColor: '#EFF6FF', borderRadius: 20, padding: '5px 12px',
              fontSize: 12, fontWeight: 500, color: C.primary,
            }}>
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Settings Menu */}
      <div style={{ padding: '14px 16px', marginTop: 8 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: C.textGrey, marginBottom: 10 }}>SETTINGS</p>
        <div style={{
          backgroundColor: 'white', borderRadius: 18,
          overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        }}>
          {menuItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i}>
                <button
                  onClick={() => handleMenuTap(item)}
                  style={{
                    width: '100%', height: 54, display: 'flex', alignItems: 'center',
                    gap: 12, padding: '0 16px', background: 'none', border: 'none',
                    cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    backgroundColor: item.bg, display: 'flex',
                    alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={16} color={item.color} />
                  </div>
                  <span style={{ flex: 1, fontSize: 14, fontWeight: 500, color: C.textDark, textAlign: 'left' }}>
                    {item.label}
                  </span>
                  <ChevronRight size={16} color={C.textGrey} />
                </button>
                {i < menuItems.length - 1 && (
                  <div style={{ height: 1, backgroundColor: C.divider, marginLeft: 64 }} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Logout */}
      <div style={{ padding: '4px 16px 0' }}>
        <button
          onClick={() => setShowLogout(true)}
          style={{
            width: '100%', height: 52, borderRadius: 14,
            backgroundColor: '#FEF2F2', color: C.error,
            border: `1.5px solid #FCA5A5`, fontSize: 14, fontWeight: 700,
            cursor: 'pointer', fontFamily: 'inherit',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}
        >
          <LogOut size={18} color={C.error} />
          Logout
        </button>
      </div>

      {/* Logout Confirmation Dialog */}
      {showLogout && (
        <div style={{
          position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '0 32px', zIndex: 50,
        }}>
          <div style={{
            backgroundColor: 'white', borderRadius: 20, padding: '24px 20px',
            width: '100%', maxWidth: 320,
          }}>
            <div style={{ textAlign: 'center', marginBottom: 16 }}>
              <div style={{ fontSize: 44, marginBottom: 8 }}>👋</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: C.textDark, marginBottom: 6 }}>
                Logout?
              </h3>
              <p style={{ fontSize: 13, color: C.textGrey, lineHeight: 1.5 }}>
                Are you sure you want to log out of WorkSetu Worker App?
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
              <button
                onClick={() => setShowLogout(false)}
                style={{
                  flex: 1, height: 46, borderRadius: 12,
                  backgroundColor: '#F3F4F6', color: C.textDark,
                  border: 'none', fontSize: 14, fontWeight: 600,
                  cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => navigate('/', { replace: true })}
                style={{
                  flex: 1, height: 46, borderRadius: 12,
                  backgroundColor: C.error, color: 'white',
                  border: 'none', fontSize: 14, fontWeight: 700,
                  cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}