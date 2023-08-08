// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // try {
//     //   const response = await fetch('/login', {
//     //     method: 'POST',
//     //     headers: { 'Content-Type': 'application/json' },
//     //     body: JSON.stringify({ name, password }),
//     //   });

//       if (response.ok) {
//         const data = await response.json();
//         localStorage.setItem('token', data.token); // Store token in local storage
//         localStorage.setItem('name', data.name); // Store name in local storage
//         navigate('/');
//       } else {
//         const errorData = await response.json();
//         setError(errorData.message || 'Invalid Username or Password');
//       }
//     } catch (error) {
//       console.error(error);
//       setError('Invalid Username or Password');
//     }
//   };

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     navigate('/signup');
//   };


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const usersData = await response.json();
        const user = usersData.find((user) => user.name === name && user.password === password);

        if (user) {
          localStorage.setItem('token', user.name); // Store username in local storage as a token for simplicity
          navigate('/');
        } else {
          setError('Invalid Username or Password');
        }
      } else {
        setError('Error fetching data from the server');
      }
    } catch (error) {
      console.error(error);
      setError('Error connecting to the server');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate('/signup');
  };



  return (
    <div className="container">
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;