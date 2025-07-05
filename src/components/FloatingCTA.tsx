import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      // Show floating CTA after scrolling 100vh
      setIsVisible(scrollTop > windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-red-600 text-white w-14 h-14 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center"
        >
          <ArrowRight className="h-6 w-6" />
        </button>
      ) : (
        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">Apply Now!</h3>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <p className="text-gray-600 mb-4">
            Don't miss out on these amazing opportunities. Positions are filling fast!
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="text-gray-500 text-xs mb-2">56 positions left</div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-red-600 font-semibold">Urgent</span>
            </div>
          </div>
          
          <button className="w-full bg-white border-2 border-red-600 text-red-600 py-3 rounded-lg font-bold hover:bg-red-600 hover:text-white transition-colors duration-200 flex items-center justify-center group" onClick={() => navigate('/apply')} aria-label="Start Application">
            Start Application
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;