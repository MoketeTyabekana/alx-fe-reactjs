import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (error) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
          style={{ padding: '10px', width: '300px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '10px' }}>Search</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {userData && (
          <div style={{ textAlign: 'left', marginTop: '20px' }}>
            <img
              src={userData.avatar_url}
              alt={userData.name || 'GitHub User'}
              style={{ width: '100px', borderRadius: '50%' }}
            />
            <h2>{userData.name || 'Name not available'}</h2>
            <p><strong>Username:</strong> {userData.login}</p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'blue' }}
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
