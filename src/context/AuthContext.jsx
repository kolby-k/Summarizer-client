import React, { createContext, useContext, useState, useEffect } from "react";

// Create a Context for Auth
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      // Implement your login logic here
      // For example, call an API to authenticate the user
      const response = await fakeApiLogin(email, password); // Replace with your API call
      const { userId, name, token } = response;

      const userData = { userId, email, name, token };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
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
      // Implement your signup logic here
      const response = await fakeApiSignup(name, email, password); // Replace with your API call
      const { userId, token } = response;

      const userData = { userId, name, email, token };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (err) {
      setError("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Fake API login function for demonstration purposes
const fakeApiLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@test.com" && password === "test") {
        resolve({ userId: 16, name: "John Doe", token: "abcd1234" });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000);
  });
};

const fakeApiSignup = (name, email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@test.com") {
        resolve({ userId: 16, name, token: "abcd1234" });
      } else {
        reject(new Error("User already exists"));
      }
    }, 1000);
  });
};
