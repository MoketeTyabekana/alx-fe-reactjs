const BASE_URL = 'https://api.github.com';

export const fetchGitHubUser = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub user');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
