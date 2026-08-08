import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/public/LandingPage';
import SuggestAppointment from './pages/client/SuggestAppointment';
import StaffAppointments from './pages/staff/appointments';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/client" element={<SuggestAppointment />} />
          <Route path="/staff" element={<StaffAppointments />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
