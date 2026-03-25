import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-2 mb-3">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.content}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">By {post.author}</span>
        <Link
          to={`/posts/${post._id}`}
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}

export default PostCard;