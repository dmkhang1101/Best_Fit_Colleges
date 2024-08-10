import React, { useState, createContext} from 'react';

export const UserContext = createContext();

export function UserInfo({ children }) {
  const [isLoggedIn, setLogIn] = useState(false)

  const [userData, setUserData] = useState([]);

  const [filters, setFilters] = useState({
    setting: [],
    type: [],
    location: []
  });

  const [compareColleges, setCompareColleges] = useState([])

  return (
    <UserContext.Provider value={{isLoggedIn, userData, filters, compareColleges, setLogIn, setUserData, setFilters, setCompareColleges}}>
      {children}
    </UserContext.Provider>
  );
}