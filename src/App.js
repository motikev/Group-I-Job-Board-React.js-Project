// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
// import './App.css';
// import EventCreate from './components/events/EventCreate';
// import EventDetail from './components/events/EventDetail';
// import EventEdit from './components/events/EventEdit';
// import EventList from './components/events/EventList';
// import { Nav } from './components/navbar/Nav';
// import { Hero } from './components/pages/Hero';
// import Footer from './components/footer/Footer';
// import Login from './components/auth/Login';
// import Signup from './components/auth/Signup';
// import Logout from './components/auth/Logout';
// import EditReview from './components/reviews/EditReview';
// import CreateReview from './components/reviews/CreateReview';
// import ListReview from './components/reviews/ListReview';

import Login from './Components/Login';
import Logout from './Components/Logout';
import Navbar from './Components/Navbar';
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
        <Nav isAuthenticated={isAuthenticated} />
        {/* <Hero /> */}
        <Routes>
          {/* <Route path="/" element={<EventList />} />
          <Route path="/events/create" element={<ProtectedRoute element={EventCreate} />} />
          <Route path="/events/edit/:id" element={<ProtectedRoute element={EventEdit} />} />
          <Route path="/events/detail/:id" element={<ProtectedRoute element={EventDetail} />} />
          <Route path="/reviews/create" element={<ProtectedRoute element={CreateReview} />} />
          <Route path="/reviews/edit/:id" element={<ProtectedRoute element={EditReview} />} />
          <Route path="/reviews" element={<ProtectedRoute element={ListReview} />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/Navbar" element={<Navbar />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
