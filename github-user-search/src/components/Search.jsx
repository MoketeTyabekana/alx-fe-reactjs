import React, { useState } from "react";
import { fetchAdvancedUserData } from "../services/githubService";

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    username: "",
    location: "",
    repos: "",
  });
  const [userResults, setUserResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!searchParams.username.trim() && !searchParams.location.trim() && !searchParams.repos) {
      setError("Please provide at least one search parameter.");
      return;
    }

    setLoading(true);
    setError(null);
    setUserResults([]);

    try {
      const results = await fetchAdvancedUserData(searchParams);
      setUserResults(results);
    } catch (err) {
      if (err.message.includes("403")) {
        setError("Rate limit exceeded. Please try again later.");
      } else {
        setError("Failed to fetch users. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <form className="bg-gray-100 p-4 rounded shadow" onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">GitHub Username:</label>
          <input
            type="text"
            name="username"
            value={searchParams.username}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Location:</label>
          <input
            type="text"
            name="location"
            value={searchParams.location}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter location"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Minimum Repositories:</label>
          <input
            type="number"
            name="repos"
            value={searchParams.repos}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter minimum repo count"
          />
        </div>
        <button
          type="submit"
          className={`p-2 rounded w-full ${loading ? "bg-gray-300" : "bg-blue-500 text-white hover:bg-blue-600"}`}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <div className="mt-6">
        {userResults.map((user) => (
          <div key={user.id} className="p-4 mb-4 border rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mb-2" />
            <h3 className="font-bold">{user.login}</h3>
            {user.location && <p>Location: {user.location}</p>}
            <p>Repositories: {user.public_repos}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
