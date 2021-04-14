import React, { createContext, useState, useEffect } from "react";

export const userContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setUserData = (data) => {
    setUser(data);
  };

  const emptyUser = () => {
    setUser(null);
  };

  /*   const addNewProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const deleteNewProduct = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  }; */

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("userData"));
    if (data) setUserData(data);
    else setUserData(null);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("userData", JSON.stringify(user));
  }, [user]);

  return (
    <userContext.Provider
      value={{
        user,
        setUserData,
        emptyUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
