import React from 'react';
import LiveEnergy from './LiveEnergy';
import Devices from './Devices';

function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-2">Total Power</h3>
          <div className="text-3xl font-bold text-yellow-400">2.4 kW</div>
          <div className="text-sm text-gray-400 mt-1">+5% from last hour</div>
        </div>
        
        <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-2">Active Devices</h3>
          <div className="text-3xl font-bold text-green-400">8</div>
          <div className="text-sm text-gray-400 mt-1">2 devices idle</div>
        </div>
        
        <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-2">Daily Goal</h3>
          <div className="text-3xl font-bold text-blue-400">75%</div>
          <div className="text-sm text-gray-400 mt-1">On track to meet target</div>
        </div>
      </div>

      <LiveEnergy compact />
      <Devices compact />
    </div>
  );
}

export default Dashboard;