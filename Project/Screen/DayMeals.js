import React from 'react';
import { View, Text } from 'react-native';
import ViewMeals from './ViewMeals';

const DayMeals = ({ dayMenu }) => {
    const calculateTotalCalories = (meals) => {
        let totalCalories = 0;
        Object.values(meals).forEach((mealList) => {
            mealList.forEach((meal) => {
            if (meal.nutrients) {
                totalCalories += meal.nutrients['ENERC_KCAL'];
            }
            });
        });
        return totalCalories;
      };
    
      return (
        <View>
          <ViewMeals meals={dayMenu.Breakfast} title="Breakfast" />
          <ViewMeals meals={dayMenu.Lunch} title="Lunch" />
          <ViewMeals meals={dayMenu.Dinner} title="Dinner" />
          <ViewMeals meals={dayMenu.Snack} title="Snack" />
          
          <Text style={styles.totalCalories}>
            Total Calories (kcal): {calculateTotalCalories({'Breakfast' :[...dayMenu.Breakfast], 'Lunch' : [...dayMenu.Lunch], 'Dinner' : [...dayMenu.Dinner], 'Snack' : [...dayMenu.Snack]})}

          </Text>
    </View>
  );
};

const styles = {
    totalCalories: {
        fontSize: 18,
        marginTop: 10,
      },
};

export default DayMeals;
