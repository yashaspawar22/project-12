// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Login from './_Features/Login';
import SuperAdminPage from './_Features/Dashboard/superadmin';
import ViewMore from './_Features/collegedetails/viewmore';
import NavBar from './_Features/Dashboard/NavBar';

const Placeholder: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex min-h-screen bg-black text-white">
    <NavBar />
    <div className="p-6 text-xl font-semibold">{title} Page Coming Soon...</div>
  </div>
);

// Wrapper gets passed a college from main state
const ViewMoreWrapper: React.FC<{
  colleges: College[];
  onUpdateCollege: (updated: College) => void;
}> = ({ colleges, onUpdateCollege }) => {
  const { id } = useParams<{ id: string }>();
  const college = colleges.find((c) => c.id === Number(id));

  if (!college) {
    return (
      <div className="flex min-h-screen bg-black text-white p-6">
        <NavBar />
        <div>College not found</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-black text-gray-900 p-6">
      <NavBar />
      <ViewMore college={college} onUpdateCollege={onUpdateCollege} />
    </div>
  );
};

// Define College type
type College = {
  id: number;
  college_id: string;
  name: string;
  contact: { email: string; phone: string };
  admins: string[];
  subscription: { plan: string; status: string; expiry: string };
};

const App: React.FC = () => {
  const [colleges, setColleges] = useState<College[]>([
    {
      id: 1,
      college_id: 'C01',
      name: 'Harvard University',
      contact: { email: 'contact@harvard.edu', phone: '123-456-7890' },
      admins: ['Alice', 'Bob'],
      subscription: { plan: 'Premium', status: 'Active', expiry: '2025-12-31' },
    },
    {
      id: 2,
      college_id: 'C02',
      name: 'MIT',
      contact: { email: 'info@mit.edu', phone: '987-654-3210' },
      admins: ['Carol', 'Dave'],
      subscription: { plan: 'Standard', status: 'Active', expiry: '2025-06-30' },
    },
  ]);

  const handleUpdateCollege = (updated: College) => {
    setColleges((prev) =>
      prev.map((c) => (c.id === updated.id ? updated : c))
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SuperAdminPage />} />
        <Route path="/college-management" element={<SuperAdminPage />} />
        <Route
          path="/college/:id"
          element={
            <ViewMoreWrapper
              colleges={colleges}
              onUpdateCollege={handleUpdateCollege}
            />
          }
        />
        <Route path="/questions-data" element={<Placeholder title="Questions Data" />} />
        <Route path="/profile" element={<Placeholder title="Profile" />} />
        <Route path="*" element={<Placeholder title="404 Not Found" />} />
      </Routes>
    </Router>
  );
};

export default App;
