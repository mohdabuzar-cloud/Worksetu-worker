import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import { C } from '../theme';

const notifications = [
  { id: 1, icon: '🆕', title: 'New task request', desc: 'Home Cleaning nearby', time: '2 min ago', color: C.accent, bg: '#DCFCE7', unread: true },
  { id: 2, icon: '✅', title: 'Task accepted', desc: "You accepted Priya's request", time: '5 min ago', color: C.success, bg: '#F0FDF4', unread: true },
  { id: 3, icon: '💰', title: 'Payment received', desc: '₹304 credited to your wallet', time: '2 hr ago', color: C.success, bg: '#F0FDF4', unread: false },
  { id: 4, icon: '🔓', title: 'Hold released', desc: '₹159 is now available to withdraw', time: 'Yesterday', color: C.primary, bg: '#EFF6FF', unread: false },
  { id: 5, icon: '⭐', title: 'New review received', desc: 'Priya gave you 5 stars ⭐⭐⭐⭐⭐', time: 'Yesterday', color: C.warning, bg: '#FEFCE8', unread: false },
  { id: 6, icon: '✅', title: 'KYC Approved', desc: 'Aadhaar Card successfully verified', time: '2 days ago', color: C.success, bg: '#F0FDF4', unread: false },
  { id: 7, icon: '🔔', title: 'Complete your profile', desc: 'Add more skills to get more tasks', time: '3 days ago', color: C.textGrey, bg: '#F9FAFB', unread: false },
];

export default function WorkerNotifications() {
  const navigate = useNavigate();
  const unreadCount = notifications.filter(n => n.unread).length;

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
          Notifications
        </h1>
        <div style={{
          backgroundColor: C.accent, borderRadius: 10, padding: '2px 8px',
          fontSize: 12, fontWeight: 700, color: 'white', minWidth: 22, textAlign: 'center',
        }}>
          {unreadCount}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Unread section */}
        <div style={{ padding: '14px 16px 8px' }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: C.textGrey, textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Unread
          </p>
        </div>

        {notifications.filter(n => n.unread).map(notif => (
          <NotificationItem key={notif.id} notif={notif} />
        ))}

        {/* Read section */}
        <div style={{ padding: '14px 16px 8px' }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: C.textGrey, textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Earlier
          </p>
        </div>

        {notifications.filter(n => !n.unread).map(notif => (
          <NotificationItem key={notif.id} notif={notif} />
        ))}

        <div style={{ height: 16 }} />
      </div>
    </div>
  );
}

function NotificationItem({ notif }: { notif: typeof notifications[0] }) {
  return (
    <div style={{
      padding: '12px 16px',
      backgroundColor: notif.unread ? 'rgba(255,107,0,0.04)' : 'transparent',
      borderBottom: `1px solid ${C.divider}`,
      display: 'flex', gap: 12, alignItems: 'flex-start',
    }}>
      {/* Icon */}
      <div style={{
        width: 44, height: 44, borderRadius: 13,
        backgroundColor: notif.bg, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        fontSize: 20, flexShrink: 0,
      }}>
        {notif.icon}
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          <p style={{
            fontSize: 14, fontWeight: notif.unread ? 700 : 500,
            color: C.textDark, lineHeight: 1.3,
          }}>
            {notif.title}
          </p>
          <span style={{ fontSize: 11, color: C.textGrey, flexShrink: 0 }}>{notif.time}</span>
        </div>
        <p style={{ fontSize: 13, color: C.textGrey, marginTop: 2, lineHeight: 1.4 }}>
          {notif.desc}
        </p>
      </div>

      {/* Unread dot */}
      {notif.unread && (
        <div style={{
          width: 8, height: 8, borderRadius: '50%',
          backgroundColor: C.accent, flexShrink: 0, marginTop: 5,
        }} />
      )}
    </div>
  );
}
