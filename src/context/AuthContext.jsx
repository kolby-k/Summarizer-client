import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fakeApiLogin(email, password);
      const { userId, name, token } = response;

      const userData = { userId, email, name, token };
      setUser(userData);
      sessionStorage.setItem("user", JSON.stringify(userData));
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name, email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fakeApiSignup(name, email, password);
      const { userId, token } = response;

      const userData = { userId, name, email, token };
      setUser(userData);
      sessionStorage.setItem("user", JSON.stringify(userData));
    } catch (err) {
      setError("Sign-up blocked. Please login with the test account!");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        loading,
        error,
        clearError,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// Fake API login function
const fakeApiLogin = (email, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@test.com" && password === "test") {
        resolve({ userId: 16, name: "John Doe", token: "abcd1234" });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000);
  });

const fakeApiSignup = (name, email, password) =>
  new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Sign-up blocked. Please login with the test account!"));
    }, 1000);
  });
