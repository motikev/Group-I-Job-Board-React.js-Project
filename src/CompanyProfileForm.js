import React, { useState } from 'react';

const CompanyProfileForm = ({ onSave }) => {
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [companyCulture, setCompanyCulture] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const companyProfile = {
      name: companyName,
      description: companyDescription,
      culture: companyCulture,
    };

    onSave(companyProfile);

    setCompanyName('');
    setCompanyDescription('');
    setCompanyCulture('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="companyName">Company Name:</label>
      <input
        type="text"
        id="companyName"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        required
      />

      <label htmlFor="companyDescription">Company Description:</label>
      <textarea
        id="companyDescription"
        value={companyDescription}
        onChange={(e) => setCompanyDescription(e.target.value)}
        required
      ></textarea>

      <label htmlFor="companyCulture">Company Culture:</label>
      <textarea
        id="companyCulture"
        value={companyCulture}
        onChange={(e) => setCompanyCulture(e.target.value)}
        required
      ></textarea>

      <button type="submit">Save Profile</button>
    </form>
  );
};

export default CompanyProfileForm;
