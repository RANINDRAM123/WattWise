import React from 'react';
import { TrendingUp, AlertTriangle, Download } from 'lucide-react';

function Insights() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold text-white">Usage Trends</h2>
              <p className="text-gray-400 text-sm mt-1">Compare with previous periods</p>
            </div>
            <button className="p-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600">
              <Download className="w-5 h-5" />
            </button>
          </div>
          <div className="h-[300px] flex items-center justify-center text-gray-400">
            [Usage trends graph will be rendered here]
          </div>
        </div>

        <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-6">Power Distribution</h2>
          <div className="h-[300px] flex items-center justify-center text-gray-400">
            [Power distribution pie chart will be rendered here]
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="w-6 h-6 text-yellow-400" />
            <h2 className="text-xl font-semibold text-white">AI Recommendations</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                <div>
                  <h3 className="text-white font-medium">High Energy Usage Detected</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    The smart thermostat is consuming more power than usual. Consider
                    adjusting the temperature settings.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <h3 className="text-white font-medium mb-2">Energy Saving Opportunities</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Schedule LED strips to turn off during daylight hours</li>
                <li>• Enable eco mode for smart plugs during off-peak hours</li>
                <li>• Optimize thermostat schedule based on occupancy patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;