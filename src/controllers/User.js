import React, { useState, createContext} from 'react';

export const UserContext = createContext();

export function UserInfo({ children }) {
  const [userData, setUserData] = useState([
    {
      main: 'Main Ranking 1',
      add: 'Additional Ranking 2',
      weight: '0.1'
    }
  ]);
  
  const [filters, setFilters] = useState({
    setting: [],
    type: [],
    location: []
  });

  return (
    <UserContext.Provider value={{userData, filters, setUserData, setFilters}}>
      {children}
    </UserContext.Provider>
  );
}