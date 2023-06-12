import React from 'react';
import { View, Text } from 'react-native';

const ViewMeals = ({ meals, title }) => {
  return (
    <View>
      <Text style={styles.mealTitle}>{title}:</Text>
      <View style={styles.mealItemsContainer}>
        {meals.map((meal, index) => (
          <Text key={index} style={styles.mealItem}>
            {meal.label}
          </Text>
        ))}
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
