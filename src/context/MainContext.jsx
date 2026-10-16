import { createContext } from "react";

export const store = createContext();

const MainContext = ({ children }) => {
  

  const contextValue = {
  };

  return <store.Provider value={contextValue}>{children}</store.Provider>;
};

export default MainContext;
