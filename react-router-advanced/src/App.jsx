import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Profile from './components/Profile';

// BlogPost Component
const BlogPost = () => {
  const { userId } = useParams();
  return <h3>User ID: {userId}</h3>;
};

// Protected Route Component
const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Login Component (Simulating Login)
const Login = ({ onLogin }) => {
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={onLogin}>Simulate Login</button>
    </div>
  );
};

// App Component
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);

  return (
    <Router>
      <Routes>
        {/* BlogPost Route */}
        <Route path="/blog/:userId" element={<BlogPost />} />

        {/* Login Route */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Protected Profile Route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
