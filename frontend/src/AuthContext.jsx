import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState({ accessToken: null, refreshToken: null });

  useEffect(() => {
    // Check if tokens exist in local storage and set them
    const storedTokens = JSON.parse(localStorage.getItem('authTokens'));
    if (storedTokens) {
      setAuthTokens(storedTokens);
    }
  }, []);

  const updateAuthTokens = (accessToken, refreshToken) => {
    // Store tokens in local storage
    localStorage.setItem('authTokens', JSON.stringify({ accessToken, refreshToken }));
    // Update tokens in state
    setAuthTokens({ accessToken, refreshToken });
  };

  const clearAuthTokens = () => {
    // Remove tokens from local storage
    localStorage.removeItem('authTokens');
    // Clear tokens from state
    setAuthTokens({ accessToken: null, refreshToken: null });
  };

  return (
    <AuthContext.Provider value={{ authTokens, updateAuthTokens, clearAuthTokens }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return React.useContext(AuthContext);
};
