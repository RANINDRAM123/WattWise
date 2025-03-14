import React from 'react';

function EnergyGraph() {
  return (
    <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Live Energy Consumption</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600">
            Hourly
          </button>
          <button className="px-4 py-2 rounded-lg bg-yellow-500/20 text-yellow-400">
            Daily
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600">
            Weekly
          </button>
        </div>
      </div>
      <div className="h-[400px] flex items-center justify-center text-gray-400">
        [Energy consumption graph will be rendered here]
      </div>
    </div>
  );
}

export default EnergyGraph;