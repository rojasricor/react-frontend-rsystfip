import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function doLogin(userAuthenticated) {
    setUser(userAuthenticated);
  }

  function doLogout() {
    setUser(null);
    setUsername("");
    setPassword("");
  }

  function showPassword() {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <AppContext.Provider
      value={{
        user,
        doLogin,
        doLogout,
        passwordVisible,
        showPassword,
        username,
        setUsername,
        password,
        setPassword,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
