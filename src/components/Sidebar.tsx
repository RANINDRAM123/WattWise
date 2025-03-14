import React, { useState } from 'react';
import { 
  Home,
  LineChart, 
  Network,
  FileText,
  TestTube,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

type TabType = 'dashboard' | 'live-energy' | 'devices' | 'insights' | 'test' | 'settings';

interface SidebarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const menuItems = [
  { id: 'dashboard', icon: Home, label: 'Dashboard' },
  { id: 'live-energy', icon: LineChart, label: 'Live Energy Usage' },
  { id: 'devices', icon: Network, label: 'Connected Devices' },
  { id: 'insights', icon: FileText, label: 'Insights & Reports' },
  { id: 'test', icon: TestTube, label: 'Test Connection' },
  { id: 'settings', icon: Settings, label: 'Settings' }
] as const;

function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside 
      className={`${
        isCollapsed ? 'w-20' : 'w-64'
      } bg-gray-800/50 backdrop-blur-lg h-screen sticky top-0 transition-all duration-300 ease-in-out`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-gray-700 rounded-full p-1 text-gray-300 hover:text-yellow-400 transition-colors"
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center ${
                  isCollapsed ? 'justify-center' : 'justify-start space-x-3'
                } p-3 rounded-lg transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400'
                }`}
              >
                <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'animate-pulse' : ''}`} />
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;