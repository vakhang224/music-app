import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [refresh_token,setRefreshToken] = useState(null)
  const [expireDate,setExpireDate] = useState(null)
  useEffect(() => {
    // Lấy token từ AsyncStorage khi app mở lại
    const loadToken = async () => {
      const token = await AsyncStorage.getItem("access_token");
      const refresh_token = await AsyncStorage.getItem("refreshToken")
      const expireDate = await AsyncStorage.getItem("ExpireDate")
      if (token) {
        setAccessToken(token);
        setExpireDate(expireDate);
        setRefreshToken(refresh_token)
      }
    };
    loadToken();
  }, []);

  const login = async (token) => {
    setAccessToken(token);
    await AsyncStorage.setItem("access_token", token);
  };

  const logout = async () => {
    setAccessToken(null);
    await AsyncStorage.removeItem("access_token");
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
