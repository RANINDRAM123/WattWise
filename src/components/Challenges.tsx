import React from 'react';
import { Trophy, Timer, Users, Zap, Target } from 'lucide-react';

const challenges = [
  {
    id: 1,
    title: "24-Hour Power Down",
    description: "Reduce your gaming setup's energy usage by 50% for 24 hours",
    reward: "🏆 2000 points + Eco Warrior Badge",
    participants: 1289,
    timeLeft: "2 days",
    difficulty: "Medium",
    icon: Zap,
  },
  {
    id: 2,
    title: "Smart Schedule Master",
    description: "Set up automated power schedules for your gaming devices",
    reward: "🌟 1500 points + The Illuminator Badge",
    participants: 856,
    timeLeft: "5 days",
    difficulty: "Easy",
    icon: Timer,
  },
  {
    id: 3,
    title: "Dark Mode Marathon",
    description: "Use dark mode exclusively for a week across all devices",
    reward: "🖤 3000 points + Dark Mode Hero Badge",
    participants: 2341,
    timeLeft: "7 days",
    difficulty: "Easy",
    icon: Target,
  },
  {
    id: 4,
    title: "Peak Hours Warrior",
    description: "Avoid gaming during peak energy consumption hours for 5 days",
    reward: "⚡ 4000 points + Power Guardian Badge",
    participants: 567,
    timeLeft: "4 days",
    difficulty: "Hard",
    icon: Trophy,
  },
  {
    id: 5,
    title: "Energy Audit Expert",
    description: "Complete a full energy audit of your gaming setup",
    reward: "📊 2500 points + Efficiency Master Badge",
    participants: 789,
    timeLeft: "3 days",
    difficulty: "Medium",
    icon: Target,
  },
];

export function Challenges() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6">Active Challenges</h2>
      <div className="grid gap-6">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="bg-gray-800 rounded-lg p-6 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-700 rounded-lg text-yellow-400">
                  <challenge.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">{challenge.title}</h3>
                  <p className="text-gray-300 mb-3">{challenge.description}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-yellow-400">{challenge.reward}</span>
                    <span className="text-gray-400">
                      <Users className="w-4 h-4 inline mr-1" />
                      {challenge.participants.toLocaleString()} participating
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm text-gray-400 mb-2">
                  <Timer className="w-4 h-4 inline mr-1" />
                  {challenge.timeLeft} left
                </span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  challenge.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                  challenge.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {challenge.difficulty}
                </span>
              </div>
            </div>
            <button className="mt-4 w-full bg-yellow-400 text-gray-900 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Join Challenge
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}