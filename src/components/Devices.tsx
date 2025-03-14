import React from 'react';
import { Wifi, Bluetooth, Radio, MoreVertical } from 'lucide-react';

interface DevicesProps {
  compact?: boolean;
}

const devices = [
  {
    name: 'Smart Thermostat',
    id: 'THM-001',
    power: '45W',
    status: 'active',
    type: 'wifi'
  },
  {
    name: 'LED Light Strip',
    id: 'LED-002',
    power: '12W',
    status: 'idle',
    type: 'bluetooth'
  },
  {
    name: 'Smart Plug',
    id: 'PLG-003',
    power: '0W',
    status: 'disconnected',
    type: 'zigbee'
  }
];

function Devices({ compact = false }: DevicesProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Connected Devices</h2>
            {!compact && (
              <p className="text-gray-400 text-sm mt-1">
                Monitor and manage your IoT devices
              </p>
            )}
          </div>
          {!compact && (
            <button className="p-2 rounded-lg hover:bg-gray-700 text-gray-300">
              <MoreVertical className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="space-y-4">
          {devices.map((device) => (
            <div
              key={device.id}
              className="p-4 rounded-lg bg-gray-700/50 border border-gray-600 hover:border-yellow-500/50 transition-colors group"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-white font-medium group-hover:text-yellow-400 transition-colors">
                    {device.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{device.id}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {device.type === 'wifi' && (
                    <Wifi className="w-4 h-4 text-blue-400" />
                  )}
                  {device.type === 'bluetooth' && (
                    <Bluetooth className="w-4 h-4 text-blue-400" />
                  )}
                  {device.type === 'zigbee' && (
                    <Radio className="w-4 h-4 text-green-400" />
                  )}
                  <span className="text-sm text-gray-300">{device.power}</span>
                </div>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    device.status === 'active'
                      ? 'bg-green-400 animate-pulse'
                      : device.status === 'idle'
                      ? 'bg-yellow-400'
                      : 'bg-gray-400'
                  }`}
                />
                <span className="text-sm text-gray-400 capitalize">
                  {device.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {!compact && (
        <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-6">Network Map</h2>
          <div className="h-[400px] flex items-center justify-center text-gray-400">
            [Network visualization will be rendered here]
          </div>
        </div>
      )}
    </div>
  );
}

export default Devices;