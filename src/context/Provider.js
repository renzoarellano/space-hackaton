import React, { createContext, useState, useEffect } from "react";

export const userContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userID, setUserID] = useState(null);

  const setUserData = (data) => {
    setUser(data);
  };
  const setUserId = (data) => {
    setUserID(data);
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

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("userID"));
    if (data) setUserID(data);
    else setUserID(null);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("userID", JSON.stringify(userID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userID]);

  return (
    <userContext.Provider
      value={{
        user,
        userID,
        setUserData,
        emptyUser,
        setUserId,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
