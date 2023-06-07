import React, {useState} from 'react';

const UserContexte = React.createContext();

export const UserContexteProvider = ({ children }) => {
      const [dayMenu, setDayMenu] = useState({
        "Breakfast": [],
        "Lunch": [],
        "Dinner": [],
        "Snack": []
      });

      
  return (
    <UserContexte.Provider value={{dayMenu, setDayMenu}}>
      {children}
    </UserContexte.Provider>
  );
};

export default UserContexte;
