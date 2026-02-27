// src/Components/Splash.tsx
import React, { useEffect } from 'react';

interface SplashProps {
  onFinish: () => void;
}

const Splash: React.FC<SplashProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // 3 seconds splash

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div style={styles.container}>
      <div style={styles.hand} role="img" aria-label="waving hand">
        👋
      </div>
      <h1 style={styles.text}>Welcome to my website</h1>
      <p style={styles.subText}>We’re glad you’re here! 🚀</p>
      <div style={styles.loadingBarContainer}>
        <div style={styles.loadingBar}></div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#d69e2e', // bright yellow background
    fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
color: '#ffffff',    padding: '0 20px',
  },
  hand: {
    fontSize: '6rem',
    animation: 'wave 2.5s infinite',
    transformOrigin: '70% 70%',
    marginBottom: '20px',
    filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
  },
  text: {
    fontSize: '2.8rem',
    fontWeight: '700',
    marginBottom: '10px',
    textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
  },
  subText: {
    fontSize: '1.2rem',
color: '#ffffff',    marginBottom: '40px',
    fontStyle: 'italic',
  },
  loadingBarContainer: {
    width: '80%',
    height: '8px',
    backgroundColor: '#a3c0e8',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  loadingBar: {
    height: '100%',
    width: '100%',
    backgroundColor: '#2a74da',
    borderRadius: '10px',
    animation: 'loadProgress 3s linear forwards',
  },
};

export default Splash;