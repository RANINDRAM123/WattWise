import { Zap, Mail, Twitter, Linkedin, Github, Instagram, ArrowRight, Globe, Phone, MapPin } from 'lucide-react';
import Sparks from "./styles/sparks";



const Footer = () => {

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Animated energy particles
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-yellow-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div> */}

<Sparks />

      {/* Newsletter Section */}
      <div className="relative max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 mb-12 border border-white/10 hover:border-yellow-400/30 transition-colors duration-300">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Energized with Updates</h3>
            <p className="text-gray-400 mb-6">Get the latest energy insights and tips delivered to your inbox</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/30 rounded-lg border border-white/10 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
              />
              <button className="group px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold flex items-center gap-2 hover:bg-yellow-300 transition-all duration-300">
                Subscribe
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold">EnergyApp</span>
            </div>
            <p className="text-gray-400">Empowering you with smart energy solutions for a sustainable future.</p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="/#"
                  className="group h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-yellow-400/20 transition-colors duration-300"
                >
                  <Icon className="h-5 w-5 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Features', 'Real-Time Data', 'Reports', 'About Us'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Energy Monitoring', 'Smart Analytics', 'Solar Solutions', 'Wind Energy'].map((item) => (
                <li key={item}>
                  <a
                    href="/#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              {[
                { icon: Globe, text: 'www.WattWise.com' },
                { icon: Mail, text: 'contact@energyapp.com' },
                { icon: Phone, text: '+91 72186 24598' },
                { icon: MapPin, text: 'Jadavpur University EE Dept., WB, India' }
              ].map(({ icon: Icon, text }, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-400">
                  <Icon className="h-5 w-5 text-yellow-400" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} WattWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;