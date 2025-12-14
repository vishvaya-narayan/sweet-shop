import { createContext, useState } from "react";
import { setAuthToken } from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  const login = (token, role) => {
    setToken(token);
    setRole(role);
    setAuthToken(token);
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
