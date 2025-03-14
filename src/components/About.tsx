import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
            About Us
          </h2>
          <p className="text-xl text-gray-400">
            Pioneering the future of energy management
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 hover:bg-yellow-500/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                We're on a mission to revolutionize energy consumption through innovative technology and data-driven insights. Our platform empowers users to make informed decisions about their energy usage, promoting sustainability and cost savings.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 hover:bg-yellow-500/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                We envision a world where every household and business has complete control over their energy consumption, contributing to a sustainable future through smart technology and renewable energy integration.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Users className="h-8 w-8" />, label: "Users", value: "50,000+" },
              { icon: <Target className="h-8 w-8" />, label: "Energy Saved", value: "1.2M kWh" },
              { icon: <Award className="h-8 w-8" />, label: "Awards", value: "15+" },
              { icon: <Heart className="h-8 w-8" />, label: "Satisfaction", value: "98%" }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 hover:bg-yellow-500/10 transition-all duration-300">
                <div className="text-yellow-400 mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Aditya", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200" },
              { name: "Swarnava", role: "CTO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200" },
              { name: "Adrija", role: "Head of AI", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&h=200" },
              { name: "Ranindram", role: "Lead Engineer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 rounded-full bg-yellow-400/20 transform hover:scale-110 transition-transform duration-300"></div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">{member.name}</h4>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;