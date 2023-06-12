import React, {useState} from 'react';

const UserContexte = React.createContext();

export const UserContexteProvider = ({ children }) => {
      const [dayMenu, setDayMenu] = useState({
        "Monday" : {"Breakfast": [],
                    "Lunch": [],
                    "Dinner": [],
                    "Snack": []
                    },
        "Tuesday" : {"Breakfast": [],
                    "Lunch": [],
                    "Dinner": [],
                    "Snack": []
                    },
        "Wednesday" : {"Breakfast": [],
                    "Lunch": [],
                    "Dinner": [],
                    "Snack": []
                    },
        "Thursday" : {"Breakfast": [],
                    "Lunch": [],
                    "Dinner": [],
                    "Snack": []
                    },
        "Friday" : {"Breakfast": [],
                    "Lunch": [],
                    "Dinner": [],
                    "Snack": []
                    },
        "Saturday" : {"Breakfast": [],
                    "Lunch": [],
                    "Dinner": [],
                    "Snack": []
                    },
        "Sunday" : {"Breakfast": [],
                    "Lunch": [],
                    "Dinner": [],
                    "Snack": []
                    },
      });

      
  return (
    <UserContexte.Provider value={{dayMenu, setDayMenu}}>
      {children}
    </UserContexte.Provider>
  );
};

export default UserContexte;
