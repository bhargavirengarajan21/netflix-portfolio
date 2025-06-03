import React, { createContext, useContext, useState } from "react";
import { userData } from "../data/context-data";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setuserData] = useState(userData);
  return (
    <DataContext.Provider value={{ userData, setuserData }}>
      {children}
    </DataContext.Provider>
  );
}

export const useContextProvider = () => {
  return useContext(DataContext);
}
