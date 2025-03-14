import React from 'react';
import { Shield } from 'lucide-react';

const badgesList = [
  { id: 1, name: 'Eco Newbie', emoji: '🟢', description: 'First 10% Energy Saved' },
  { id: 2, name: 'Saver Star', emoji: '🌟', description: 'First Weekly Challenge Completed' },
  { id: 3, name: 'Green Warrior', emoji: '🌱', description: 'Reduced CO₂ Emissions' },
  { id: 4, name: 'Efficiency Master', emoji: '⚙️', description: 'Optimized 3+ Devices' },
  { id: 5, name: 'The Illuminator', emoji: '💡', description: 'Used Smart Scheduling for Devices' },
  { id: 6, name: 'Smart Home Pro', emoji: '🏠', description: 'Connected 5+ IoT Devices' },
  { id: 7, name: 'Guardian of Energy', emoji: '🔋', description: 'Maintained a 7-Day Streak' },
  { id: 8, name: 'Dark Mode Hero', emoji: '🖤', description: 'Used Night Mode Energy Settings' },
  { id: 9, name: 'Voltage Veteran', emoji: '⚡', description: 'Used AI-powered Recommendations' },
  { id: 10, name: 'Power Guardian', emoji: '🛡️', description: 'Avoided Overuse for 30 Days' },
  { id: 11, name: 'Sustainability Guru', emoji: '🌍', description: 'Engaged in Community Discussions' },
  { id: 12, name: 'Time Traveler', emoji: '⏳', description: 'Analyzed Past Energy Trends' },
  { id: 13, name: 'Ultimate Saver', emoji: '💰', description: 'Saved 50% of Baseline Usage' },
  { id: 14, name: 'Energy King', emoji: '👑', description: 'Top 10 Leaderboard for a Week' },
  { id: 15, name: 'Elite Eco Champion', emoji: '🏆', description: 'Maintained 100-Day Streak' },
];

export function Badges() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex items-center space-x-2 mb-6">
        <Shield className="w-6 h-6 text-yellow-400" />
        <h2 className="text-xl font-bold text-yellow-400">Achievement Badges</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {badgesList.map((badge) => (
          <div
            key={badge.id}
            className="bg-gray-700 p-4 rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{badge.emoji}</span>
              <div>
                <h3 className="font-semibold text-yellow-400">{badge.name}</h3>
                <p className="text-sm text-gray-300">{badge.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}