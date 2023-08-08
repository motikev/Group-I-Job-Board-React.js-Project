import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobListing from './JobListing';
import ContactForm from './ContactForm';
import './Homepage.css';
import ReactPaginate from 'react-paginate';
import ApplyWithResume from './ApplyWithResume';

const Homepage = () => {
  const [jobListings, setJobListings] = useState([]);
  const [featuredJob, setFeaturedJob] = useState({});
  const [services, setServices] = useState([]);
  const [locationFilter, setLocationFilter] = useState('All');
  const [keywordFilter, setKeywordFilter] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const listingsPerPage = 5;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    coverLetter: '',
  });
  

  useEffect(() => {
    axios.get('http://localhost:3000/jobListings')
      .then(response => setJobListings(response.data))
      .catch(error => console.error(error));

    axios.get('http://localhost:3000/featuredJob')
      .then(response => setFeaturedJob(response.data))
      .catch(error => console.error(error));

    axios.get('http://localhost:3000/services')
      .then(response => setServices(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can submit the form data to your backend or perform any other actions here
  };

  // eslint-disable-next-line
  const filteredJobListings = jobListings.filter(job => {
    const locationMatch = locationFilter === 'All' || job.location === locationFilter;
    const keywordMatch = job.title.toLowerCase().includes(keywordFilter.toLowerCase());

    return locationMatch && keywordMatch;
  });

  const currentPageListings = jobListings.slice(
    pageNumber * listingsPerPage,
    (pageNumber + 1) * listingsPerPage
  );

  const pageCount = Math.ceil(jobListings.length / listingsPerPage);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  const handleApplyWithResumeSubmit = (resumeData) => {
    console.log('Resume Data:', resumeData);
  };
  
  return (
    <div className="homepage">
      <header>
        <h1>Local Job Board</h1>
        <p>Find your dream job in your local area</p>
      </header>
      <main>
        <section className="search">
          <h2>Search Filters</h2>
          <div className="filter">
            <label htmlFor="locationFilter">Location:</label>
            <select
              id="locationFilter"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="New York">New York</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>
          </div>
          <div className="filter">
            <label htmlFor="keywordFilter">Keyword:</label>
            <input
              type="text"
              id="keywordFilter"
              value={keywordFilter}
              onChange={(e) => setKeywordFilter(e.target.value)}
            />
          </div>
        </section>

        <section className="featured-job">
          <h2>Featured Job</h2>
          <JobListing key={featuredJob.id} title={featuredJob.title} location={featuredJob.location} />
        </section>

        <section className="job-listings-section">
          <h2>Job Listings</h2>
          <div className="job-listings">
        {currentPageListings.map(job => (
          <JobListing key={job.id} title={job.title} location={job.location} />
        ))}
      </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
        </section>
        <ApplyWithResume jobTitle={featuredJob.title} onSubmit={handleApplyWithResumeSubmit} />
        <section className="services-section">
          <h3>Our Services</h3>
          <div className="services-grid">
            {services.map(service => (
              <div className="service" key={service.id}>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Local Job Board. All rights reserved.</p>
        {/* Add footer content */}
      </footer>
    </div>
  );
};

export default Homepage;
