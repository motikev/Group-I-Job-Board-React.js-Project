import React, { useState } from 'react';

const ContactPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // eslint-disable-next-line
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      {submitted ? (
        <p>Thank you for contacting us. We'll get back to you soon!</p>
      ) : (
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

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
