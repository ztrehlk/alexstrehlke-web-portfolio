import React from 'react';

import initialImg from './assets/images/initial-fortis.png';
import MainSection from './components/MainSection';
import FeaturesSection from './components/FeaturesSection';
import './styles/Fortis.css';

const Fortis = () => {
  // Feature data


  return (
    <main className="fortis-page">
      {/* Hero Section */}
      <MainSection />
      
      {/* Features Section - appears directly underneath */}
      <FeaturesSection />
    </main>
  );
};

export default Fortis;