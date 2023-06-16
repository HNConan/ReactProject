import React, { useContext, useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import UserContexte from '../UserContext';
import DayMeals from './DayMeals';

const MealPlanning = ({ navigation }) => {
  const { dayMenu, setDayMenu } = useContext(UserContexte);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleAddFood = (day, meal) => {
    navigation.navigate('FoodDatabase', { day, meal });
  };

  const handleRemoveFood = (meal, index) => {
    const newDayMenu = {
      ...dayMenu,
    };
    newDayMenu[currentDay][meal] = newDayMenu[currentDay][meal].filter(
      (_, mealIndex) => mealIndex !== index
    );
    setDayMenu(newDayMenu);
  };

  const handlePreviousDay = () => {
    if (currentDayIndex > 0) {
      setCurrentDayIndex(currentDayIndex - 1);
    }
  };

  const handleNextDay = () => {
    if (currentDayIndex < daysOfWeek.length - 1) {
      setCurrentDayIndex(currentDayIndex + 1);
    }
  };

  const currentDay = daysOfWeek[currentDayIndex];

  return (
    <View>
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={handlePreviousDay}>
          <Text style={styles.navigationArrow}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.currentDayText}>{currentDay}</Text>
        <TouchableOpacity onPress={handleNextDay}>
          <Text style={styles.navigationArrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <DayMeals
        day={currentDay}
        dayMenu={dayMenu[currentDay]}
        onAddFood={handleAddFood}
        onRemoveFood={handleRemoveFood}
      />
    </View>
  );
};

const styles = {
  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  navigationArrow: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  currentDayText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
};

export default MealPlanning;
