import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../components/utils/localStorage";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <>
      <AuthContext.Provider value={userData}>
        {children}
        </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
