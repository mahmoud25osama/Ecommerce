import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";


export default function AuthContextProvider({ children }) {

  const [token, setToken] = useState(null);
  useEffect(() => {
    if (localStorage.getItem('tkn')) {
      setToken(localStorage.getItem('tkn'));
    }
  }, [])

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}
