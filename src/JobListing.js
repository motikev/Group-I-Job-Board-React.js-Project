import React, { useState } from 'react';
import './JobListing.css'; 

const JobListing = ({ title, location }) => {
  const [showModal, setShowModal] = useState(false);

  const handleApplyNow = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="job-listing">
      <h3>{title}</h3>
      <p>Location: {location}</p>
      <button onClick={handleApplyNow}>Apply Now</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Apply for {title}</h2>
            <form>
              <label htmlFor="fullName">Full Name:</label>
              <input type="text" id="fullName" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required />
              <label htmlFor="coverLetter">Cover Letter:</label>
              <textarea id="coverLetter" required></textarea>
              <button type="submit">Submit Application</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListing;
