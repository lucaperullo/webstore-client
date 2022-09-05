import React, { createContext, useContext, useReducer } from "react";

// Prepares the data layer
export const StateContext = createContext<any>(null);

// We wrap our app and provide the Data layer
export const StateProvider = ({
  reducer,
  initialState,
  children,
}: {
  reducer: any;

  initialState: any;
  children: any;
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
