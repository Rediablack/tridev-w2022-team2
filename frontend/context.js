import React, {useState, useContext, useEffect, useCallback} from 'react';
import axios from 'axios';

const AppContext = React.createContext();
const AppProvider = ({children}) => {
  const [userId, setUserId] = useState('');

  return <AppContext.Provider value={{userId}}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};
