import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import CompanyProfilePage from './CompanyProfilePage';
import JobListingsPage from './JobListingsPage';
import JobDetailsPage from './JobDetailsPage';
import ContactPage from './ContactPage';
import JobAlerts from './JobAlerts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/company-profile" element={<CompanyProfilePage />} />
        <Route path="/job-listings" element={<JobListingsPage />} />
        <Route path="/job-details/:id" element={<JobDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/job-alerts" element={<JobAlerts />} />
      </Routes>
    </Router>
  );
};

export default App;

