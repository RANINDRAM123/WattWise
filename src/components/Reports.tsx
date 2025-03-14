import React from 'react';
import { FileText, Download, BarChart, Calendar } from 'lucide-react';

const Reports = () => {
  return (
    <section id="reports" className="py-20 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
            Energy Reports
          </h2>
          <p className="text-xl text-gray-400">
            Comprehensive analysis of your energy consumption
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 hover:bg-yellow-500/10 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <BarChart className="h-8 w-8 text-yellow-400 mr-4" />
                  <h3 className="text-2xl font-semibold text-white">Usage Overview</h3>
                </div>
                <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg flex items-center hover:bg-yellow-300 transition-colors">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </button>
              </div>
              <div className="h-64 w-full flex items-center justify-center border-2 border-dashed border-gray-700 rounded-lg">
                <div className="text-center text-gray-400">
                  <BarChart className="h-16 w-16 mx-auto mb-4 text-yellow-400 animate-pulse" />
                  <p className="text-lg">Usage Graph</p>
                  <p className="text-sm">Monthly consumption patterns</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Monthly Report",
                  icon: <Calendar className="h-6 w-6" />,
                  stats: { consumption: "450 kWh", cost: "$120", savings: "15%" }
                },
                {
                  title: "Annual Summary",
                  icon: <FileText className="h-6 w-6" />,
                  stats: { consumption: "5,400 kWh", cost: "$1,440", savings: "22%" }
                }
              ].map((report, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 hover:bg-yellow-500/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-3">{report.icon}</span>
                      <h4 className="text-lg font-semibold text-white">{report.title}</h4>
                    </div>
                    <button className="text-yellow-400 hover:text-yellow-300">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Consumption</span>
                      <span className="text-white">{report.stats.consumption}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Cost</span>
                      <span className="text-white">{report.stats.cost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Savings</span>
                      <span className="text-green-400">{report.stats.savings}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Available Reports</h3>
              <div className="space-y-4">
                {[
                  { name: "Daily Usage Report", size: "245 KB", date: "Today" },
                  { name: "Weekly Summary", size: "1.2 MB", date: "Last Week" },
                  { name: "Monthly Analysis", size: "3.8 MB", date: "Last Month" },
                  { name: "Annual Report 2023", size: "8.5 MB", date: "Jan 2024" }
                ].map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-yellow-400 mr-3" />
                      <div>
                        <p className="text-white font-medium">{file.name}</p>
                        <p className="text-sm text-gray-400">{file.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-400 mr-3">{file.size}</span>
                      <button className="text-yellow-400 hover:text-yellow-300">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;