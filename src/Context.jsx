import React, { createContext, useContext, useState } from "react";
import {userData} from "./data/context-data.js";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(userData);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
