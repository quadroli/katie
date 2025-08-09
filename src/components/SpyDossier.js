import React from 'react';

const SpyDossier = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="dossier-overlay" onClick={onClose}>
      <div className="dossier-content" onClick={(e) => e.stopPropagation()}>
        <h2>TOP SECRET</h2>
        <p><strong>Agent Name:</strong> Katie</p>
        <p><strong>Mission:</strong> Have the Happiest Birthday Imaginable.</p>
        <p className="self-destruct">(This message will self-destruct in 24 hours of fun.)</p>
        <button onClick={onClose} className="btn btn-danger">Close</button>
      </div>
    </div>
  );
};

export default SpyDossier;