import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400">
            We're here to help with your energy optimization needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-yellow-400 text-black rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300"
              >
                Send Message
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: <Mail className="h-6 w-6" />, label: "Email", value: "contact@energyapp.com" },
                  { icon: <Phone className="h-6 w-6" />, label: "Phone", value: "+1 (555) 123-4567" },
                  { icon: <MapPin className="h-6 w-6" />, label: "Address", value: "123 Energy Street, Tech City, TC 12345" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-yellow-400 mr-4">{contact.icon}</div>
                    <div>
                      <h4 className="text-gray-300 font-medium mb-1">{contact.label}</h4>
                      <p className="text-white">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Office Hours</h3>
              <div className="space-y-4">
                {[
                  { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                  { days: "Saturday", hours: "10:00 AM - 4:00 PM" },
                  { days: "Sunday", hours: "Closed" }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{schedule.days}</span>
                    <span className="text-white font-medium">{schedule.hours}</span>
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

export default Contact;