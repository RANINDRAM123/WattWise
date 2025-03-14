import React from 'react';
import { BrainCircuit, TrendingUp, Clock, AlertTriangle } from 'lucide-react';

const PredictiveInsights = () => {
  return (
    <section id="predictive-insights" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
            AI-Powered Predictions
          </h2>
          <p className="text-xl text-gray-400">
            See into your energy future with our advanced AI algorithms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 hover:bg-yellow-500/10 transition-all duration-300">
            <div className="flex items-center mb-6">
              <BrainCircuit className="h-8 w-8 text-yellow-400 mr-4" />
              <h3 className="text-2xl font-semibold text-white">Usage Forecast</h3>
            </div>
            <div className="h-64 w-full flex items-center justify-center border-2 border-dashed border-gray-700 rounded-lg">
              <div className="text-center text-gray-400">
                <TrendingUp className="h-16 w-16 mx-auto mb-4 text-yellow-400 animate-pulse" />
                <p className="text-lg">AI Prediction Graph</p>
                <p className="text-sm">Next 7 days forecast</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 hover:bg-yellow-500/10 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-yellow-400 mr-4" />
              <h3 className="text-2xl font-semibold text-white">Peak Hours</h3>
            </div>
            <div className="space-y-4">
              {[
                { time: "Morning Peak: 7-9 AM", load: "Medium", alert: "Reduce heavy appliance usage" },
                { time: "Afternoon: 2-4 PM", load: "Very High", alert: "Solar power optimal" },
                { time: "Evening Peak: 6-8 PM", load: "High", alert: "Critical savings period" }
              ].map((period, index) => (
                <div key={index} className="bg-gray-700/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white">{period.time}</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      period.load === "Very High" ? "bg-red-500/20 text-red-400" :
                      period.load === "High" ? "bg-orange-500/20 text-orange-400" :
                      "bg-green-500/20 text-green-400"
                    }`}>
                      {period.load}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <AlertTriangle className="h-4 w-4 mr-2 text-yellow-400" />
                    {period.alert}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Optimization Suggestions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Schedule laundry during off-peak hours",
              "Utilize solar power during peak generation",
              "Adjust thermostat settings proactively",
              "Smart device automation recommendations"
            ].map((suggestion, index) => (
              <div key={index} className="flex items-center bg-gray-700/30 p-4 rounded-lg">
                <div className="h-2 w-2 bg-yellow-400 rounded-full mr-3"></div>
                <span className="text-gray-300">{suggestion}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictiveInsights;