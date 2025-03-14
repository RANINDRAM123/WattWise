import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, MessageSquare, Users } from 'lucide-react';

const Community = () => {
  return (
    <div className="pt-20 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Join Our Green Community</h1>
          <p className="text-xl text-gray-600">Connect, share, and learn with fellow eco-enthusiasts</p>
        </motion.div>

        {/* Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
          <div className="flex items-center mb-6">
            <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
            <h2 className="text-2xl font-bold">Top Energy Savers</h2>
          </div>
          <div className="space-y-4">
            {[
              { name: "John Smith", savings: "2,500 kWh", rank: 1 },
              { name: "Emma Davis", savings: "2,300 kWh", rank: 2 },
              { name: "Michael Chen", savings: "2,100 kWh", rank: 3 }
            ].map((user, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-green-600">#{user.rank}</span>
                  </div>
                  <span className="font-semibold">{user.name}</span>
                </div>
                <span className="text-green-600 font-semibold">{user.savings}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
          <div className="flex items-center mb-6">
            <Award className="h-8 w-8 text-purple-500 mr-3" />
            <h2 className="text-2xl font-bold">Monthly Challenges</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Solar Sprint",
                description: "Generate 500 kWh from solar this month",
                reward: "Gold Badge + 1000 points"
              },
              {
                title: "Wind Warrior",
                description: "Achieve 80% wind power efficiency",
                reward: "Silver Badge + 500 points"
              }
            ].map((challenge, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">{challenge.title}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="flex items-center text-purple-600">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="text-sm">{challenge.reward}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Discussion Forums */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-8 w-8 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold">Latest Discussions</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Tips for maximizing solar panel efficiency",
                  replies: 23,
                  category: "Solar"
                },
                {
                  title: "Winter energy saving strategies",
                  replies: 15,
                  category: "General"
                },
                {
                  title: "New wind turbine technology discussion",
                  replies: 31,
                  category: "Wind"
                }
              ].map((topic, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">{topic.title}</h3>
                    <span className="text-sm text-gray-500">{topic.category}</span>
                  </div>
                  <div className="text-gray-600">
                    <span>{topic.replies} replies</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold">Active Members</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Alice Wilson", posts: 156 },
                { name: "Bob Miller", posts: 143 },
                { name: "Carol White", posts: 128 },
                { name: "David Brown", posts: 112 }
              ].map((member, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-green-600">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.posts} posts</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;