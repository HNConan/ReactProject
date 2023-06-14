import React from 'react';
import { View, Text, Button } from 'react-native';

const ViewMeals = ({meals, title, onRemoveFood, onAddFood  }) => {
  return (
    <View>
      <Text style={styles.mealTitle}>{title}:</Text>
      <View style={styles.mealItemsContainer}>
        {meals.map((meal, index) => (
          <View key={index} style={styles.mealItemContainer}>
          <Text style={styles.mealItem}>{meal.label}</Text>
          <Button
            title="Remove"
            onPress={() => onRemoveFood(title, index)}
          />
          </View>
        ))}
        <Button
          title="Add Food"
          onPress={() => onAddFood(title)}
        />
      </View>
    </View>
  );
};

const styles = {
  mealTitle: {
    fontSize: 16,
    marginTop: 10,
  },
  mealItemsContainer: {
    marginLeft: 10,
  },
  mealItem: {
    marginLeft: 10,
    marginBottom: 5,
  },
};

export default ViewMeals;
