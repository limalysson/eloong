import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import OpportunityList from './pages/volunteer/OpportunityList';
import VolunteerProfile from './pages/volunteer/VolunteerProfile';
import AdminDashboard from './pages/admin/Dashboard';
import ManageOpportunities from './pages/admin/ManageOpportunities';
import NGOShowcase from './pages/ngo/NGOShowcase';
import Login from './pages/auth/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />

        {/* Public / Landing Redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Volunteer Routes */}
        <Route path="/voluntario/*" element={
          <AppLayout>
            <Routes>
              <Route path="oportunidades" element={<OpportunityList />} />
              <Route path="perfil" element={<VolunteerProfile />} />
            </Routes>
          </AppLayout>
        } />

        {/* NGO Routes (Public via Link) */}
        <Route path="/vitrine" element={
          <AppLayout>
            <NGOShowcase />
          </AppLayout>
        } />

        {/* Admin Routes */}
        <Route path="/admin/*" element={
          <AppLayout>
            <Routes>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="oportunidades" element={<ManageOpportunities />} />
            </Routes>
          </AppLayout>
        } />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
