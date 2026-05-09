import { Outlet, useNavigate, useLocation } from 'react-router';
import { LayoutDashboard, ClipboardList, Wallet, User } from 'lucide-react';
import { C } from '../theme';

const tabs = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { label: 'Tasks', icon: ClipboardList, path: '/dashboard/tasks' },
  { label: 'Earnings', icon: Wallet, path: '/dashboard/earnings' },
  { label: 'Profile', icon: User, path: '/dashboard/profile' },
];

export default function DashboardLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (tabPath: string) => {
    if (tabPath === '/dashboard') return pathname === '/dashboard';
    return pathname.startsWith(tabPath);
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Scrollable content area */}
      <div style={{ flex: 1, overflowY: 'auto', backgroundColor: C.bg }}>
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <div style={{
        backgroundColor: 'white',
        height: 64,
        flexShrink: 0,
        display: 'flex',
        borderTop: `1px solid ${C.divider}`,
        boxShadow: '0 -4px 12px rgba(0,0,0,0.06)',
      }}>
        {tabs.map(tab => {
          const active = isActive(tab.path);
          const Icon = tab.icon;
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              style={{
                flex: 1, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 3,
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              <div style={{
                width: 36, height: 28, display: 'flex', alignItems: 'center',
                justifyContent: 'center', borderRadius: 12,
                backgroundColor: active ? `${C.accent}18` : 'transparent',
                transition: 'background-color 0.2s',
              }}>
                <Icon size={20} color={active ? C.accent : C.textGrey} strokeWidth={active ? 2.5 : 1.8} />
              </div>
              <span style={{
                fontSize: 10, fontWeight: active ? 600 : 400,
                color: active ? C.accent : C.textGrey,
                fontFamily: 'inherit',
              }}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
