

import React from 'react';
import DataFlowVisualization from './DataFlowVisualization';
import ProfileOverlay from './ProfileOverlay';
import profileImg from '../../../assets/images/portfolioProfile.png';

const HeaderSection = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: 'black',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}>
        <DataFlowVisualization />
      </div>
      
      <ProfileOverlay 
        name="Alex Strehlke"
        description="Welcome! This space showcases my work across data, tech, and software
          development—along with a few side projects and experiments I'm excited
          about."
        imageUrl={profileImg}
      />
    </div>
  );
};

export default HeaderSection;