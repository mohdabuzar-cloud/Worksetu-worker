import { useNavigate } from 'react-router';
import { Bell, Star, CheckCircle2, Wifi, WifiOff, IndianRupee, Home, MapPin, DollarSign, Target, Zap, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { C } from '../theme';
import { useApp } from '../context/AppContext';

interface StatItem {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
}

interface QuickStatItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

export default function WorkerDashboard() {
  const navigate = useNavigate();
  const { isOnline, setIsOnline } = useApp();

  const stats: StatItem[] = [
    { icon: IndianRupee, label: "Today's Earnings", value: '₹850', color: C.success },
    { icon: CheckCircle2, label: 'Tasks Done', value: '3', color: C.primary },
    { icon: Star, label: 'Rating', value: '4.9', color: C.warning },
  ];

  return (
    <div style={{ paddingBottom: 16 }}>
      {/* Top Header */}
      <div style={{
        backgroundColor: 'white',
        padding: '16px 16px 12px',
        borderBottom: `1px solid ${C.divider}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: 13, color: C.textGrey, fontWeight: 400 }}>Good morning,</p>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: C.textDark, marginTop: 1 }}>
              Suresh Kumar
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <button
              onClick={() => navigate('/notifications')}
              style={{
                width: 40, height: 40, borderRadius: 12, backgroundColor: '#F3F4F6',
                border: 'none', cursor: 'pointer', display: 'flex',
                alignItems: 'center', justifyContent: 'center', position: 'relative',
              }}
            >
              <Bell size={18} color={C.textDark} />
              <div style={{
                position: 'absolute', top: 8, right: 8, width: 8, height: 8,
                borderRadius: '50%', backgroundColor: C.error,
                border: '2px solid white',
              }} />
            </button>
            <div style={{
              width: 40, height: 40, borderRadius: 12, backgroundColor: C.accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', fontWeight: 700, fontSize: 14, color: 'white',
            }}>
              SK
            </div>
          </div>
        </div>

        {/* KYC badge */}
        <div style={{
          marginTop: 10, display: 'flex', alignItems: 'center', gap: 6,
          backgroundColor: '#F0FDF4', borderRadius: 8, padding: '5px 10px',
          width: 'fit-content',
        }}>
          <CheckCircle2 size={13} color={C.success} />
          <span style={{ fontSize: 11, color: C.success, fontWeight: 600 }}>KYC Verified</span>
        </div>
      </div>

      <div style={{ padding: '16px 16px 0' }}>
        {/* Online/Offline Toggle Card */}
        <div style={{
          borderRadius: 20, padding: '20px 18px', marginBottom: 16,
          backgroundColor: isOnline ? C.success : '#6B7280',
          boxShadow: `0 6px 20px ${isOnline ? 'rgba(52,168,83,0.35)' : 'rgba(107,114,128,0.25)'}`,
          transition: 'background-color 0.3s, box-shadow 0.3s',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                {isOnline
                  ? <Wifi size={18} color="white" />
                  : <WifiOff size={18} color="rgba(255,255,255,0.8)" />
                }
                <span style={{ fontSize: 16, fontWeight: 700, color: 'white' }}>
                  {isOnline ? 'ONLINE' : 'OFFLINE'}
                </span>
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.4, maxWidth: 200 }}>
                {isOnline
                  ? 'You are ready to receive tasks'
                  : 'Toggle to start receiving tasks'}
              </p>
            </div>
            {/* Toggle Switch */}
            <div
              onClick={() => setIsOnline(!isOnline)}
              style={{
                width: 58, height: 32, borderRadius: 16,
                backgroundColor: isOnline ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.2)',
                position: 'relative', cursor: 'pointer',
                transition: 'background-color 0.3s', flexShrink: 0,
              }}
            >
              <div style={{
                position: 'absolute', top: 4,
                left: isOnline ? 'calc(100% - 28px)' : 4,
                width: 24, height: 24, borderRadius: '50%',
                backgroundColor: 'white',
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                transition: 'left 0.3s',
              }} />
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 16 }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              backgroundColor: 'white', borderRadius: 14, padding: '12px 10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center',
            }}>
              <stat.icon size={22} color={stat.color} />
              <p style={{ fontSize: 16, fontWeight: 700, color: stat.color, marginTop: 4, marginBottom: 2 }}>
                {stat.value}
              </p>
              <p style={{ fontSize: 10, color: C.textGrey, lineHeight: 1.3 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Incoming Task Banner (only when online) */}
        {isOnline && (
          <div style={{
            backgroundColor: C.accent, borderRadius: 18, padding: '16px',
            marginBottom: 16,
            boxShadow: '0 6px 20px rgba(255,107,0,0.3)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <div style={{
                width: 8, height: 8, borderRadius: '50%',
                backgroundColor: '#FBBC04', animation: 'pulse 1.5s ease-in-out infinite',
              }} />
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
                NEW INCOMING TASK
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <Home size={20} color="white" />
              <p style={{ fontSize: 18, fontWeight: 700, color: 'white', margin: 0 }}>
                Home Cleaning
              </p>
            </div>
            <div style={{ display: 'flex', gap: 16, marginBottom: 14 }}>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <MapPin size={14} /> Model Town, Ludhiana
              </span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <DollarSign size={14} /> ₹380
              </span>
            </div>
            <button
              onClick={() => navigate('/incoming-tasks')}
              style={{
                backgroundColor: 'white', color: C.accent, border: 'none',
                borderRadius: 10, padding: '9px 20px', fontSize: 14, fontWeight: 700,
                cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              View Task →
            </button>
          </div>
        )}

        {/* Quick Stats / Rating */}
        <div style={{
          backgroundColor: 'white', borderRadius: 16, padding: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: 12,
        }}>
          <p style={{ fontSize: 14, fontWeight: 600, color: C.textDark, marginBottom: 12 }}>
            Your Performance
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {[
              { label: 'Completion Rate', value: '96%', icon: Target },
              { label: 'Avg Response', value: '< 2 min', icon: Zap },
              { label: 'Customer Reviews', value: '38', icon: MessageCircle },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <item.icon size={20} color={C.primary} />
                <p style={{ fontSize: 15, fontWeight: 700, color: C.textDark }}>{item.value}</p>
                <p style={{ fontSize: 10, color: C.textGrey, maxWidth: 72 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rating stars */}
        <div style={{
          backgroundColor: 'white', borderRadius: 16, padding: '14px 16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex',
          alignItems: 'center', gap: 10,
        }}>
          <div style={{ display: 'flex', gap: 3 }}>
            {[1,2,3,4,5].map(s => (
              <Star key={s} size={18} fill={s <= 4 ? C.warning : 'none'} color={C.warning} />
            ))}
          </div>
          <div>
            <span style={{ fontSize: 16, fontWeight: 700, color: C.textDark }}>4.9</span>
            <span style={{ fontSize: 12, color: C.textGrey, marginLeft: 4 }}>from 38 reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}