import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import { absoluteUrl, withBase } from "@/lib/authReturnTo";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);
  const [authError, setAuthError] = useState(null);

  // Il sito è pubblico: un visitatore non loggato NON è un errore.
  const checkUserAuth = useCallback(async () => {
    setIsLoadingAuth(true);
    try {
      const loggedIn = await base44.auth.isAuthenticated();
      if (!loggedIn) {
        setUser(null);
        setIsAuthenticated(false);
        setAuthError(null);
        return;
      }
      const me = await base44.auth.me();
      setUser(me);
      setIsAuthenticated(true);
      setAuthError(null);
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
      if (error?.data?.extra_data?.reason === "user_not_registered") {
        setAuthError({ type: "user_not_registered", message: "Utente non registrato" });
      } else {
        setAuthError(null);
      }
    } finally {
      setIsLoadingAuth(false);
      setAuthChecked(true);
    }
  }, []);

  useEffect(() => {
    checkUserAuth();
  }, [checkUserAuth]);

  const logout = useCallback(() => {
    setUser(null);
    setIsAuthenticated(false);
    base44.auth.logout(absoluteUrl("/"));
  }, []);

  const navigateToLogin = useCallback(() => {
    window.location.href = withBase("/login");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoadingAuth,
        isLoadingPublicSettings: false,
        authChecked,
        authError,
        checkUserAuth,
        logout,
        navigateToLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve essere usato dentro <AuthProvider>");
  return ctx;
}
