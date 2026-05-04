'use client';

import { useState, useEffect } from 'react';
import AZ305EnhancedQuiz from '@/components/AZ305EnhancedQuiz';
import LoginPage from '@/components/LoginPage';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user is already authenticated
    const token = localStorage.getItem('az305-auth');
    if (token) {
      // Verify token is not too old (24 hours)
      try {
        const decoded = atob(token);
        const timestamp = parseInt(decoded.split(':')[1]);
        const hoursSinceLogin = (Date.now() - timestamp) / (1000 * 60 * 60);
        
        if (hoursSinceLogin < 24) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('az305-auth');
          setIsAuthenticated(false);
        }
      } catch {
        localStorage.removeItem('az305-auth');
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('az305-auth');
    setIsAuthenticated(false);
  };

  // Show nothing while checking authentication
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin" />
      </div>
    );
  }

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Show quiz if authenticated
  return (
    <main>
      <AZ305EnhancedQuiz onLogout={handleLogout} />
    </main>
  );
}
