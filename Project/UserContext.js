import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

      const [bmr, setBMR] = useState(0);

      const saveDayMenuToStorage = async (updatedDayMenu) => {
        try {
          const jsonDayMenu = JSON.stringify(updatedDayMenu);
          await AsyncStorage.setItem('dayMenu', jsonDayMenu);
        } catch (error) {
          ('Erreur lors de la sauvegarde:', error);
        }
      };
    
      const loadDayMenuFromStorage = async () => {
        try {
          const jsonDayMenu = await AsyncStorage.getItem('dayMenu');
          if (jsonDayMenu) {
            const parsedDayMenu = JSON.parse(jsonDayMenu);
            setDayMenu(parsedDayMenu);
          }
        } catch (error) {
          console.log('Erreur lors du chargement:', error);
        }
      };
    
      useEffect(() => {
        loadDayMenuFromStorage(); 
      }, []);
    
      
      const updateDayMenu = (updatedDayMenu) => {
        setDayMenu(updatedDayMenu);
        saveDayMenuToStorage(updatedDayMenu); 
      };
      
  return (
    <UserContexte.Provider value={{dayMenu, setDayMenu: updateDayMenu, bmr, setBMR } }>
      {children}
    </UserContexte.Provider>
  );
};

export default UserContexte;
