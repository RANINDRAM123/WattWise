import React from 'react';
import { Wifi, Bluetooth, Radio } from 'lucide-react';

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

function DevicePanel() {
  return (
    <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
      <h2 className="text-xl font-semibold text-white mb-6">Connected Devices</h2>
      <div className="space-y-4">
        {devices.map((device) => (
          <div
            key={device.id}
            className="p-4 rounded-lg bg-gray-700/50 border border-gray-600 hover:border-yellow-500/50 transition-colors"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-white font-medium">{device.name}</h3>
                <p className="text-gray-400 text-sm">{device.id}</p>
              </div>
              <div className="flex items-center space-x-2">
                {device.type === 'wifi' && <Wifi className="w-4 h-4 text-blue-400" />}
                {device.type === 'bluetooth' && <Bluetooth className="w-4 h-4 text-blue-400" />}
                {device.type === 'zigbee' && <Radio className="w-4 h-4 text-green-400" />}
                <span className="text-sm text-gray-300">{device.power}</span>
              </div>
            </div>
            <div className="mt-2 flex items-center space-x-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  device.status === 'active'
                    ? 'bg-green-400'
                    : device.status === 'idle'
                    ? 'bg-yellow-400'
                    : 'bg-gray-400'
                }`}
              />
              <span className="text-sm text-gray-400 capitalize">{device.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DevicePanel;