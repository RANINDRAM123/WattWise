import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-blue-600 opacity-20 animate-gradient"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="flex items-center justify-center mb-6">
          <Zap className="h-16 w-16 text-yellow-400 animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
          Power Smarter,
          <br />
          Live Greener
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          AI-driven insights to optimize your energy usage and save the planet
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300">
            Explore Features
            <ArrowRight className="h-5 w-5" />
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 rounded-full font-semibold hover:bg-yellow-400/10 transform hover:scale-105 transition-all duration-300">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;