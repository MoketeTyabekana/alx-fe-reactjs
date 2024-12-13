// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => <h1>Welcome to the Home Page</h1>;
const About = () => <h1>About Us</h1>;
const Contact = () => <h1>Contact Us</h1>;

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={{ padding: '10px', background: '#f4f4f4' }}>
          <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
          {/* <Link to="/about" style={{ margin: '0 10px' }}>About</Link> */}
          {/* <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link> */}
        </nav>

        {/* Main Content */}
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
