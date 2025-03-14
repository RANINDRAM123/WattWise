import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="pt-20 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Choose the plan that's right for you</p>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              name: "Basic",
              price: "Free",
              description: "Perfect for getting started",
              features: [
                "Basic energy analytics",
                "Daily usage reports",
                "Email support",
                "Mobile app access"
              ]
            },
            {
              name: "Pro",
              price: "$29/mo",
              description: "For serious optimization",
              features: [
                "Advanced analytics",
                "Real-time monitoring",
                "Priority support",
                "Custom alerts",
                "Weather integration",
                "API access"
              ],
              highlighted: true
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "For large organizations",
              features: [
                "Everything in Pro",
                "Dedicated support",
                "Custom integration",
                "Multiple locations",
                "Team management",
                "SLA guarantee"
              ]
            }
          ].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.highlighted ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="bg-green-500 text-white text-center py-2">
                  <p className="text-sm font-semibold">MOST POPULAR</p>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <button
                  className={`w-full py-2 px-4 rounded-md transition-colors ${
                    plan.highlighted
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
              <div className="border-t border-gray-100 p-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            {
              name: "Sarah Johnson",
              role: "Homeowner",
              content: "Since using EcoOptimize, we've reduced our energy bills by 40%. The real-time monitoring is incredible!"
            },
            {
              name: "Mark Thompson",
              role: "Business Owner",
              content: "The analytics and insights have helped us make smarter decisions about our energy usage. Highly recommended!"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400" />
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;