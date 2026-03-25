import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import API from '../api/axios';

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost]       = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(`/posts/${id}`)
      .then((res) => { setPost(res.data); setLoading(false); })
      .catch(() => { setLoading(false); });
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    await API.delete(`/posts/${id}`);
    navigate('/');
  };

  if (loading) return <p className="text-center text-gray-400 mt-10">Loading...</p>;
  if (!post)   return <p className="text-center text-red-500 mt-10">Post not found.</p>;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
      <div className="flex gap-2 mb-4">
        {post.tags.map((tag) => (
          <span key={tag} className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        By {post.author} · {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">{post.content}</p>
      <div className="flex gap-4">
        <Link
          to={`/edit/${post._id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
        >
          Edit Post
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
        >
          Delete Post
        </button>
        <Link to="/" className="text-gray-400 text-sm self-center hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default PostDetail;