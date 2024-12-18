import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError } = useQuery('fetchPosts', fetchPosts,{

    // Data is fresh for 2 minutes (120,000 ms)
    cacheTime: 120000, 
    staleTime:100000,

    // Refetch data when window is focused
    refetchOnWindowFocus: true,

    // Keep previous data when new data is being fetched
    keepPreviousData: true,

  });

  

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
        <button onClick={fetchPosts}>Fetch Data</button>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
