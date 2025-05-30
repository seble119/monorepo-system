

import React from 'react';

const LandingPage: React.FC = () => {
  return (
<div>
  <h4 className="text-lg font-semibold mb-4 flex items-center">
    <span className="w-5 h-5 mr-2 text-indigo-400">💼</span> {/* Placeholder for Briefcase icon */}
    Services
  </h4>
  <ul className="space-y-2 text-gray-400">
    <li>
      <a href="#" className="hover:text-white transition-colors flex items-center">
        <span className="w-4 h-4 mr-2">🌐</span> {/* Placeholder for Globe icon */}
        Web Development
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-white transition-colors flex items-center">
        <span className="w-4 h-4 mr-2">📱</span> {/* Placeholder for Smartphone icon */}
        Mobile Apps
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-white transition-colors flex items-center">
        <span className="w-4 h-4 mr-2">☁️</span> {/* Placeholder for Cloud icon */}
        Cloud Solutions
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-white transition-colors flex items-center">
        <span className="w-4 h-4 mr-2">📁</span> {/* Placeholder for Briefcase icon */}
        Consulting
      </a>
    </li>
  </ul>
</div>
  );
};

export default LandingPage;