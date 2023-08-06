import React, { useState } from 'react';

const JobAlerts = () => {
  const [email, setEmail] = useState('');
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Keywords:', keywords);
    console.log('Location:', location);
    alert('Job alert subscription successful!');
    setEmail('');
    setKeywords('');
    setLocation('');
  };

  return (
    <div className="job-alerts">
      <h2>Job Alerts</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="keywords">Keywords:</label>
        <input
          type="text"
          id="keywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default JobAlerts;
