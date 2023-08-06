import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SocialSharing from './SocialSharing';

const JobListingPage = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/jobListings')
      .then(response => setJobListings(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="job-listing-page">
      <h2>Job Listings</h2>
      <div className="job-listings">
        {jobListings.map(job => (
          <div className="job-listing" key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
            <Link to={`/job-details/${job.id}`}>View Details</Link>
          </div>
        ))}
      </div>
      <SocialSharing jobTitle={jobListings.title} jobUrl={`/job-details/${jobListings.id}`} />
    </div>
  );
};

export default JobListingPage;
