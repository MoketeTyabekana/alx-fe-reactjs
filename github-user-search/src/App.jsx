import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";

const Home = () => <h1>Welcome to the Home Page</h1>;

const App = () => {
  return (
    <Router>
  <div>
    <Header />
    {/* Main Content */}
    <div style={{ padding: "20px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  </div>
</Router>
  );
};

export default App;
