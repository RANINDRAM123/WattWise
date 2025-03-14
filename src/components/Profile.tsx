import React, { useState, useEffect } from 'react';
import {
  User,
  Settings,
  Award,
  Target,
  BarChart3,
  Users,
  Zap,
  Edit3,
  ChevronRight,
  Trophy,
  Medal,
  Search,
  Flame,
  RadioTower
} from 'lucide-react';
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react';
import { Badges } from './Badges';
import { ForumPost } from './ForumPost';
import { Chat } from './Chat';
import { Challenges } from './Challenges';
import { TeamCompetitions } from './TeamCompetitions';
import { Confetti } from './Confetti';



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


function Profile() {
  const [activeTab, setActiveTab] = useState('insights');
  
  const tabs = [
    { id: 'insights', icon: BarChart3, label: 'Energy Insights' },
    { id: 'leaderboard', icon: Trophy, label: 'Leaderboard' },
    { id: 'challenges', icon: Target, label: 'Challenges' },
    { id: 'teams', icon: RadioTower, label: 'Teams' },
    { id: 'badges', icon: Medal, label: 'Badges' },
    { id: 'community', icon: Users, label: 'Community' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

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
    const [searchQuery, setSearchQuery] = useState('');
    const [showConfetti, setShowConfetti] = useState(false);
  
  
    useEffect(() => {
      // Simulate badge unlock for demo
      const timer = setTimeout(() => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }, 2000);
      return () => clearTimeout(timer);
    }, []);
  

  return (
    <section id="profile">
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <div className="relative h-64 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072)' }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative container mx-auto px-4 pt-8">
          <div className="flex items-center gap-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-lg shadow-yellow-500/20"
              />
              <button className="absolute bottom-0 right-0 bg-yellow-400 p-2 rounded-full hover:bg-yellow-300 transition-colors">
                <Edit3 size={16} className="text-gray-900" />
              </button>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold">Alex Thompson</h1>
                <span className="px-3 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold">
                  Energy Master
                </span>
              </div>
              <p className="text-gray-300 mt-1">Saving energy since 2023</p>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">2,450</div>
                <div className="text-sm text-gray-300">Energy Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">42</div>
                <div className="text-sm text-gray-300">Rank</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gamification Overview */}
      <div className="bg-gray-800 py-6 border-y border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-yellow-400/20 rounded-lg">
                  <Flame className="text-yellow-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Current Streak</div>
                  <div className="text-xl font-bold">15 Days</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-yellow-400/20 rounded-lg">
                  <Award className="text-yellow-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Badges Earned</div>
                  <div className="text-xl font-bold">24/50</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-yellow-400/20 rounded-lg">
                  <Zap className="text-yellow-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Energy Saved</div>
                  <div className="text-xl font-bold">324 kWh</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-yellow-400/20 rounded-lg">
                  <Target className="text-yellow-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Goals Complete</div>
                  <div className="text-xl font-bold">8/10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="container mx-auto px-4 mt-6">
        <div className="flex gap-1 border-b border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-yellow-400 border-b-2 border-yellow-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-6">
          {/* Dynamic Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-40 h-40 bg-yellow-400 rounded-full blur-3xl energy-wave"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
          {activeTab === 'community' && <ForumPost /> && <Chat />}
          {activeTab === 'challenges' && <Challenges />}
          {activeTab === 'teams' && <TeamCompetitions />}
          {activeTab === 'badges' && <Badges />}
          {activeTab === 'insights' && (
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-4">Energy Usage Trends</h3>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  [Energy Usage Graph Placeholder]
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Daily Average</span>
                      <span className="font-semibold">12.4 kWh</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Monthly Savings</span>
                      <span className="font-semibold text-green-400">-15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Peak Usage</span>
                      <span className="font-semibold">18:00 - 20:00</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold mb-4">AI Recommendations</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <ChevronRight size={16} className="text-yellow-400" />
                      <span>Optimize thermostat schedule</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <ChevronRight size={16} className="text-yellow-400" />
                      <span>Replace old appliances</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <ChevronRight size={16} className="text-yellow-400" />
                      <span>Install smart plugs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="py-6">
        {activeTab === 'community' && (
  <div>
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
      <div key={post.id} className="bg-gray-800 p-6 rounded-lg mt-4">
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
  
)}

        </div>
      </div>
    </div>
    </section>
  );
}

export default Profile;