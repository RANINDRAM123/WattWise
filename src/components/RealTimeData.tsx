import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion, useScroll } from "framer-motion";
import { Activity, Sun, Wind, Droplet } from 'lucide-react';

const generateData = () => {
  const data = [];
  for (let i = 0; i < 24; i++) {
    data.push({ hour: `${i}:00`, units: Math.random() * 2 });
  }
  return data;
};

export default function EnergyConsumptionChart() {
  const [data, setData] = useState(generateData());
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="real-time-data" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
            Real-Time Energy Insights
          </h2>
          <p className="text-xl text-gray-400">
            Monitor your energy consumption as it happens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <Activity className="h-8 w-8" />, label: "Current Usage", value: "2.4 kW", change: "+5%" },
            { icon: <Sun className="h-8 w-8" />, label: "Solar Generation", value: "1.2 kW", change: "-22%" },
            { icon: <Wind className="h-8 w-8" />, label: "Grid Import", value: "1.2 kW", change: "+8%" },
            { icon: <Droplet className="h-8 w-8" />, label: "Carbon Offset", value: "45 kg", change: "-12%" }
          ].map((metric, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 hover:bg-yellow-500/10 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-yellow-400">{metric.icon}</div>
                <span className={`text-sm font-medium ${
                  metric.change.startsWith('+') ? 'text-red-400' : 'text-green-400'
                }`}>
                  {metric.change}
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-300 mb-1">{metric.label}</h3>
              <p className="text-2xl font-bold text-white">{metric.value}</p>
            </div>
          ))}
        </div>
        </div>
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-80 p-4 bg-gray-900 rounded-xl shadow-lg"
      style={{ opacity: scrollYProgress }}
    >
      <h2 className="text-white text-xl mb-4">24-Hour Energy Consumption</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="hour" stroke="#ccc" interval={0} />
          <YAxis domain={[0, 2]} stroke="#ccc" label={{ value: "Units", angle: -90, position: "insideLeft" }} />
          <Tooltip cursor={{ stroke: "#888", strokeWidth: 1 }} contentStyle={{ backgroundColor: "#222" }} />
          <Line 
            type="monotone" 
            dataKey="units" 
            stroke="#00ffcc" 
            strokeWidth={3} 
            dot={false}
            activeDot={{ r: 6 }}
            animationDuration={1000}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
    </section>
  );
}
