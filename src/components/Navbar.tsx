import React from 'react';
import { Menu, X, Zap, UserRound } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);


  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4">
      <nav className="backdrop-blur-md bg-black/20 rounded-full border border-white/10">
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo on the left */}
            <div className="flex-shrink-0">
              <Zap className="h-8 w-8 text-yellow-400" />
            </div>
            
            {/* Navigation items aligned to the right */}
            <div className="hidden md:flex flex-1 justify-end">
              <div className="flex items-center space-x-3">
                {['Home', 'Features', 'Real-Time Data', 'Predictive Insights', 'Solar & Wind Maps', 'Reports', 'About', 'Contact','Profile'].map((item) => (
                  item === 'Profile' ? 
                  <a
                    key={item}
                    onClick={(e) => {e.preventDefault(); window.location.assign("./Profile"); }}
                    className="group relative px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-300"
                  >

                    <span className="relative z-10 group-hover:text-white group-hover:font-bold transition-all duration-300">
                      {item}
                    </span>
                    <span className="absolute bottom-1.5 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </a>:
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="group relative px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-300"
                  >

                    <span className="relative z-10 group-hover:text-white group-hover:font-bold transition-all duration-300">
                      {item}
                    </span>
                    <span className="absolute bottom-1.5 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                  
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full text-yellow-400 hover:text-white hover:bg-yellow-500/20 focus:outline-none transition-colors duration-300"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full mt-2">
            <div className="px-4 pt-2 pb-3 backdrop-blur-md bg-black/90 rounded-2xl border border-white/10">
              {['Home', 'Features', 'Real-Time Data', 'Predictive Insights', 'Solar & Wind Maps', 'Reports', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                  className="group relative block px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition-all duration-300"
                >
                  <span className="relative z-10 group-hover:font-bold transition-all duration-300">
                    {item}
                  </span>
                  <span className="absolute bottom-1.5 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;