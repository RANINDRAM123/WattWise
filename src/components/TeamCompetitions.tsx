import React from 'react';
import { Users, Trophy, Timer, Zap, Target, Crown } from 'lucide-react';

const competitions = [
  {
    id: 1,
    title: "Global Energy Champions League",
    description: "Teams compete globally to achieve the highest collective energy savings",
    prize: "🏆 50,000 points + Elite Team Badge",
    teamSize: "5-10",
    teamsJoined: 48,
    timeLeft: "14 days",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Regional Power Saving Cup",
    description: "Regional teams battle for the most efficient gaming setups",
    prize: "🌟 30,000 points + Regional Champions Badge",
    teamSize: "3-6",
    teamsJoined: 24,
    timeLeft: "7 days",
    icon: Crown,
  },
  {
    id: 3,
    title: "Smart Home Squad Challenge",
    description: "Teams implement and optimize smart home automation for gaming",
    prize: "🏠 40,000 points + Smart Squad Badge",
    teamSize: "4-8",
    teamsJoined: 36,
    timeLeft: "10 days",
    icon: Zap,
  },
  {
    id: 4,
    title: "Eco Warriors Tournament",
    description: "Cross-platform competition for sustainable gaming practices",
    prize: "🌍 45,000 points + Eco Warriors Badge",
    teamSize: "6-12",
    teamsJoined: 32,
    timeLeft: "21 days",
    icon: Target,
  },
  {
    id: 5,
    title: "Energy Innovation Cup",
    description: "Teams develop and share new energy-saving gaming strategies",
    prize: "💡 35,000 points + Innovation Leaders Badge",
    teamSize: "4-8",
    teamsJoined: 28,
    timeLeft: "16 days",
    icon: Users,
  },
];

export function TeamCompetitions() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6">Team Competitions</h2>
      <div className="grid gap-6">
        {competitions.map((competition) => (
          <div
            key={competition.id}
            className="bg-gray-800 rounded-lg p-6 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 -mr-20 -mt-20 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-700 rounded-lg text-yellow-400">
                    <competition.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">{competition.title}</h3>
                    <p className="text-gray-300 mb-3">{competition.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-yellow-400">{competition.prize}</span>
                      <span className="text-gray-400">
                        <Users className="w-4 h-4 inline mr-1" />
                        Team Size: {competition.teamSize}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm text-gray-400 mb-2">
                    <Timer className="w-4 h-4 inline mr-1" />
                    {competition.timeLeft} left
                  </span>
                  <span className="text-sm text-gray-400">
                    {competition.teamsJoined} teams joined
                  </span>
                </div>
              </div>
              <div className="mt-4 flex space-x-4">
                <button className="flex-1 bg-yellow-400 text-gray-900 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                  Join with Team
                </button>
                <button className="flex-1 bg-gray-700 text-yellow-400 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                  Create Team
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}