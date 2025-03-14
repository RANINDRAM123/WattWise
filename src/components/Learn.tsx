import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Wind, Droplets, HelpCircle, BookOpen } from 'lucide-react';

const Learn = () => {
  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Learn About Renewable Energy</h1>
          <p className="text-xl text-gray-600">Discover how to maximize your renewable energy usage</p>
        </motion.div>

        {/* Energy Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Sun className="h-12 w-12" />,
              title: "Solar Energy",
              description: "Harness the power of the sun with modern solar technology"
            },
            {
              icon: <Wind className="h-12 w-12" />,
              title: "Wind Energy",
              description: "Learn about wind turbines and optimal conditions"
            },
            {
              icon: <Droplets className="h-12 w-12" />,
              title: "Hydro Energy",
              description: "Understand the potential of water-based power generation"
            }
          ].map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="text-green-600 mb-4 flex justify-center">{type.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-gray-600">{type.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <div className="flex items-center mb-6">
            <BookOpen className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold">Energy Saving Tips</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Schedule high-energy tasks during peak production hours",
              "Regular maintenance of solar panels increases efficiency",
              "Monitor weather patterns for optimal energy generation",
              "Use smart devices to automate energy consumption"
            ].map((tip, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <span className="text-green-600 font-semibold">{index + 1}</span>
                </div>
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="flex items-center mb-6">
            <HelpCircle className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "How do solar panels work?",
                answer: "Solar panels convert sunlight into electricity through photovoltaic cells. These cells absorb solar radiation and transform it into usable electrical energy."
              },
              {
                question: "What affects wind turbine efficiency?",
                answer: "Wind speed, turbine height, air density, and proper maintenance all play crucial roles in wind turbine efficiency."
              },
              {
                question: "How can I maximize my energy savings?",
                answer: "Monitor your usage patterns, implement smart controls, and schedule high-energy activities during peak production times."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Learn;