import React, { useState } from 'react';
import { Cloud, Thermometer, Wind } from 'lucide-react';

const WeatherSection = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would fetch from a weather API
    setWeatherData({
      temperature: '24°C',
      aqi: 45,
      humidity: '65%',
      windSpeed: '12 km/h'
    });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
            Local Weather & Air Quality
          </h2>
          <p className="text-xl text-gray-400">
            Monitor environmental conditions affecting energy usage
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex gap-4">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300"
              >
                Check Weather
              </button>
            </div>
          </form>

          {weatherData && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 hover:bg-yellow-500/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <Thermometer className="h-8 w-8 text-yellow-400" />
                  <span className="text-2xl font-bold text-white">{weatherData.temperature}</span>
                </div>
                <p className="text-gray-400">Temperature</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 hover:bg-yellow-500/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <Cloud className="h-8 w-8 text-yellow-400" />
                  <span className="text-2xl font-bold text-white">AQI {weatherData.aqi}</span>
                </div>
                <p className="text-gray-400">Air Quality Index</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 hover:bg-yellow-500/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <Cloud className="h-8 w-8 text-yellow-400" />
                  <span className="text-2xl font-bold text-white">AQI {weatherData.aqi}</span>
                </div>
                <p className="text-gray-400">Air Quality Index</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 hover:bg-yellow-500/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <Wind className="h-8 w-8 text-yellow-400" />
                  <span className="text-2xl font-bold text-white">{weatherData.windSpeed}</span>
                </div>
                <p className="text-gray-400">Wind Speed</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;