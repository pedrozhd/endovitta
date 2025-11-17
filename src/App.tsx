import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './contexts/AppContext';
import { Header } from './components/layout/Header';
import { Landing } from './pages/Landing';
import { Onboarding } from './pages/Onboarding';
import { Dashboard } from './pages/Dashboard';
import { SymptomLog } from './pages/SymptomLog';
import { History } from './pages/History';
import { Education } from './pages/Education';
import { Profile } from './pages/Profile';

const AppContent: React.FC = () => {
  const { isOnboarded } = useApp();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route
          path="/dashboard"
          element={isOnboarded ? <Dashboard /> : <Navigate to="/onboarding" />}
        />
        <Route
          path="/symptom-log"
          element={isOnboarded ? <SymptomLog /> : <Navigate to="/onboarding" />}
        />
        <Route
          path="/history"
          element={isOnboarded ? <History /> : <Navigate to="/onboarding" />}
        />
        <Route
          path="/education"
          element={isOnboarded ? <Education /> : <Navigate to="/onboarding" />}
        />
        <Route
          path="/profile"
          element={isOnboarded ? <Profile /> : <Navigate to="/onboarding" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </Router>
  );
}

export default App;
