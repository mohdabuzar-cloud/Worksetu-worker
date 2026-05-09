import { useState } from 'react';
import { C } from '../theme';

type Filter = 'all' | 'completed' | 'cancelled';

const allTasks = [
  { id: 1, icon: '🧹', service: 'Home Cleaning', customer: 'Priya Sharma', date: 'Today', amount: '₹304', status: 'completed' as const },
  { id: 2, icon: '🚗', service: 'Car Wash', customer: 'Amit Verma', date: 'Yesterday', amount: '₹159', status: 'completed' as const },
  { id: 3, icon: '❄️', service: 'AC Repair', customer: 'Sunita Devi', date: '3 May', amount: '₹399', status: 'completed' as const },
  { id: 4, icon: '🔧', service: 'Plumbing', customer: 'Raj Kumar', date: '1 May', amount: '—', status: 'cancelled' as const },
  { id: 5, icon: '🛋️', service: 'Sofa Cleaning', customer: 'Meena Gupta', date: '29 Apr', amount: '₹319', status: 'completed' as const },
];

export default function TaskHistory() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = filter === 'all' ? allTasks : allTasks.filter(t => t.status === filter);

  const statusConfig = {
    completed: { label: 'Completed', color: C.success, bg: '#F0FDF4' },
    cancelled: { label: 'Cancelled', color: C.error, bg: '#FEF2F2' },
  };

  return (
    <div style={{ paddingBottom: 16 }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'white', padding: '16px 16px 12px',
        borderBottom: `1px solid ${C.divider}`,
      }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: C.textDark, marginBottom: 12 }}>
          Task History
        </h2>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 8 }}>
          {(['all', 'completed', 'cancelled'] as Filter[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                height: 32, borderRadius: 20, padding: '0 14px',
                fontSize: 13, fontWeight: filter === f ? 600 : 400,
                border: `1.5px solid ${filter === f ? C.accent : C.divider}`,
                backgroundColor: filter === f ? C.accent : 'white',
                color: filter === f ? 'white' : C.textGrey,
                cursor: 'pointer', fontFamily: 'inherit',
                textTransform: 'capitalize',
              }}
            >
              {f === 'all'
                ? `All (${allTasks.length})`
                : f === 'completed'
                  ? `Completed (${allTasks.filter(t => t.status === 'completed').length})`
                  : `Cancelled (${allTasks.filter(t => t.status === 'cancelled').length})`
              }
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '16px 16px 0' }}>
        {filtered.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '48px 24px',
          }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>📋</div>
            <p style={{ fontSize: 16, fontWeight: 600, color: C.textDark, marginBottom: 6 }}>
              No tasks found
            </p>
            <p style={{ fontSize: 13, color: C.textGrey }}>
              No {filter} tasks to display.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {filtered.map(task => (
              <div key={task.id} style={{
                backgroundColor: 'white', borderRadius: 16, padding: '14px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                border: `1px solid ${C.divider}`,
              }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  {/* Service icon */}
                  <div style={{
                    width: 46, height: 46, borderRadius: 12,
                    backgroundColor: '#F9FAFB', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, flexShrink: 0,
                  }}>
                    {task.icon}
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                      <p style={{ fontSize: 15, fontWeight: 700, color: C.textDark }}>{task.service}</p>
                      <span style={{ fontSize: 15, fontWeight: 700, color: task.status === 'completed' ? C.success : C.textGrey, flexShrink: 0 }}>
                        {task.amount}
                      </span>
                    </div>
                    <p style={{ fontSize: 12, color: C.textGrey, marginTop: 2 }}>
                      👤 {task.customer}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                      <span style={{ fontSize: 12, color: C.textGrey }}>📅 {task.date}</span>
                      <div style={{
                        backgroundColor: statusConfig[task.status].bg,
                        padding: '3px 10px', borderRadius: 20,
                      }}>
                        <span style={{ fontSize: 11, color: statusConfig[task.status].color, fontWeight: 600 }}>
                          {statusConfig[task.status].label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
