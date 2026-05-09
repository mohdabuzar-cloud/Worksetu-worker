import { useNavigate } from 'react-router';
import { CheckCircle2, CreditCard, ShieldCheck, Brush, DollarSign } from 'lucide-react';
import { C } from '../theme';

export default function CompletionPayment() {
  const navigate = useNavigate();

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: C.bg }}>
      {/* AppBar */}
      <div style={{
        backgroundColor: 'white', height: 56, display: 'flex', alignItems: 'center',
        padding: '0 16px', borderBottom: `1px solid ${C.divider}`, flexShrink: 0,
      }}>
        <div style={{ width: 32 }} />
        <h1 style={{ flex: 1, textAlign: 'center', fontSize: 17, fontWeight: 600, color: C.textDark }}>
          Task Completed
        </h1>
        <div style={{ width: 32 }} />
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px 24px' }}>
        {/* Success icon */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            backgroundColor: '#ECFDF5', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 12px',
            boxShadow: '0 0 0 12px rgba(52,168,83,0.1)',
          }}>
            <CheckCircle2 size={44} color={C.success} strokeWidth={1.5} />
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: C.textDark, marginBottom: 4 }}>
            Task Completed!
          </h2>
          <p style={{ fontSize: 14, color: C.textGrey }}>Great job! Payment details below.</p>
        </div>

        {/* Summary card */}
        <div style={{
          backgroundColor: 'white', borderRadius: 18, padding: '18px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)', marginBottom: 14,
        }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: C.textGrey, marginBottom: 14,
            textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Task Summary
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Service', value: 'Home Cleaning' },
              { label: 'Customer', value: 'Priya Sharma' },
              { label: 'Duration', value: '1 hr 45 min' },
              { label: 'Date', value: 'Today' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 14, color: C.textGrey }}>{item.label}</span>
                <span style={{ fontSize: 14, fontWeight: 500, color: C.textDark }}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: 1, backgroundColor: C.divider, margin: '14px 0' }} />

          {/* Payment breakdown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 14, color: C.textGrey }}>Service Amount</span>
              <span style={{ fontSize: 14, fontWeight: 500, color: C.textDark }}>₹499</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 14, color: C.textGrey }}>Your Earnings</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: C.success }}>₹380</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 14, color: C.textGrey }}>Commission (20%)</span>
              <span style={{ fontSize: 14, fontWeight: 500, color: C.error }}>-₹76</span>
            </div>

            {/* Divider */}
            <div style={{ height: 1, backgroundColor: C.divider }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: C.textDark }}>Net Payable</span>
              <span style={{ fontSize: 20, fontWeight: 700, color: C.success }}>₹304</span>
            </div>
          </div>
        </div>

        {/* Payment status */}
        <div style={{
          backgroundColor: 'white', borderRadius: 16, padding: '14px 16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: 14,
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <CreditCard size={24} color={C.primary} />
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 13, color: C.textGrey, marginBottom: 2 }}>Payment Method</p>
            <p style={{ fontSize: 14, fontWeight: 600, color: C.textDark }}>UPI Collected</p>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 5,
            backgroundColor: '#F0FDF4', padding: '5px 12px', borderRadius: 20,
          }}>
            <CheckCircle2 size={14} color={C.success} />
            <span style={{ fontSize: 12, color: C.success, fontWeight: 600 }}>Received ✓</span>
          </div>
        </div>

        {/* On Hold info */}
        <div style={{
          backgroundColor: '#DCFCE7', borderRadius: 14, padding: '12px 14px',
          marginBottom: 20, display: 'flex', gap: 8, alignItems: 'flex-start',
        }}>
          <ShieldCheck size={18} color={C.accent} />
          <p style={{ fontSize: 12, color: C.accent, lineHeight: 1.5 }}>
            ₹304 will be held for 24 hours for dispute protection, then auto-transferred to your wallet.
          </p>
        </div>

        {/* Action buttons */}
        <button
          onClick={() => navigate('/dashboard/earnings')}
          style={{
            width: '100%', height: 52, borderRadius: 12,
            backgroundColor: C.accent, color: 'white',
            border: 'none', fontSize: 15, fontWeight: 700,
            cursor: 'pointer', fontFamily: 'inherit', marginBottom: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          }}
        >
          <DollarSign size={18} />
          View Earnings
        </button>
        <button
          onClick={() => navigate('/dashboard')}
          style={{
            width: '100%', height: 48, borderRadius: 12,
            backgroundColor: 'white', color: C.textDark,
            border: `1.5px solid ${C.divider}`, fontSize: 14, fontWeight: 600,
            cursor: 'pointer', fontFamily: 'inherit',
          }}
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}