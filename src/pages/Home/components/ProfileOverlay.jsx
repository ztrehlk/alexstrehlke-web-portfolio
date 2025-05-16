import React from 'react';

const ProfileOverlay = ({ name, description, imageUrl }) => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      zIndex: 10,
      pointerEvents: 'none'
    }}>
      <div style={{
        width: '160px',
        height: '160px',
        borderRadius: '50%',
        overflow: 'hidden',
        marginBottom: '20px',
        border: '3px solid rgba(255, 255, 255, 0.2)'
      }}>
        <img 
          src={imageUrl} 
          alt={name} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      <h1 style={{
        fontSize: '2.5rem',
        margin: '0 0 10px 0',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        color: 'black'
      }}>{name}</h1>
      <p style={{
        fontSize: '1.2rem',
        maxWidth: '600px',
        margin: 0,
        opacity: 0.9,
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
        color: 'black'
      }}>{description}</p>
    </div>
  );
};

export default ProfileOverlay;