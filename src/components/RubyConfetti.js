import React from 'react';
import './RubyConfetti.css';

const RubyConfetti = () => {
  const rubies = Array.from({ length: 50 }); // Create 50 ruby elements

  return (
    <div className="confetti-container">
      {rubies.map((_, i) => (
        <div key={i} className="ruby"></div>
      ))}
    </div>
  );
};

export default RubyConfetti;
