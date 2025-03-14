import React, { useState } from 'react';
import { Download } from 'lucide-react';

interface LiveEnergyProps {
  compact?: boolean;
}

function LiveEnergy({ compact = false }: LiveEnergyProps) {
  const [timeframe, setTimeframe] = useState<'hourly' | 'daily' | 'weekly'>('daily');

  return (
    <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Live Energy Consumption</h2>
          {!compact && (
            <p className="text-gray-400 text-sm mt-1">
              Real-time power usage monitoring
            </p>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            {(['hourly', 'daily', 'weekly'] as const).map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  timeframe === tf
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {tf.charAt(0).toUpperCase() + tf.slice(1)}
              </button>
            ))}
          </div>
          {!compact && (
            <button className="p-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600">
              <Download className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
      <div className={`${compact ? 'h-[200px]' : 'h-[400px]'} flex items-center justify-center text-gray-400`}>
        [Energy consumption graph will be rendered here]
      </div>
    </div>
  );
}

export default LiveEnergy;