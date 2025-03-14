import { useState } from 'react';
import { Plus, Trash2, MessageSquare, Save } from 'lucide-react';
import { X } from "lucide-react";
import { PlusCircle, MinusCircle } from "lucide-react";
// import { v4 as uuidv4 } from 'uuid';

interface Appliance {
  id: string;
  name: string;
  watts: number;
  hoursPerDay: number;
  count: number;
}

const ApplianceCalculator = () => {
  const [appliances, setAppliances] = useState<Appliance[]>([]);
  const [newAppliance, setNewAppliance] = useState<Appliance>({
    id: '',
    name: '',
    watts: 0,
    hoursPerDay: 0,
    count: 1,
  });
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [notes, setNotes] = useState('');

  const addAppliance = () => {
    if (newAppliance.name && newAppliance.watts && newAppliance.hoursPerDay) {
      setAppliances([...appliances, newAppliance]);
      setNewAppliance({ id: '', name: '', watts: 0, hoursPerDay: 0, count: 1 });
    }
  };

  const removeAppliance = (index: number) => {
    setAppliances(appliances.filter((_, i) => i !== index));
  };

  const calculateDailyCost = () => {
    const kwhRate = 4.32; // Example rate per kWh
    const totalWatts = appliances.reduce(
      (acc, app) => acc + (app.watts * app.hoursPerDay * app.count),
      0
    );
    return ((totalWatts / 1000) * kwhRate).toFixed(2);
  };
  
  const increaseCount = (id: any) => {
    setAppliances(appliances.map(appliance =>
      appliance.id === id ? { ...appliance, count: appliance.count + 1 } : appliance
    ));
  };

  const decreaseCount = (id: any) => {
    setAppliances(appliances.map(appliance =>
      appliance.id === id ? { ...appliance, count: appliance.count - 1 } : appliance
    ));
  };

  // const generateRecommendations = () => {
  //   const newRecommendations = [
  //     "Consider replacing high-wattage appliances with energy-efficient models",
  //     "Try to use major appliances during off-peak hours",
  //     "Install smart plugs to automate usage and reduce standby power",
  //     "Regular maintenance can improve appliance efficiency",
  //     "Consider upgrading to LED lighting for significant savings"
  //   ];
  //   setRecommendations(newRecommendations);
  // };

  const generateRecommendations = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ appliances }),
      });
      const data = await response.json();
      setRecommendations(data.recommendations);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };


  return (
    <section className="py-20 bg-gradient-to-l from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
            Energy Cost Calculator
          </h2>
          <p className="text-xl text-gray-400">
            Calculate your appliance energy usage and get personalized recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Add Appliance</h3>
              <div className="space-y-4">
                <select
                  value={newAppliance.name}
                  onChange={(e) => setNewAppliance({ ...newAppliance, name: e.target.value })}
                  // className="absolute left-full ml-2 top-0 w-48 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-50"
                  className="w-full px-4 py-2 left: 0 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                >
                  <option value="" disabled>Select an Appliance</option>
                  <option value="LED Bulb">LED Bulb</option>
                  <option value="Tube Light">Tube Light</option>
                  <option value="Fans">Fans</option>
                  <option value="Inverter">Inverter</option>
                  <option value="Refrigerator">Refrigerator</option>
                  <option value="Microwave">Microwave</option>
                  <option value="Kettle">Kettle</option>
                  <option value="Induction">Induction</option>
                  <option value="Blender">Blender</option>
                  <option value="Toaster">Toaster</option>
                  <option value="AC">AC</option>
                  <option value="Heater">Heater</option>
                  <option value="Geyser">Geyser</option>
                  <option value="Washing Machine">Washing Machine</option>
                  <option value="Air Cooler">Air Cooler</option>
                  <option value="TV">TV</option>
                  <option value="Wifi">Wifi</option>
                  <option value="Trimmer">Trimmer</option>
                  <option value="Hair Dryer">Hair Dryer</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="number"
                  placeholder="Watts"
                  value={newAppliance.watts || ''}
                  onChange={(e) => setNewAppliance({ ...newAppliance, watts: Number(e.target.value) })}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                />
                <input
                  type="number"
                  placeholder="Hours per day"
                  value={newAppliance.hoursPerDay || ''}
                  onChange={(e) => setNewAppliance({ ...newAppliance, hoursPerDay: Number(e.target.value) })}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                />
                <button
                  onClick={addAppliance}
                  className="w-full px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-yellow-300 transition-all duration-300"
                >
                  <Plus className="h-5 w-5" />
                  Add Appliance
                </button>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Appliance List</h3>
              <div className="space-y-3">
                {appliances.map((appliance, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-700/30 p-3 rounded-lg">
                    <div>
                      <p className="text-white font-medium">{appliance.name}({appliance.count})</p>
                      <p className="text-sm text-gray-400">
                        {appliance.watts}Watts × {appliance.hoursPerDay}hours/day
                      </p>
                    </div>
                    <button onClick={() => increaseCount(appliance.id)} className="text-green-400 hover:text-green-300">
                      <PlusCircle className="h-5 w-5" />
                    </button>
                    <button onClick={() => decreaseCount(appliance.id)} className="text-red-400 hover:text-red-300">
                      <MinusCircle className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => removeAppliance(index)}
                      className="text-gray-500 hover:text-gray-300"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Daily Cost Estimate</h3>
                <span className="text-3xl font-bold text-yellow-400">₹{calculateDailyCost()}</span>
              </div>
              <button
                onClick={generateRecommendations}
                className="w-full px-4 py-3 bg-green-500/20 text-green-400 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-500/30 transition-all duration-300"
              >
                <MessageSquare className="h-5 w-5" />
                Get Recommendations
              </button>
            </div>

            {recommendations.length > 0 && (
              <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6">
                {/* Close Button */}
                <button
                  onClick={() => setRecommendations([])} // Function to clear recommendations
                  className="absolute top-2 right-2 p-1 rounded-full bg-red-700 hover:bg-red-600"
                >
                  <X size={16} stroke-width="3" className="text-white" />
                </button>

                <h3 className="text-xl font-semibold text-white mb-4">Recommendations</h3>
                <ul className="space-y-3">
                  {recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="h-2 w-2 bg-yellow-400 rounded-full mt-2"></span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Notes</h3>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add your notes here..."
                rows={4}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white resize-none"
              ></textarea>
              <button className="mt-4 px-4 py-2 bg-gray-700/50 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-700/70 transition-all duration-300">
                <Save className="h-5 w-5" />
                Save Notes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplianceCalculator;