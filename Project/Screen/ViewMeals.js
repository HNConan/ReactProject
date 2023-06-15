import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button, TextInput, IconButton } from "react-native-paper";

const ViewMeals = ({ meals, title, onRemoveFood, onAddFood }) => {
  return (
    <View>
      <Text style={styles.mealTitle}>{title}:</Text>
      <View style={styles.mealItemsContainer}>
        {meals.map((meal, index) => (
          <View key={index} style={styles.mealItemContainer}>
            <Text style={styles.mealItem}>{meal.label}</Text>
            <View style={styles.iconButtonContainer}>
              <IconButton
                onPress={() => onRemoveFood(title, index)}
                icon="close"
                
              />
            </View>
          </View>
        ))}
        <View style={styles.ButtonContainer}>
          <Button
            mode="contained"
            onPress={() => onAddFood(title)}
            style={styles.Button}
            labelStyle={styles.ButtonLabel}
          >
            Add Food
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mealTitle: {
    fontSize: 16,
    marginTop: 10,
  },
  mealItemsContainer: {
    marginLeft: 10,
  },
  mealItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  mealItem: {
    marginLeft: 10,
  },
  iconButtonContainer: {
    marginRight: 10,
  },
  ButtonContainer: {
    marginLeft: 10, 
  },
  Button: {
    backgroundColor: 'transparent',
  },
  ButtonLabel: {
    color: 'blue',
  },
});
export default ViewMeals;
