import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WeatherSection from './components/WeatherSection';
import ApplianceCalculator from './components/ApplianceCalculator';
import CarbonFootprint from './components/CarbonFootprint';
import RealTimeData from './components/RealTimeData';
import PredictiveInsights from './components/PredictiveInsights';
import SolarWindMaps from './components/SolarWindMaps';
import Reports from './components/Reports';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Features />
      <WeatherSection />
      <ApplianceCalculator />
      <CarbonFootprint />
      <RealTimeData />
      <PredictiveInsights />
      <SolarWindMaps />
      <Reports />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;