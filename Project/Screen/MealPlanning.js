import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import FoodDatabase from './FoodDatabase.js';



const MealPlanning = ({ navigation, mealPlan }) => {
  
  const DayMenu = {
    "Breakfast": [],
    "Lunch": [],
    "Dinner": [],
    "Snack": []
  };

  
  return (
    <View>
      <Text>Meal Planner</Text>
      
    </View>
  );
};

export default MealPlanning;