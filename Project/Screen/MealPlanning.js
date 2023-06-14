import React, { useContext, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import UserContexte from '../UserContext';
import DayMeals from './DayMeals';



const MealPlanning = ({ navigation }) => { 
  const { dayMenu, setDayMenu } = useContext(UserContexte);

  const handleAddFood = (day, meal) => {
    navigation.navigate('FoodDatabase', { day, meal });
  };

  const handleRemoveFood = (day, meal, index) => {
    const newDayMenu = {
      ...dayMenu,
    };
    newDayMenu[day][meal].splice(index, 1);
    setDayMenu(newDayMenu);
  };


  return (
    <View>
      {Object.keys(dayMenu).map((day, index) => (
        <View key={index}>
          <Text style={styles.dayTitle}>{day}:</Text>
          <DayMeals day={day} dayMenu={dayMenu[day]} onAddFood={(meal) => handleAddFood(day, meal)} onRemoveFood={(meal, index) => handleRemoveFood(day, meal, index)} />
        </View>
      ))}
    </View>
  );
};

const styles = {
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
};



export default MealPlanning;
