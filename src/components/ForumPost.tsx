import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

const MOCK_POSTS = [
  {
    id: 1,
    author: 'EcoWarrior',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=faces',
    content: 'Just switched all my gaming setup to LED strips and smart plugs. Saving 30% more energy! 🎮💡',
    likes: 42,
    comments: 12,
    shares: 5,
  },
  {
    id: 2,
    author: 'GreenGamer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces',
    content: 'Pro tip: Use dark mode in games whenever possible. It saves energy on OLED displays! 🖤',
    likes: 38,
    comments: 8,
    shares: 3,
  },
];

export function ForumPost() {
  const [posts, setPosts] = useState(MOCK_POSTS);
  const [newPost, setNewPost] = useState('');

  const handleLike = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post = {
      id: posts.length + 1,
      author: 'You',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=faces',
      content: newPost,
      likes: 0,
      comments: 0,
      shares: 0,
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  return (
    <div className="space-y-6">
      {/* Create Post */}
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your energy-saving tips..."
          className="w-full bg-gray-700 text-yellow-100 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          rows={3}
        />
        <button
          type="submit"
          className="mt-4 bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
        >
          Post
        </button>
      </form>

      {/* Posts */}
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={post.avatar}
              alt={post.author}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-yellow-400">{post.author}</h3>
              <p className="text-sm text-gray-400">Just now</p>
            </div>
          </div>
          <p className="text-gray-100 mb-4">{post.content}</p>
          <div className="flex space-x-6">
            <button
              onClick={() => handleLike(post.id)}
              className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <ThumbsUp className="w-5 h-5" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors">
              <MessageSquare className="w-5 h-5" />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors">
              <Share2 className="w-5 h-5" />
              <span>{post.shares}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}