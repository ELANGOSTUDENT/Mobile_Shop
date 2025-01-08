//import React from 'react';
import mobile from '../assets/mobile.jpeg';
const HomePage = () => {
  return (
    <main>
      <section id="welcome" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Welcome to My Mobile Shop</h1>
        <p>Discover amazing features and Services.</p>
        <img 
          src={mobile} 
          alt="Hero" 
          style={{
            maxWidth: '60%',
            height: 'auto',
            borderRadius: '6px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }} 
        />
        
      </section>
      
    </main>
  );
};

export default HomePage;
