import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './Components/Navbar'; 
import Login from './Components/Login';
import Logout from './Components/Logout';
import Signup from './Components/Signup';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
    };

    checkAuthentication();
  }, []);

  const ProtectedRoute = ({ element: Component, ...rest }) => {
    return isAuthenticated ? (
      <Component {...rest} />
    ) : (
      <Navigate to="/login" replace />
    );
  };

  return (
    <Router>
      <div className="App">
        <Nav isAuthenticated={isAuthenticated} /> {/* Render Navbar outside Routes */}
        {/* Other components and routes */}
        <Routes>
          {/* Your other routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
