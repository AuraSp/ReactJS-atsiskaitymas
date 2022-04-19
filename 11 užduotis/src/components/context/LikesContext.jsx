import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [likes, setLikes] = useState(0);

  const getLikes = () => {
    setLikes(likes + 1);
  }

  return (
    <AppContext.Provider
      value = {{ likes, getLikes }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export default AppProvider