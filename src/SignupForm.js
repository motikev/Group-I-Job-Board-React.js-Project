import React, { useState } from 'react';
import styles from './SignupForm.module.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send to the server for sign-up
    const signUpData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    try {
      // Make an API call to the server for sign-up
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpData),
      });

      // Check the response status
      if (response.ok) {
        // Success: User has been signed up
        const responseData = await response.json();
        console.log('Sign up successful!', responseData);
      } else {
        // Error: User sign-up failed
        const errorData = await response.json();
        console.error('Sign up failed!', errorData);
      }
    } catch (error) {
      // Error: An exception occurred during sign-up
      console.error('Error during sign up:', error);
    }
  };

  return (
    <div className={styles.signupForm}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
