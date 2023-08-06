import React, { useState } from 'react';

const ApplyWithResume = ({ jobTitle, onSubmit }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      const apiResponse = { success: true, message: 'Application submitted successfully!' };
      if (apiResponse.success) {
        if (!fullName || !email || !coverLetter) {
          setFormError('Please fill out all required fields.');
          return;
        }

        const applicationData = {
          fullName,
          email,
          coverLetter,
          jobTitle,
        };
        onSubmit(applicationData);
        setFullName('');
        setEmail('');
        setCoverLetter('');
      } else {
        console.error('Error submitting application:', apiResponse.message);
      }
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="coverLetter">Cover Letter:</label>
      <textarea
        id="coverLetter"
        value={coverLetter}
        onChange={(e) => setCoverLetter(e.target.value)}
        required
      ></textarea>

      {formError && <p>{formError}</p>}

      <button type="submit">Submit Application</button>
    </form>
  );
};

export default ApplyWithResume;
