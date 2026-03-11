import { Routes, Route } from 'react-router-dom';
import { StoreProvider } from './store';
import { LandingPage } from './pages/LandingPage';
import { UserDashboardPage } from './pages/UserDashboardPage';
import { AdminPage } from './pages/AdminPage';

export function App() {
  return (
    <StoreProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<UserDashboardPage />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* Catch-all: redirect unknown routes to landing */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </StoreProvider>
  );
}
