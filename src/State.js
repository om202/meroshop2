import React from "react";

export const GlobalStateContext = React.createContext();

export const GlobalStateProvider = ({ children }) => {
  const [state, setState] = React.useState({
    products: JSON.parse(localStorage.getItem('products')) || [],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    user: localStorage.getItem('user') || null,
  });

  return (
    <GlobalStateContext.Provider value={[state, setState]}>
      {children}
    </GlobalStateContext.Provider>
  );
};