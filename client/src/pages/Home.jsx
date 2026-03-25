import { useState, useEffect } from 'react';
import API from '../api/axios';
import PostCard from '../components/PostCard';

function Home() {
  const [posts, setPosts]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState('');

  useEffect(() => {
    API.get('/posts')
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load posts. Is your server running?');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-400 mt-10">Loading posts...</p>;
  if (error)   return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Latest Posts</h1>
      {posts.length === 0 ? (
        <p className="text-gray-400">No posts yet. Create your first one!</p>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;