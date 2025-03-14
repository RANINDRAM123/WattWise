import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
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
import Profile from './components/Profile';
import IoT from './components/iot'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Home />
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
      <Router>
        <Routes>
          <Route path="./components/Profile" element={<Profile />} />
        </Routes>
      </Router>
      <IoT />
    </div>
  );
}

export default App;
