import React from 'react';

const UserContexte = React.createContext();

export const UserContexteProvider = ({ children }) => {
    const DayMenu = {
        "Breakfast": [],
        "Lunch": [],
        "Dinner": [],
        "Snack": []
      };
  return (
    <UserContexte.Provider value={DayMenu}>
      {children}
    </UserContexte.Provider>
  );
};

export default UserContexte;
