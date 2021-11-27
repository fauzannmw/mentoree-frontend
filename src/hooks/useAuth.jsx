import { useContext } from "react";
import { useMemo } from "react";
import { createContext } from "react";
import { MENTEE_REGISTER } from "../api";
const AuthContext = createContext({});

export function AuthProvider({ children }) {
  async function register(params) {
    //   MENTEE_REGISTER()
  }
  //   const memoedValue = useMemo();
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export default function useAuth() {
  return useContext(AuthContext);
}
