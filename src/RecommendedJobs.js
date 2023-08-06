import React from 'react';
import JobListing from './JobListing';

const RecommendedJobs = ({ userProfile, jobListings }) => {
  const getRecommendedJobs = () => {
    const { userId } = userProfile;

    const userInterests = jobListings.reduce((acc, job) => {
      if (job.interestedUsers.includes(userId)) {
        acc.push(job.id);
      }
      return acc;
    }, []);

    const recommendedJobs = jobListings.filter(job => {
      const similarJobs = job.interestedUsers.some(user => userInterests.includes(user));
    
      const notInterested = !job.interestedUsers.includes(userId);

      return similarJobs && notInterested;
    });

    return recommendedJobs.slice(0, 5);
  };

  const recommendedJobs = getRecommendedJobs();

  return (
    <div className="recommended-jobs">
      <h2>Recommended Jobs</h2>
      <div className="job-listings">
        {recommendedJobs.map(job => (
          <JobListing key={job.id} title={job.title} location={job.location} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedJobs;
