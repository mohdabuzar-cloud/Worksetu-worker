import { createBrowserRouter, Outlet } from 'react-router';
import { Toaster } from 'sonner';

import EntryScreen from './screens/EntryScreen';
import WorkerSplash from './screens/WorkerSplash';
import WorkerLogin from './screens/WorkerLogin';
import KYCVerification from './screens/KYCVerification';
import DashboardLayout from './screens/DashboardLayout';
import WorkerDashboard from './screens/WorkerDashboard';
import IncomingTasks from './screens/IncomingTasks';
import TaskDetail from './screens/TaskDetail';
import NavigationActive from './screens/NavigationActive';
import CompletionPayment from './screens/CompletionPayment';
import EarningsWallet from './screens/EarningsWallet';
import TaskHistory from './screens/TaskHistory';
import WorkerNotifications from './screens/WorkerNotifications';
import WorkerProfile from './screens/WorkerProfile';

function Root() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '100%',
          minHeight: '100vh',
          backgroundColor: '#F7F8FA',
          overflow: 'hidden',
          position: 'relative',
          fontFamily: "'Poppins', sans-serif",
          borderRadius: 0,
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              fontFamily: "'Poppins', sans-serif",
              borderRadius: '12px',
              fontSize: '13px',
            },
          }}
        />
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: WorkerLogin },
      { path: 'splash', Component: WorkerSplash },
      { path: 'login', Component: WorkerLogin },
      { path: 'kyc', Component: KYCVerification },
      {
        path: 'dashboard',
        Component: DashboardLayout,
        children: [
          { index: true, Component: WorkerDashboard },
          { path: 'tasks', Component: TaskHistory },
          { path: 'earnings', Component: EarningsWallet },
          { path: 'profile', Component: WorkerProfile },
        ],
      },
      { path: 'incoming-tasks', Component: IncomingTasks },
      { path: 'task-detail', Component: TaskDetail },
      { path: 'navigation', Component: NavigationActive },
      { path: 'completion', Component: CompletionPayment },
      { path: 'notifications', Component: WorkerNotifications },
    ],
  },
]);
