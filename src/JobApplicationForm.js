import React, { useState } from 'react';
import './JobApplicationForm.css'; 

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    desiredPosition: '',
    education: '',
    workExperience: '',
    skills: '',
    coverLetter: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="job-application-form">
      <h1>Job Application Form</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="fullName">Your Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="address">Current Address:</label>
          <input
            type="text"
            id="currentAddress"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="desiredPosition">Position Applied:</label>
          <textarea
            type="text"
            id="positionApplied"
            name="desiredPosition"
            value={formData.desiredPosition}
            onChange={handleChange}
            required
         />
        </div>


        <div>
          <label htmlFor="education">Education Level:</label>
          <textarea
            id="educationLevel"
            name="education"
            value={formData.education}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>

        <div>
          <label htmlFor="workExperience">Work Experience:</label>
          <textarea
            id="workExperience"
            name="workExperience"
            value={formData.workExperience}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>

        <div>
          <label htmlFor="skills">Skills:</label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>

        <div>
          <label htmlFor="coverLetter">Resume:</label>
          <textarea
            id="Resume"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;