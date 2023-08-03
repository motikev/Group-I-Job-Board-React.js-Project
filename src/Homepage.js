import React, { useState } from 'react';
import "./App.css"

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
      {/* Add more job details as needed */}
      <button onClick={handleApplyNow}>Apply Now</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Apply for {title}</h2>
            {/* Add your application form here */}
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

const Homepage = () => {
  const jobListings = [
    { id: 1, title: 'Software Engineer', location: 'New York' },
    { id: 2, title: 'Data Analyst', location: 'San Francisco' },
    { id: 3, title: 'Marketing Manager', location: 'Los Angeles' },

  ];

  return (
    <div className="homepage">
      <header>
        <h1>Local Job Board</h1>
        <p>Find your dream job in your local area</p>
      </header>
      <main>
        <p>Apply today and build</p>
        <h2>And build your resume</h2>
        <button>Apply now</button>
        {/* Add job listings component */}
        <section>
          <h2>Job Listings</h2>
          {jobListings.map(job => (
            <JobListing key={job.id} title={job.title} location={job.location} />
          ))}
        </section>
        {/* Add search filters */}
        {/* Add featured job section */}
        {/* Add other relevant sections */}
      </main>
      <section>
        <h3>Our services</h3>
        <p>Leading employers already using job and talent</p>
        <div className="heading-grid">
          <div>
            <h4>Front Job Submission</h4>
            <p>
              Fresh out of college? Finding a new job is exciting but it isn't easy. It's sifting through countless job descriptions and submitting dozens of applications, especially if "Easy Apply" isn't an option. So when a promising offer comes along, it's only natural to be eager.
            </p>
          </div>
          <div>
            <h5>CV & Cover Letter</h5>
            <p>
              A brief cover letter makes an impact by highlighting the candidate's passion for tutoring. Additionally, the cover letter is just long enough for the candidate to include some concrete achievements from past work.
            </p>
          </div>
          <div>
            <h6>Geo Location Search</h6>
            <p>
              During a job search, an employer may want to know if you have a geographical preference for where you work. It is important to answer honestly about your geographical preference that shows you are a suitable candidate worth considering.
            </p>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; {new Date().getFullYear()} Local Job Board. All rights reserved.</p>
        {/* Add footer content */}
      </footer>
    </div>
  );
};

export default Homepage;
