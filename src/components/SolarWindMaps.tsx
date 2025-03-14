import React from 'react';
import { Sun, Wind, MapPin, Info } from 'lucide-react';

const SolarWindMaps = () => {
  return (
    <section id="solar-wind-maps" className="py-20 bg-gradient-to-bl from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
            Solar & Wind Energy Maps
          </h2>
          <p className="text-xl text-gray-400">
            Explore renewable energy potential in your region
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 hover:bg-yellow-500/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <MapPin className="h-8 w-8 text-yellow-400 mr-4" />
                <h3 className="text-2xl font-semibold text-white">Interactive Map</h3>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-lg flex items-center">
                  <Sun className="h-4 w-4 mr-2" /> Solar
                </button>
                <button className="px-4 py-2 bg-green-400/20 text-green-400 rounded-lg flex items-center">
                  <Wind className="h-4 w-4 mr-2" /> Wind
                </button>
              </div>
            </div>
            <div className="h-96 w-full flex items-center justify-center border-2 border-dashed border-gray-700 rounded-lg">
              <div className="text-center text-gray-400">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-yellow-400 animate-pulse" />
                <p className="text-lg">Interactive Map Will Be Rendered Here</p>
                <p className="text-sm">Click on regions to see detailed data</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 hover:bg-yellow-500/10 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Sun className="h-6 w-6 text-yellow-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Solar Potential</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Peak Sun Hours", value: "5.8 hrs/day" },
                  { label: "Annual Generation", value: "1,825 kWh/kW" },
                  { label: "Optimal Angle", value: "25°" }
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-400">{stat.label}</span>
                    <span className="text-white font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 hover:bg-yellow-500/10 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Wind className="h-6 w-6 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Wind Potential</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Avg Wind Speed", value: "14.5 mph" },
                  { label: "Power Density", value: "385 W/m²" },
                  { label: "Turbine Height", value: "80m" }
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-400">{stat.label}</span>
                    <span className="text-white font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-2xl p-4">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-yellow-400 mr-3 mt-0.5" />
                <p className="text-sm text-gray-300">
                  Data is updated daily based on weather patterns and satellite imagery. Values shown are averages for the selected region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarWindMaps;