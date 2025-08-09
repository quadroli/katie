import React, { useState } from 'react';
import Hero from './components/Hero';
import Message from './components/Message';
import SpyDossier from './components/SpyDossier';
import RubyConfetti from './components/RubyConfetti';
import './styles.css';

function App() {
  const [dossierVisible, setDossierVisible] = useState(false);

  return (
    <div className="App">
      <RubyConfetti />
      <Hero />
      <Message />
      <div className="spy-icon" onClick={() => setDossierVisible(true)}>
        🤫
      </div>
      <SpyDossier 
        isVisible={dossierVisible} 
        onClose={() => setDossierVisible(false)} 
      />
    </div>
  );
}

export default App;