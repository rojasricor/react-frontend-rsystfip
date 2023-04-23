import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        username,
        setUsername,
        password,
        setPassword,
        passwordVisible,
        setPasswordVisible,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
