import React, { useState } from 'react';
import CompanyProfileForm from './CompanyProfileForm';

const CompanyProfilesPage = () => {
  const [companyProfiles, setCompanyProfiles] = useState([]);

  const handleSaveProfile = (newProfile) => {
    setCompanyProfiles([...companyProfiles, newProfile]);
  };

  return (
    <div>
      <h1>Company Profiles</h1>

      <CompanyProfileForm onSave={handleSaveProfile} />
      <ul>
        {companyProfiles.map((profile, index) => (
          <li key={index}>
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
            <p>{profile.culture}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyProfilesPage;
