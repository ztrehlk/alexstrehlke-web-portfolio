import React from 'react';
import HeaderSection from './components/HeaderSection';
import HighlightsSection from './components/HighlightsSection';
import ContactSection from './components/ContactSection';
import './styles/Home.css'; // Import the CSS file for Home component

function Home() {
  return (
    <main>
      <HeaderSection />
      <HighlightsSection />
      <ContactSection />
    </main>
  );
}

export default Home;