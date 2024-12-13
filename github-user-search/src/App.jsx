// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';

const Home = () => <h1>Welcome to the Home Page</h1>;
const About = () => <h1>About Us</h1>;
const Contact = () => <h1>Contact Us</h1>;

const App = () => {
  return (
    <Router>
      <div>
        <Header/>

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
