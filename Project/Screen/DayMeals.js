import React from 'react';
import { View, Text } from 'react-native';
import ViewMeals from './ViewMeals';


const DayMeals = ({dayMenu, onRemoveFood, onAddFood }) => {
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
      const caloPerMeal = (meals) => {
        return calculateTotalCalories({ meals: [...meals] });
      };
      return (
        <View>
          <ViewMeals meals={dayMenu.Breakfast}  onAddFood={onAddFood} onRemoveFood={onRemoveFood} title="Breakfast" calo={caloPerMeal(dayMenu.Breakfast)} />
          
          <ViewMeals meals={dayMenu.Lunch}  onAddFood={onAddFood} onRemoveFood={onRemoveFood} title="Lunch"  calo={caloPerMeal(dayMenu.Lunch)} />
          <ViewMeals meals={dayMenu.Dinner}  onAddFood={onAddFood} onRemoveFood={onRemoveFood} title="Dinner" calo={caloPerMeal(dayMenu.Dinner)} />
          <ViewMeals meals={dayMenu.Snack}  onAddFood={onAddFood} onRemoveFood={onRemoveFood} title="Snack" calo={caloPerMeal(dayMenu.Snack)} />
          
          <Text style={styles.totalCalories}>
            Total Calories (kcal) :{calculateTotalCalories({'Breakfast' :[...dayMenu.Breakfast], 'Lunch' : [...dayMenu.Lunch], 'Dinner' : [...dayMenu.Dinner], 'Snack' : [...dayMenu.Snack]})}
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
