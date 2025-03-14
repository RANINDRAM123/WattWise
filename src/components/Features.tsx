import React from 'react';
import { Battery, Cpu, Cloud, LineChart, Leaf, Zap, Lightbulb, Wifi } from 'lucide-react';

const features = [
  {
    icon: <Battery className="h-8 w-8" />,
    title: "Energy Monitoring",
    description: "Real-time tracking of your energy consumption with smart device integration"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "AI Predictions",
    description: "Advanced machine learning algorithms to forecast your energy needs"
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Weather Impact",
    description: "See how weather affects your energy usage patterns"
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Usage Analytics",
    description: "Detailed insights into your consumption patterns"
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Carbon Footprint",
    description: "Track and reduce your environmental impact"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Smart Grid",
    description: "Connect with local energy grids for optimal efficiency"
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Smart Tips",
    description: "Personalized recommendations for energy savings"
  },
  {
    icon: <Wifi className="h-8 w-8" />,
    title: "IoT Ready",
    description: "Seamless integration with your smart home devices"
  }
];

const Features = () => {
  
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400">
            Cutting-edge tools to optimize your energy consumption
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-800/50 backdrop-blur-lg rounded-2xl hover:bg-yellow-500/10 transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;