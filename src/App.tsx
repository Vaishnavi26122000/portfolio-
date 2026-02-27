import React, { useState } from 'react';
import Splash from './Components/Splash';
import Home from './Components/Home';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <Splash onFinish={() => setShowSplash(false)} />
      ) : (
        <Home />
      )}
    </>
  );
};

export default App;