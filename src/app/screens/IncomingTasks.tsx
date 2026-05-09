import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, MapPin, Clock, Timer, Home, Truck, Power, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { C } from '../theme';
import { useApp } from '../context/AppContext';

interface Task {
  id: number;
  icon: LucideIcon;
  service: string;
  locality: string;
  pay: number;
  requestedAgo: string;
  countdown: number;
}

const initialTasks: Task[] = [
  {
    id: 1, icon: Home, service: 'Home Cleaning',
    locality: 'Model Town, Ludhiana',
    pay: 380, requestedAgo: '2 min ago', countdown: 55,
  },
  {
    id: 2, icon: Truck, service: 'Car Wash',
    locality: 'Civil Lines, Ludhiana',
    pay: 199, requestedAgo: 'just now', countdown: 60,
  },
];

export default function IncomingTasks() {
  const navigate = useNavigate();
  const { isOnline } = useApp();
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleAccept = (task: Task) => {
    navigate('/task-detail');
  };

  const handleDecline = (id: number) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

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
          Incoming Requests
        </h1>
        <div style={{ width: 32 }} />
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
        {!isOnline ? (
          /* Offline state */
          <div style={{
            flex: 1, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: '60px 24px', textAlign: 'center',
          }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>
            <Power size={64} color={C.textGrey} />
          </div>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: C.textDark, marginBottom: 8 }}>
              You are Offline
            </h3>
            <p style={{ fontSize: 14, color: C.textGrey, lineHeight: 1.6 }}>
              Go online from your Dashboard to start receiving task requests.
            </p>
            <button
              onClick={() => navigate('/dashboard')}
              style={{
                marginTop: 24, height: 48, borderRadius: 12,
                backgroundColor: C.accent, color: 'white',
                border: 'none', fontSize: 14, fontWeight: 600,
                padding: '0 24px', cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              Go to Dashboard
            </button>
          </div>
        ) : tasks.length === 0 ? (
          /* No tasks state */
          <div style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: '60px 24px', textAlign: 'center',
          }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>
            <CheckCircle2 size={64} color={C.accent} />
          </div>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: C.textDark, marginBottom: 8 }}>
              All caught up!
            </h3>
            <p style={{ fontSize: 14, color: C.textGrey }}>
              No pending requests. New tasks will appear here.
            </p>
          </div>
        ) : (
          <>
            {/* Online status indicator */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              marginBottom: 16,
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: '50%', backgroundColor: C.success,
              }} />
              <span style={{ fontSize: 13, color: C.success, fontWeight: 500 }}>
                You are Online — {tasks.length} task{tasks.length > 1 ? 's' : ''} waiting
              </span>
            </div>

            {/* Task cards */}
            {tasks.map(task => (
              <div key={task.id} style={{
                backgroundColor: 'white', borderRadius: 18, padding: '16px',
                marginBottom: 14,
                boxShadow: '0 3px 12px rgba(0,0,0,0.08)',
                border: `1px solid ${C.divider}`,
              }}>
                {/* Header row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    backgroundColor: '#DCFCE7', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <task.icon size={26} color={C.accent} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 16, fontWeight: 700, color: C.textDark, marginBottom: 4 }}>
                      {task.service}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <MapPin size={12} color={C.textGrey} />
                      <span style={{ fontSize: 12, color: C.textGrey }}>{task.locality}</span>
                    </div>
                  </div>
                  {/* Pay */}
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: 18, fontWeight: 700, color: C.success }}>₹{task.pay}</p>
                    <p style={{ fontSize: 10, color: C.textGrey }}>estimated</p>
                  </div>
                </div>

                {/* Meta info */}
                <div style={{
                  display: 'flex', gap: 16, marginBottom: 14, paddingBottom: 12,
                  borderBottom: `1px solid ${C.divider}`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={13} color={C.textGrey} />
                    <span style={{ fontSize: 12, color: C.textGrey }}>Requested {task.requestedAgo}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Timer size={13} color={C.accent} />
                    <span style={{ fontSize: 12, color: C.accent, fontWeight: 600 }}>
                      {task.countdown}s remaining
                    </span>
                  </div>
                </div>

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: 10 }}>
                  <button
                    onClick={() => handleDecline(task.id)}
                    style={{
                      flex: 1, height: 44, borderRadius: 12,
                      backgroundColor: 'white', color: C.error,
                      border: `2px solid ${C.error}`, fontSize: 14,
                      fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                    }}
                  >
                    ✕ Decline
                  </button>
                  <button
                    onClick={() => handleAccept(task)}
                    style={{
                      flex: 2, height: 44, borderRadius: 12,
                      backgroundColor: C.success, color: 'white',
                      border: 'none', fontSize: 14, fontWeight: 700,
                      cursor: 'pointer', fontFamily: 'inherit',
                    }}
                  >
                    ✓ Accept Task
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}