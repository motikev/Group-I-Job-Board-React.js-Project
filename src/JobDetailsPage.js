import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/jobListings/${jobId}`)
      .then(response => setJobDetails(response.data))
      .catch(error => console.error(error));
  }, [jobId]);

  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job-details-page">
      <h2>{jobDetails.title}</h2>
      <p>Location: {jobDetails.location}</p>
      {/* Display more job details as needed */}
    </div>
  );
};

export default JobDetailsPage;
