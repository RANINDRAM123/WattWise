import React from 'react';
import { Activity, Sun, Wind, Droplet } from 'lucide-react';

const RealTimeData = () => {
  return (
    <section id="real-time-data" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
            Real-Time Energy Insights
          </h2>
          <p className="text-xl text-gray-400">
            Monitor your energy consumption as it happens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <Activity className="h-8 w-8" />, label: "Current Usage", value: "2.4 kW", change: "+5%" },
            { icon: <Sun className="h-8 w-8" />, label: "Solar Generation", value: "1.2 kW", change: "-2%" },
            { icon: <Wind className="h-8 w-8" />, label: "Grid Import", value: "1.2 kW", change: "+8%" },
            { icon: <Droplet className="h-8 w-8" />, label: "Carbon Offset", value: "45 kg", change: "-12%" }
          ].map((metric, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 hover:bg-yellow-500/10 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-yellow-400">{metric.icon}</div>
                <span className={`text-sm font-medium ${
                  metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.change}
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-300 mb-1">{metric.label}</h3>
              <p className="text-2xl font-bold text-white">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8">
          <div className="h-64 w-full flex items-center justify-center">
            <div className="text-center text-gray-400">
              <Activity className="h-16 w-16 mx-auto mb-4 text-yellow-400 animate-pulse" />
              <p className="text-lg">Interactive chart will be rendered here</p>
              <p className="text-sm">24-hour energy consumption pattern</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeData;