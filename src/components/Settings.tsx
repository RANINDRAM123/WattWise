import React from 'react';
import { Sun, Moon, Bell, Shield, Zap } from 'lucide-react';

interface SettingsProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

function Settings({ darkMode, setDarkMode }: SettingsProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
        <div className="flex items-center space-x-2 mb-6">
          <Sun className="w-6 h-6 text-yellow-400" />
          <h2 className="text-xl font-semibold text-white">Appearance</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Dark Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 rounded-full transition-colors ${
                darkMode ? 'bg-yellow-400' : 'bg-gray-600'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform transform ${
                  darkMode ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
        <div className="flex items-center space-x-2 mb-6">
          <Bell className="w-6 h-6 text-yellow-400" />
          <h2 className="text-xl font-semibold text-white">Notifications</h2>
        </div>
        <div className="space-y-4">
          {['Power Usage Alerts', 'Device Status Changes', 'System Updates'].map(
            (setting, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-300">{setting}</span>
                <button
                  className="w-12 h-6 rounded-full bg-yellow-400"
                >
                  <div className="w-4 h-4 rounded-full bg-white transform translate-x-7" />
                </button>
              </div>
            )
          )}
        </div>
      </div>

      <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
        <div className="flex items-center space-x-2 mb-6">
          <Shield className="w-6 h-6 text-yellow-400" />
          <h2 className="text-xl font-semibold text-white">Security</h2>
        </div>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-gray-700/50 border border-gray-600">
            <h3 className="text-white font-medium mb-2">Two-Factor Authentication</h3>
            <p className="text-gray-400 text-sm">
              Add an extra layer of security to your account
            </p>
            <button className="mt-4 px-4 py-2 rounded-lg bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 transition-colors">
              Enable 2FA
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
        <div className="flex items-center space-x-2 mb-6">
          <Zap className="w-6 h-6 text-yellow-400" />
          <h2 className="text-xl font-semibold text-white">Power Management</h2>
        </div>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-gray-700/50 border border-gray-600">
            <h3 className="text-white font-medium mb-2">Energy Saving Mode</h3>
            <p className="text-gray-400 text-sm">
              Automatically optimize power consumption during off-peak hours
            </p>
            <button className="mt-4 px-4 py-2 rounded-lg bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 transition-colors">
              Configure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;