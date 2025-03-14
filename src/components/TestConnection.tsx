import React, { useState } from 'react';
import { Play, RefreshCw } from 'lucide-react';

function TestConnection() {
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    '✓ System initialized',
    '✓ Network connection established',
    'i Waiting for device response...'
  ]);

  const runTest = () => {
    setIsRunning(true);
    // Simulate test sequence
    setTimeout(() => {
      setLogs(prev => [...prev, '✓ All devices responding normally']);
      setIsRunning(false);
    }, 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
        <h2 className="text-xl font-semibold text-white mb-6">Connection Test</h2>
        <div className="space-y-4">
          <button
            onClick={runTest}
            disabled={isRunning}
            className="w-full py-3 px-4 rounded-lg bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span>Running Test...</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                <span>Run Connection Test</span>
              </>
            )}
          </button>

          <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-700">
            <h3 className="text-sm font-medium text-gray-400 mb-3">Test Logs</h3>
            <div className="space-y-2">
              {logs.map((log, index) => (
                <div
                  key={index}
                  className="text-sm font-mono text-gray-300"
                >
                  {log}
                </div>
              ))}
              {isRunning && (
                <div className="text-sm font-mono text-yellow-400 animate-pulse">
                  Running tests...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
        <h2 className="text-xl font-semibold text-white mb-6">Network Status</h2>
        <div className="space-y-4">
          {['WiFi Network', 'Bluetooth', 'Zigbee Network'].map((network, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-gray-700/50 border border-gray-600"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-300">{network}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-gray-400">Connected</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestConnection;