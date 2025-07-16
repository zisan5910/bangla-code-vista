
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnitConverter from './components/UnitConverter';
import InstallPrompt from './components/InstallPrompt';

function App() {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {showInstallPrompt && (
          <InstallPrompt onInstall={handleInstall} onDismiss={handleDismiss} />
        )}
        <Routes>
          <Route path="/" element={<UnitConverter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
