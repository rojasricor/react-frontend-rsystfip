import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const doLogin = (userAuthenticated) => setUser(userAuthenticated);
  const doLogout = () => setUser(null);

  return (
    <AppContext.Provider
      value={{
        user,
        doLogin,
        doLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
