import React, { useState } from 'react';
import { 
  Zap, 
  Bell, 
  Sun,
  Moon,
  User,
  CircleDot
} from 'lucide-react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard-iot';
import LiveEnergy from './LiveEnergy';
import Devices from './Devices';
import Insights from './Insights';
import TestConnection from './TestConnection';
import Settings from './Settings';

const TABS = {
  DASHBOARD: 'dashboard',
  LIVE_ENERGY: 'live-energy',
  DEVICES: 'devices',
  INSIGHTS: 'insights',
  TEST: 'test',
  SETTINGS: 'settings'
} as const;

type TabType = typeof TABS[keyof typeof TABS];

function IoT() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>(TABS.DASHBOARD);
  const [activeConnections, setActiveConnections] = useState(3);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const renderContent = () => {
    switch (activeTab) {
      case TABS.DASHBOARD:
        return <Dashboard />;
      case TABS.LIVE_ENERGY:
        return <LiveEnergy />;
      case TABS.DEVICES:
        return <Devices />;
      case TABS.INSIGHTS:
        return <Insights />;
      case TABS.TEST:
        return <TestConnection />;
      case TABS.SETTINGS:
        return <Settings darkMode={darkMode} setDarkMode={setDarkMode} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="flex-1">
          <header className="bg-gray-800/50 backdrop-blur-lg p-4 border-b border-gray-700 sticky top-0 z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
                  <div className="absolute -top-1 -right-1">
                    <CircleDot className="w-3 h-3 text-green-400" />
                  </div>
                </div>
                <h1 className="text-xl font-bold text-white">Energy Monitor</h1>
                <div className="flex items-center ml-4 px-2 py-1 bg-gray-700/50 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                  <span className="text-sm text-gray-300">{activeConnections} active devices</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-700 text-gray-300 transition-colors"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-700 text-gray-300 transition-colors relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-yellow-400"></span>
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-700 text-gray-300 transition-colors">
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
          </header>

          <main className="p-6">
            <div className="transition-all duration-300 ease-in-out">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default IoT;