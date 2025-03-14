import React, { useState } from 'react';
import { Leaf, ArrowRight } from 'lucide-react';

const CarbonFootprint = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    electricity: '',
    gas: '',
    water: '',
    waste: '',
    transport: ''
  });

  const slides = [
    {
      title: "Electricity Usage",
      description: "Enter your monthly electricity consumption in kWh",
      field: "electricity",
      unit: "kWh"
    },
    {
      title: "Natural Gas",
      description: "Enter your monthly natural gas usage in therms",
      field: "gas",
      unit: "therms"
    },
    {
      title: "Water Consumption",
      description: "Enter your monthly water usage in gallons",
      field: "water",
      unit: "gallons"
    },
    {
      title: "Waste Generation",
      description: "Enter your monthly waste in pounds",
      field: "waste",
      unit: "lbs"
    },
    {
      title: "Transportation",
      description: "Enter your monthly vehicle miles",
      field: "transport",
      unit: "miles"
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
            Carbon Footprint Calculator
          </h2>
          <p className="text-xl text-gray-400">
            Measure your environmental impact and get personalized reduction tips
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 flex-1 mx-1 rounded-full transition-all duration-300 ${
                      index <= currentSlide ? 'bg-yellow-400' : 'bg-gray-700'
                    }`}
                  ></div>
                ))}
              </div>
              <p className="text-center text-gray-400">
                Step {currentSlide + 1} of {slides.length}
              </p>
            </div>

            {/* Current slide */}
            <div className="text-center mb-8">
              <Leaf className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">
                {slides[currentSlide].title}
              </h3>
              <p className="text-gray-400">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Input field */}
            <div className="max-w-sm mx-auto mb-8">
              <div className="relative">
                <input
                  type="number"
                  value={formData[slides[currentSlide].field as keyof typeof formData]}
                  onChange={(e) => handleInputChange(slides[currentSlide].field, e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white pr-16"
                  placeholder="Enter value"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  {slides[currentSlide].unit}
                </span>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentSlide === 0}
                className={`px-6 py-2 rounded-lg font-semibold ${
                  currentSlide === 0
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                } transition-all duration-300`}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-yellow-400 text-black rounded-lg font-semibold flex items-center gap-2 hover:bg-yellow-300 transition-all duration-300"
              >
                {currentSlide === slides.length - 1 ? 'Calculate' : 'Next'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Results preview */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
            {Object.entries(formData).map(([key, value], index) => (
              <div
                key={key}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 text-center"
              >
                <p className="text-gray-400 text-sm mb-1">{slides[index].title}</p>
                <p className="text-white font-semibold">
                  {value || '0'} {slides[index].unit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonFootprint;