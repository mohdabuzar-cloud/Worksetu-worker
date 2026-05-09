import { useState } from 'react';
import { C } from '../theme';
import { Lock, TrendingUp, X } from 'lucide-react';

const transactions = [
  { id: 1, icon: '🧹', service: 'Home Cleaning', amount: 304, date: 'Today', status: 'onhold' as const },
  { id: 2, icon: '🚗', service: 'Car Wash', amount: 159, date: 'Yesterday', status: 'available' as const },
  { id: 3, icon: '❄️', service: 'AC Repair', amount: 399, date: '3 May', status: 'available' as const },
  { id: 4, icon: '🔧', service: 'Plumbing', amount: 279, date: '1 May', status: 'withdrawn' as const },
  { id: 5, icon: '🛋️', service: 'Sofa Cleaning', amount: 319, date: '29 Apr', status: 'withdrawn' as const },
];

const statusConfig = {
  onhold: { label: 'On Hold 🔒', color: C.accent, bg: '#DCFCE7' },
  available: { label: 'Available', color: C.success, bg: '#F0FDF4' },
  withdrawn: { label: 'Withdrawn', color: C.textGrey, bg: '#F3F4F6' },
};

export default function EarningsWallet() {
  const [showWithdraw, setShowWithdraw] = useState(false);

  return (
    <div style={{ paddingBottom: 16 }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'white', padding: '16px 16px 0',
        borderBottom: `1px solid ${C.divider}`,
      }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: C.textDark, marginBottom: 14 }}>
          Earnings & Wallet
        </h2>
      </div>

      <div style={{ padding: '16px 16px 0' }}>
        {/* Balance cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
          <div style={{
            borderRadius: 16, padding: '16px',
            background: 'linear-gradient(135deg, #34A853 0%, #2E9446 100%)',
            boxShadow: '0 4px 16px rgba(52,168,83,0.3)',
          }}>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)', marginBottom: 6 }}>
              Available Balance
            </p>
            <p style={{ fontSize: 22, fontWeight: 700, color: 'white' }}>₹2,100</p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>
              Ready to withdraw
            </p>
          </div>
          <div style={{
            borderRadius: 16, padding: '16px',
            background: 'linear-gradient(135deg, #22C55E 0%, #0F766E 100%)',
            boxShadow: '0 4px 16px rgba(255,107,0,0.3)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
              <Lock size={11} color="rgba(255,255,255,0.8)" />
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)' }}>On Hold (24h)</p>
            </div>
            <p style={{ fontSize: 22, fontWeight: 700, color: 'white' }}>₹304</p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>
              Releases soon
            </p>
          </div>
        </div>

        {/* Total this week */}
        <div style={{
          backgroundColor: 'white', borderRadius: 16, padding: '14px 16px',
          marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12, backgroundColor: '#EFF6FF',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <TrendingUp size={20} color={C.primary} />
          </div>
          <div>
            <p style={{ fontSize: 12, color: C.textGrey }}>Total This Week</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: C.textDark }}>₹3,200</p>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <span style={{
              backgroundColor: '#F0FDF4', color: C.success,
              fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 20,
            }}>
              +12% ↑
            </span>
          </div>
        </div>

        {/* Info box */}
        <div style={{
          backgroundColor: '#EFF6FF', borderRadius: 12, padding: '12px 14px',
          marginBottom: 14, display: 'flex', gap: 8, alignItems: 'flex-start',
        }}>
          <span style={{ fontSize: 16 }}>ℹ️</span>
          <p style={{ fontSize: 12, color: C.primary, lineHeight: 1.5 }}>
            Earnings are held for <strong>24 hours</strong> for dispute protection before becoming available for withdrawal.
          </p>
        </div>

        {/* Withdraw button */}
        <button
          onClick={() => setShowWithdraw(true)}
          style={{
            width: '100%', height: 52, borderRadius: 12,
            backgroundColor: C.accent, color: 'white',
            border: 'none', fontSize: 15, fontWeight: 700,
            cursor: 'pointer', fontFamily: 'inherit', marginBottom: 18,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}
        >
          💸 Withdraw ₹2,100
        </button>

        {/* Transaction history */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <p style={{ fontSize: 15, fontWeight: 600, color: C.textDark }}>Transaction History</p>
          <span style={{ fontSize: 12, color: C.primary, fontWeight: 500 }}>See all</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {transactions.map(tx => (
            <div key={tx.id} style={{
              backgroundColor: 'white', borderRadius: 14, padding: '12px 14px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 12,
                backgroundColor: '#F9FAFB', display: 'flex',
                alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0,
              }}>
                {tx.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: C.textDark }}>{tx.service}</p>
                <p style={{ fontSize: 12, color: C.textGrey }}>{tx.date}</p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: C.success, marginBottom: 3 }}>
                  +₹{tx.amount}
                </p>
                <div style={{
                  backgroundColor: statusConfig[tx.status].bg,
                  padding: '2px 8px', borderRadius: 20,
                }}>
                  <span style={{ fontSize: 10, color: statusConfig[tx.status].color, fontWeight: 600 }}>
                    {statusConfig[tx.status].label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Withdraw Bottom Sheet */}
      {showWithdraw && (
        <div style={{
          position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'flex-end', zIndex: 50,
        }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowWithdraw(false); }}
        >
          <div style={{
            backgroundColor: 'white', borderTopLeftRadius: 24, borderTopRightRadius: 24,
            padding: '20px 16px 32px', width: '100%',
          }}>
            {/* Handle */}
            <div style={{
              width: 36, height: 4, backgroundColor: '#E5E7EB',
              borderRadius: 2, margin: '0 auto 16px',
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.textDark }}>Withdraw Funds</h3>
              <button onClick={() => setShowWithdraw(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={22} color={C.textGrey} />
              </button>
            </div>

            <p style={{ fontSize: 13, color: C.textGrey, marginBottom: 16 }}>Bank Account Details</p>

            {[
              { label: 'Account Holder Name', placeholder: 'Suresh Kumar', icon: '👤' },
              { label: 'Bank Account Number', placeholder: '●●●●●●●● 4521', icon: '🏦' },
              { label: 'IFSC Code', placeholder: 'SBIN0001234', icon: '🔢' },
            ].map((field, i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <label style={{ fontSize: 12, fontWeight: 500, color: C.textGrey, display: 'block', marginBottom: 6 }}>
                  {field.label}
                </label>
                <div style={{
                  height: 48, borderRadius: 12, backgroundColor: '#F3F4F6',
                  display: 'flex', alignItems: 'center', padding: '0 14px', gap: 8,
                }}>
                  <span style={{ fontSize: 16 }}>{field.icon}</span>
                  <input
                    placeholder={field.placeholder}
                    style={{
                      flex: 1, background: 'none', border: 'none', outline: 'none',
                      fontSize: 14, color: C.textDark, fontFamily: 'inherit',
                    }}
                  />
                </div>
              </div>
            ))}

            <div style={{ marginTop: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, padding: '12px 0', borderTop: `1px solid ${C.divider}` }}>
                <span style={{ fontSize: 14, color: C.textGrey }}>Withdrawal Amount</span>
                <span style={{ fontSize: 16, fontWeight: 700, color: C.success }}>₹2,100</span>
              </div>
              <button
                onClick={() => setShowWithdraw(false)}
                style={{
                  width: '100%', height: 52, borderRadius: 12,
                  backgroundColor: C.accent, color: 'white',
                  border: 'none', fontSize: 15, fontWeight: 700,
                  cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                ✓ Confirm Withdrawal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}